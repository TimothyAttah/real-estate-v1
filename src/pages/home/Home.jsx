import React from 'react';
import * as Styles from './HomeStyles';

const Home = () => {
  return (
    <div>
      <Styles.HomeContainer>
        <h1>Hello World!!!</h1>
      </Styles.HomeContainer>
      <div style={{ height: '100vh' }}>
        <h2>Testing</h2>
      </div>
    </div>
  );
};

export default Home;
