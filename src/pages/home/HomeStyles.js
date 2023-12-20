import styled from 'styled-components';

export const HomeContainer = styled.div`
  /* position: relative; */
  padding-top: 5rem;
  height: 100vh;
  /* border: 2px solid wheat; */

  @media screen and (max-width: ${({ theme }) => theme.screens.smallSize}) {
    height: 80vh;
  }
`;
