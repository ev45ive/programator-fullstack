import React from "react";
import Categories from "../categories/index";
import Electronics from "../categories/Electronics/index";
import Clothes from "../categories/Clothes/index";
import Home from "../categories/Home/index";
import Garden from "../categories/Garden/index";
import Store from "../categories/Store/index";
import Child from "../categories/Child/index";
import Beauty from "../categories/Beauty/index";
import Healthy from "../categories/Healthy/index";
import Sport from "../categories/Sport/index";
import Books from "../categories/Books/index";
import Automotive from "../categories/Automotive/index";
import Adds from "../categories/Adds/index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Products from "../products/index";

const HomePage = () => {
  return (
    <>
      <Router>
        <Categories />
        <Switch>
          <Route exactly path="/electronics" component={Electronics} />
          <Route exactly path="/clothes" component={Clothes} />
          <Route exactly path="/homes" component={Home} />
          <Route exactly path="/garden" component={Garden} />
          <Route exactly path="/store" component={Store} />
          <Route exactly path="/childStore" component={Child} />
          <Route exactly path="/beauty" component={Beauty} />
          <Route exactly path="/healthy" component={Healthy} />
          <Route exactly path="/books" component={Books} />
          <Route exactly path="/sport" component={Sport} />
          <Route exactly path="/automotive" component={Automotive} />
          <Route exactly path="/adds" component={Adds} />
          <Products />
        </Switch>
      </Router>
    </>
  );
};

export default HomePage;
