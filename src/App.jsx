import React from 'react';
import {  Route,  BrowserRouter as Router, Link } from "react-router-dom";
import BookStore from './components/BookStore';





const App = () => {
  return (

    <>
    <Router>
    <div className="container margin-top">
        <div className="row">
          <div className="col-sm-12 text-center background-div">
            <Link to="/">
              <h1>Hexa Book Library</h1>
            </Link>
          </div>
  
        </div>
        <hr />
        <div className="container">
          <Route path="/" exact component={BookStore} />
       
        </div>
      </div>
 </Router>
       
      
  </>);
};

export default App;