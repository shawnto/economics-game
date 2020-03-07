import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'
import LoginPage from './components/LoginPage'
import UserSettings from './components/UserSettings'
import HomePage from './components/HomePage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {UserContext} from './contexts/UserContext';
import PrivateRoute from './components/util_wrappers/PrivateRoute'

class App extends React.Component {
    constructor(props){
        super(props);

        // This will be replaced with an actual login
        this.setAuth = () => {
            this.setState((state) => ({
                // flip current auth value. simple way to fake logging in and out
                isAuth: (state.isAuth ? false : true),
                userName: (state.userName.length > 0 ? '' : 'user name'),
                isGm: true
            }));
        };
        // default state for user context.
        this.state = { isAuth: false, userName: '', setAuth: this.setAuth, isGm: false};
    }
    render(){
        return (
            <div className="App">
                <Router>
                    <UserContext.Provider value={this.state}>
                        <NavBar />
                    </UserContext.Provider>
                    <Switch>
                        <Route path="/login">
                            <UserContext.Provider value={this.state}>
                                <LoginPage />
                            </UserContext.Provider>
                        </Route>
                        <PrivateRoute path="/user-settings" isAuth={this.state.isAuth}>
                            <UserSettings />
                        </PrivateRoute>
                        <PrivateRoute Path="/" isAuth={this.state.isAuth}>
                            <UserContext.Provider value={this.state}>
                                <HomePage />
                            </UserContext.Provider>
                        </PrivateRoute>
                    </Switch>
                </Router>

            </div>
        );
    }
}

export default App;
