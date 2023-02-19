import React from "react";

import { Card } from "../components";

const rentednfts = () => {
  let arr = [1, 2, 3, 4, 5];

  return (
    <div className='flex flex-row flex-wrap w-full'>
      {arr.map((oneCard, index) => (
        <Card handleSetState={() => setCardId(index)} />
      ))}
    </div>
  );
};

export default rentednfts;
