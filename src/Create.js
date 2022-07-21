import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title,setTitle ] = useState('hello');
    const [body,setBody ] = useState('loream ...');
    const [author,setAuthor ] = useState('mario');
    const [isPending,setIsPending] = useState(false);
    const history = useHistory();


    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title,body,author };
        setIsPending(true);
        fetch('http://localhost:8000/blogs' ,{
            method : 'POST',
            headers : {"Content-Type":"application/json"},
            body  : JSON.stringify(blog) 
        })
        .then(() => {
            console.log("new blog added");
            setIsPending(false);
            history.push('/');
        })
    }
    return ( 
        <div className="create">
            <h2>A New Blogs!</h2>
            <form onSubmit={ handleSubmit }>
                <label>Blog Title :</label>
                <input type="text" 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required></input>

                <label>Blog Body :</label>
                <textarea  
                value={body}
                onChange={(e) => setBody(e.target.value)}
                required></textarea>

                <label>Blog Author :</label>
                <select  
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="Mario">Mario</option>
                    <option value="lugi">Lugi</option>
                </select>
                { !isPending && <button>Add Blog</button>}
                { isPending && <button>Adding Blog...</button>}
            </form>
            <div>
                <h2>{title}</h2>
                <p>written by {author}</p>
                <p>{body}</p>
            </div>
        </div>
     );
}
 
export default Create;