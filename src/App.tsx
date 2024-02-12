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



function App() {
  

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePublic/>}/>
          <Route path="/register" element={<RegisterForm/>}/>
          <Route path="/login" element={<LoginForm/>}/>
          <Route path="/test" element={<TestParent/>}/>
          <Route path="/parent" element={<HomeParent/>}/>
          <Route path="/meals" element={<MealsPage/>}/>
          <Route path="/addchild" element={<ChildRegister/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
