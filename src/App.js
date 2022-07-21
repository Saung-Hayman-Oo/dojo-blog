import React  from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Create from "./Create";
import BlogDetails from "./BlogDetails";
import NotFound from "./NotFound";

function App() {
  

  return (
    <Router>
      <div className="App">
      <Navbar />
      <div className='content'>
        {/* {user && 
          <Home userName = {user.name} email={user.email} phoneNumber={user.phNo} />
        }

        {!user && <Home />}

        {user && <Home /> || <Navbar />}

        {user ? <Home /> : <Navbar /> } */}

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/blogs/:id">
            <BlogDetails />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
