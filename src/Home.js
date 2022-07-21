import { useState,useEffect, useCallback } from "react";
import BlogList from "./BlogList";

import axios from  'axios'
import useFetch from "./useFetch";
const Home = () => {
    const { data : blogs,isPending,error } = useFetch('http://localhost:8000/blogs');
    const [ blog,setBlog ] = useState(blogs);  

    
    // const [loading, setloading] = useState(false)
   
    // const [err, setErr] = useState(null)
    
    // Axios Example
    // const getBlogsData = useCallback(
    //     () => {
    //         setloading(true)
    //         axios.get("http://localhost:8000/blogs").then(res=>{
                
    //             console.log(res.data,"blogdata")
    //             setBlogs(res.data)
    //         })
    //         .catch(err=>{
    //             setErr(err)
    //             console.log(err)
    //         }).finally(()=>{
    //             setloading(false)
    //         })
    //     },
    //     [],
    // )

    // useEffect(() => {
    //    getBlogsData()
    // }, [getBlogsData])

    // const handleAdd = () =>{
    //     let id=blogs.length+1;
    //     setBlogs([
    //         ...blogs,{title:"Mario",body:"lorem ...",author:"SSS",id}
    //     ])
    // }
    
    // const handleDelete = (id) =>{
    //     let newBlogs = blog.filter(blog => blog.id !== id);
    //     setBlog(newBlogs);
    // }
   
    
    return ( 
        <div className="home">
            {  error && <div>{JSON.stringify(error)}</div> }
            { isPending && <div>loading ....</div> }
            { blogs && <BlogList blogs={blogs} title={"All Blog!"}/>}
            {/* <BlogList blogs={blogs.filter(blog => blog.author === 'Mario')} title={"Mario Blog!"} handleDelete={handleDelete}/>
            <button onClick={handleAdd}>Add</button>
            <button onClick={() => setName('luigi')}>change name</button>
            <p>{name}</p> */}
        </div>
     );
}
 
export default Home;