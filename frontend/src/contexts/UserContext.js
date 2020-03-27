import React from 'react';


export const user = {
    isAuth: false,
    userName: '',
    setAuth: () => {},
    isGm: false
}


export const UserContext = React.createContext(user);
