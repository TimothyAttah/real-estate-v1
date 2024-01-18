import React from 'react';
import * as Styles from './ButtonStyles';

export const Button = ({ children, width }) => {
  return (
    <Styles.ButtonContainer width={width}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      {children}
    </Styles.ButtonContainer>
  );
};
