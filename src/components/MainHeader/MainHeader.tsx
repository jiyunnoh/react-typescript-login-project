import Navigation from './Navigation';
import classes from './MainHeader.module.css';
import React from 'react';

const MainHeader = (props: { isAuthenticated: any; onLogout: any; }) => {
  return (
    <header className={classes['main-header']}>
      <h1>A Typical Page</h1>
      <Navigation isLoggedIn={props.isAuthenticated} onLogout={props.onLogout} />
    </header>
  );
};

export default MainHeader;
