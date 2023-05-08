import React from "react";
import { useState } from "react";
import {useHistory} from "react-router-dom";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';


const Create = () => {
  
   const history = useHistory();
    
    const modules = {
        toolbar: [
          [{ header: [1, 2, false] }],
          ['bold', 'italic', 'underline', 'strike', 'blockquote'],
          [
            { list: 'ordered' },
            { list: 'bullet' },
            { indent: '-1' },
            { indent: '+1' },
          ],
          ['link', 'image'],
          ['clean'],
        ],
      };
    
    
    const [title,setTitle] = useState('');
    const [summary,setSummary] = useState('');
    const [content,setContent] = useState('');
    const [files, setFiles] = useState('');
    const [redirect, setRedirect] = useState(false);
    async function createNewPost(ev) {
      const data = new FormData();
      data.set('title', title);
      data.set('summary', summary);
      data.set('content', content);
      data.set('file', files[0]);
      ev.preventDefault();
      const response = await fetch('https://mern-crud-ued0.onrender.com/post', {
        method: 'POST',
        body: data,
        credentials: 'include',
      });
      console.log(await response.json());
      if (response.ok) {
        setRedirect(true);
      }
    }

    if (redirect) {
      history.push('/blogs')
    }

    return ( 
     
        <form onSubmit={createNewPost}
        className="max-w-2xl m-40 mx-auto "
        >
        <input type="title"
               placeholder={'Title'}
               value={title}
               onChange={ev => setTitle(ev.target.value)} 
               className="block w-full my-2.5 mx-0 py-1.5 px-2.5"/>
        <input type="summary"
               placeholder={'Summary'}
               value={summary}
               onChange={ev => setSummary(ev.target.value)} 
               className="block w-full my-2.5 mx-0 py-1.5 px-2.5"
                />
        <input type="file"
               onChange={ev => setFiles(ev.target.files)} 
               className="block w-full my-2.5 mx-0"
               />
         <ReactQuill
         theme={'snow'}
      onChange={newValue => {setContent(newValue)}} 
      modules={modules} 
      style={{height:'200px', background:'white' }} 
    className="mb-8" />
       <div className="text-center">  
        <button className=" mt-8 mx-auto bg-primary text-white p-2">Create post</button>
        </div> 
      </form>

     );
}
 
export default Create;