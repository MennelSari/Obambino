import {Link} from 'react-router-dom';

export default function HeaderParent() {
  return (
   
        <div>
        <div className="navbar bg-[#FFE1CC]">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li> <Link to="/">ACCUEIL</Link></li>
        
      </ul>
    </div>
    
    <p className="text-xl">Logo</p>
  </div>
  
  <div className="navbar-end">
  <ul className="menu menu-horizontal px-1 font-raleway">
       <li><Link to="/">ACCUEIL</Link></li> 
       <li><Link to="/calendrier">CALENDRIER</Link> </li>
       <li> <Link to="/menu">MENU DE LA SEMAINE</Link> </li>
       <li> <Link to="/info">MES INFOS</Link> </li>
    </ul>
    <Link to="#" className="btn bg-[#FF7B4D]">DECONNEXION</Link>
  
  </div>
</div>
    </div>
    
  )
}
