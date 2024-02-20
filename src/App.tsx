import HomePublic from "./components/HomePublic";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import TestParent from "./components/TestParent";
import HomeParent from "./components/HomeParent";
import MealsPage from "./components/MealsPage";
import ChildRegister from "./components/ChildRegister";
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {IuserData} from "./type"
import {URL_Jerem} from "./URL_List"





function App() {


  const [userData, setUserData] = useState(null);

  useEffect(() => {
    //to get the token from the cookie
    const token = Cookies.get('token');
    
    //if the token exists, we add it to the header of the axios request
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      axios.get(`${URL_Jerem}api/secure/test`) 
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
          <Route path="/test" element={<TestParent/>}/>
          <Route path="/parent" element={<HomeParent userData={userData}/>}/>
          <Route path="/meals" element={<MealsPage/>}/>
          <Route path="/addchild" element={<ChildRegister/>}/>
        </Routes>
      </Router>

    </>
  )
}

export default App