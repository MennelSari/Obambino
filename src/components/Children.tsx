import {useEffect, useState} from 'react'
import {IuserData} from "../type";
import HeaderParent from "./HeaderParent";
import CardChildren from "./CardChildren";
import {URL_Jerem} from "../URL_List";



interface Props {
    userData: IuserData
  }

  interface IChild {
    id: number;
    firstname: string;
    lastname: string;
    birthdate: string;
    gender: string;
    diet: string;
    user: {
        id: number;
        firstname: string;
        lastname: string;
        email: string;
       
    } | null; 
}

const Children = ({userData}:Props) => {

    const [matchingChildren, setMatchingChildren] = useState<IChild[]>([]);

    useEffect(() => {
      fetch(`${URL_Jerem}api/child/list`)
          .then(response => response.json())
          .then((data: IChild[]) => {
              const userId = userData.id;
              const matchingChildren = data.filter(child => child.user && child.user.id === userId);
              setMatchingChildren(matchingChildren);
          })
          .catch(error => console.error("Problème lors de la récupération des enfants :", error));
  }, [userData]);
  console.log(matchingChildren);

  return (
    <div className="bg-[#FFE1CC]">
        <HeaderParent/>

        <div className="bg-[#FFE1CC]">
            <h1 className="text-5xl text-center font-bold mb-10 mt-10">Retrouvez vos Bambinos !</h1>
            <div className="flex justify-center py-4 mt-3 ">
            {matchingChildren.map((child: IChild) => (
                        <CardChildren key={child.id} child={child} />
                    ))}
                    </div>
        </div>
    </div>
 
  )
}

export default Children