import HeaderParent from './HeaderParent';
import HeroParent from './HeroParent';
import ParentsCard from './ParentsCard';
import Footer from './Footer';

//This is the parent home page component
const HomeParent = () => {
  return (
    <div className="bg-[#FFE1CC] w-full min-h-screen">
      <HeaderParent />
      <HeroParent />
      <ParentsCard />
      <Footer />
    </div>
  )
}

export default HomeParent