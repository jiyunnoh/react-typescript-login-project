import React from 'react';
import AuthContext from '../../store/auth-context';
import classes from './Navigation.module.css';

const Navigation = (props: { onLogout: React.MouseEventHandler<HTMLButtonElement> | undefined; }) => {
  return (
    /* function child를 가진다. */
    /* argument로 context data를 받아온다. 이 경우 isLoggedIn */
    <AuthContext.Consumer>
      {(ctx) => {
        return (
          <nav className={classes.nav}>
            <ul>
              {ctx.isLoggedIn && (
                <li>
                  <a href="/">Users</a>
                </li>
              )}
              {ctx.isLoggedIn && (
                <li>
                  <a href="/">Admin</a>
                </li>
              )}
              {ctx.isLoggedIn && (
                <li>
                  <button onClick={props.onLogout}>Logout</button>
                </li>
              )}
            </ul>
          </nav>
        );

      }}
    </AuthContext.Consumer>
  );
};

export default Navigation;
