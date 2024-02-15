import Balloon from '../assets/Balloon.png';

//This is the parent component of the dashboard, it contains the welcome message and the image of the balloon
//For now, the welcome message is static, but it will be dynamic in the future

const HeroParent = () => {
  return (
    
  <div>  
  <div className="hero-content flex-col lg:flex-row-reverse bg-[#FFE1CC]">
    <img src={Balloon} className="max-w-sm rounded-lg" />
    <div>
      <h1 className="text-5xl font-bold">Bienvenue Marie <br /> sur le tableau de bord de Léa</h1>
      <div className="card w-96 bg-[#FDB54A] text-white mt-5">
  <div className="card-body">
    <h2 className="card-title">Informations flash :</h2>
    <p>Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    
  </div>
</div>
    </div>
  </div>
  </div>
     
    


 
  )
}

export default HeroParent