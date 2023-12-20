import React from 'react';
import * as Styles from './BannerStyles';
import { Link } from 'react-router-dom';
import { FadeIn } from '../../../../components/fadeIn/FadeIn';

export const Banner = ({
  purpose,
  imgPix,
  title1,
  title2,
  desc1,
  desc2,
  linkName,
  buttonText,
}) => {
  return (
    <Styles.BannerContainer>
      <>
        <Styles.BannerImgWrapper>
          <FadeIn delay={0.2} direction='right'>
            <img src={imgPix} alt='' />
          </FadeIn>
        </Styles.BannerImgWrapper>
      </>
      <Styles.BannerInfoWrapper>
        <FadeIn delay={0.2} direction='left'>
          <Styles.BannerInfoWrapper>
            <h2>{purpose}</h2>
            <h4>
              {title1} <br /> {title2}
            </h4>
            <p>
              {desc1} <br /> {desc2}
            </p>

            <Link to={linkName}>
              <button>{buttonText}</button>
            </Link>
          </Styles.BannerInfoWrapper>
        </FadeIn>
      </Styles.BannerInfoWrapper>
    </Styles.BannerContainer>
  );
};
