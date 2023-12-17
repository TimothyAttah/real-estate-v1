import styled from 'styled-components';

export const MainHeaderContainer = styled.header`
  position: fixed;
  width: 100vw;
  height: 5rem;
  left: 0;
  right: 0;
  top: 0;
  z-index: 999px;
  border: 2px solid red;
  /* background-color: ${({ theme }) => theme.colors.colorWhite}; */
  background: transparent;
`;

export const HeaderWrapper = styled.div`
  height: 100%;
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    display: none;
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
