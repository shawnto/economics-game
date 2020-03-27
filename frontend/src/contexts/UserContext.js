import React from 'react';


export const user = {
    isAuth: false,
    userName: '',
    setAuth: () => {}
}


export const UserContext = React.createContext(user);
