import HomePublic from "./components/HomePublic";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import HomeParent from "./components/HomeParent";
import MealsPage from "./components/MealsPage";
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Calendar from "./components/Calendar";
import Children from "./components/Children";

//with the help of the react-router-dom library, we can create a single page application with multiple routes
//we can use the Route component to define a route with the URL in path and the element prop to define the component that should be rendered when the route is active


function App() {


  const [userData, setUserData] = useState(null);

  useEffect(() => {
    //to get the token from the cookie
    const token = Cookies.get('token');
    
    //if the token exists, we add it to the header of the axios request
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      axios.get('http://jeremie-sarloutte.vpnuser.lan/projet-03-o-bambino-back/public/api/secure/test') 
        .then(response => {
          console.log('reponse du back :', response.data);
          setUserData(response.data);
        })
        .catch(error => {
          console.error('erreur:', error);
        });
    }
  }, []); 
  console.log("contenu de ma props =", userData)
  
  return (
    <>
 
      <Router>
        <Routes>
          <Route path="/" element={<HomePublic/>}/>
          <Route path="/register" element={<RegisterForm/>}/>
          <Route path="/login" element={<LoginForm/>}/>

          <Route path="/parent" element={<HomeParent userData={userData}/>}/>

          <Route path="/meals" element={<MealsPage/>}/>
          <Route path="/calendar" element={<Calendar/>}/>
          <Route path="/children" element={<Children userData={userData}/>}/>
        </Routes>
      </Router>

    </>
  )
}

export default App