import styled from 'styled-components';

export const BannerContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  /* height: 300px; */
  margin: 0 auto;
  gap: 40px;
`;

export const BannerImgWrapper = styled.div`
  max-width: 700px;
  width: 100%;
  /* min-height: 400px; */
  /* border: 2px solid red; */
  box-sizing: border-box;
  box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.3);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
  }

  :hover {
  }
`;

export const BannerInfoWrapper = styled.div`
  /* max-width: 700px; */
  /* width: 100%; */
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
    transition: 0.5s;
    :hover {
      scale: 1.1;
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.screens.mediumSize}) {
    text-align: center;
  }
`;
