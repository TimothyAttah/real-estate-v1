import React, { useState } from 'react';
import { Listing } from '../listing/Listing';
import { Overlay } from '../overlay/Overlay';

export const Card = ({ data }) => {
  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };
  return (
    <div>
      <Listing data={data} open={openModal} />
      {open && <Overlay close={closeModal}></Overlay>}
    </div>
  );
};
