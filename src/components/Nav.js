import React from "react";
import image from "../img/White logo - no background.png";
import { Link} from 'react-router-dom';
import { Fragment } from "react";
import { useState, useContext } from "react";
import Modal from "./Modal";
import { CartContext } from "../CartContext";
import CartProduct from "./CartProduct";

const Nav = () => {

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


    return (  
   <>  
        <header className="bg-primary p-2.5"> 
            <nav>
    
        <Link className="text-white" to="/">Home</Link>
        <Link className="text-white" to="/highlights">Highlights</Link>
        
             <h1 > 
            <img src={image} alt="logo"  />
            </h1>
    
        <Link className="text-white" to="/teams">NBA Teams</Link>
        <Link className="text-white" to ="/games">NBA Scores</Link>
     
        <button onClick={() => setButtonPopup(true)} className="relative w-20 h-7 justify-self-center col-start-5 bg-indigo-600 border-2 border-stone-50"><i className="fa-solid badge fa-cart-shopping text-white "></i>
         <span className="absolute -top-2.5 -right-2.5 w-6 h-6 bg-red-700 text-white items-center rounded-full">{productsCount}</span>
      </button>
</nav>

</header>

   <Modal trigger={buttonPopup} setTrigger={setButtonPopup}>
      
     <h1 className="flex justify-center font-bold p-3 text-xl border-b border-gray-500">
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