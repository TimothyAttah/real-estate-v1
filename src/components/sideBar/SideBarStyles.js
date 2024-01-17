import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../../themes';
export const SideBar = styled(motion.div)`
  position: absolute;
  right: 0;
  top: 0;
  width: 300px;
  height: 100vh;

  padding: 10px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  box-shadow: 12px 12px 12px rgba(0, 0, 0, #000);
  /* z-index: -1; */
`;

export const SideBarNavLinks = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 80px;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    padding: 10px 0;
    border-radius: 5px;
    font-size: 24px;
    text-transform: uppercase;
    transition: 0.3s ease-in-out all;

    :hover {
    }
  }
`;

export const CloseSideBarIcon = styled.div`
  position: absolute;
  right: 20px;
  top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    font-size: 20px;
    font-weight: normal;
    cursor: pointer;
  }
`;
