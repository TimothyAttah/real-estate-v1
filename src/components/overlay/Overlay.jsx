import React from 'react';
import * as Styles from './OverlayStyles';

export const Overlay = ({ children, close }) => {
  return (
    <Styles.OverlayContainer onClick={close}>
      {children}
    </Styles.OverlayContainer>
  );
};
