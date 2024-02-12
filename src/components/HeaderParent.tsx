import {Link} from 'react-router-dom';

export default function HeaderParent() {
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
        <li><Link to="/calendrier">CALENDRIER</Link> </li>
        <li> <Link to="/menu">MENU DE LA SEMAINE</Link> </li>
        <li> <Link to="/info">MES INFOS</Link> </li>
        
      </ul>
    </div>
    <a className="btn btn-ghost text-xl hidden md:block">O'bambino</a>
  </div>
  {/* Desktop menu */}
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link to="/parent">ACCUEIL</Link></li>
      <li><Link to="/calendrier">CALENDRIER</Link> </li>
      <li> <Link to="/meals">MENU DE LA SEMAINE</Link> </li>
      <li> <Link to="/info">MES INFOS</Link> </li>
      
    </ul>
  </div>
  <div className="navbar-end">

  <Link to="/#" className="btn bg-[#FF7B4D]">DECONNEXION</Link>
  </div>
</div>
    
  )
}