import styled from 'styled-components';

export const BuyMainContainer = styled.div`
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

export const BuyContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export const BuyWrapper = styled.div`
  max-width: 400px;
  width: 100%;
`;
export const BuyImgWrapper = styled.div`
  max-width: 400px;
  height: 300px;
  width: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export const BuyInfoWrapper = styled.div`
  /* width: 100%; */
`;
// export const BuyContainer = styled.div`
//   width: 100%;
// `;
