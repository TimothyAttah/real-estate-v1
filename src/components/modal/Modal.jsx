import React from 'react';
import * as Styles from './ModalStyles';
import { Feature } from '../feature/Feature';
import { IoCloseOutline } from 'react-icons/io5';
import { FaBath, FaBed, FaToilet } from 'react-icons/fa';

export const Modal = ({ data, close }) => {
  const {
    subName,
    imgUrl,
    price,
    address,
    numOfRooms,
    numOfBathRooms,
    numOfToilet,
    details,
  } = data;
  return (
    <Styles.ModalContainer onClick={(e) => e.stopPropagation()}>
      <Styles.ModalImage src={imgUrl} alt='real estate mansion' />
      <Styles.ModalInfo>
        <h2>{subName}</h2>
        <Styles.ModalRow>
          <Styles.ModalPrice>{price}</Styles.ModalPrice>
        </Styles.ModalRow>
        <Styles.ModalRow>
          <Styles.ModalAddress>{address}</Styles.ModalAddress>
        </Styles.ModalRow>
        <Styles.ModalRow>
          <Feature iconLabel={numOfRooms} Icon={<FaBed />} />
          <Feature iconLabel={numOfBathRooms} Icon={<FaBath />} />
          <Feature iconLabel={numOfToilet} Icon={<FaToilet />} />
        </Styles.ModalRow>
        <Styles.ModalDescriptionWrapper>
          <Styles.ModalDescription>{details}</Styles.ModalDescription>
        </Styles.ModalDescriptionWrapper>
        <Styles.ModalCloseWrapper onClick={close}>
          <IoCloseOutline />
        </Styles.ModalCloseWrapper>
      </Styles.ModalInfo>
    </Styles.ModalContainer>
  );
};
