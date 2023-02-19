import React, {useContext} from "react";

import { Card } from "../components";
import NFTRentContext from "../context/NftRentContext";

const marketplace = () => {
  let rent = [1, 2, 3, 4, 5];
  const { modal, cardId, setCardId, currentAccount, myNfts, marketplaceNfts } =
    useContext(NFTRentContext);

  return (
    <div className="flex flex-row flex-wrap w-full">
      {marketplaceNfts.map((nft, index) => (
        <Card
          handleSetState={() => {
            setCardId(index);
          }}
          nftData={nft}
        />
      ))}
    </div>
  );
};

export default marketplace;
