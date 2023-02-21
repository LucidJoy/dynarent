import React, {useContext} from "react";

import { Card } from "../components";
import NFTRentContext from "../context/NftRentContext";

const Marketplace = () => {
  let rent = [1, 2, 3, 4, 5];
  const {setCardId, marketplaceNfts } = useContext(NFTRentContext);

  return (
    <div className="flex flex-row flex-wrap w-full">
      {marketplaceNfts.map((nft, index) => (
        <Card
          handleSetState={() => {
            setCardId(index);
          }}
          nftData={nft}
          key={index}
        />
      ))}
    </div>
  );
};

export default Marketplace;
