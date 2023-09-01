import { Link } from "react-router-dom";
// date fns
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { useBlogsContext } from "../../hooks/useBlogsContext";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useState } from "react";

const PostDetails = ({ blog }) => {
  const { dispatch } = useBlogsContext();
  const { user } = useAuthContext();
  const [error, setError] = useState();

  console.log(blog);

  const handleClick = async (e) => {
    if (!user) {
      setError("You must be logged in");
      return;
    }

    e.preventDefault();
    const response = await fetch(
      "https://mern-crud-g6ul.onrender.com/api/blogs/" + blog._id,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_BLOG", payload: json });
    }
  };

  return (
    <div className="main max-w-4xl  mx-auto bg-white shadow-xl m-5">
      <div className="grid lg:grid-cols-2 gap-5 mb-7 sm:grid-cols-1">
        <div className="">
          <Link to={`/postpage/${blog._id}`}>
            <img
              src={"https://mern-crud-g6ul.onrender.com/" + blog.cover}
              alt=""
            />
          </Link>
        </div>
        <div className="m-0 text-3xl p-2">
          <Link to={`/postpage/${blog._id}`}>
            <h2>{blog.title}</h2>
          </Link>
          <p className="info flex my-6 mx-0 text-base font-bold gap-2.5 ">
            <a className="author no-underline" href="blogpost">
              {" "}
              By {blog.author.username}{" "}
            </a>
            <time>
              {formatDistanceToNow(new Date(blog.createdAt), {
                addSuffix: true,
              })}
            </time>
          </p>
          <p className="summary my-2.5 mx-0 text-base leading-7">
            {blog.summary}
          </p>
          <span
            onClick={handleClick}
            className="edit-btn text-black cursor-pointer p-2 rounded-lg top-0 right-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
