import HomePublic from "./components/HomePublic";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import HomeParent from "./components/HomeParent";
import MealsPage from "./components/MealsPage";
import ChildRegister from "./components/ChildRegister";
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Cookies from 'js-cookie';


//with the help of the react-router-dom library, we can create a single page application with multiple routes
//we can use the Route component to define a route with the URL in path and the element prop to define the component that should be rendered when the route is active




function App() {
  

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePublic/>}/>
          <Route path="/register" element={<RegisterForm/>}/>
          <Route path="/login" element={<LoginForm/>}/>
          <Route path="/parent" element={<HomeParent/>}/>
          <Route path="/meals" element={<MealsPage/>}/>
          <Route path="/addchild" element={<ChildRegister/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App