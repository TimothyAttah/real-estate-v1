import React from 'react';
import * as Styles from './SideBarStyles';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const showAnimation = {
  hidden: {
    opacity: 0,
    x: 100,
    transition: {
      duration: 1.25,
      type: 'tween',
      delay: 0.2,
      ease: [0.25, 0.25, 0.25, 0.75],
    },
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.25,
      type: 'tween',
      delay: 0.2,
      ease: [0.25, 0.25, 0.25, 0.75],
    },
  },
};

export const SideBar = ({ setIsOpen }) => {
  return (
    <Styles.SideBar
      variants={showAnimation}
      initial='hidden'
      animate='show'
      exit='hidden'
    >
      <Styles.CloseSideBarIcon>
        <FaTimes onClick={() => setIsOpen(false)} />
      </Styles.CloseSideBarIcon>
      <Styles.SideBarNavLinks>
        <Link to='/' onClick={() => setIsOpen(false)}>
          Home
        </Link>
        <Link to='/aircrafts-for-sale' onClick={() => setIsOpen(false)}>
          Aircraft
        </Link>
        <Link to='/' onClick={() => setIsOpen(false)}>
          About
        </Link>
      </Styles.SideBarNavLinks>
    </Styles.SideBar>
  );
};
