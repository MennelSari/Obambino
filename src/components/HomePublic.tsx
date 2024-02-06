import HeaderPublic from './HeaderPublic';
import HeroPublic from './HeroPublic';
import Reviews from './Reviews';
import Footer from './Footer';

const Home = () => {
  return (
    <div className="bg-[#FFE1CC] h-screen w-screen">
      <HeaderPublic />
      <HeroPublic />

      <Reviews />
      <Footer />
    </div>
  )
}

export default Home