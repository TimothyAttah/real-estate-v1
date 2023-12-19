import React from 'react';
import * as Styles from './HomeStyles';
import { MainHero } from '../hero/MainHero';
import { Rent } from './modules/rent/Rent';
import { Sell } from './modules/sell/Sell';

const Home = () => {
  return (
    <div>
      <Styles.HomeContainer>
        <MainHero />
      </Styles.HomeContainer>
      <div style={{ height: '100vh' }}>
        <Rent />
        <Sell />
      </div>
    </div>
  );
};

export default Home;
