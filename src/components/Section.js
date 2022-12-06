import React from "react";
import IMAGES from "../img";
import { Link } from "react-router-dom";



const Section = () => {



    return ( 



<section className="max-w-6xl grid lg:grid-cols-[_300px_300px_300px] md:grid-cols-2 sm:grid-cols-1 gap-7 mx-auto p-5 place-content-center m-8"> 
        
   <article className="rounded bg-white shadow-lg">
    <img src={IMAGES.youtube} className="w-full rounded-t" alt="" />
     <article>
        <h3 className="font-extrabold p-2 border-b-2 border-black text-center">Youtube Channel</h3>
        <p className="font-bold p-2">Tune in to our weekly Youtube streams!</p>
        <div className="flex justify-center">
            <button className="bg-primary text-white p-2 m-4 rounded">Watch</button>
        </div>
     </article>

  </article>   


     <article className="rounded bg-white shadow-lg">
    <img src={IMAGES.podcast} className="w-full rounded-t" alt="" />
     <article>
        <h3 className="font-extrabold p-2 border-b-2 border-black text-center">Podcast</h3>
        <p className="font-bold p-2">Let talk about it! NBA analysis on from teams activity, coaches and league news.</p>
        <div className="flex justify-center">
            <button className="bg-primary text-white p-2 m-4 rounded"><Link to="/podcast">Listen</Link></button>
        </div>
     </article>
  </article> 



  <article className="rounded bg-white shadow-lg">
    <img src={IMAGES.vegas} className="w-full rounded-t" alt="" />
     <article>
        <h3 className="font-extrabold p-2 border-b-2 border-black text-center">Top 2022 Draft Picks</h3>
        <p className="font-bold p-2">Breakdown of 2022 NBA Summer League</p>
        <ul className="font-bold p-2">
           <li><a href="#">Winner & Losers</a></li>
           <li><a href="#">Future Prospect</a></li>
           <li><a href="#">Rookie of Year?</a></li>
           <li><a href="#">NBA Statistics</a></li>  
            </ul>
        <div className="flex justify-center">
            <button className="bg-primary text-white p-2 m-4 rounded">Click Here</button>
        </div>
     </article>
  </article> 




     
</section>










    




     );
}
 
export default Section;