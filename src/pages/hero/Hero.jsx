import React from 'react';
import { Container } from '../../styles/globalStyles';
import { FadeIn } from '../../components/fadeIn/FadeIn';
import * as Styles from './HeroStyles';
import { HeroSlider } from '../../components/slider/heroSlider/HeroSlider';
import { Link } from 'react-router-dom';
import { Button } from '../../components/button/Button';
import suiteImg from '../../assets/02.jpg';
import { Card } from '../../components/card/Card';
import { rentingData } from '../../components/data';

export const Hero = () => {
  return (
    <Styles.HeroContainer>
      <Container>
        <Styles.HeroHeader>
          <div>
            <FadeIn delay={0.3} direction='down'>
              <h1>a better way to rent.</h1>
            </FadeIn>
            <FadeIn delay={0.4} direction='down'>
              <p>
                The moment you walk through the door you’ll notice a difference.
                Our thoughtful, top-notch service goes beyond the badge we wear
                on our shirts. This is our promise to our valued residents.
              </p>
            </FadeIn>
          </div>
        </Styles.HeroHeader>
        <FadeIn delay={0.5} direction='down'>
          <HeroSlider />
        </FadeIn>
        <Styles.HeroInfoWrapper>
          <Styles.InfoBox>
            <div>
              <FadeIn delay={0.3} direction='right'>
                <h2>Explore.</h2>
              </FadeIn>
              <FadeIn delay={0.4} direction='right'>
                <h2>Discover.</h2>
              </FadeIn>
              <FadeIn delay={0.5} direction='right'>
                <h2>Evolve.</h2>
              </FadeIn>
            </div>
            <FadeIn delay={0.6} direction='right'>
              <p>
                Realtor is a leading residential property management firm with
                communities located at premier addresses in cities across the
                nation. With Realtor, our warm and welcoming professionals
                strive to meet your needs, simplify your life and delight you in
                way that makes your everyday memorable.
              </p>
            </FadeIn>
            <FadeIn delay={0.6} direction='right'>
              <p>At Realtor, be exactly where you want to be all the time.</p>
            </FadeIn>
          </Styles.InfoBox>
          <FadeIn delay={0.6} direction='left'>
            <div>
              <Button primary>Explore the neighborhood</Button>
            </div>
          </FadeIn>
        </Styles.HeroInfoWrapper>
        <div>
          <div>
            <FadeIn delay={0.7} direction='down'>
              <img src={suiteImg} alt='img' />
            </FadeIn>
          </div>
          <Styles.InfoBox primary>
            <FadeIn delay={0.7} direction='down'>
              <h2>
                Suites Made <br /> with You in Mind.
              </h2>
            </FadeIn>
            <FadeIn delay={0.8} direction='down'>
              <p>
                Featuring 9’ ceilings, wide-plank laminate flooring, smooth
                ceilings, and a full-size stacked washer and dryer, eCentral
                suites were thoughtfully designed for comfortable and
                sophisticated modern living. Discover spacious studios, 1 and 2
                bedroom suites, and townhome units that fit your life.
              </p>
            </FadeIn>
            <FadeIn delay={0.9} direction='down'>
              <div>
                <Link to='/for-rent'>
                  <Button primary padding>
                    Find your suite
                  </Button>
                </Link>
              </div>
            </FadeIn>
          </Styles.InfoBox>
        </div>
        <Styles.CardWrapper>
          {rentingData.map((data, i) => (
            <FadeIn delay={i * 0.2} direction='right'>
              <Card key={i} data={data} />
            </FadeIn>
          ))}
        </Styles.CardWrapper>
        <Styles.InfoMessageBox>
          <FadeIn delay={0.4} direction='down'>
            <h2>Send Us a Message</h2>
          </FadeIn>
          <FadeIn center='true' delay={0.5} direction='down'>
            <p>Realtor Listens...and we need your feedback</p>
          </FadeIn>
          <FadeIn delay={0.6} direction='down'>
            <form>
              <div>
                <label htmlFor='email'>Email</label>
                <input
                  type='email'
                  name='email'
                  id=''
                  placeholder='Enter your email'
                />
              </div>
              <div>
                <label htmlFor='message'>Message</label>
                <textarea
                  type='text'
                  name='message'
                  id=''
                  placeholder='Enter your message'
                />
              </div>
              <Button>Send Message</Button>
            </form>
          </FadeIn>
        </Styles.InfoMessageBox>
      </Container>
    </Styles.HeroContainer>
  );
};
