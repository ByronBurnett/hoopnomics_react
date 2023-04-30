import React from "react";
import { productsArray } from "./productsStore";   
import ProductCard from "./ProductCard";

const Store = () => {

    
    
    return ( 
        <div> 
          <div>
          <h1 className="  text-2xl p-3 font-bold text-center">Welcome to the Store!</h1>
          </div>
       <div className="max-w-4xl lg:grid grid-cols-3 gap-6 mx-auto">
       
            {productsArray.map((product, index) => (

            <div className="font-bold text-xl" key={index}>
              <ProductCard product={product}/>
            </div>

            ))}
    
       
      
        
       </div>

       </div>

     );
}
 
export default Store;