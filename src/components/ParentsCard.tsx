import Meal from '../assets/meal.png';
import Info from '../assets/unnamed.png';
import Calendar from '../assets/calendar.png';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import {URL_Maxime} from '../URL_List';

interface IMeal{
    starter: string;
    mainMeal: string;
    dessert: string;
    snack: string;
    WeekDay: string;
  }




const ParentsCard = () => {

  //PART TO MANAGE THE MEALS CARD
    const [meals, setMeals] = useState<IMeal[]>([]);
    const [currentMeal, setCurrentMeal] = useState<IMeal | null>(null);

  useEffect(() => {
    fetchMeals();
  }, []);


  const fetchMeals = async () => {
    try {
      const response = await axios.get(`${URL_Maxime}api/meal/list`);
      console.log("reponse des repas : ", response.data);
      setMeals(response.data);
      console.log(meals)
    } catch (error) {
      console.error('erreur:', error);
    }
  };

const day = new Date()
const aujourdhuiChiffre = day.getDay()
console.log("jour J:", aujourdhuiChiffre)
const weekDays = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
const aujourdhui = weekDays[aujourdhuiChiffre];
console.log("jour de la semaine:", aujourdhui)

useEffect(() => {
  const mealToday = meals.find(meal => meal.WeekDay === aujourdhui);
  setCurrentMeal(mealToday || null);
}, [meals, aujourdhui]);

//END OF THE PART TO MANAGE THE MEALS CARD

//PART TO MANAGE THE REPORT CARD

interface IReport{
  reminder: string;
  datereport: string;
  mealreport: string;
  toiletreport: string;
  sleepreport: string;
}
const [reports, setReports] = useState<IReport[]>([]);

useEffect(() => {
  fetchReports();
}, []);

const fetchReports = async () => {
  try {
    const response = await axios.get(`${URL_Maxime}api/report/list`); //Need to change the URL to add the id of the child
    console.log("reponse des rapports : ", response.data);
    setReports(response.data);
    console.log(reports)
  } catch (error) {
    console.error('erreur:', error);
  }
};

//END OF THE PART TO MANAGE THE REPORT

    return (
     
        <section className="flex items-center bg-[#FFE1CC] lg:h-screen dark:bg-gray-800 font-poppins">
          <div className="max-w-6xl px-4 mx-auto">
              <div className="grid gap-10 text-start md:grid-cols-3">
          
          {currentMeal && (
            <div className="relative p-8 mb-6 bg-[#332623] border border-gray-100 shadow dark:border-gray-700 md:mb-0 dark:bg-gray-700 rounded-lg">
              <img src={Meal} alt="" className="absolute top-[-50px] left-[-30px] w-13 h-13" />
              <h3 className="mb-6 text-xl font-bold text-white dark:text-gray-400">Mon repas du jour</h3>
              <p className="mb-6 text-sm text-base text-white dark:text-gray-400">
                Petit-déjeuner : {currentMeal.starter} Déjeuner : {currentMeal.mainMeal}
                Goûter : {currentMeal.snack}
                Dessert : {currentMeal.dessert}
              </p>
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
          )} </div>
                    <div
                      className="relative p-8 mb-6 bg-[#332623] border border-gray-100 shadow dark:border-gray-700 md:mb-0 dark:bg-gray-700 rounded-lg">
                        <img src={Info} alt="" className="absolute top-[-50px] left-[-30px] w-13 h-13" />
                        <h3 className="mb-6 text-xl font-bold text-white dark:text-gray-400" >Mon rapport du jour</h3>
                        <p className="mb-6 text-base text-white dark:text-gray-400">
                            Lorem ipsum dolor sit amet eos adipisci, consectetur adipisicing elit sed ut
                            perspiciatis unde omnis.
                        </p>
                        
                        <button
                                type="button"
                                className="inline-block rounded bg-[#FF7B4D] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-primary-600 focus:bg-primary-600  focus:outline-none focus:ring-0 active:bg-primary-700  dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                data-te-ripple-init
                                data-te-ripple-color="light">
                                En savoir plus
                        </button>
                    </div>
                    <div
                      className="relative p-8 mb-6 bg-[#332623] border border-gray-100 shadow dark:border-gray-700 md:mb-0 dark:bg-gray-700 rounded-lg">
                        <img src={Calendar} alt="" className="absolute top-[-50px] left-[-30px] w-13 h-13" />
                        <h3 className="mb-6 text-xl font-bold text-white dark:text-gray-400" >À venir</h3>
                        <p className="mb-6 text-base text-white dark:text-gray-400">
                            Lorem ipsum dolor sit amet eos adipisci, consectetur adipisicing elit sed ut
                            perspiciatis unde omnis.
                        </p>
                        
                        <button
                                type="button"
                                className="inline-block rounded bg-[#FF7B4D] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-primary-600 focus:bg-primary-600  focus:outline-none focus:ring-0 active:bg-primary-700  dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                data-te-ripple-init
                                data-te-ripple-color="light">
                                En savoir plus
                        </button>
                    </div>
                </div>
                
           
            
        </section>
     )
    }
export default ParentsCard;