import HeaderParent from './HeaderParent';
import HeroParent from './HeroParent';
import ParentsCard from './ParentsCard';
//Composant qui affiche la page d'accueil pour le parent connecté
const HomeParent = () => {
  return (
    <div>
      <HeaderParent />
      <HeroParent />
      <ParentsCard />
    </div>
  )
}

export default HomeParent