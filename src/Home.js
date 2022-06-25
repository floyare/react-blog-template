import Navbar from './Components/Navbar';
import BlogList from './Components/BlogList';
import useFetch from './useFetch';

const Home = () => {
  const {error, isPending, data: blogs} = useFetch("http://localhost:8000/blogs");
  return (
      <div className="content">
        {error && <h2 className='error'>{error}</h2>}
        {isPending && <h2 className='loading'>Loading...</h2>}
        {blogs && <BlogList blogs={blogs} title="Recent blogs:"/>}
      </div>
  );
}
 
export default Home;