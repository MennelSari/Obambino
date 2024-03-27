import Balloon from '../assets/Balloon.png'
import {Link} from "react-scroll";
//This is the public hero section of the website
//It is the first thing that the user sees when they visit the website


const HeroPublic = () => {

  

  return (
   <div>
 <div className="hero min-h-screen bg-[#FFE1CC]">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={Balloon} alt="Enfants sur un ballon" className="max-w-sm rounded-lg w-full h-auto" />
    <div>
      <h1 className="text-5xl font-bold">O'bambino</h1>
      <h2>Vos p’tis bouts toujours proches de vous
        </h2>
        
      <p className="py-6"><strong>Bienvenue sur O'bambino, la plateforme dédiée aux parents !</strong> <br/>
      Restez connectés à la journée de votre enfant où que vous soyez. Recevez en temps réel des informations précieuses sur les événements, les rapports quotidiens et bien plus encore.<br/>
       Notre engagement est de vous offrir une expérience transparente et rassurante pour suivre de près le développement de vos p'tits bouts.</p>
       <Link to="reviews" smooth={true} duration={500}>
        <button className="bg-[#332623] hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded mt-4 center">
          VOIR NOS AVIS<i className="fas fa-arrow-down ml-2"></i>
        </button>
      </Link>
    </div>
  </div>
  </div>
  </div>

 
  )
}

export default HeroPublic