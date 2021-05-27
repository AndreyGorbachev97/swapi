import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import People from "./People";
import PeopleDetail from "./PeopleDetail";
import History from "./History";
import Header from "./Header";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/" component={People} />
          <Route path="/detail/:id" component={PeopleDetail} />
          <Route path="/history" component={History} />
          <Redirect to="/" />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App;