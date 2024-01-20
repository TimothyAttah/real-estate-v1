import React from 'react';
import * as Styles from './ButtonStyles';

export const Button = ({ children, width, primary, padding }) => {
  return (
    <Styles.ButtonContainer width={width} primary={primary} padding={padding}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      {children}
    </Styles.ButtonContainer>
  );
};
