import React from "react";
import image from ".././assets/img/White logo - no background.png";
import { Link} from 'react-router-dom';
import { Fragment } from "react";
import { useContext, useState } from "react";
import Modal from "./ui/Modal";
import { CartContext } from "../context/CartContext";
import CartProduct from "../pages/Cart/CartProduct";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";


const Nav = () => {


const [isOpen, setIsOpen] = useState(false); 
const { logout} = useLogout()
const {user} = useAuthContext()
     
 console.log(user)
 
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
   

  const handleClick = () => {

logout()

  }
  

    return (  

      <>
   
      <nav className="flex items-center justify-between flex-wrap p-6 bg-primary max-w-full">
     <div className="flex items-center flex-shrink-0 text-white ">
       <img src={image} className="max-w-full h-20 mr-2" alt="Logo" />
     </div>
     <div className="block lg:hidden">
       <button
         onClick={() => setIsOpen(!isOpen)}
         className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
       >
         <svg
           className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
           viewBox="0 0 20 20"
           xmlns="http://www.w3.org/2000/svg"
         >
           <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
         </svg>
         <svg
           className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
           viewBox="0 0 20 20"
           xmlns="http://www.w3.org/2000/svg"
         >
           <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
         </svg>
       </button>
     </div>
     <div
       className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"}`}
     >
       <div className="text-sm lg:flex-grow">
         <Link to="/" className="block mt-4 lg:inline-block lg:mt-0 text-black-200 mr-4">
           Home
         </Link>
         <Link to="/register" className="block mt-4 lg:inline-block lg:mt-0 text-black-200 mr-4">
           Register
         </Link>
         <Link to="/login" className="block mt-4 lg:inline-block lg:mt-0 text-black-200 mr-4">
           Login
         </Link>
         <Link to="/teams" className="block mt-4 lg:inline-block lg:mt-0 text-black-200 mr-4">
           NBA Teams
         </Link>
         <Link to="/highlights" className="block mt-4 lg:inline-block lg:mt-0 text-black-200 mr-4">
           Highlights
         </Link>
         <Link to="/games" className="block mt-4 lg:inline-block lg:mt-0 text-black-200 mr-4">
           NBA Scores
         </Link>
         <Link to="/create" className="block mt-4 lg:inline-block lg:mt-0 text-black-200 mr-4">
           Create Blog
         </Link>
       </div>
       <div className="m-4">
        
        
      {user && ( <div> 
      <span className="text-white">{user.username}</span>
      <div onClick={handleClick} className="w-20 h-10 mx-auto bg-indigo-600 text-white rounded-lg p-2 m-2.5 border border-white cursor-pointer">Logout</div>
          </div>
    )}
      
       <button onClick={() => setButtonPopup(true)} className="relative w-20 h-7 justify-self-center bg-indigo-600 border-2 border-stone-50"><i className="fa-solid badge fa-cart-shopping text-white "></i>
        <span className="absolute -top-2.5 -right-2.5 w-6 h-6 bg-red-700 text-white items-center rounded-full">{productsCount}</span>
      </button>
       </div>
     </div>
   </nav>


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