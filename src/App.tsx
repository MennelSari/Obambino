import HomePublic from "./components/HomePublic";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import TestParent from "./components/TestParent";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Cookies from 'js-cookie';

interface Itoken {
  token: string
}

function App() {
  

  const token:Itoken = Cookies.get('token');

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePublic/>}/>
          <Route path="/register" element={<RegisterForm/>}/>
          <Route path="/login" element={<LoginForm/>}/>
          <Route path="/test" element={<TestParent/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
