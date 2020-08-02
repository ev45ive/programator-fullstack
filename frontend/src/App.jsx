import React from "react";
import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.css";
import { Switch, Route, Redirect, BrowserRouter as Router } from "react-router-dom";
import { Cart, Home, Products, WishListProducts } from "./views";
import { NavBar } from "./components/NavBar";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCartPlus, faImage, faEdit, faTag, faGavel, faPlus, faShoppingBasket, faEnvelope, faKey, faUser, faUserCircle, faSearch, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { Posts } from "./views/PostsView";
import { AddPostView } from "./views/AddPostView";

library.add(faCartPlus, faImage, faEdit, faTag, faGavel, faPlus, faShoppingBasket, faSignInAlt, faEnvelope, faKey, faUser, faUserCircle, faSearch);

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
            <Route path="/posts" exact={true} component={Posts} />
            <Route path="/posts/init" component={AddPostView} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
