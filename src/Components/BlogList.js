import { Link } from 'react-router-dom';
const BlogList = ({blogs, title}) => {
  console.log(blogs);
  return (
      <div className="blogs">
        <h1>{title}</h1>
        {blogs && blogs.map(blog => {
          return (<div className="blog-preview" key={blog.id}>
            <Link to={`/blogs/${blog.id}`}>
              <h2>{blog.title}</h2>
              <p>Author: {blog.author}</p>
            </Link>
          </div>);
        })}
       {blogs.length === 0 && <h2 className='not-found'>Not found any blogs :(</h2>}
      </div> 
  );
}
 
export default BlogList;