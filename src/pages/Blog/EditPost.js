import { React } from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useAuthContext } from "../../hooks/useAuthContext";

const EditPost = () => {
  const history = useHistory();

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };

  const { user } = useAuthContext();
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState("");
  const [error, setError] = useState();
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    fetch("https://mern-crud-g6ul.onrender.com/api/blogs/" + id).then(
      (response) => {
        response.json().then((postInfo) => {
          setTitle(postInfo.title);
          setContent(postInfo.content);
          setSummary(postInfo.summary);
        });
      }
    );
  }, []);

  const updatePost = async (e) => {
    if (!user) {
      setError("You must be logged in");
      return;
    }

    e.preventDefault();
    const data = new FormData();
    data.set("title", title);
    data.set("summary", summary);
    data.set("content", content);
    data.set("id", id);
    if (files?.[0]) {
      data.set("file", files?.[0]);
    }

    const response = await fetch(
      "https://mern-crud-g6ul.onrender.com/api/blogs/" + id,
      {
        method: "PATCH",
        body: data,
        credentials: "include",
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );

    if (response.ok) {
      setRedirect(true);
    }
  };

  if (redirect) {
    history.push("/postpage/" + id);
  }

  return (
    <form onSubmit={updatePost} className="max-w-2xl m-40 mx-auto">
      <input
        type="title"
        placeholder={"Title"}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="block w-full my-2.5 mx-0 py-1.5 px-2.5"
      />
      <input
        type="summary"
        placeholder={"Summary"}
        value={summary}
        onChange={(e) => setSummary(e.target.value)}
        className="block w-full my-2.5 mx-0 py-1.5 px-2.5"
      />
      <input
        type="file"
        onChange={(e) => setFiles(e.target.files)}
        className="block w-full my-2.5 mx-0"
      />
      <ReactQuill
        theme={"snow"}
        onChange={setContent}
        value={content}
        modules={modules}
        style={{ height: "200px", background: "white" }}
        className="mb-8"
      />
      <div className="text-center">
        <button className=" mt-8 mx-auto bg-primary text-white p-2">
          Update post
        </button>
      </div>
    </form>
  );
};

export default EditPost;
