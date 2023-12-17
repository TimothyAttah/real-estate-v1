import React from 'react';
import * as Styles from './HomeStyles';
import { MainHero } from '../hero/MainHero';

const Home = () => {
  return (
    <div>
      <Styles.HomeContainer>
        <MainHero />
      </Styles.HomeContainer>
      <div style={{ height: '100vh' }}>
        <h2>Testing</h2>
      </div>
    </div>
  );
};

export default Home;
