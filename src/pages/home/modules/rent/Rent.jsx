import React from 'react';
import { Banner } from '../banner/Banner';
import rentHouse from '../../../../assets/modern-residential-district-with-green-roof-balcony-generated-by-ai_188544-10276.jpg';

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
    </div>
  );
};
