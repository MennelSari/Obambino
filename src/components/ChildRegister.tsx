import { useState, useEffect } from 'react';
import HeaderPublic from './HeaderPublic';
import axios from 'axios';
import {URL_Jerem} from "../URL_List";

    // Define the form data interface
    interface FormData {
        lastname: string;
        firstname: string;
        birthday: Date;
        diet: string;
    }
    
    const ChildRegister = () => {
     
      const [formData, setFormData] = useState<FormData>({
        lastname: "", 
        firstname: "",
        birthday: new Date(),
        diet: ""
      });
    
      // To update the input's form
      const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({
          ...formData,
          [name]: name === 'birthday' ? new Date(value) : value
        });
      };
      {/*}
      const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
          ...formData,
          [event.target.name]: event.target.name === 'birthday' ? new Date(event.target.value) : event.target.value
        });
      };*/}
    
      // To submit the form
      const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Prevent the default form behavior
      
        try {
          const response = await axios.post(`${URL_Jerem}api/child`, formData); // Send a POST request to the backend
          console.log(response.data); // Log the response
      
            // Reset the form
          setFormData({
            lastname: "", 
            firstname: "",
            birthday: new Date(),
            diet: ""
          });
        } catch (error) {
          console.error(error); // Log the error
        }
      };

      //RECUPERATION DES ENFANTS
      const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://jeremie-sarloutte.vpnuser.lan/projet-03-o-bambino-back/public/api/child/list');
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  if (loading) return <div>CHARGEMENNNNNNT...</div>;
  if (error) return <div>Error: CA MARCHE PO</div>;
  if (!data) return null;
    
        return (
            <div>
            <HeaderPublic />
    
          <div className="bg-[#FFE1CC] min-h-screen flex flex-col">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
              <div className="bg-[#332623] px-6 py-8 rounded shadow-md text-black w-full">
                <h1 className="mb-8 text-3xl text-center text-white">Enregistrer mon enfant</h1>
                <form onSubmit={handleSubmit}> {/*// Add the onSubmit function when the submit button is clicked*/}
                <input 
                  type="text"
                  className="block border border-grey-light w-full p-3 rounded mb-4"
                  value={formData.lastname}
                  onChange={handleChange}
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
                  type="date"
                  className="block border border-grey-light w-full p-3 rounded mb-4"
                  value={formData.birthday}
                  onChange={handleChange}
                  name="birthday"
                  placeholder="Date d'anniversaire" />
      
                <input 
                  type="password"
                  className="block border border-grey-light w-full p-3 rounded mb-4"
                  value={formData.diet}
                  onChange={handleChange}
                  name="diet"
                  placeholder="Régime" />
      
            
      
                <button
                  type="submit"
                  className="w-full text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1"
                >Ajouter mon enfant</button>
      
                
                </form>
              </div>
            </div>
            
          </div>

          <h2 className="text-2xl text-black mb-4">Liste des enfants</h2>
        <ul>
          {data.map((child: any) => (
            <li key={child.id}>
              {child.firstname} {child.lastname}
            </li>
          ))}
        </ul>
        
        </div>
  );
};

export default ChildRegister;