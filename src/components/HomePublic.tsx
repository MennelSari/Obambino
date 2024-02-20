import HeaderPublic from './HeaderPublic';
import HeroPublic from './HeroPublic';
import Reviews from './Reviews';
import Footer from './Footer';

//This is the public home page

const Home = () => {
  return (
    <div className="bg-[#FFE1CC] min-h-screen min-w-screen">
      <HeaderPublic />
      <HeroPublic />
      <Reviews />
      <Footer />
    </div>
  )
}

export default Home