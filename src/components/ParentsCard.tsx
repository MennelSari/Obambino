import Meal from '../assets/meal.png';
import Info from '../assets/unnamed.png';
import Calendar from '../assets/calendar.png';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { URL_Server } from '../URL_List';
import { IuserData } from "../type";
import { fr } from 'date-fns/locale';

interface Props {
  userData: IuserData;
}

interface IMeal {
  starter: string;
  mainMeal: string;
  dessert: string;
  snack: string;
  WeekDay: string;
}

interface IReport {
  reminder: string;
  dateReport: string;
  mealReport: string;
  toiletReport: string;
  sleepReport: string;
  child_report: {
    id: number;
    firstname: string;
    lastname: string;
    birthday: string
  };
}

export interface IChild {
  id: number;
  firstname: string;
  lastname: string;
  birthday: string;
  gender: string;
  diet: string;
  user: {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
  } | null;  // because for api test, some children are not linked to a user
}

export interface IEvent {
  title: string;
  start: string;
}

const ParentsCard = ({ userData }: Props) => {
  // PART TO MANAGE THE MEALS CARD
  console.log("userData:", userData)
  const [meals, setMeals] = useState<IMeal[]>([]);
  const [currentMeal, setCurrentMeal] = useState<IMeal | null>(null);

  useEffect(() => {
    fetchMeals();
  }, []);

  const fetchMeals = async () => {
    try {
      const response = await axios.get(`${URL_Server}api/meal/list`);
      console.log("Response meals:", response.data);
      setMeals(response.data);
    } catch (error) {
      console.error('Error fetching meals:', error);
    }
  };

  const day = new Date();
  const aujourdhuiChiffre = day.getDay();
  console.log("jour J:", aujourdhuiChiffre);
  const weekDays = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
  const aujourdhui = weekDays[aujourdhuiChiffre];
  console.log("jour de la semaine:", aujourdhui);

  useEffect(() => {
    const mealToday = meals.find(meal => meal.WeekDay === aujourdhui);
    setCurrentMeal(mealToday || null);
  }, [meals, aujourdhui]);
  // END OF THE PART TO MANAGE THE MEALS CARD

  ////////////////////////////////////////////
// PART TO MANAGE THE REPORT CARD

const [reports, setReports] = useState<IReport[]>([]);
const [matchingChildren, setMatchingChildren] = useState<IChild[]>([]);

useEffect(() => {
  fetchChildren();
}, [userData]);

//to get the children of the user
const fetchChildren = async () => {
  try {
    const response = await axios.get(`${URL_Server}api/child/list`);
    const data: IChild[] = response.data;
    const userId = userData.id;
    console.log("userId:", userId); // Vérifiez que userData.id est correctement défini
    const matchingChildrenData = data.filter(child => child.user && child.user.id === userId);
    setMatchingChildren(matchingChildrenData);
    console.log("matchingChildren:", matchingChildrenData); // Vérifiez les enfants correspondants
    console.log("id des enfants du user", matchingChildrenData.map(child => child.id)); // Vérifiez les IDs des enfants
  } catch (error) {
    console.error(error);
  }
}; 
//Lucie a l'id = 1
//Paul a l'id = 3 
//Je dois vérifier si dans mon tableau de rapports stocké dans reportsData, il y a un reportsData.child_report.id qui correspond à l'id inclus dans matchingChildrenData.map(child => child.id) 

const matchingReports = reports.filter(report => matchingChildren.map(child => child.id).includes(report.child_report.id));
console.log("rapport des enfants du user:", matchingReports);


//i want to get all the reports of the children of the user
const fetchReports = async () => {
  try {
    // to get the reports of the children
    const response = await axios.get(`${URL_Server}api/report/list`);
    const reportsData = response.data;
    console.log("reportsData (=réponse du back):", reportsData);
    setReports(reportsData);
    console.log("reports:", reportsData);
  } catch (error) {
    console.error(error);
  }
};

useEffect(() => {
  fetchReports();
}, []);

const currentDate = new Date().toISOString().slice(0, 10);
console.log("date du jour:", currentDate);

const reportsOfTheDay = matchingReports.filter(report => report.dateReport.slice(0, 10) === currentDate);


  // END OF THE PART TO MANAGE THE REPORT

  //START OF THE PART TO MANAGE CALENDAR CARD

  const [events, setEvents] = useState<any[]>([]);
  const [nextEvent, setNextEvent] = useState<IEvent>();

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await axios.get(`${URL_Server}api/event/calendar`);
      console.log("Response events:", response.data);
      setEvents(response.data);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  }
  useEffect(() => {
    // Filter events to find the next upcoming event after current date
    const upcomingEvent = events.find(event => new Date(event.start) > new Date());
    setNextEvent(upcomingEvent);
  }, [events]);

  const formatDate = (nextevent: string): string => {
    const date = new Date(nextevent); // here we convert the string to a date
    return format(date, 'dd MMMM', { locale: fr });  // here we format the date to the format we want to display
};

  //END OF THE PART TO MANAGE CALENDAR CARD

  return (
    <div className="info" id="info">
    <section className="flex items-center bg-[#FFE1CC] lg:h-screen dark:bg-gray-800 font-poppins">
      <div className="max-w-6xl px-4 mx-auto">
        <div className="grid gap-10 text-start md:grid-cols-3">

          {currentMeal ? (
            <div className="relative p-8 mb-6 bg-[#332623] border border-gray-100 shadow dark:border-gray-700 md:mb-0 dark:bg-gray-700 rounded-lg">
              <img src={Meal} alt="" className="absolute top-[-50px] left-[-30px] w-13 h-13" />
              <h3 className="mb-6 text-xl font-bold text-white dark:text-gray-400">Mon repas du jour</h3>
              <p className="mb-6 text-sm text-base text-white dark:text-gray-400">
                <strong> Entrée : </strong> {currentMeal.starter} <br />
                <strong> Déjeuner : </strong> {currentMeal.mainMeal}<br />
                <strong> Goûter : </strong>{currentMeal.snack}<br />
                <strong> Dessert : </strong> {currentMeal.dessert}<br />
              </p>
              <br/>
              <br/>
              <br/>
              <Link to="/meals">
                <button
                  type="button"
                  className="inline-block rounded bg-[#FF7B4D] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-primary-600 focus:bg-primary-600  focus:outline-none focus:ring-0 active:bg-primary-700  dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                  data-te-ripple-init
                  data-te-ripple-color="light">
                  En savoir plus
                </button>
              </Link>

            </div>
          ) : <p>Chargement repas...</p>}

          <div className="relative p-8 mb-6 bg-[#332623] border border-gray-100 shadow dark:border-gray-700 md:mb-0 dark:bg-gray-700 rounded-lg">
            
            <img src={Info} alt="" className="absolute top-[-50px] left-[-30px] w-13 h-13" />
         
            <h3 className="mb-6 text-xl font-bold text-white dark:text-gray-400">Mon rapport du jour</h3>
            <div>
  {reportsOfTheDay && reportsOfTheDay.map((report, reportIndex) => (
    <div key={reportIndex}>
      <h4 className="text-lg font-semibold text-white dark:text-gray-300">{report.child_report.firstname}</h4>
      <p className="mb-2 text-base text-white dark:text-gray-400">
        Comment s'est passé le repas ? {report.mealReport}<br />
        Au niveau du popo ? {report.toiletReport}<br />
        Qualité du sommeil ? {report.sleepReport}<br/>
        Commentaire : {report.reminder}
      </p>
    </div>
  ))}
</div>
<br/>
            
            <button
              type="button"
              className="inline-block rounded bg-[#FF7B4D] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-primary-600 focus:bg-primary-600  focus:outline-none focus:ring-0 active:bg-primary-700  dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
              data-te-ripple-init
              data-te-ripple-color="light">
              En savoir plus
            </button>
          </div>

          <div className="relative p-8 mb-6 bg-[#332623] border border-gray-100 shadow dark:border-gray-700 md:mb-0 dark:bg-gray-700 rounded-lg">
            <img src={Calendar} alt="" className="absolute top-[-50px] left-[-30px] w-13 h-13" />
            
            <h3 className="mb-6 text-xl font-bold text-white dark:text-gray-400">À venir</h3>
           
            {nextEvent ? (
              <div>
                <p className="text-white">{nextEvent.title} <br/> Prévu le : {formatDate(nextEvent.start)}</p>
            
              </div>
            ) : (
              <p className="text-white">Aucun événement à venir</p>
            )}
            <br/>

            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <button
              type="button"
              className="inline-block rounded bg-[#FF7B4D] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-primary-600 focus:bg-primary-600  focus:outline-none focus:ring-0 active:bg-primary-700  dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
              data-te-ripple-init
              data-te-ripple-color="light">
              En savoir plus
            </button>
            
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}

export default ParentsCard;
