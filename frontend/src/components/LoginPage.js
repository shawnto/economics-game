import React from 'react';
import {UserContext} from '../contexts/UserContext';
import {withRouter} from 'react-router';


class LoginPageUnwrapped extends React.Component {
    static contextType = UserContext
    handleLogin = () => {
        let userContext = this.context;
        userContext.setAuth();
        let { from } = this.props.location.state || { from: {path: "/"}};
        this.props.history.replace(from);
    }
    render() {
        return (
                <div className="container has-text-centered">
                <h2> Login Page </h2>
                <div className="container">
                <button className="button is-outlined is-info" onClick={this.handleLogin}>
                Log in </button>
                </div>
                </div>
        )
    }
}

// Have to use withRouter on base class to access react-router's history objects
const LoginPage = withRouter(LoginPageUnwrapped);
export default LoginPage;
