import styled, { css } from 'styled-components';
import { theme } from '../../themes';

export const AboutSection = styled.section`
  padding: 150px 0;
`;

export const SectionTitle = styled.div`
  text-align: center;
  margin-bottom: 45px;
  font-size: ${theme.fontSize.fs3xl};
  text-transform: capitalize;
  margin: 0 0 15px;
`;
export const Title = styled.span`
  display: inline-block;
  font-size: ${theme.fontSize.fs2xl};
  font-weight: 400;
  text-transform: capitalize;
  color: var(--main-color);
  margin: 0 0 12px;
  padding: 0 40px;
  position: relative;

  ::before,
  ::after {
    content: '';
    position: absolute;
    height: 1px;
    width: 34px;
    background-color: var(--main-color);
    top: 50%;
    transform: translateY(-50%);
  }

  ::before {
    left: 0;
  }
  ::after {
    right: 0;
  }
`;
export const SubTitle = styled.h2`
  font-size: ${theme.fontSize.fs2xl};
  text-transform: capitalize;
  color: var(--main-color);
  font-weight: bold;
  margin-bottom: 80px;

  @media screen and (max-width: ${theme.screens.smallScreen}) {
    font-size: ${theme.fontSize.fslg};
  }
`;

export const InfoContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 70px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row-reverse;

  ${(props) =>
    props.primary &&
    css`
      flex-direction: row;
    `}

  @media screen and (max-width: ${theme.screens.mediumScreen}) {
    flex-direction: column;
  }
`;

export const Info = styled.div`
  max-width: 800px;
  width: 100%;
  h1 {
    font-size: 90px;
    text-transform: capitalize;
    color: var(--main-color);
    font-weight: bold;
    margin-bottom: 30px;
  }

  p {
    font-size: ${theme.fontSize.fsmd};
    color: ${theme.color.bgLight};
  }

  ${(props) =>
    props.primary &&
    css`
      max-width: 1200px;
      width: 100%;
      margin-bottom: 80px;

      h1 {
        font-size: ${theme.fontSize.fs3xl};
        text-transform: capitalize;
        color: var(--main-color);
        font-weight: bold;
        margin-bottom: 30px;
      }
    `}

  @media screen and (max-width: ${theme.screens.mediumScreen}) {
    h1 {
      text-align: center;
      font-size: 60px;
      margin-bottom: 30px;
      margin-top: 20px;
    }

    p {
      text-align: center;
    }

    ${(props) =>
      props.primary &&
      css`
        max-width: 1200px;
        width: 100%;
        margin-bottom: 80px;

        h1 {
          font-size: ${theme.fontSize.fs2xl};
          margin-bottom: 30px;
        }
      `}
  }

  @media screen and (max-width: ${theme.screens.smallScreen}) {
    h1 {
      font-size: 40px;
      margin-bottom: 30px;
      margin-top: 20px;
    }
  }
`;
export const InfoImg = styled.div`
  max-width: 600px;
  width: 100%;

  @media screen and (max-width: ${theme.screens.mediumScreen}) {
    max-width: 800px;
    width: 100%;
    margin-bottom: 20px;
  }
`;

export const AboutListContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 60px;

  svg {
    font-size: 100px;
    color: ${theme.color.bgLight};
  }

  h1 {
    font-size: ${theme.fontSize.fs3xl};
    text-transform: capitalize;
    color: var(--main-color);
    margin-bottom: 15px;
  }

  p {
    max-width: 1000px;
    width: 100%;
    font-size: ${theme.fontSize.fsmd};
    color: ${theme.color.bgLight};
  }

  @media screen and (max-width: ${theme.screens.mediumScreen}) {
    svg {
      font-size: 80px;
    }

    h1 {
      font-size: ${theme.fontSize.fs2xl};
      margin-bottom: 15px;
    }

    p {
      max-width: 700px;
      width: 100%;
      font-size: ${theme.fontSize.fsmd};
    }
  }

  @media screen and (max-width: ${theme.screens.smallScreen}) {
    flex-direction: column;
    text-align: center;
    svg {
      font-size: 50px;
    }
    h1 {
      font-size: 20px;
      margin-bottom: 15px;
    }
    p {
      font-size: 14px;
    }
  }
`;
