import React from 'react';
import { Container } from '../../styles/globalStyles';
import { FadeIn } from '../../components/fadeIn/FadeIn';
import * as Styles from './AboutStyles';
import aboutImg from '../../assets/02.jpg';
import aboutImg1 from '../../assets/slider2.jpg';
import aboutImg2 from '../../assets/slider4.jpg';

import { RiNumber1, RiNumber2, RiNumber3, RiNumber4 } from 'react-icons/ri';

export const About = () => {
  return (
    <Styles.AboutSection>
      <Container>
        <Styles.SectionTitle>
          <Styles.Title>about us</Styles.Title>
          <Styles.SubTitle>
            living is not just about where you live, but how you live.
          </Styles.SubTitle>
        </Styles.SectionTitle>
        <div>
          <img src={aboutImg} alt='img' />
        </div>
        <Styles.Info>
          <h1>a better way to rent.</h1>
        </Styles.Info>
        <Styles.InfoContainer>
          <Styles.InfoImg>
            <img src={aboutImg1} alt='img' />
          </Styles.InfoImg>
          <Styles.Info>
            <p>
              Realtor is a leading residential property management firm with
              communities located at premier addresses in cities across Canada.
              With Realtor, our warm and welcoming professionals strive to meet
              your needs, simplify your life and delight you in way that makes
              your everyday memorable. The moment you walk through the door
              you’ll notice a difference. Our thoughtful, top-notch service goes
              beyond the badge we wear on our shirts. This is our promise to our
              valued residents.
            </p>
            <p>
              At Realtor Living, we believe building better places to live takes
              more than bricks and mortar. It means looking at communities and
              seeing the full picture; what they are, what they could be, and
              what they need to get there. We make these visions a reality –
              adding to the story and legacy of each community we engage with.
              For us, living is not just about where you live, but how you live.
              A central location with easy access to commuter routes is
              essential, but so too is access to friendship and community; to
              convenient retail and entertainment amenities; to green spaces and
              pedestrian-friendly streetscapes; all of the things that link
              people with a place and shape their sense of belonging. As
              builders, designers, property owners, landlords and community
              stewards we’re creating prosperous communities where residents,
              retailers and service providers support one another to build
              richer and more rewarding lives. To us, that’s what living is all
              about.
            </p>
          </Styles.Info>
        </Styles.InfoContainer>
        <Styles.InfoContainer primary>
          <Styles.InfoImg>
            <img src={aboutImg2} alt='' />
          </Styles.InfoImg>
          <Styles.Info>
            <h1>Life is Better Here.</h1>
            <p>
              Renting your home can be a stress-free alternative to owning with
              a wide range of advantages. Along with increased accessibility,
              white-glove service and a built-in community where you can get to
              know your neighbours.
            </p>
          </Styles.Info>
        </Styles.InfoContainer>
        <div>
          <Styles.Info primary>
            <h1>
              At a Realtor living rental community, you also benefit from:
            </h1>
          </Styles.Info>
          <Styles.AboutListContainer>
            <div>
              <RiNumber1 />
            </div>
            <div>
              <h1>Using Technology to Simplify Your Life</h1>
              <p>
                From booking amenities and submitting maintenance requests
                through our resident app, to contactless package delivery to our
                smart lockers, we are always finding new and innovative ways to
                make your life easier.
              </p>
            </div>
          </Styles.AboutListContainer>
          <Styles.AboutListContainer>
            <div>
              <RiNumber2 />
            </div>
            <div>
              <h1>Stay as Long as You Want</h1>
              <p>
                At Realtor Living’s rental communities, you will benefit from
                security of tenure. Your suite will never be sold, so you will
                never be forced to move out.
              </p>
            </div>
          </Styles.AboutListContainer>
          <Styles.AboutListContainer>
            <div>
              <RiNumber3 />
            </div>
            <div>
              <h1>Mix and Mingle</h1>
              <p>
                Our property team works with local brands and businesses to host
                resident events on a regular basis, so you can actually get to
                know your neighbors.
              </p>
            </div>
          </Styles.AboutListContainer>
          <Styles.AboutListContainer>
            <div>
              <RiNumber4 />
            </div>
            <div>
              <h1>Your Needs Are Our Priority</h1>
              <p>
                Managed by Rhapsody, the professional property team at eCentral
                is on-site full-time, providing hotel-level, white glove service
                quickly and professionally.
              </p>
            </div>
          </Styles.AboutListContainer>
        </div>
      </Container>
    </Styles.AboutSection>
  );
};
