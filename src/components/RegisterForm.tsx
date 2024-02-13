import HeaderPublic from './HeaderPublic';
import { useState } from 'react';
import axios from 'axios';
import { URL_Jerem } from '../URL_List'; 
//This is the form component for the registration



// Define the form data interface to type the formData state
interface FormData {
    lastname: string;
    firstname: string;
    email: string;
    password: string;
    role:[];
}


const RegisterForm = () => {
 
  const [formData, setFormData] = useState<FormData>({
    lastname: '',
    firstname: '',
    email: '',
    password: '',
    role:[],
  });

  // To update the input's form
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // To submit the form
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent the default form behavior

    // Check if the password and the confirm_password are the same
    if (formData.password !== confirm_password) {
      alert("Les mots de passe ne sont pas identiques.");
      return;
    }*/}
    try {
      const response = await axios.post(`${URL_Jerem}/api/user/create`, formData); // Send a POST request to the backend
      console.log(response.data); // Log the response
    } catch (error) {
      console.error(error); // Log the error
    }
  };

    return (
        <div>
        <HeaderPublic />

      <div className="bg-[#FFE1CC] min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-[#332623] px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center text-white">Inscription</h1>
            <form onSubmit={handleSubmit}> {/*// Add the onSubmit function when the submit button is clicked*/}
            <input 
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              value={formData.lastname} // Add the value attribute to the input
              onChange={handleChange} // Add the onChange function to update the state
              name="lastname"
              placeholder="Nom" />
              <input 
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              value={formData.firstname}
              onChange={handleChange}
              name="firstname"
              placeholder="Prénom" />
  
            <input 
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              value={formData.email}
              onChange={handleChange}
              name="email"
              placeholder="Email" />
  
            <input 
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              value={formData.password}
              onChange={handleChange}
              name="password"
              placeholder="Mot de Passe" />
  
            <input 
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="confirm_password"
              placeholder="Confirmez votre mot de passe" />
  
            <button
              type="submit"
              className="w-full text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1"
            >Créer le compte</button>
  
            <div className="text-center text-sm text-white mt-4">
              En créant un compte, vous acceptez nos
              <a className="no-underline border-b border-grey-dark text-white" href="#">
                 Conditions d'utilisation
              </a> et 
              <a className="no-underline border-b border-grey-dark text-white" href="#">
                Politique de confidentialité
              </a>
            </div>
            </form>
          </div>
        </div>
        
      </div>
    
    </div>
        );
  }
  
  export default RegisterForm;