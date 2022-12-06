import React from "react";
import IMAGES from '../img/index.js';
import { Link } from "react-router-dom";


const Home = () => {
   
   
   
   
    return ( 


 

   <div className=" max-w-6xl grid lg:grid-cols-3 auto-rows-[_250px] md:grid-cols-2 sm:grid-cols-1 mx-auto gap-7 p-5 "> 



<div className="short bg-white rounded-lg shadow-lg ">
        <h3 className="bg-primary rounded-t-lg text-center text-white p-2 m-2 ">Welcome to Hoopnomics</h3> 
        <p className="font-bold p-2">Hoopnomics is a basketball based brand that help fans, coaches, scouts and players understand data from a players perspective.</p>
        <div className="flex justify-center"> 
        <a href="/"><button type="button" className="bg-primary text-white p-2 m-2">Click Here</button></a>
        </div>
        </div>

        
        <div className="tall">
        <img src={IMAGES.basket2} alt="model" className="h-full min-w-full rounded-lg"   />
     </div> 


<div className="short bg-white rounded-lg shadow-lg">
    
    <h3 className="bg-primary rounded-t-lg text-center text-white p-2 m-2" >Sign-up to our newsletters</h3>
    <form>
     <label for="name" className="text-grey-700 text-sm font-bold m-2">Name:</label>  
     <input type="text" className="font-grey-800 border-2 rounded border-black m-2" id="username"  placeholder="username" required  /> 
     <br  />
     <label for="email" className="text-grey-700 text-sm font-bold m-2">Email:</label>
     <input type="email" id="email" name="email" className="font-grey-800 border-2 rounded border-black m-2 "  placeholder="email" required  />
     <br  />
     <div className="flex justify-center">
     <input type="submit" className="bg-primary text-white p-2 m-2 rounded" value="Submit"  /> 
     </div>
    </form >
    
    </div>


<div className="tall">
    <img src={IMAGES.multiplebasketball} className=" h-full min-w-full rounded-lg"  alt="basketballs" />
 </div> 

 <div className="tall">
    <img src={IMAGES.dribble} className="h-full min-w-full rounded-lg "  alt="player-dribble"  />
    </div>
    
    <div className="tall bg-white rounded-lg shadow-lg">
      <h3 className="bg-primary rounded-t-lg text-center text-white p-2 m-2" >Metrics & Analytics</h3>
     <p className="font-bold p-2" >It is undeniable that data analytics play a major role in sports today.</p>
     <p className="font-bold p-2">We use some of the best known metrics mixed in with our player-centric knowledge to give you best advice in betting, fantasy and player evaluation</p>
     <p className="font-bold p-2">Numbers are key, but other variables are at play we give you another way to use data and statistics for fantasy success</p>
     <div className="flex justify-center"> 
     <button type="button" className="bg-primary text-white p-2 m-2 rounded" >Click Here</button>
     </div>
     </div> 


     <div className="tall">
        <img src={IMAGES.miami} alt="miami-heat" className=" h-full min-w-full rounded-lg" />
        </div> 
        
        <div className="short bg-white rounded-lg shadow-lg">
           <h3 className="bg-primary rounded-t-lg text-center text-white p-2 m-2" >Fan Corner</h3>
         <p className="font-bold p-2">Get your Hoopnomics merch below!</p>
         <Link to={{pathname: "/store"}}>
         <div className="flex justify-center"> 
         <button type="button"className="bg-primary text-white p-2 m-2 rounded" >Click Here</button>
         </div>
         </Link>
        </div>
        


         <div className="short">
         <img src={IMAGES.beach} className="h-full min-w-full rounded-lg" alt="basketball-beach"  />
         </div>



        <div className="tall">
                <img src={IMAGES.nba} className="h-full min-w-full rounded-lg" alt="personal"   />
                </div>

     


        <div className="short">
        <img src={IMAGES.jordan} className="h-full min-w-full rounded-lg" alt="jordan-shoes"   />

        </div>

        <div className="short">
            <img src={IMAGES.emptybasket} className="h-full min-w-full rounded-lg" alt="empty-basket"   />
    
            </div>

            
            
            </div>




    );


}
 
export default Home;