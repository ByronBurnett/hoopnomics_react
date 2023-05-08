import React from "react";
import image from ".././assets/img/White logo - no background.png";
import { Link} from 'react-router-dom';
import { Fragment } from "react";
import { useState, useContext, useEffect } from "react";
import Modal from "./ui/Modal";
import { CartContext } from "../context/CartContext";
import CartProduct from "../pages/Cart/CartProduct";
import { UserContext } from "../context/UserContext";
import Sidebar from "../pages/Home/Sidebar";





const Nav = () => {


   const {setUserInfo, userInfo} = useContext(UserContext);

 
   useEffect(() => {
      fetch('https://mern-crud-ued0.onrender.com/profile',  {
       credentials: 'include',
   
      }).then(response => {
         response.json().then(userInfo => {
       setUserInfo(userInfo);
         });
      });
   
     }, []);

     const logout = () => {
      fetch('https://mern-crud-ued0.onrender.com/logout', {
        credentials: 'include',
        method: 'POST',
      })
      setUserInfo(null);
    }
  


     
 
 
const cart = useContext(CartContext)
const [buttonPopup, setButtonPopup] = useState(false);   
 const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0)
   
  const checkout = async  () => {
    await fetch('http://localhost:4000/checkout', {
      method: "POST",
      headers: {
         'Content-Type': 'application/json'
      },
      body: JSON.stringify({items: cart.items})
    }).then((response) => {
      return response.json();
    }).then((response) => { 
      if(response.url) {
         window.location.assign(response.url); // Forwarding to Stripe
      }
    })
  }

  



  const username = userInfo?.username;

  
       

  

    return (  
   <>  
        <header className= " fixed top-0 w-full bg-primary p-2.5"> 
            <nav>
           
         {username && (
            <>

            <h1 > 
            <img src={image} alt="logo"  />
           </h1>
           
         
            <Link className="text-white" to ="/">Home</Link>  
            <Link to="/create">Create new post</Link >       
            <Link className=" text-white" to ="/register">Register</Link>
            <Link className="text-white" to ="/login">Login</Link>
            
            <a onClick={logout} href="/" >Logout ({username})</a>

          
            </> )}

            {!username && (
              
              
              <>
      
             <h1 > 
            <img src={image} alt="logo"  />
            </h1>
            
            <Link className="text-white" to ="/">Home</Link>          
            <Link className=" text-white" to ="/register">Register</Link>
            <Link className="text-white" to ="/login">Login</Link>
            
               </>
            )}
       

     
        <button onClick={() => setButtonPopup(true)} className="relative w-20 h-7 justify-self-center col-start-5 bg-indigo-600 border-2 border-stone-50"><i className="fa-solid badge fa-cart-shopping text-white "></i>
        <span className="absolute -top-2.5 -right-2.5 w-6 h-6 bg-red-700 text-white items-center rounded-full">{productsCount}</span>
      </button>
           
      
</nav>

</header>
         

<Sidebar />  



   <Modal trigger={buttonPopup} setTrigger={setButtonPopup}>
      
     <h1 className="flex justify-center font-bold p-3 text-xl border-b border-gray-500 ">
        Shopping Cart
     </h1>
     <div>
      {productsCount > 0 ?
      
         <>
        <p className="font-bold">Items in your cart</p>
        {cart.items.map((currentProduct, index) => (
           <CartProduct key={index} id={currentProduct.id} quantity={currentProduct.quantity} /> 

        ))}
         <h1 className="font-bold">Total:${cart.getTotalCost().toFixed(2)}</h1>
         
 
         <button className="bg-green-800 text-white rounded p-2" onClick={checkout}>
                 Purchase items!
         </button>
         
         </>
      : 
       
       
       <h1>There are no items in your cart!</h1>
      
      }
        
     </div>

    
     
    </Modal>
    </>

    );
}






export default Nav ;