import {React, useContext} from "react";
import { CartContext } from "../../Context/CartContext";
import { getProductData } from "./productsStore";

const CartProduct = (props) => {
    const cart = useContext(CartContext)
    const id = props.id;
    const quantity = props.quantity;
    const productData = getProductData(id);
   
    
 return ( 

      <>
          
       <img src={productData.image} alt="hoop-products" className="w-24 h-24" />
       <h3 className="font-bold">{productData.title}</h3>
       <p className="font-bold">{quantity} total</p>
       <p className="font-bold">${(quantity * productData.price).toFixed(2)}</p>
      <button className="p-2 rounded bg-primary text-white mb-2" onClick={() => cart.deleteFromCart(id)}>Remove</button>
        <hr  /> 
      </>  


     );
}
 
export default CartProduct;