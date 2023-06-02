import {  React, useEffect, } from "react";
import PostDetails from '../Blog/PostDetails'
import {useAuthContext} from '../../hooks/useAuthContext'
import { useBlogsContext } from "../../hooks/useBlogsContext";



const Blogpage = () => {
   
   //Home Blogpage

    const {blogs, dispatch} = useBlogsContext()
    
    const {user} = useAuthContext()

       console.log(blogs)

  useEffect(()  => {
  
  const fetchBlogs = async () => {
  const response = await fetch('https://mern-crud-g6ul.onrender.com/api/blogs/', {
        headers: {
          'Authorization' : `Bearer ${user.token}`
        }
  })
   const json = await response.json()

   if (response.ok) {
      dispatch({type: 'SET_BLOGS', payload: json})
   }

  }    
  if (user)  {  
    fetchBlogs()

  }


 }, [dispatch, user])
  
  
  return ( 
      
     <>
     <div className="m-20"> 
      <h2 className=" text-2xl text-center font-extrabold ">Hoopnomics Blog</h2>
       {blogs  && blogs.map(blog => (
        <PostDetails key={blog._id} blog={blog} />
       ))}
          </div>
     </>

     );
}
 
export default Blogpage;