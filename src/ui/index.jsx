import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Alert from "./alert/index.jsx";

export default function Home() {
  return (
    <>
      <h1>Home</h1>
    </>
  );
}

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={Home} />      
      <Route path="/alert" exact={true} component={Alert} />      
      <Route path="/alert/:wallet" component={Alert} />      
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);