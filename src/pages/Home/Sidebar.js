import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";


const Sidebar = () => {
    
    const [isOpen, setIsOpen] = useState(false)
    
    return ( 
        
   
   <>
   {!isOpen ?
   
    (
        <button className="fixed z-30 overflow-y-auto flex items-center cursor-pointer right-10 top-6" onClick={() => setIsOpen(!isOpen)}>
            

    <svg fill="#2563EB"
      viewBox="0 0 100 80"
      width="40"
      height="40"
      
    >
      <rect width="100" height="10"></rect>
      <rect y="30" width="100" height="10"></rect>
      <rect y="60" width="100" height="10"></rect>
    </svg>

        </button>
    ) :

    (
         
        <button className="text-xl text-white fixed top-4 left-4 z-50"
        onClick={() => setIsOpen(!isOpen)}>
            X
        </button>
        

   
     )


}

<div className={`fixed top-0 left-0 bg-indigo-800 border-4 border-white w-[25vw] h-full p-10 pl-10 overflow-y-auto z-40 ${isOpen ? 'translate-x-0' : '-translate-x-full'} ease-in-out
    duration-300`}>
        
  <nav className="grid grid-cols-1">
    
  
  <Link className="text-white" to ="/highlights">Highlights</Link>
  <Link className="text-white" to ="/teams">NBA Teams</Link>  
  <Link className="text-white" to ="/games">NBA Scores</Link>  

    
 </nav>  

    </div>



   </>
   );
}
 
export default Sidebar;