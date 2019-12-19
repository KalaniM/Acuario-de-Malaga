import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import { Logo } from "../img/index.js";

class Nav extends PureComponent {

  render() {
    return ( <nav className="Nav">
      <Link to="/">
        <img alt="logo" src={Logo}/>
      </Link>

      <div class="menu">
        <h2>
          Le musée
        </h2>

        <hr/>

        <h2>Les expositions</h2>
        <hr/>

        <h2>Le restaurant</h2>
        <hr/>

        <h2>Le blog</h2>
        <hr/>
      </div>

    </nav> )
  }
};

export default Nav;
