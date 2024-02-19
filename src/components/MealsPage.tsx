import React, { useState, useEffect } from 'react'
import HeaderParent from './HeaderParent'
import Footer from './Footer'
import {URL_Jerem} from '../URL_List';
import axios from 'axios';



interface IMeal{
  starter: string;
  mainMeal: string;
  dessert: string;
  snack: string;
  WeekDay: string;
}

export default function MealsPage() {


  const [selectedDay, setSelectedDay] = useState('Lundi');
  const [meals, setMeals] = useState<IMeal[]>([]);

  useEffect(() => {
    fetchMeals();
  }, []);

  const fetchMeals = async () => {
    try {
      const response = await axios.get(`${URL_Jerem}api/meal/list`);
      console.log("reponse des repas : ", response.data);
      setMeals(response.data);
      console.log(meals)
    } catch (error) {
      console.error('erreur:', error);
    }
  };
console.log(meals.WeekDay)

const weekDays = meals.map((meal) => meal.WeekDay);
console.log(weekDays)
  

  const handleTabClick = (day: React.SetStateAction<string>) => {
    setSelectedDay(day);
  }
  const displayMealForSelectedDay = () => {
    const selectedMeal = meals.find(meal => meal.WeekDay === selectedDay);
    if (!selectedMeal) return null;
    return (
      <div className="card w-96 bg-[#FFB54A] shadow-xl">
        <div className="card-body">
          <ul className="text-white">
            <li>Entrée : {selectedMeal.starter}</li>
            <li>Plat : {selectedMeal.mainMeal}</li>
            <li>Dessert : {selectedMeal.dessert}</li>
            <li>Goûter : {selectedMeal.snack}</li>
          </ul>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col justify-between min-h-screen">
      <HeaderParent />
      <div className="bg-[#FFE1CC] flex-grow p-10">
        <h1 className="text-5xl text-center font-bold mb-10">Retrouvez le menu de la semaine de Léa</h1>
        <div className="flex justify-center mb-5 space-x-4">
          {weekDays.map(day => (
            <button 
              className={`px-4 py-2 rounded text-lg ${selectedDay === day ? 'bg-[#60BFB2] text-white' : 'bg-white text-black'}`}
              onClick={() => handleTabClick(day)}
            >
              {day}
            </button>
          ))}
          </div>
          <div className="text-center text-xl flex justify-center">
            {displayMealForSelectedDay()}
          </div>
        </div>
        <Footer />
      </div>
    );}