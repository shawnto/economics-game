import React from 'react'
import {
    Route,
    Redirect
} from 'react-router-dom'


export default function PrivateRouter({children, ...rest}){
    // This is a dense function. "...rest" is assigned any argument that is not children.
    // A routes render property can be passed a function to tell it what to render.
    // putting "...rest" as a propety lets us pass properties to Route, or redirect
    // to the login page if the user isn't yet authorized. See react-router docs for more info.

    return (
            <Route {...rest} render={({location}) => {
                return rest.isAuth ? children : (
                        <Redirect to={{pathname: "/login", state: {from: location}}} />
                )
            }} />
    );
}
