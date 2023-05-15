import { React } from "react";
import { useState } from "react";
import { useLogin } from "../hooks/useLogin";


const LoginPage = () => {
    
     
  
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const {login, error, isLoading} = useLogin();
    

    const handleSubmit = async (e) => {
      e.preventDefault()

      await login(username, password)
       

    }
 


    return ( 

    <form className="login max-w-lg mx-auto p-10 m-20" onSubmit={handleSubmit}>
         <h1 className="text-2xl font-bold text-center m-5">Login</h1>
        <input type="text" 
        placeholder="username" 
        className="block mb-1 w-full py-1 px-2 border-2 border-gray-300 rounded-lg"  
        value={username}
        onChange={e  => setUsername(e.target.value)} 
        />
        <input type="password" 
        placeholder="password" 
        className="block mb-1 w-full py-1 px-2 border-2 border-gray-300 rounded-lg  "  
        value={password}
        onChange={e => setPassword(e.target.value)}
        />
        <button disabled={isLoading} type="submit" className="w-full block bg-primary text-white rounded py-1 px-2">Login</button> 
         {error && <div>{error}</div>}
    </form>



     );
}
 
export default LoginPage;