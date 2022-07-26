import { Link } from "react-router-dom";

// const BlogList = ({ blogs,title,handleDelete }) => {
    const BlogList = ({ blogs,title}) => {
    // const blogs=props.blogs;
    // const title=props.title;
    console.log(blogs,"blog")
    return ( 
        
        <div className="blog-list">
            <h2>{title}</h2>
            {
                    blogs.map( (blog) => {
                        return <div className="blog-preview" key={blog.id}>
                            <Link to={`/blogs/${blog.id}`}>
                                <h2>{blog.title}</h2>
                                <p>written by {blog.author}</p>
                            </Link>
                            {/* <button onClick={() => handleDelete(blog.id)}>Delete Blog</button> */}

                        </div>
                    })
            }
        </div>
     );
}
 
export default BlogList;