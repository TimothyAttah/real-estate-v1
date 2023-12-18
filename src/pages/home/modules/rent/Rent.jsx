import React from 'react';
import { Banner } from '../banner/Banner';
import rentHouse from '../../../../assets/modern-residential-district-with-green-roof-balcony-generated-by-ai_188544-10276.jpg';
import * as Styles from './RentStyles';
import { Card } from '../../../../components/card/Card';

import { rentingData } from '../homeData';

export const Rent = () => {
  return (
    <div>
      <Banner
        purpose='RENT A HOME'
        title1='Rental Homes for'
        title2='Everyone'
        desc1='Explore Apartments, Villas, Homes'
        desc2='and more'
        buttonText='Explore Renting'
        linkName='/search?purpose=for-rent'
        imgPix={rentHouse}
      />

      <Styles.RentContainer>
        {rentingData.map((item, i) => (
          <Card data={item} />
        ))}
      </Styles.RentContainer>
    </div>
  );
};
