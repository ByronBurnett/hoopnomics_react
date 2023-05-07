import { React, useContext } from "react";
import { useState } from "react";
import {useHistory} from "react-router-dom";
import { UserContext } from "../context/UserContext";

const LoginPage = () => {
    
    const history = useHistory();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    
    const {setUserInfo} = useContext(UserContext);
 
    const login = async (e) => {
        e.preventDefault()
       const response = await fetch('https://hoopnomics.com/login', {
            method: 'POST',
            body:  JSON.stringify({username, password}),
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
        });
        if (response.ok) {
          response.json().then(userInfo => {
             setUserInfo(userInfo)
            setRedirect(true);
          })
            
        } else {
            alert('wrong credentials');
        }
    }
    
    if (redirect) {
        history.push('/blogs')
      }
    return ( 

    <form className="login max-w-lg mx-auto p-10 m-40" onSubmit={login}>
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
        <button type="submit" className="w-full block bg-primary text-white rounded py-1 px-2">Login</button> 
    </form>



     );
}
 
export default LoginPage;