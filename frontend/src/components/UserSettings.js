import React from 'react'


class UserSettings extends React.Component {
    // Doing class here because we'll probably have to do several
    // things with methods and state
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return (
                <div className="container">
                <h1> User Settings </h1>
                </div>
        );
    }
}

export default UserSettings
