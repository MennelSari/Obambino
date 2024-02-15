import { Link } from 'react-router-dom';
import Logo from '../assets/logosvg.svg';
import "../index.css";

//This is the header for the public pages
//It contains the navigation links to the public pages
//It also contains the links to the login and register pages

//all the links are wrapped in the Link component from react-router-dom
//so that the user can navigate to the respective pages

const HeaderPublic = () => {
  return (
    <div className="navbar bg-[#FFE1CC]">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          {/* Mobile menu */}
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link to="/">ACCUEIL</Link></li>

          </ul>
        </div>
        <div className="navbar max-h-20">
          <Link to="/">
            <img src={Logo} alt="" className="hidden md:block w-64 h-64 object-contain object-center" />
          </Link>
  
        </div>
      </div>
      {/* Desktop menu */}
     
      <div className="navbar-end flex">
    <Link to="/" className='px-4 hover:px-4 hover:py-4 hover:bg-gray-100 rounded-md hidden lg:block'>ACCUEIL</Link>
        <Link to="/register" className="btn bg-[#FF7B4D] ml-2">INSCRIPTION</Link>
        <Link to="/login" className="btn bg-[#FF7B4D]">CONNEXION</Link>
      </div>

    </div>

  )
}

export default HeaderPublic