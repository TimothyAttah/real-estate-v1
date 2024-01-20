/* eslint-disable no-unused-expressions */
import React, { useEffect } from 'react';
import * as Styles from './HeroSliderStyles';
import slideImg1 from '../../../assets/01.jpg';
import slideImg2 from '../../../assets/03.jpg';
import slideImg3 from '../../../assets/04.jpg';
import slideImg4 from '../../../assets/05.jpg';

export const HeroSlider = () => {
  // setInterval(() => {
  //   document.getElementById('radio' + counter).checked = true;
  //   counter++;
  //   if (counter > 4) {
  //     counter = 1;
  //     // counter++;
  //   }
  // }, 4000);

  useEffect(() => {
    // let counter = 1;
    // let radio = (document.getElementById('radio' + counter).checked = true);
    // if (radio !== null) {
    //   setInterval(() => {
    //     document.getElementById('radio' + counter).checked = true;
    //     counter++;
    //     if (counter > 4) {
    //       counter = 1;
    //     }
    //   }, 4000);
    // } else {
    //   return null;
    // }
  }, []);
  // window.addEventListener('load', () => {
  //   let counter = 1;
  //   setInterval(() => {
  //     if ((document.getElementById('radio' + counter).checked = true)) {
  //       counter++;
  //     }

  //     if (counter > 4) {
  //       counter = 1;
  //       // counter++;
  //     }
  //   }, 4000);
  // });

  return (
    <Styles.SliderContainer>
      <Styles.Slides>
        <input type='radio' name='radio-btn' id='radio1' />
        <input type='radio' name='radio-btn' id='radio2' />
        <input type='radio' name='radio-btn' id='radio3' />
        <input type='radio' name='radio-btn' id='radio4' />

        <Styles.Slide className='first'>
          <img src={slideImg1} alt='img' />
        </Styles.Slide>
        <Styles.Slide>
          <img src={slideImg2} alt='img' />
        </Styles.Slide>
        <Styles.Slide>
          <img src={slideImg3} alt='img' />
        </Styles.Slide>
        <Styles.Slide>
          <img src={slideImg4} alt='img' />
        </Styles.Slide>
        <Styles.NavigationAuto className='navigationAuto'>
          <Styles.AutoBtn className='auto-btn1'></Styles.AutoBtn>
          <Styles.AutoBtn className='auto-btn2'></Styles.AutoBtn>
          <Styles.AutoBtn className='auto-btn3'></Styles.AutoBtn>
          <Styles.AutoBtn className='auto-btn4'></Styles.AutoBtn>
        </Styles.NavigationAuto>
      </Styles.Slides>
      <Styles.NavigationManual>
        <Styles.ManualBtn htmlFor='radio1'></Styles.ManualBtn>
        <Styles.ManualBtn htmlFor='radio2'></Styles.ManualBtn>
        <Styles.ManualBtn htmlFor='radio3'></Styles.ManualBtn>
        <Styles.ManualBtn htmlFor='radio4'></Styles.ManualBtn>
      </Styles.NavigationManual>
    </Styles.SliderContainer>
  );
};
