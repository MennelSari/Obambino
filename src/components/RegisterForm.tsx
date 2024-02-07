import HeaderPublic from './HeaderPublic';

//composant pour afficher le formulaire d'inscription
const RegisterForm = () => {
    return (
        <div>
        <HeaderPublic />

      <div className="bg-[#FFE1CC] min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-[#332623] px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center text-white">Inscription</h1>
            <input 
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="nom"
              placeholder="Nom" />
              <input 
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="prenom"
              placeholder="Prénom" />
  
            <input 
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email" />
  
            <input 
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
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
          </div>
        </div>
      </div>
    
    </div>
        );
  }
  
  export default RegisterForm;