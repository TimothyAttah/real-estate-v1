import styled from 'styled-components';

export const HeroContainer = styled.section`
  background: transparent;
  position: relative;
  height: 50vh;
  box-sizing: border-box;
  margin-top: 80px;
`;

export const HeroWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media screen and (max-width: ${({ theme }) => theme.screens.mediumSize}) {
    flex-direction: column-reverse;
  }
`;

export const VideoWrapper = styled.div`
  max-width: 700px;
  width: 100%;
  video {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const HeroInfoWrapper = styled.div`
  position: relative;
  max-width: 700px;
  width: 100%;
  text-align: center;
  color: #fff;
  /* z-index: 999; */

  h1 {
    font-size: 55px;
    text-align: center;
    font-weight: bold;
  }

  div {
    font-size: 50px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.colorPrimary};
  }

  @media screen and (max-width: ${({ theme }) => theme.screens.mediumSize}) {
    h1 {
      font-size: 35px;
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.screens.smallSize}) {
    h1 {
      font-size: 25px;
    }
    div {
      font-size: 25px;
    }
  }
`;
