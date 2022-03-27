import React from 'react';
import Card from '../UI/Card/Card';
import classes from './Home.module.css';

const Home = (props: any) => {
  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      {props.onLogout}
    </Card>
  );
};

export default Home;
