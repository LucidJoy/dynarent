import React, { useContext } from "react";

import { Card } from "../components";
import NFTRentContext from "../context/NftRentContext";

const rentednfts = () => {
  const { modal, cardId, setCardId, currentAccount, rentedNfts } =
    useContext(NFTRentContext);

  let arr = [1, 2, 3, 4, 5];

  return (
    <div className="flex flex-row flex-wrap w-full">
      {rentedNfts.map((nft, index) => {
        return (
          <Card
            handleSetState={() => {
              setCardId(index);
            }}
            nftData={nft}
          />
        );
      })}
    </div>
  );
};

export default rentednfts;
