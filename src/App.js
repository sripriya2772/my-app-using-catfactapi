import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Header from "./Header";
import ListView from "./ListView";
import ListDetail from "./ListDetail";

const App = () => {
  return (
      <Router>
        <div>
          <Header />
          <div className="wrapper">
            <Switch>
              <Route path="/listdetail" component={ListDetail} />
              <Route exact path={"/"} component={ListView} />
              <Route path={"/listdetail/:id"} component={ListDetail} />
            </Switch>
          </div>
        </div>
      </Router>
  );
}

export default App;
