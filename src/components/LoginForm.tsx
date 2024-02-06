import HeaderPublic from './HeaderPublic';
const LoginForm = () => {
  return (
    <div>
      <HeaderPublic />
    <div className="bg-[#FFE1CC] min-h-screen flex flex-col">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-[#332623] px-6 py-8 rounded shadow-md text-black w-full">
          <h1 className="mb-8 text-3xl text-center text-white">Connexion</h1>

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


          <button
            type="submit"
            className="w-full text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1"
          >Connexion</button>

         
        </div>
      </div>
    </div>
    </div>
  );
}

export default LoginForm;