import React from 'react';
import { Link } from 'react-router-dom';
import {UserContext} from '../contexts/UserContext';


class NavBar extends React.Component {
    static contextType = UserContext;
    render() {
        let userContext = this.context;
        return (
              <nav className="navbar is-dark" roles="navigation">
                <div id="navbarRoot" className="navbar-menu">
                  <div className="navbar-start">
                    <Link to="/" className="navbar-item"> Home </Link>
                  </div>
                  <div className="navbar-end">
                    <Link to="/user-settings" className="navbar-item"> Settings </Link>
                    <div className="navbar-item">
                      { userContext.userName }
                    </div>
                  </div>
                </div>
              </nav>
        )
    }
}

export default NavBar
