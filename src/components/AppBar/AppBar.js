import * as React from "react";
import logo from "./AppBar.logo.svg";
import "./AppBar.css";

class AppBar extends React.Component {
  render() {
    return (
      <header>
        <nav className="AppBar">
          <img
            className="AppBar-logo"
            src={logo}
            aria-label="people"
            alt="People"
          />
        </nav>
      </header>
    );
  }
}
export default AppBar;
