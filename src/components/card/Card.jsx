import React, { useState } from 'react';
import { Listing } from '../listing/Listing';

export const Card = ({ data }) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Listing data={data} />
    </div>
  );
};
