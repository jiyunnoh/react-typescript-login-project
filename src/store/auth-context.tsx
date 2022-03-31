import React from 'react';

//string 넣어도 되지만 주로 object가 들어감
//AuthContext is an object that will contain a component
const AuthContext = React.createContext({
    // 초기값은 일단 false.
    isLoggedIn: false,
    onLogout: () => {},
});

export default AuthContext;