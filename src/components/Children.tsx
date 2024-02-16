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
    birthdate: string
    gender: string;
    diet: string;
    user: [];
}

const Children = ({userData}:Props) => {

    const [matchingChildren, setMatchingChildren] = useState<IChild[]>([]);

    useEffect(() => {
        fetch(`${URL_Jerem}api/child/list`)
            .then(response => response.json())
            .then((data: IChild[]) => {
                const userId = userData.id;
                console.log('userId:', userId);
                console.log(data)
                setMatchingChildren(matchingChildren);
            })
            .catch(error => console.error("PROBLEME AHHHH", error));
    }, [userData]);

  return (
    <div className="bg-[#FFE1CC]">
        <HeaderParent/>

        <div className="bg-[#FFE1CC]">
            <h1 className="text-5xl text-center font-bold mb-10 mt-10">Retrouvez vos Bambinos !</h1>
                <CardChildren userData={userData}/>
        </div>
    </div>
 
  )
}

export default Children