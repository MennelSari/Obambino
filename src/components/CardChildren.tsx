import React from 'react'
import {IuserData} from "../type";
import AvatarFille from "../assets/avatarFille.png";
import { Link } from 'react-router-dom';
import AvatarGarcon from "../assets/avatarGarcon.png";


interface Props {
    child: IChild;
}


const CardChildren = ({ child }: Props) => {
  return (
  
        <div className="flex items-center justify-center">
<div className="max-w-xs">
    <div className="bg-[#FFB54A] shadow-xl rounded-lg py-3">
        <div className="photo-wrapper p-2">
            {child.gender === "fille" ? <img className="w-32 h-32 rounded-full mx-auto" src={AvatarFille}/> : <img className="w-32 h-32 rounded-full mx-auto" src={AvatarGarcon}/>}
        </div>
        <div className="p-2 ">
            <h3 className="text-center text-xl text-white font-medium leading-8">{child.firstname}</h3>
            <div className="text-center text-gray-400 text-xs font-semibold">
              
            </div>
            <table className="text-xs my-3">
                <tbody><tr>
                    <td className="px-2 py-2 text-white font-semibold">Anniversaire :</td>
                    <td className="px-2 py-2 text-white">{child.birthday}</td>
                </tr>
                <tr>
                    <td className="px-2 py-2 text-white font-semibold">Régime alimentaire :</td>
                    <td className="px-2 py-2 text-white">{child.diet}</td>
                </tr>
            </tbody></table>

            <div className="text-center my-3">
                <Link to="/absence" className="text-xs  btn text-black font-medium"> Notifier une absence</Link>
            </div>

        </div>
    </div>
</div>

</div>

 
  )
}

export default CardChildren