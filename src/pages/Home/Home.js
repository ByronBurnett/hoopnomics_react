import React from "react";
import IMAGES from '../../assets/img/index.js';
import { Link } from "react-router-dom";


const Home = () => {
   
   
   
   
    return ( 


 

   <div className=" max-w-6xl grid lg:grid-cols-3 auto-rows-[_250px] md:grid-cols-2 sm:grid-cols-1 mx-auto gap-7 p-5"> 



<div className="short bg-white rounded-lg shadow-lg ">
        <h3 className="bg-primary rounded-t-lg text-center text-white p-2 m-2 ">Welcome to Hoopnomics</h3> 
        <p className="font-bold p-2">Hoopnomics is a basketball based brand that help fans, coaches, scouts and players understand data from a players perspective.</p>
        <div className="flex justify-center"> 
        <a href="/"><button type="button" className="bg-primary rounded text-white p-2 m-2">Click Here</button></a>
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
      <h3 className="bg-primary rounded-t-lg text-center text-white p-2 m-2" >Player Statistics</h3>
     <p className="font-bold p-2" >Search any player from any season starting in 1979 to the current year.</p>
     <p className="font-bold p-2">Compare your favorite players from any season and get their season totals. Most people argue about who is the best well the number's don't lie. Use our search form to find historical data.</p>
     <p className="font-bold p-2">Hoopnomics back their arguments with real life statistical data. Join us as we bring reliable data to prove our assumptions</p>
     <Link to={{pathname: "/nbaplayers"}}> 
     <div className="flex justify-center"> 
     <button type="button" className="bg-primary text-white p-2 m-2 rounded" >Click Here</button>
     </div>
     </Link>
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