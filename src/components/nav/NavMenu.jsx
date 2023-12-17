import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  RiBookReadFill,
  RiHome2Line,
  RiPriceTagFill,
  RiShieldUserFill,
  RiSuitcase3Line,
} from 'react-icons/ri';
import * as Styles from './NavMenuStyles';

const navData = [
  {
    name: 'Home',
    icon: <RiHome2Line />,
    to: '/',
  },
  {
    name: 'About',
    icon: <RiBookReadFill />,
    to: '/about',
  },
  {
    name: 'Buy',
    icon: <RiSuitcase3Line />,
    to: '/buy',
  },
  {
    name: 'Sell',
    icon: <RiPriceTagFill />,
    to: '/sell',
  },
  {
    name: 'Contact',
    icon: <RiShieldUserFill />,
    to: '/contact',
  },
];

export const NavMenu = () => {
  return (
    <Styles.NavMenuContainer>
      {navData.map((item, i) => (
        <NavLink key={i} to={item.to}>
          <li>
            <span>{item.icon}</span>
            {item.name}
          </li>
        </NavLink>
      ))}
    </Styles.NavMenuContainer>
  );
};
