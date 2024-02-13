import HeaderParent from './HeaderParent';
import HeroParent from './HeroParent';
import ParentsCard from './ParentsCard';
import Footer from './Footer';
//Composant qui affiche la page d'accueil pour le parent connecté
const HomeParent = () => {

  return (
    <div className="bg-[#FFE1CC] min-h-screen min-w-screen">
      <HeaderParent />
      <HeroParent/>
      <ParentsCard />
      <Footer />
    </div>
  )
}

export default HomeParent