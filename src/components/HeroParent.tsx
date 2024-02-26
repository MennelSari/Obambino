import {useState, useEffect} from 'react';
import Balloon from "../assets/Balloon.png"
import {IuserData} from "../type"
import axios from "axios"
import {URL_Vmcloud} from "../URL_List"


interface Props {
  userData: IuserData
}

interface Iinfo {
futureEvent: string
}
const HeroParent = ({ userData }:Props) => {

const [info, setInfo] = useState<Iinfo[]>([])

useEffect(() => {
  fetchInfo()
}, [])

const fetchInfo = async () => {
  const response = await axios.get(`${URL_Vmcloud}api/future/events/list`)
  console.log("reponse info flash : ", response.data)
  setInfo(response.data)
}
const futureEvent = info.length > 0 ? info[0].futureEvent : "";
  // To check if userData is not null
  if (!userData) {
    return <div>Chargement...</div>;
  }

  return (
    <div>
      <div className="hero min-h-screen bg-[#FFE1CC]">
          <div className="hero-content flex-col lg:flex-row-reverse">
              <img src={Balloon} className="max-w-sm rounded-lg w-full h-auto" />
                <div>
                  <h1 className="text-5xl font-bold">Bienvenue {userData.firstname} !</h1>
                  <div className="card bg-[#FFB54A] text-white mt-6">
                    <div className="card-body">
                      <h2 className="card-title">Informations flash :</h2>
                      <p>{futureEvent}</p>
                    </div>
                   </div>
                </div>
          </div>
      </div>

    </div>
  );

}

export default HeroParent;
