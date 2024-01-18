import React from 'react';
import { Container } from '../../styles/globalStyles';
import { FadeIn } from '../../components/fadeIn/FadeIn';
import * as Styles from './HeroStyles';
import { HeroSlider } from '../../components/slider/heroSlider/HeroSlider';
import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <Styles.HeroContainer>
      <Container>
        <div>
          <h1>Realtor</h1>
          <p>Life is better here</p>
          <button>
            <Link to='/'>Find your suite</Link>
          </button>
        </div>
        <HeroSlider />
        <div></div>
      </Container>
    </Styles.HeroContainer>
  );
};
