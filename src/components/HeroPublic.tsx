{/*import axios from "axios";*/}
import Balloon from '../assets/Balloon.png'
{/*import { useState, useEffect } from "react";*/}

const HeroPublic = () => {

  {/*const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://maxime-le-goff.vpnuser.lan/apo/projet-03-o-bambino-back/public/api/test');
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!data) return null; */}

  return (

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

 
  )
}

export default HeroPublic