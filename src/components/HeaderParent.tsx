import {Link} from 'react-router-dom';
import Cookies from 'js-cookie';
import Logo from '../assets/logosvg.svg';

//This component is the header for the parent page. It contains the links to the different pages of the parent's interface and a button to log out.

export default function HeaderParent() {


  //Function to log out the user
  const handleLogout = () => {
    Cookies.remove('token'); //This line will remove the token from the cookies
  
  window.location.href = '/'; //This line will redirect the user to the login page
};

  return (
    
    
    <div className="navbar bg-[#FFE1CC]">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      {/* Mobile menu */}
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link to="/parent">ACCUEIL</Link></li>
        <li><Link to="/calendar">CALENDRIER</Link> </li>
        <li> <Link to="/meals">MENU DE LA SEMAINE</Link> </li>
        <li> <Link to="/children">MES BAMBINOS</Link> </li>
        
      </ul>
    </div>
    <div className="navbar max-h-20">
          <Link to="/parent">
            <img src={Logo} alt="" className="hidden md:block w-64 h-64 object-contain object-center" />
          </Link>
  
        </div>
  </div>
  {/* Desktop menu */}
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal px-1 flex-nowrap">
      <li><Link to="/parent">ACCUEIL</Link></li>
      <li><Link to="/calendar">CALENDRIER</Link> </li>
      <li> <Link to="/meals">MENU DE LA SEMAINE</Link> </li>
      <li> <Link to="/children">MES BAMBINOS</Link> </li>
      
    </ul>
  </div>
  <div className="navbar-end">

  <button className="btn bg-[#FF7B4D]" onClick={handleLogout}>DECONNEXION</button> {/* This button will call the function handleLogout when clicked*/}
  </div>
  
</div>
    
  )
}