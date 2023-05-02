import {  React, useEffect, useState} from "react";


import PostDetails from   './PostDetails'


const Blogpage = (props) => {
   
   

    const [posts, setPosts] = useState(null);
     
  useEffect(() => {
   const fetchBlogs = async () => {
    const response = await fetch('http://localhost:4001/post')
    
    const json = await response.json()
    if (response.ok) {
      setPosts(json)
    }
   }
   fetchBlogs()
  }, [])
  
  
  
  return ( 
      
     <>
      <h2 className="m-2 text-2xl text-center font-extrabold">Hoopnomics Blog</h2>
      {posts && posts.map((post) => (
      
     <PostDetails  key={post._id} post={post}/>

      ))}
     </>

     );
}
 
export default Blogpage;