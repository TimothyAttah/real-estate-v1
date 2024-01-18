import styled from 'styled-components';
// import { theme } from '../../../themes';

export const SliderContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  height: 600px;
  border-radius: 10px;
  overflow: hidden;
  margin: auto;

  #radio1:checked ~ .first {
    margin-left: 0;
  }
  #radio2:checked ~ .first {
    margin-left: -20%;
  }
  #radio3:checked ~ .first {
    margin-left: -40%;
  }
  #radio4:checked ~ .first {
    margin-left: -60%;
  }

  #radio1:checked ~ .navigationAuto .auto-btn1 {
    background: #40d3dc;
  }
  #radio2:checked ~ .navigationAuto .auto-btn2 {
    background: #40d3dc;
  }
  #radio3:checked ~ .navigationAuto .auto-btn3 {
    background: #40d3dc;
  }
  #radio4:checked ~ .navigationAuto .auto-btn4 {
    background: #40d3dc;
  }
`;
export const Slides = styled.div`
  width: 500%;
  height: 600px;
  display: flex;

  input {
    display: none;
  }
`;
export const Slide = styled.div`
  width: 20%;
  transition: 2s;

  img {
    max-width: 1200px;
    width: 100%;
    /* width: 800px; */
    height: 600px;
  }
`;
export const NavigationAuto = styled.div`
  position: absolute;
  display: flex;
  max-width: 1200px;
  width: 100%;
  justify-content: center;
  margin-top: 560px;

  div {
    border: 2px solid #40d3dc;
    padding: 5px;
    border-radius: 10px;
    transition: 1s;
  }

  div:not(:last-child) {
    margin-right: 40px;
  }
`;
export const AutoBtn = styled.div``;
export const NavigationManual = styled.div`
  position: absolute;
  max-width: 1200px;
  width: 100%;
  margin-top: -40px;
  display: flex;
  justify-content: center;
`;
export const ManualBtn = styled.label`
  border: 2px solid #40d3dc;
  padding: 5px;
  border-radius: 10px;
  cursor: pointer;
  transition: 1s;

  :not(:last-child) {
    margin-right: 40px;
  }

  :hover {
    background: #40d3dc;
  }
`;
