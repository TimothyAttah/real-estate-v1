import React, { useState } from 'react';
import * as Styles from './HeaderStyles';
import { RiBuilding2Line } from 'react-icons/ri';
import { SideBar } from '../sideBar/SideBar';
import { AnimatePresence } from 'framer-motion';
import { NavMenu } from '../nav/NavMenu';
import { Link } from 'react-router-dom';
import { FadeIn } from '../fadeIn/FadeIn';

export const Header = () => {
  const [burgerClass, setBurgerClass] = useState('burger-bar unclicked');
  const [menuClass, setMenuClass] = useState(false);
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass('burger-bar clicked');
      setMenuClass(true);
    } else {
      setBurgerClass('burger-bar unclicked');
      setMenuClass(false);
    }
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <FadeIn delay={0.2} direction='down'>
      <Styles.MainHeaderContainer>
        <Styles.HeaderWrapper>
          <Link to='/'>
            <h1>
              <RiBuilding2Line />
              Realtor
            </h1>
          </Link>
          <NavMenu />
          <div className='burger-menu' onClick={updateMenu}>
            <div className={burgerClass}></div>
            <div className={burgerClass}></div>
            <div className={burgerClass}></div>
          </div>
        </Styles.HeaderWrapper>
      </Styles.MainHeaderContainer>
      <AnimatePresence>
        {menuClass && <SideBar setMenuClass={updateMenu} />}
      </AnimatePresence>
    </FadeIn>
  );
};
