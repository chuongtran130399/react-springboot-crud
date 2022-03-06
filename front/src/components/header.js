import React from "react";
import { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  state = {};
  render() {
    return(
        <div>
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div>
                        <h3 className="text text-white"> Employee Management Application</h3>
                    </div>
                </nav>
            </header>
        </div>
    )
  }
}

export default Header;
