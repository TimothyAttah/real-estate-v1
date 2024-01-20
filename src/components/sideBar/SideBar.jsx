import React from 'react';
import * as Styles from './SideBarStyles';
import { NavLink } from 'react-router-dom';

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

const navData = [
  {
    name: 'Home',
    // icon: <RiHome2Line />,
    to: '/',
  },
  {
    name: 'Find Your Suite',
    // icon: <RiPriceTagFill />,
    to: '/for-rent',
  },
  {
    name: 'About',
    // icon: <RiBookReadFill />,
    to: '/about',
  },
  {
    name: 'Contact',
    // icon: <RiShieldUserFill />,
    to: '/contact',
  },
];

export const SideBar = ({ setMenuClass }) => {
  return (
    <Styles.SideBar
      variants={showAnimation}
      initial='hidden'
      animate='show'
      exit='hidden'
    >
      <Styles.SideBarNavLinks>
        {navData.map((item, i) => (
          <li key={i}>
            <NavLink
              to={item.to}
              className={({ isActive }) => (isActive ? 'active' : '')}
              onClick={() => setMenuClass()}
            >
              <span>{item.name}</span>
            </NavLink>
          </li>
        ))}
      </Styles.SideBarNavLinks>
    </Styles.SideBar>
  );
};
