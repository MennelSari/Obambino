import ImgError from "../assets/error.png";
import HeaderPublic from "./HeaderPublic";

const ErrorPage = () => {
  return ( 
    <div className = "bg-[#FFE1CC]">
        <HeaderPublic />
                <div className = "flex-column justify-center items-center h-screen">
                     <h1 className="text-5xl text-center font-bold mb-10 p-10"> La page demandée n'existe pas</h1>
                     <div className="flex justify-center">
                    <img src={ImgError} alt="Erreur" />
                    </div>
                </div>
          
    </div>
  );
}

export default ErrorPage