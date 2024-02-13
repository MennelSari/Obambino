import React, { useState } from 'react'
import HeaderParent from './HeaderParent'
import Footer from './Footer'

//This is the page where the parent can see the meals of the week

export default function MealsPage() {

  const [selectedDay, setSelectedDay] = useState('Lundi'); // default selected day is Monday

  // Function to handle the click on the tabs
  // It will change the selected day to the one clicked
  const handleTabClick = (day: React.SetStateAction<string>) => {
    setSelectedDay(day);
  }

  return (
    <div className="flex flex-col justify-between min-h-screen">
      <HeaderParent />
      <div className="bg-[#FFE1CC] flex-grow p-10">
        <h1 className="text-5xl text-center font-bold mb-10">Retrouvez le menu de la semaine de Léa</h1>
        <div className="flex justify-center mb-5 space-x-4">
          {/*We map through the days of the week to create the tabs */}
          {['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi'].map(day => (
            <button 
              className={`px-4 py-2 rounded text-lg ${selectedDay === day ? 'bg-[#60BFB2] text-white' : 'bg-white text-black'}`}
              onClick={() => handleTabClick(day)}
            >
              {day}
            </button>
          ))}
        </div>
        <div className="text-center text-xl flex justify-center">
          {selectedDay === 'Lundi' && <div>
          <div className="card w-96 bg-[#FFB54A] shadow-xl">
            <div className="card-body">
                    
                    <ul className="text-white">
                <li>Petit-déjeuné : blablaLUNDI</li>
                <li>Déjeuné : blabla</li>
                <li>Goûter : blabla</li>
            </ul>
                    
                </div>
                </div>
            </div>}
          {selectedDay === 'Mardi' && <div><div className="card w-96 bg-[#FFB54A] shadow-xl">
            <div className="card-body">
                    
                    <ul className="text-white">
                <li>Petit-déjeuné : blablaMARDI</li>
                <li>Déjeuné : blabla</li>
                <li>Goûter : blabla</li>
            </ul>
                    
                </div>
                </div></div>}
          {selectedDay === 'Mercredi' && <div><div className="card w-96 bg-[#FFB54A] shadow-xl">
            <div className="card-body">
                    
                    <ul className="text-white">
                <li>Petit-déjeuné : blabla</li>
                <li>Déjeuné : blabla</li>
                <li>Goûter : blabla</li>
            </ul>
                    
                </div>
                </div></div>}
          {selectedDay === 'Jeudi' && <div><div className="card w-96 bg-[#FFB54A] shadow-xl">
            <div className="card-body">
                    
                    <ul className="text-white">
                <li>Petit-déjeuné : blabla</li>
                <li>Déjeuné : blabla</li>
                <li>Goûter : blabla</li>
            </ul>
                    
                </div>
                </div></div>}
          {selectedDay === 'Vendredi' && <div><div className="card w-96 bg-[#FFB54A] shadow-xl">
            <div className="card-body">
                    
                    <ul className="text-white">
                <li>Petit-déjeuné : blabla</li>
                <li>Déjeuné : blabla</li>
                <li>Goûter : blabla</li>
            </ul>
                    
                </div>
                </div></div>}
        </div>
      </div>
        <Footer />
    </div>
  )
}