import {useState, useEffect} from 'react'
import HeaderParent from './HeaderParent'
import { useParams, useNavigate } from 'react-router-dom'; 
import axios from 'axios'; 
import {URL_Maxime} from "../URL_List";

interface IChildInfo {
  id: number;
  firstname: string;
  lastname: string;
  birthday: string;
  gender: string;
  diet: string;
  user: {
      id: number;
      firstname: string;
      lastname: string;
      email: string;
     
  } | null;  //because for api test, some children are not linked to a user
}

interface IAbsence {
  startdate: string;
  enddate: string;
  comment: string;
}
const Absence = () => {
  const { childId } = useParams(); //to get the childId from the url
  console.log(childId);

  const [isSuccess, setIsSuccess] = useState<boolean>(false); // Add a state to manage the success message
  const navigate = useNavigate(); // Add the navigate function to redirect the user after the form submission
  const [childInfo, setChildInfo] = useState<IChildInfo | null>(null);
  const [absence, setAbsence] = useState<IAbsence>({
    startdate: "",
    enddate: "",
    comment: "",
  });

  useEffect(() => {
    const fetchChildInfo = async () => {
      try {
        const response = await axios.get<IChildInfo>(`${URL_Maxime}api/child/show/${childId}`);
        setChildInfo(response.data); 
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchChildInfo();
  }, [childId]);

   // To update the input's form
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAbsence(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    try {
      // to convert the date to ISO format
      console.log("Avant conversion - start_date:", absence.startdate);
      console.log("Avant conversion - end_date:", absence.enddate);
      
      const startDateISO = new Date(absence.startdate).toISOString();
      const endDateISO = new Date(absence.enddate).toISOString();

  
      console.log("Après conversion - start_date:", startDateISO);
      console.log("Après conversion - end_date:", endDateISO);
  
      const response = await axios.post(`${URL_Vmcloud}api/absence/create`, {
        comment: absence.comment,
        startdate: startDateISO,
        enddate: endDateISO,
        children: childId 
      });
      setIsSuccess(true); // Set the success message to true
      setTimeout(() => { // Set a timeout to redirect the user after 3 seconds
        setIsSuccess(false);
        navigate('/children');
      }, 3000);
  
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <div className="bg-[#FFE1CC]">
        <HeaderParent />
        <div>
          {childInfo && (
            <div>
       <h1 className="text-5xl text-center font-bold mb-10 mt-10">Les absences de {childInfo.firstname}</h1>
    
       <div className="bg-[#FFE1CC] min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-[#332623] px-6 py-8 rounded shadow-md text-black w-full">
            {isSuccess && (
        <div className="text-center text-green-500">L'absence a bien été transmise, vous allez être redirigé vers la page de vos Bambinos</div>
      )}
            <h1 className="mb-8 text-xl text-center text-white">Informez nous grâce au formulaire ci-dessous :</h1>
            <form onSubmit={handleSubmit} > {/*// Add the onSubmit function when the submit button is clicked*/}
            <input 
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              value={absence.comment}
              onChange={handleChange} // Add the onChange function
              name="comment"
              placeholder="Notez la raison de l'absence" />
              <label className="text-white">Du..</label>
              <input 
              type="date"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              value={absence.startdate}
              onChange={handleChange} // Add the onChange function
              name="startdate"
              placeholder="Du.." />
              <label className="text-white">Au..</label>
            <input 
              type="date"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              value={absence.enddate}
              onChange={handleChange} // Add the onChange function
              name="enddate"
              placeholder="Au.." />
  
            
  
            <button
              type="submit"
              className="w-full text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1"
            >Notifier l'absence</button>
  
            </form>
          </div>
        </div>
        
      </div> </div>
      )}
       </div>
    </div>
  )
}

export default Absence