import React, { useState } from 'react';
import * as Styles from './HeaderStyles';
import { FaBars } from 'react-icons/fa';
import { SideBar } from '../sideBar/SideBar';
import { AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { NavMenu } from '../nav/NavMenu';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Styles.MainHeaderContainer>
        <h1>
          Aircraft<span>Sales</span>
        </h1>
        <NavMenu />
        <Styles.HeaderBar>
          <FaBars onClick={() => setIsOpen(true)} />
        </Styles.HeaderBar>
      </Styles.MainHeaderContainer>
      <AnimatePresence>
        {isOpen && <SideBar setIsOpen={setIsOpen} />}
      </AnimatePresence>
    </>
  );
};
