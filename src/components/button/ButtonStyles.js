import styled, { css } from 'styled-components';
import { theme } from '../../themes';

export const ButtonContainer = styled.button`
  position: relative;
  /* width: ${(props) => (props.width ? `${props.width}` : '200px')}; */
  /* border-radius: 10px; */
  display: flex;
  align-items: center;
  justify-content: center;
  background: inherit;
  color: #2196f3;
  text-transform: uppercase;
  font-size: ${theme.fontSize.fslg};
  letter-spacing: 1px;
  padding: 15px 30px;
  overflow: hidden;
  transition: 0.2s;
  font-weight: 600;

  a {
    color: inherit;
  }

  :hover {
    color: #255784;
    background: #2196f3;
    /* background: ${(props) =>
      props.bgColor ? `${props.bgColor}` : `${theme.color.primaryColor}`}; */
    box-shadow: 0 0 10px #2196f3, 0 0 40px #2196f3, 0 0 80px #2196f3;
    transition-delay: 1s;
  }

  span {
    position: absolute;
    display: block;
  }

  span:nth-child(1) {
    top: 0;
    left: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, #2196f3);
  }

  span:nth-child(3) {
    bottom: 0;
    right: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(270deg, transparent, #2196f3);
  }

  span:nth-child(2) {
    top: -100%;
    right: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(180deg, transparent, #2196f3);
  }

  span:nth-child(4) {
    bottom: -100%;
    left: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(360deg, transparent, #2196f3);
  }

  :hover {
    span:nth-child(1) {
      left: 100%;
      transition: 1s;
    }
    span:nth-child(3) {
      right: 100%;
      transition: 1s;
      transition-delay: 0.5s;
    }
    span:nth-child(2) {
      top: 100%;
      transition: 1s;
      transition-delay: 0.25s;
    }
    span:nth-child(4) {
      bottom: 100%;
      transition: 1s;
      transition-delay: 0.75s;
    }
  }

  ${(props) =>
    props.primary &&
    css`
      color: ${theme.color.textColor2};
      :hover {
        color: ${theme.color.textColor2Dark};
        background: ${theme.color.textColor2};
        box-shadow: 0 0 10px ${theme.color.textColor2},
          0 0 40px ${theme.color.textColor2}, 0 0 80px ${theme.color.textColor2};
        transition-delay: 1s;
      }

      span:nth-child(1) {
        background: linear-gradient(
          90deg,
          transparent,
          ${theme.color.textColor2}
        );
      }

      span:nth-child(3) {
        background: linear-gradient(
          270deg,
          transparent,
          ${theme.color.textColor2}
        );
      }

      span:nth-child(2) {
        background: linear-gradient(
          180deg,
          transparent,
          ${theme.color.textColor2}
        );
      }
      span:nth-child(4) {
        background: linear-gradient(
          360deg,
          transparent,
          ${theme.color.textColor2}
        );
      }
    `}

  ${(props) =>
    props.padding &&
    css`
      padding: 15px 0;
      :hover {
        padding: 15px 30px;
      }
    `}
`;
