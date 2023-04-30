import { Link } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";



const PostDetails = ({post}) => {
   
   
   
   
    return ( 

        <div key={post._id} className="main max-w-4xl mx-auto bg-white shadow-xl m-5"> 
        <div className="grid grid-cols-2 gap-5 mb-7">
        <div className="">
        <Link to={`/post/${post._id}`}> 
        <img src={'http://localhost:4001/' +post.cover} alt=""/>
        </Link>
        </div>
        <div className="m-0 text-3xl p-2">
          <Link to={`/post/${post._id}`}> 
          <h2>{post.title}</h2>
          </Link>
          <p className="info flex my-6 mx-0 text-base font-bold gap-2.5 ">
            <a className="author no-underline">By {post.author.username} </a>
            <time>{formatDistanceToNow(new Date(post.createdAt), {addSuffix: true})}</time>
          </p>
          <p className="summary my-2.5 mx-0 text-base leading-7">{post.summary}</p>
        </div>
      </div>
        </div>   


     );
}
 
export default PostDetails;