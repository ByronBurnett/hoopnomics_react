import {  React, useEffect, useState} from "react";
import PostDetails from '../Blog/PostDetails'


const Blogpage = () => {
   
   

    const [posts, setPosts] = useState([]);
     
  useEffect(()  => {
   fetch('http://localhost:4001/post')
   .then(response => {
    response.json().then(posts => {
      setPosts(posts)
    });

   });


 }, [])
  
  
  return ( 
      
     <>
     <div className="m-40"> 
      <h2 className=" text-2xl text-center font-extrabold ">Hoopnomics Blog</h2>
       {posts.length > 0 && posts.map(post => (
        <PostDetails {...post} />
       ))}
          </div>
     </>

     );
}
 
export default Blogpage;