import React, { useEffect, useState } from 'react';

//string 넣어도 되지만 주로 object가 들어감
//AuthContext is an object that will contain a component
const AuthContext = React.createContext({
    // 초기값은 일단 false.
    isLoggedIn: false,
    onLogout: () => { },
    onLogin: () => { },
});

export const AuthContextProvider = (props: { children: React.ReactNode; }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const storedUserLoggedInInfo = localStorage.getItem('isLoggedIn');
        if (storedUserLoggedInInfo === '1') {
            setIsLoggedIn(true);
        }
    }, []);

    const loginHandler = () => {
        localStorage.setItem('isLoggedIn', '1');
        setIsLoggedIn(true);
    };

    const logoutHandler = () => {
        localStorage.removeItem('isLoggedIn');
        setIsLoggedIn(false);
    };
    return (
        <AuthContext.Provider
            value={{
                isLoggedIn: isLoggedIn,
                onLogout: logoutHandler,
                onLogin: loginHandler,
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthContext;