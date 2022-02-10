import React from 'react';
import {twitter} from '../Icon';
import Header from '../header';

const Home = () => {
  return (
    <React.Fragment>
        <Header/>
        <div>Home {twitter}</div>
    </React.Fragment>
  );
}

export default Home;