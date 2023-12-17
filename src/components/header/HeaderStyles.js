import styled from 'styled-components';

export const MainHeaderContainer = styled.header`
  position: fixed;
  /* max-width: 1500px; */
  width: 100%;
  height: 5rem;
  left: 0;
  right: 0;
  top: 0;
  /* z-index: 999px; */
  /* background-color: ${({ theme }) => theme.colors.colorWhite}; */
  background: transparent;
  /* margin: auto; */
  /* padding: 0 100px; */
  z-index: 99px;
`;

export const HeaderWrapper = styled.div`
  height: 100%;
  /* width: 80%; */
  /* margin: 0 auto; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;

  button {
    display: none;
  }

  .burger-menu {
    height: 30%;
    width: 4rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    cursor: pointer;
    /* background-color: red; */

    display: none;

    @media screen and (max-width: ${({ theme }) => theme.screens.mediumSize}) {
      display: flex;
    }
  }

  .burger-bar {
    width: 2rem;
    height: 0.2rem;
    background-color: rgb(0, 183, 255);
    border-radius: 0.5rem;
  }

  .burger-bar.clicked:nth-child(1) {
    transform: rotate(45deg) translate(0rem, 1.15rem);
    transition: ease-out 0.5s;
  }
  .burger-bar.clicked:nth-child(2) {
    transform: scale(0.1);
    transition: ease-out 0.5s;
  }
  .burger-bar.clicked:nth-child(3) {
    transform: rotate(135deg) translate(0.2rem, 1rem);
    transition: ease-out 0.5s;
  }
  .burger-bar.unclicked {
    transform: rotate(0) translate(0);
    transition: cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s;
  }
`;

// export const HeaderNavLinks = styled.ul`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   gap: 20px;
//   transition: 0.2s ease all;

//   a {
//     font-size: 20px;
//     color: ${({ theme }) => theme.colors.textColor};

//     cursor: pointer;
//     :hover {
//       color: ${({ theme }) => theme.colors.mainColor};
//     }
//   }
//   @media screen and (max-width: ${({ theme }) => theme.screens.mediumSize}) {
//     display: none;
//   }
// `;

// export const HeaderBar = styled.div`
//   display: none;
//   @media screen and (max-width: ${({ theme }) => theme.screens.mediumSize}) {
//     display: flex;
//     svg {
//       font-size: 20px;
//       cursor: pointer;
//     }
//   }
// `;
