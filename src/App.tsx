import HomePublic from "./components/HomePublic";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import HomeParent from "./components/HomeParent";
import MealsPage from "./components/MealsPage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {URL_Maxime} from "./URL_List"
import Calendar from "./components/Calendar";
import Children from "./components/Children";
import Absence from "./components/Absence";
import ErrorPage from "./components/ErrorPage";

//TEST DE BRANCHE HOTE
function App() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const token = Cookies.get('token');
    console.log('token:', token);
    
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      axios.get(`${URL_Maxime}api/secure/test`) 
        .then(response => {
          console.log('REPONSE API TEST:', response.data);
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
          <Route path="/parent" element={userData ? <HomeParent userData={userData}/> : null}/>
          <Route path="/meals" element={<MealsPage/>}/>
          <Route path="/calendar" element={<Calendar/>}/>
          <Route path="/children" element={userData ? <Children userData={userData}/> : null}/> 
          <Route path="/absence/:childId" element={<Absence/>}/>
          <Route path="*" element={<ErrorPage/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App;
