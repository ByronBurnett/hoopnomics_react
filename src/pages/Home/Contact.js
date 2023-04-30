import React from "react";
import PopUp from "../../components/ui/PopUp";
import { useState,  } from "react";


const Contact = () => {
   
  const [buttonPopup, setButtonPopup] = useState(false);
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");


const handleSubmit = event => {
  // 👇️ prevent page refresh
  event.preventDefault();
  

  console.log('form submitted ✅');
  setFirst("")
  setLast("")
  setEmail("")
  setPhone("")
  setMessage("")

  console.log(first)
  console.log(last)
  console.log(email)
  console.log(phone)
  console.log(message)
  

};

  
  return ( 

        
       


<form  onSubmit={handleSubmit}  className="w-full max-w-3xl bg-white rounded-lg shadow-lg m-8 mx-auto border-2 border-primary">
  <div>
    <h2 className="font-bold p-2 text-center">Send Us A Message <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
</svg>
</h2>
  </div>
  <div className="flex flex-wrap m-7 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 m-2" for="grid-first-name">
        First Name
      </label>
      <input className="appearance-none block w-full bg-gray-200
       text-gray-700 border border-red-500 
       rounded py-3 px-4 mb-3 leading-tight focus:outline-none
        focus:bg-white" id="grid-first-name" 
        type="text" 
        placeholder="first name"  
        value={first}
        onChange={event => setFirst(event.target.value)}
        
        />
      <p className="text-red-500 text-xs italic">Please fill out this field.</p>
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 m-2" for="grid-last-name">
        Last Name
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border
       border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none
        focus:bg-white focus:border-gray-500"
         type="text" 
         placeholder="last name"
         value={last}
         onChange={event => setLast(event.target.value)}

           />
    </div>

    <div className="w-full md:w-1/2 px-3 ">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
        Email
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border
       border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none
        focus:bg-white focus:border-gray-500"
         type="text" 
         placeholder="Email"
         value={email}
         onChange={event => setEmail(event.target.value)}
           />
    </div>

    <div className="w-full md:w-1/2 px-3 ">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
        Phone
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border
       border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none
        focus:bg-white focus:border-gray-500"
         type="text" 
         placeholder="Phone"
         value={phone}
         onChange={event => setPhone(event.target.value)}
           />
    </div>

     <div className="w-full md:w-1/2 px-3 mx-auto" >
     <div className>
             <label  className=" block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 m-4 text-center">Message</label>
             <textarea
               className=" appearance-none block w-full bg-gray-200 text-gray-700 border
               border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none
                focus:bg-white focus:border-gray-500"
               value={message}
               onChange={event => setMessage(event.target.value)}
               rows="5"
               name="message"
               placeholder="Enter your message"
               required
             ></textarea>
           </div>
           <div className="flex justify-center m-5">
             <button onClick={() => setButtonPopup(true)}  type="submit" value="submit" className="bg-primary text-white p-2 m-2 rounded" >Send</button>
            </div>
           
        </div>

        <PopUp  trigger={buttonPopup} setTrigger={setButtonPopup}>
       <h2 className="text-center">Thank you we will be in touch shortly</h2>
       <p className="text-center">Hoopnomics "Inside the Number$"</p>

      </PopUp>

     </div>
  
  </form>







     
        
     

    


     );
}
 
export default Contact;