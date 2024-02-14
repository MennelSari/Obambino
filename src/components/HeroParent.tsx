import React from 'react';
import Balloon from "../assets/Balloon.png"
import {IuserData} from "./type"

interface Props {
  userData: IuserData
}
const HeroParent = ({ userData }:Props) => {
  // To check if userData is not null
  if (!userData) {
    return <div>Chargement...</div>;
  }

  return (
    <div className="hero min-h-screen bg-[#FFE1CC]">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={Balloon} className="max-w-sm rounded-lg" />
        <div>
          <h1 className="text-5xl font-bold">Bienvenue {userData.firstname} sur le tableau de bord de Léa</h1>
          <h2><strong> Informations flash :</strong></h2>
          <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        </div>
      </div>
    </div>
  );
}

export default HeroParent;
