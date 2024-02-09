import axios from "axios";
import Balloon from '../assets/Balloon.png'
import { useState, useEffect } from "react";

const HeroPublic = () => {


  return (

 <div className="hero min-h-screen bg-[#FFE1CC]">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={Balloon} className="max-w-sm rounded-lg" />
    <div>
      <h1 className="text-5xl font-bold">O'bambino</h1>
      <h2>Vos p’tis bouts toujours proches de vous
        </h2>
        
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        </div>
 
    </div>
  </div>

 
  )
}

export default HeroPublic