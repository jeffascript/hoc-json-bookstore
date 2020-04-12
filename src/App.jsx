import React from 'react';
import { Link } from "react-router-dom";



const App = () => {
  return (
    <div className="container margin-top">
        <div className="row">
          <div className="col-sm-12 text-center background-div">
            <Link to="/">
              <h1>Hexad Library</h1>
            </Link>
          </div>
  
        </div>
        <hr />
        <div className="container">

        </div>
      </div>
  );
};

export default App;