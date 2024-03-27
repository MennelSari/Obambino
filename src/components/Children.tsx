import {useEffect, useState} from 'react'
import {IuserData} from "../type";
import HeaderParent from "./HeaderParent";
import CardChildren from "./CardChildren";
import {URL_Server} from "../URL_List";
import Footer from "./Footer";
import axios from 'axios';


interface Props {
    userData: IuserData
  }


export interface IChild {
    id: number;
    firstname: string;
    lastname: string;
    birthday: string;
    gender: string;
    diet: string;
    user: {
        id: number;
        firstname: string;
        lastname: string;
        email: string;
       
    } | null;  //because for api test, some children are not linked to a user
}




const Children = ({userData}:Props) => {

    const [matchingChildren, setMatchingChildren] = useState<IChild[]>([]); //children of the parent

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (userData) { // Vérifier si l'utilisateur est authentifié avant de récupérer les repas
                    const response = await axios.get(`${URL_Server}api/child/list`);
                    const data: IChild[] = response.data;
                    const userId = userData.id;
                    console.log(userId);
                    const matchingChildren = data.filter(child => child.user && child.user.id === userId);
                    setMatchingChildren(matchingChildren);
                }
            } catch (error) {
                console.error("Problème lors de la récupération des enfants :", error);
            }
        };

        fetchData();
    }, [userData]);
    


  return (
    <div className="bg-[#FFE1CC]">
        <HeaderParent/>

        <div className="bg-[#FFE1CC]">
            <h1 className="text-5xl text-center font-bold mb-10 mt-10">Retrouvez vos Bambinos !</h1>
            <div className=" flex flex-row justify-center py-4 mt-3">
            <div className="flex flex-row overflow-x-auto min-w py-2">
            {matchingChildren.map((child: IChild) => (
                        <CardChildren key={child.id} child={child} />
                    ))} {/* display each child of the parent */}
            </div>
            </div>
        </div>
        <Footer/>
    </div>
 
  )
}

export default Children