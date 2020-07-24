import React from 'react';
import logo from '../../logo.svg';
import { NavLink } from 'react-router-dom';

console.log('Logo componentd loaded');

const Logo = () => {
    return (<>
<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
    </>);

}
export default Logo