import React from 'react';
import heroVic from './heroVic2.mp4';
import * as Styles from './MainHeroStyles';
import Typewriter from 'typewriter-effect';

export const MainHero = () => {
  return (
    <Styles.HeroContainer>
      <Styles.HeroWrapper>
        <Styles.HeroInfoWrapper>
          <>
            <h1>
              Realtor is a place where we offer our clients with property
              listings for
            </h1>
            <div>
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 40,
                  strings: ['Rent', 'Buy', 'Sell'],
                }}
              />
            </div>
          </>
        </Styles.HeroInfoWrapper>
        <Styles.VideoWrapper>
          <video src={heroVic} autoPlay muted loop></video>
        </Styles.VideoWrapper>
      </Styles.HeroWrapper>
    </Styles.HeroContainer>
  );
};
