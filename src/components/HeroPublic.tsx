import Balloon from '../assets/Balloon.png'

//This is the public hero section of the website
//It is the first thing that the user sees when they visit the website


const HeroPublic = () => {

  

  return (
   <div>
 <div className="hero min-h-screen bg-[#FFE1CC]">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={Balloon} className="max-w-sm rounded-lg w-full h-auto" />
    <div>
      <h1 className="text-5xl font-bold">O'bambino</h1>
      <h2>Vos p’tis bouts toujours proches de vous
        </h2>
        
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
  </div>
  </div>
  </div>

 
  )
}

export default HeroPublic