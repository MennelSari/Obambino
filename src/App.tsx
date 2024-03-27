import HomePublic from "./components/HomePublic";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import HomeParent from "./components/HomeParent";
import MealsPage from "./components/MealsPage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {URL_Server} from "./URL_List"
import Calendar from "./components/Calendar";
import Children from "./components/Children";
import Absence from "./components/Absence";
import ErrorPage from "./components/ErrorPage";


function App() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const token = Cookies.get('token');
    
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      axios.get(`${URL_Server}api/secure/test`) 
        .then(response => {
          setUserData(response.data);
        })
        .catch(error => {
          console.error('erreur:', error);
        });
    }
  }, []); 
  
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePublic/>}/>
          <Route path="/inscription" element={<RegisterForm/>}/>
          <Route path="/connexion" element={<LoginForm/>}/>
          <Route path="/parent" element={userData ? <HomeParent userData={userData}/> : <HomePublic/>}/>
          <Route path="/repas" element={userData ? <MealsPage userData={userData}/> : <HomePublic/>}/>
          <Route path="/calendrier" element={userData ? <Calendar userData={userData}/> : <HomePublic/>}/>
          <Route path="/enfants" element={userData ? <Children userData={userData}/> : <HomePublic/>}/> 
          <Route path="/absence/:childId" element={<Absence/>}/>
          <Route path="*" element={<ErrorPage/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App;
