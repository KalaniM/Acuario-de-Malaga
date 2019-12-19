import React, { PureComponent } from "react";
import Nav from "./nav";

class Header extends PureComponent {
  render() {
    return (
      <header className="App-header">
        <Nav />
      </header>
    );
  }
}

export default Header;
