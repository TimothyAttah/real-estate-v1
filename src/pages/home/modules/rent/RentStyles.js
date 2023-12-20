import styled from 'styled-components';

export const RentMainContainer = styled.div`
  padding: 80px 0;

  h2 {
    font-size: 3rem;
    text-transform: capitalize;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 20px;
  }

  @media screen and (max-width: ${({ theme }) => theme.screens.mediumSize}) {
    h2 {
      text-align: center;
      font-size: 2rem;
    }
  }
`;

export const RentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding: 80px 0;
`;

export const RentWrapper = styled.div`
  max-width: 400px;
  width: 100%;
`;
export const RentImgWrapper = styled.div`
  max-width: 400px;
  height: 300px;
  width: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export const RentInfoWrapper = styled.div`
  /* width: 100%; */
`;
// export const RentContainer = styled.div`
//   width: 100%;
// `;
