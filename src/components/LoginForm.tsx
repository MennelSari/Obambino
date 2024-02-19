import HeaderPublic from './HeaderPublic';
import { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import {URL_Maxime} from "../URL_List";



  interface FormData {
    username: string;
    password: string;
  }

//composant pour la page de connexion
const LoginForm = () => {



  const [formData, setFormData] = useState<FormData>({
    username: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Stop the browser from submitting the form
    try {
      const response = await axios.post(`${URL_Maxime}api/login_check`, JSON.stringify(formData), 
      { headers: { 'Content-Type': 'application/json' } } //To be sure that i get format json
    ); // send the data to the backend
    Cookies.set('token', response.data.token, { expires: 7 }); //To stock the token in a Cookie, and i set the expire to 7 days
    console.log('token stocké dans un cookie :', response.data.token);
      console.log(response.data); // The response is the data from the backend
    

      window.location.href = '/parent'; // Redirect the user to the home page '/parents
    } catch (error) {
      console.error(error); // If an error occurs, the error is logged
    }
  };


  return (
    <div>
      <HeaderPublic />
     
    <div className="bg-[#FFE1CC] min-h-screen flex flex-col">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-[#332623] px-6 py-8 rounded shadow-md text-black w-full">
          <h1 className="mb-8 text-3xl text-center text-white">Connexion</h1>
          <form onSubmit={handleSubmit}>
            <input 
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              value={formData.username}
              onChange={handleChange}
              name="username"
              placeholder="Email" />

            <input 
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              value={formData.password}
              onChange={handleChange}
              name="password"
              placeholder="Mot de Passe" />


            <button
              type="submit"
              className="w-full text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1"
            >Connexion</button>

          </form>
        </div>
      </div>
    </div>
    </div>
  );
}

export default LoginForm;