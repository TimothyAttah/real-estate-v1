import React from 'react';
import { Banner } from '../banner/Banner';
import buyPix from '../../../../assets/office-buildings_1127-3158.jpg';
import * as Styles from './BuyStyles';
import { Card } from '../../../../components/card/Card';

import { buyingData } from '../homeData';

export const Buy = () => {
  return (
    <div>
      <Banner
        purpose='BUY A HOME'
        title1='Find, Buy & Own Your'
        title2='Dream Home'
        desc1='Explore Apartments, Villas, Homes'
        desc2='and more'
        buttonText='Explore Buying'
        linkName='/search?purpose=for-sale'
        imgPix={buyPix}
      />

      <Styles.BuyContainer>
        {buyingData.map((item, i) => (
          <Card data={item} key={i} />
        ))}
      </Styles.BuyContainer>
    </div>
  );
};
