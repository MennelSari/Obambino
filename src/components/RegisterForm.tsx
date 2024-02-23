import HeaderPublic from './HeaderPublic';
import { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import { URL_AWS } from '../URL_List';




// Define the form data interface to type the formData state
interface FormData {
    lastname: string;
    firstname: string;
    email: string;
    password: string;

    role: [];

}


const RegisterForm = () => {


 
  const [formData, setFormData] = useState<FormData>({
    lastname: '',
    firstname: '',
    email: '',
    password: '',
    role: [],

  });

  const [isSuccess, setIsSuccess] = useState<boolean>(false); // Add a state to manage the success message

  const navigate = useNavigate(); // Add the navigate function to redirect the user after the form submission
  const [errors, setErrors] = useState<string[]>([]); // Add a state to manage the errors

 
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
   

    // Valider le mot de passe avant de soumettre le formulaire
    if (!validatePassword(formData.password)) {
      setErrors(["Votre mot de passe doit contenir au moins 6 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial."]);
      return;
    }
    
    try {
      const response = await axios.post(`${URL_AWS}api/user/create`, formData); // Send a POST request to the backend

      console.log( "ce que j'envoie :", response.data); // Log the response
      setIsSuccess(true); // Set the success message to true
      setTimeout(() => { // Set a timeout to redirect the user after 3 seconds
        setIsSuccess(false);
        navigate('/login');
      }, 3000);
    } catch (error) {
      console.error(error); // Log the error
    }
  };

  const validatePassword = (password: string): boolean => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    return regex.test(password);
  };

    return (
        <div>
        <HeaderPublic />

      <div className="bg-[#FFE1CC] min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-[#332623] px-6 py-8 rounded shadow-md text-black w-full">
          {isSuccess && (
        <div className="text-center text-green-500">Inscription réussie, vous serez redirigé vers la page de connexion d'ici quelques secondes...</div>
      )}
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