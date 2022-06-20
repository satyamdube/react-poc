import React from 'react';
import {twitter} from '../Icon';
import Header from '../header';
import Timer from '../componts/timer';

const Home = () => {
  return (
    <React.Fragment>
        <Header/>
        <div>Home {twitter}</div>
        <Timer/>
    </React.Fragment>
  );
}

export default Home;