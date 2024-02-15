import HeaderParent from './HeaderParent';
import HeroParent from './HeroParent';
import ParentsCard from './ParentsCard';
import Footer from './Footer';

import {IuserData} from "./type"

interface Props {
  userData: IuserData
}
//Composant qui affiche la page d'accueil pour le parent connecté
const HomeParent = ({userData}:Props) => {


  return (
    <div className="bg-[#FFE1CC] w-full min-h-screen">
      <HeaderParent />
      <HeroParent userData={userData}/>
      <ParentsCard />
      <Footer />
    </div>
  )
}

export default HomeParent