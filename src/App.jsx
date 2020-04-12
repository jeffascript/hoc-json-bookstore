import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import BookStore from "./components/BookStore";
import Home from "./components/Home";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <>
      <Router>
        <NavBar />
        <div className="container">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/library" exact component={BookStore} />
          </Switch>
        </div>
      </Router>
    </>
  );
};

export default App;
