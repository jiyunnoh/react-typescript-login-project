import Navigation from './Navigation';
import classes from './MainHeader.module.css';
import React from 'react';

const MainHeader = (props: { onLogout: any; }) => {
  return (
    <header className={classes['main-header']}>
      <h1>A Typical Page</h1>
      <Navigation onLogout={props.onLogout} />
    </header>
  );
};

export default MainHeader;
