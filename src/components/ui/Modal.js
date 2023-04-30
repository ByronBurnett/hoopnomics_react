import React from "react";



const Modal = (props) =>  {
    
    return  (props.trigger ) ? (
      
        <div className=" fixed top-0 left-0 h-screen shadow-lg flex justify-center items-center ">
        <div className=" relative p-8 w-96 h-full bg-white overflow-scroll ">
                <button className="absolute top-4 right-4" onClick={() =>props.setTrigger(false)}>X</button>
                { props.children }
              </div>


      </div>


     ): "";
}
 
export default Modal;