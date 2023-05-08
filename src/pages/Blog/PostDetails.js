import { Link } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";




export default function PostDetails({_id, title, summary, cover, content, createdAt, author}) { 
  
   
   
    return ( 

        <div  className="main max-w-4xl mx-auto bg-white shadow-xl m-5"> 
        <div className="grid grid-cols-2 gap-5 mb-7">
        <div className="">
        <Link to={`/post/${_id}`}> 
        <img src={'http://localhost:4001/' +cover} alt=""/>
        </Link>
        </div>
        <div className="m-0 text-3xl p-2">
          <Link to={`/post/${_id}`}> 
          <h2>{title}</h2>
          </Link>
          <p className="info flex my-6 mx-0 text-base font-bold gap-2.5 ">
            <a className="author no-underline" href="blogpost"> By {author.username} </a>
            <time>{formatDistanceToNow(new Date(createdAt), {addSuffix: true})}</time>
          </p>
          <p className="summary my-2.5 mx-0 text-base leading-7">{summary}</p>
        </div>
      </div>
        </div>   


     );
}
 
