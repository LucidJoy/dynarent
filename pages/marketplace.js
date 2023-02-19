import React from "react";

import { Card } from "../components";

const marketplace = () => {
  let rent = [1, 2, 3, 4, 5];

  return (
    <div className='flex flex-row flex-wrap w-full'>
      {rent.map((oneCard, index) => (
        <Card handleSetState={() => setCardId(index)} />
      ))}
    </div>
  );
};

export default marketplace;
