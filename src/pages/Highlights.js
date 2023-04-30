import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";


const Highlights = () => {
    
      const [videos, setVideos] = useState([]);
      const [limit, setLimit ]  = useState(21)
      
        const RedHighlights = () => {

      axios.get('https://www.reddit.com/r/nba/search.json?q=flair%3AHighlight&restrict_sr=on&sort=new&t=all&limit='+limit)
     .then(async res => {  
      console.log(res.data.data.children)
      setVideos(res.data.data.children)
     }).catch(err => {
        console.log(err)

      

          })
    
   
      }

   

     useEffect(()   => {

        RedHighlights();

    
     }, [limit])


     
     
     const handleClick = () => {

     setLimit(limit+21)

      }

   


    
    return ( 
         
          
      <div>   

        <div className=" grid lg:grid-cols-3 max-w-7xl gap-3 m-5 p-2 md:grid-cols-2 sm:max-sm grid-cols-1 mx-auto ">

       {videos.map((item, index)  => (  
             
             
             <a href={item.data.url} className="highlight" target="blank" key={index} >  
              <div className="bg-white" key={item.data.id}>
            <img className="rounded-t-lg rounded-b-none w-full h-72  " src={item.data.secure_media ? item.data.secure_media.oembed.thumbnail_url:''} alt="reddit-highlights"/>
            <p className="font-bold line-clamp-2">{item.data.title}</p>
          </div>
          </a>
              
      )) }


    

    </div>
  
     <div className="flex justify-center m-2"> 
    <button onClick={handleClick} className=" content-center col-start-2 px-4 py-2 rounded bg-indigo-600 text-white">Load More</button>
    </div>

    </div>
 
     );
}
 
export default Highlights;