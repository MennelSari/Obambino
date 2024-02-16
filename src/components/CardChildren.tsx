import React from 'react'
import {IuserData} from "../type";
import AvatarFille from "../assets/avatarFille.png";
import { Link } from 'react-router-dom';


interface Props {
    userData: IuserData
  }


const CardChildren = ({userData}:Props) => {
  return (
    <div>
        <div className="flex items-center h-screen w-full justify-center">

<div className="max-w-xs">
    <div className="bg-[#FFB54A] shadow-xl rounded-lg py-3">
        <div className="photo-wrapper p-2">
            <img className="w-32 h-32 rounded-full mx-auto" src={AvatarFille} alt="John Doe"/>
        </div>
        <div className="p-2 ">
            <h3 className="text-center text-xl text-white font-medium leading-8">Léa</h3>
            <div className="text-center text-gray-400 text-xs font-semibold">
              
            </div>
            <table className="text-xs my-3">
                <tbody><tr>
                    <td className="px-2 py-2 text-white font-semibold">Anniversaire :</td>
                    <td className="px-2 py-2 text-white">10/10/19</td>
                </tr>
                <tr>
                    <td className="px-2 py-2 text-white font-semibold">Régime alimentaire :</td>
                    <td className="px-2 py-2 text-white">Végétarien</td>
                </tr>
            </tbody></table>

            <div className="text-center my-3">
                <Link to="/absence" className="text-xs  btn text-black font-medium"> Notifier une absence</Link>
            </div>

        </div>
    </div>
</div>

</div>

        </div>
 
  )
}

export default CardChildren