import React from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCartPlus, faImage, faEdit, faTag, faGavel, faPlus, faShoppingBasket, faEnvelope, faKey, faUser, faUserCircle, faSearch, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import logo from './logo.svg';
import './App.css';
import { PostsView } from "./views/PostsView";
import { AddPostView } from "./views/AddPostView";

library.add(faCartPlus, faImage, faEdit, faTag, faGavel, faPlus, faShoppingBasket, faSignInAlt, faEnvelope, faKey, faUser, faUserCircle, faSearch);

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route path="/" exact component={...} />
        <Route path="/api" component={...} /> */}
        <Route path="/api/posts" exact = {true} component={PostsView} />
        <Route path="/api/posts/init" component={AddPostView} />

        <Route path="**" render={() => <h1>404 Page not found </h1>} />
      </Switch>
    </BrowserRouter>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
