import { useState, useEffect } from 'react';
import HeaderParent from './HeaderParent';
import Footer from './Footer';
import axios from 'axios';
import { URL_Vmcloud } from '../URL_List';

interface IMeal {
  starter: string;
  mainMeal: string;
  dessert: string;
  snack: string;
  WeekDay: string;
}

function MealsPage() {
  const [selectedDay, setSelectedDay] = useState('Lundi');
  const [meals, setMeals] = useState<IMeal[]>([]);

  useEffect(() => {
    fetchMeals();
  }, []);

  const fetchMeals = async () => {
    try {
      const response = await axios.get<IMeal[]>(`${URL_Vmcloud}api/meal/list`);
      setMeals(response.data);
    } catch (error) {
      console.error('erreur:', error);
    }
  };

  const displayMealForSelectedDay = () => {
    const selectedMeal = meals.find(meal => meal.WeekDay === selectedDay);
    if (!selectedMeal) return null;
    return (
      <div className="card w-96 bg-[#FFB54A] shadow-xl">
        <div className="card-body">
          <ul className="text-white">
            <li><strong>Entrée : </strong>{selectedMeal.starter}</li>
            <li><strong>Plat : </strong>{selectedMeal.mainMeal}</li>
            <li><strong>Dessert : </strong> {selectedMeal.dessert}</li>
            <li><strong>Goûter :</strong> {selectedMeal.snack}</li>
          </ul>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col justify-between min-h-screen">
      <HeaderParent />
      <div className="bg-[#FFE1CC] flex-grow p-10">
        <h1 className="text-5xl text-center font-bold mb-10 ">Retrouvez le menu de la semaine</h1>
        <div className="flex justify-center mb-5 space-x-4">
        <div className="flex flex-row overflow-x-auto min-w py-2">
          {['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi'].map(day => (
            <button 
              key={day}
              className={`px-4 py-2 rounded text-lg sm:text-base lg:text-lg ${selectedDay === day ? 'bg-[#60BFB2] text-white' : 'bg-white text-black'}`}
              onClick={() => setSelectedDay(day)}
            >
              {day}
            </button>
          ))}
          </div>
        </div>
        <div className="text-center text-xl flex justify-center">
          {displayMealForSelectedDay()}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MealsPage;
