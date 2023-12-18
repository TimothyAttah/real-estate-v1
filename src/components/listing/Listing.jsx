import React from 'react';
import * as Styles from './ListingStyles';
import { Feature } from '../feature/Feature';
import { FaBath, FaBed, FaToilet } from 'react-icons/fa';

export const Listing = ({ data, open }) => {
  const {
    name,
    imgUrl,
    price,
    address,
    numOfRooms,
    numOfBathRooms,
    numOfToilet,
  } = data;
  return (
    <Styles.ListingContainer onClick={open} whileHover={{ scale: 1.1 }}>
      <Styles.ListingContentWrapper>
        <Styles.ListingImageWrapper>
          <Styles.ListingImage src={imgUrl} alt='real estate mansion' />
        </Styles.ListingImageWrapper>
        <Styles.ListingDetails>
          <Styles.ListingType>For Rent</Styles.ListingType>
          <Styles.ListingRow>
            <Styles.ListingPrice>{price}</Styles.ListingPrice>
          </Styles.ListingRow>
          <Styles.ListingRow>
            <Styles.ListingAddress>{address}</Styles.ListingAddress>
          </Styles.ListingRow>
          <Styles.ListingRow>
            <Feature iconLabel={numOfRooms} Icon={<FaBed />} />
            <Feature iconLabel={numOfBathRooms} Icon={<FaBath />} />
            <Feature iconLabel={numOfToilet} Icon={<FaToilet />} />
          </Styles.ListingRow>
        </Styles.ListingDetails>
      </Styles.ListingContentWrapper>
    </Styles.ListingContainer>
  );
};
