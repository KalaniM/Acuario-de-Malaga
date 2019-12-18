import React, { PureComponent } from 'react';
import { Logo } from "../img/index.js"

class Nav extends PureComponent {

    render() {
        return ( <nav className="Nav">
            <img alt="logo" src={Logo}/>
            <h2>Le musée</h2>
            <h2>Les expositions</h2>
            <h2>Le restaurant</h2>
            <h2>Le blog</h2>
        </nav> )
    }
};

export default Nav;
