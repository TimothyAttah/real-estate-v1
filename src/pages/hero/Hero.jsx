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
            <h1>a better way to rent.</h1>
            <p>
              The moment you walk through the door you’ll notice a difference.
              Our thoughtful, top-notch service goes beyond the badge we wear on
              our shirts. This is our promise to our valued residents.
            </p>
          </div>
          {/* <Link>
            <Button>Find your suite</Button>
          </Link> */}
        </Styles.HeroHeader>
        <HeroSlider />
        <Styles.HeroInfoWrapper>
          <Styles.InfoBox>
            <div>
              <h2>Explore.</h2>
              <h2>Discover.</h2>
              <h2>Evolve.</h2>
            </div>
            <p>
              Realtor is a leading residential property management firm with
              communities located at premier addresses in cities across the
              nation. With Realtor, our warm and welcoming professionals strive
              to meet your needs, simplify your life and delight you in way that
              makes your everyday memorable.
            </p>
            <p>At Realtor, be exactly where you want to be all the time.</p>
          </Styles.InfoBox>
          <div>
            <Button primary>Explore the neighborhood</Button>
          </div>
        </Styles.HeroInfoWrapper>
        <div>
          <div>
            <img src={suiteImg} alt='img' />
          </div>
          <Styles.InfoBox primary>
            <h2>
              Suites Made <br /> with You in Mind.
            </h2>
            <p>
              Featuring 9’ ceilings, wide-plank laminate flooring, smooth
              ceilings, and a full-size stacked washer and dryer, eCentral
              suites were thoughtfully designed for comfortable and
              sophisticated modern living. Discover spacious studios, 1 and 2
              bedroom suites, and townhome units that fit your life.
            </p>
            <div>
              <Link to='/for-rent'>
                <Button primary padding>
                  Find your suite
                </Button>
              </Link>
            </div>
          </Styles.InfoBox>
        </div>
        <Styles.CardWrapper>
          {rentingData.map((data, i) => (
            <Card key={i} data={data} />
          ))}
        </Styles.CardWrapper>
        <Styles.InfoMessageBox>
          <h2>Send Us a Message</h2>
          <p>Realtor Listens...and we need your feedback</p>
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
        </Styles.InfoMessageBox>
      </Container>
    </Styles.HeroContainer>
  );
};
