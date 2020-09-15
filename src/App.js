import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navigation from "./components/Navigation/Navigation";
import Home from "./Routes/Home/Home";
import Gallery from "./Routes/Gallery/Gallery";

import "./App.css";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navigation />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/gallery" component={Gallery} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
