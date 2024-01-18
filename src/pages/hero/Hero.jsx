import React from 'react';
import { Container } from '../../styles/globalStyles';
import { FadeIn } from '../../components/fadeIn/FadeIn';
import * as Styles from './HeroStyles';
import { HeroSlider } from '../../components/slider/heroSlider/HeroSlider';
import { Link } from 'react-router-dom';
import { Button } from '../../components/button/Button';

export const Hero = () => {
  return (
    <Styles.HeroContainer>
      <Container>
        <div>
          <h1>Realtor</h1>
          <p>Life is better here</p>
          <Button>
            <Link to='/'>Find your suite</Link>
          </Button>
        </div>
        <HeroSlider />
        <div></div>
      </Container>
    </Styles.HeroContainer>
  );
};
