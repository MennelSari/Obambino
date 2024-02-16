import React from 'react'
import HeaderParent from './HeaderParent'

const Absence = () => {
  return (
    <div className="bg-[#FFE1CC]">
        <HeaderParent />
        <div>
       <h1 className="text-5xl text-center font-bold mb-10 mt-10">Les absences de NomEnfant</h1>
    
       <div className="bg-[#FFE1CC] min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-[#332623] px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-xl text-center text-white">Informez nous grâce au formulaire ci-dessous :</h1>
            <form > {/*// Add the onSubmit function when the submit button is clicked*/}
            <input 
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
             
              name="lastname"
              placeholder="Notez la raison de l'absence" />
              <label className="text-white">Du..</label>
              <input 
              type="date"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              
              name="firstname"
              placeholder="Du.." />
              <label className="text-white">Au..</label>
            <input 
              type="date"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              
              name="email"
              placeholder="Au.." />
  
            
  
            <button
              type="submit"
              className="w-full text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1"
            >Notifier l'absence</button>
  
            </form>
          </div>
        </div>
        
      </div>
       </div>
    </div>
  )
}

export default Absence