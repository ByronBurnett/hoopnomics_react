import React from "react";
import { useState } from "react";





const RegisterPage = () => {
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
   const Register = async (e) => {
    
    e.preventDefault();
    
   
       const response =  await fetch('http://localhost:4001/register',  {
        
        method: 'POST',
        body: JSON.stringify({username, password}),
        headers: {'Content-Type': 'application/json'},
      }) 

       if(response.status === 200) {
        alert('register sucessful')
       } else {
         alert('registration failed')
       }
    }  
   
    return ( 
       
        <form className="login max-w-lg mx-auto p-10 m-40" onSubmit={Register}>
             <h1 className="text-2xl font-bold text-center m-5">Register</h1>
        <input type="text" placeholder="username" className="block mb-1 w-full py-1 px-2 border-2 border-gray-300 rounded-lg" 
        value={username}
        onChange={e => setUsername(e.target.value)}
        
        />
        <input type="password" placeholder="password" className="block mb-1 w-full py-1 px-2 border-2 border-gray-300 rounded-lg  " 
        value={password}
        onChange={e => setPassword(e.target.value)}
    
        />
        <button type="submit" className="w-full block bg-primary text-white rounded py-1 px-2">Register</button> 
    </form>

     );
}
 
export default RegisterPage;