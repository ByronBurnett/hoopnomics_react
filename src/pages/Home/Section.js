import React from "react";
import IMAGES from "../../assets/img";
import { Link } from "react-router-dom";



const Section = () => {



    return ( 



<section className="max-w-6xl grid lg:grid-cols-[_300px_300px_300px] md:grid-cols-2 sm:grid-cols-1 gap-7 mx-auto p-5 place-content-center m-8"> 
        
   <article className="rounded bg-white shadow-lg">
    <img src={IMAGES.youtube} className="w-full rounded-t" alt="" />
     <article>
        <h3 className="font-extrabold p-2 border-b-2 border-black text-center">Youtube Channel</h3>
        <p className="font-bold p-2">Tune in to our weekly Youtube streams.</p>
        <div className="flex justify-center">
            <button className="bg-primary text-white p-2 m-4 rounded">Watch</button>
        </div>
     </article>

  </article>   


     <article className="rounded bg-white shadow-lg">
    <img src={IMAGES.podcast} className="w-full rounded-t" alt="" />
     <article>
        <h3 className="font-extrabold p-2 border-b-2 border-black text-center">Podcast</h3>
        <p className="font-bold p-2 text-center">Let talk about it.</p>
        <div className="flex justify-center">
            <button className="bg-primary text-white p-2 m-4 rounded"><Link to="/podcast">Listen</Link></button>
        </div>
     </article>
  </article> 



  <article className="rounded bg-white shadow-lg">
    <img src={IMAGES.vegas} className="w-full rounded-t" alt="" />
     <article>
        <h3 className="font-extrabold p-2 border-b-2 border-black text-center">Blog Page</h3>
        <p className="font-bold p-2 text-center">Weekly posts about Basketball.</p>
      
        <div className="flex justify-center">
            <button className="bg-primary text-white p-2 m-4 rounded"> <Link to="/blogpage">Click Here</Link></button>
        </div>
     </article>
  </article> 




     
</section>










    




     );
}
 
export default Section;