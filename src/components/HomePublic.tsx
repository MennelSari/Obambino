import HeaderPublic from './HeaderPublic';
import HeroPublic from './HeroPublic';
import Reviews from './Reviews';
import Footer from './Footer';

//composant pour la page d'accueil publique
const Home = () => {
  return (
    <div className="bg-[#FFE1CC] min-h-full min-w-full">
      <HeaderPublic />
      <HeroPublic />
      <Reviews />
      <Footer />
    </div>
  )
}

export default Home