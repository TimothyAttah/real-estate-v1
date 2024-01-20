import styled, { css } from 'styled-components';
import { theme } from '../../themes';

export const HeroContainer = styled.div`
  padding: 150px 0;
`;

export const HeroHeader = styled.div`
  max-width: 700px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin: 20px auto;

  h1 {
    color: ${theme.color.bgLight};
    font-size: ${theme.fontSize.fs4xl};
    text-align: center;
    text-transform: capitalize;
  }

  p {
    color: ${theme.color.textColor};
    text-align: center;
    /* text-transform: capitalize; */
    font-size: ${theme.fontSize.fsmd};
    line-height: 20px;
  }

  button {
    margin-bottom: 20px;
  }
`;

export const HeroInfoWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: end;
  padding: 20px 0;
`;

export const InfoBox = styled.div`
  max-width: 700px;
  width: 100%;

  h2 {
    color: ${theme.color.textColor2};
    text-transform: capitalize;
    font-size: ${theme.fontSize.fs4xl};
  }

  p {
    color: ${theme.color.textColor};
    font-size: ${theme.fontSize.fsmd};
  }

  ${(props) =>
    props.primary &&
    css`
      max-width: 1200px;
      padding: 0 50px;

      a {
        display: inline-block;
      }
      /* text-align: center; */

      /* h2,
      p {
        padding-left: 30px;
      } */
    `}
`;

export const InfoMessageBox = styled.div`
  max-width: 700px;
  width: 100%;
  margin: 50px auto 30px;

  h2 {
    color: ${theme.color.textColor};
    text-transform: capitalize;
    font-size: ${theme.fontSize.fs4xl};
  }

  p {
    color: ${theme.color.textColor};
    font-size: ${theme.fontSize.fsmd};
    text-align: center;
  }

  form {
    width: 100%;
    margin-top: 40px;

    label,
    input,
    textarea {
      display: block;
    }

    label {
      color: ${theme.color.textColor};
      font-size: ${theme.fontSize.fsmd};
      font-weight: bold;
      /* padding-bottom: 10px; */
    }

    input {
      margin-bottom: 20px;
    }

    input,
    textarea {
      width: 100%;
      background-color: inherit;
      border: 1px solid ${theme.color.textColor};
      border-radius: 10px;
      padding: 15px 20px;
      color: ${theme.color.bgLight};
    }

    textarea {
      height: 300px;
      resize: none;
      /* margin-top: 20px; */
    }

    button {
      margin: 20px 0;
    }
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  gap: 20px;
`;
