import Navbar from './Components/Navbar';
import BlogList from './Components/BlogList';
import Home from './Home.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './Components/BlogDetails';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/create">
            <Create></Create>
          </Route>
          <Route path="/blogs/:id">
            <BlogDetails></BlogDetails>
          </Route>
          <Route path="*">
              <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


export default App;
