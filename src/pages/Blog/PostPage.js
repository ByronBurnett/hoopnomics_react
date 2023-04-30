import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";




const PostPage = () => {
    
    const {id} = useParams();
    const [postInfo, setPostInfo] = useState(null);



    useEffect(()  => {
        
        console.log(id);
      
         fetch(`http://localhost:4001/post/${id}`).then(response => {
            response.json().then(postInfo => {
              setPostInfo(postInfo)
              console.log(postInfo)
            });
         });

    }, []);
    
    if (!postInfo) return '';
    
    
    return ( 

     <div className="max-w-4xl mx-auto">
     
     <div className="">
     <h1 className="text-3xl font-bold m-5 text-center ">{postInfo.title}</h1>
    <div className="text-center"> 
     <time className="font-black">{formatDistanceToNow(new Date(postInfo.createdAt), {addSuffix: true})}</time> 
     </div>
     <div className="text-center font-black">Byron Burnett</div>
     
     <img src={`http://localhost:4001/${postInfo.cover}`} alt="" className="object-contain m-5"  />
    
       <div          
        dangerouslySetInnerHTML={{__html: postInfo.content}}
        className="p-2 m-5 font-black"
       />
     </div>
     
     
     
     </div>


     );
}
 
export default PostPage;