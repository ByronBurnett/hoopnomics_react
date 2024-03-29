import { React } from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// date fns
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";

const PostPage = () => {
  const { id } = useParams();
  const [postInfo, setPostInfo] = useState(null);
  const { user } = useAuthContext();
  const [error, setError] = useState();

  useEffect(() => {
    if (!user) {
      setError("You must be logged in");
      return;
    }

    console.log(id);

    fetch(`https://mern-crud-g6ul.onrender.com/api/blogs/${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    }).then((response) => {
      response.json().then((postInfo) => {
        setPostInfo(postInfo);
      });
    });
  }, []);
  console.log(postInfo);

  if (!postInfo) return "";

  return (
    <div className="max-w-4xl mx-auto">
      <div className="">
        <h1 className="text-3xl font-bold m-5 text-center ">
          {postInfo.title}
        </h1>
        <div className="text-center">
          <time className="font-black">
            {formatDistanceToNow(new Date(postInfo.createdAt), {
              addSuffix: true,
            })}
          </time>
        </div>
        <div className="text-center font-black">
          {" "}
          by @{postInfo.author.username}
        </div>

        <div className="edit-row text-center m-4">
          <Link
            className="edit-btn bg-primary text-white p-4 rounded-lg gap-1 inline-flex "
            to={`/edit/${postInfo._id}`}
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
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
              />
            </svg>
            Edit this post
          </Link>
        </div>

        <img
          src={`https://mern-crud-g6ul.onrender.com/${postInfo.cover}`}
          alt=""
          className="object-contain m-5"
        />

        <div
          dangerouslySetInnerHTML={{ __html: postInfo.content }}
          className="p-2 m-5 font-black"
        />
      </div>
    </div>
  );
};

export default PostPage;
