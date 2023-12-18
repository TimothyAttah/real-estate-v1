import styled from 'styled-components';

export const BannerContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  align-items: center;
  /* height: 300px; */
`;

export const BannerImgWrapper = styled.div`
  max-width: 700px;
  width: 100%;
  /* min-height: 400px; */
  /* border: 2px solid red; */
  box-sizing: border-box;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const BannerInfoWrapper = styled.div`
  max-width: 700px;
  width: 100%;
  /* border: 2px solid red; */

  h2 {
    margin-bottom: 10px;
  }

  h4 {
    margin-bottom: 10px;
  }

  button {
    margin: 20px 0;
    width: 180px;
    height: 50px;
    background-color: ${({ theme }) => theme.colors.colorBackground2};
    color: ${({ theme }) => theme.colors.colorWhite};
    font-size: 1.2rem;
  }
`;
