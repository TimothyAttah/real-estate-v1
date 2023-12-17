import React, { useState } from 'react';
import * as Styles from './HeaderStyles';
import { RiBuilding2Line, RiCloseLine, RiMenuLine } from 'react-icons/ri';
import { SideBar } from '../sideBar/SideBar';
import { AnimatePresence } from 'framer-motion';
import { NavMenu } from '../nav/NavMenu';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Styles.MainHeaderContainer>
        <Styles.HeaderWrapper>
          <h1>
            <span>
              <RiBuilding2Line />
            </span>
            Realtor
          </h1>
          <NavMenu />
          <button>
            <RiMenuLine />
          </button>
          <button>
            <RiCloseLine />
          </button>
        </Styles.HeaderWrapper>
      </Styles.MainHeaderContainer>
      <AnimatePresence>
        {isOpen && <SideBar setIsOpen={setIsOpen} />}
      </AnimatePresence>
    </>
  );
};
