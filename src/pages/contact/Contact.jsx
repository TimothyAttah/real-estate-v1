import React from 'react';
import { Container, GridContainer } from '../../styles/globalStyles';
import * as Styles from './ContactStyles';
// import { Link } from 'react-router-dom';

// import Button from '../../components/button/Button';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { Button } from '../../components/button/Button';

export const Contact = () => {
  return (
    <Styles.ContactSection>
      <Container>
        <Styles.SectionTitle>
          <Styles.Title>contact</Styles.Title>
          <Styles.SubTitle>have any question ?</Styles.SubTitle>
          {/* <p>NICA NIGERIA Listens...and we need your feedback</p> */}
        </Styles.SectionTitle>
        <GridContainer contact>
          <Styles.ContactInfo>
            <Styles.ContactInfoItem>
              <Styles.SvgBox>
                <FaMapMarkerAlt />
              </Styles.SvgBox>
              <h3>Address</h3>
              <p>admin@nicanigeria.com, Lagos, Nigeria </p>
            </Styles.ContactInfoItem>
            <Styles.ContactInfoItem>
              <Styles.SvgBox>
                <FaPhone />
              </Styles.SvgBox>
              <h3>Call us</h3>
              <p>647-526-2148</p>
            </Styles.ContactInfoItem>
            <Styles.ContactInfoItem>
              <Styles.SvgBox>
                <FaEnvelope />
              </Styles.SvgBox>
              <h3>Email us</h3>
              <p>admin@nicanigeria.com</p>
            </Styles.ContactInfoItem>
          </Styles.ContactInfo>
          <Styles.ContactForm>
            <form>
              <Styles.InputBox>
                <input type='text' placeholder='Name' required />
              </Styles.InputBox>
              <Styles.InputBox>
                <input type='text' placeholder='Email' required />
              </Styles.InputBox>
              <Styles.InputBox>
                <input type='text' placeholder='Phone' required />
              </Styles.InputBox>
              <Styles.InputBox>
                <textarea type='text' placeholder='Message' required />
              </Styles.InputBox>
              <Styles.BtnWrap>
                <Button>Send Message</Button>
              </Styles.BtnWrap>
            </form>
          </Styles.ContactForm>
        </GridContainer>
      </Container>
    </Styles.ContactSection>
  );
};
