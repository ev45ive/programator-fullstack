import React from "react";
import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.css";
import { Switch, Route, Redirect, BrowserRouter as Router } from "react-router-dom";
import { Cart, Home, Products, WishListProducts } from "./views";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />

        <div className="container">
          <Switch>
            <Redirect exact={true} from="/" to="/home" />
            <Route path="/home" component={Home} />
            <Route path="/products" component={Products} />
            <Route path="/wishlist" component={WishListProducts} />
            <Route path="/cart" component={Cart} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
