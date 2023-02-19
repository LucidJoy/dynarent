import React, { useContext } from "react";
import Image from "next/image";

import nft1 from "../assets/nft1.png";
import { FormModal, Card } from "../components";
import NFTRentContext from "../context/NftRentContext";

const allNfts = () => {
  const { modal, cardId, setCardId, currentAccount, myNfts } = useContext(NFTRentContext);
  let arr = [1, 2, 3, 4, 5];

  const cardClick = (index) => setCardId(index);
  console.log("🍿", cardId);

  return (
    <>
      {modal && (
        <div className='fixed z-50 top-0 bottom-0 left-0 right-0 glassmorphism w-[100vw] h-[100vh] flex items-center justify-center'>
          <FormModal />
        </div>
      )}
      <div className='flex flex-row flex-wrap w-full'>
        {myNfts?.map((nft, index) => (
          <Card handleSetState={() => {
            setCardId(index)}} nftData = {nft}/>    
        ))}
      </div>
    </>
  );
};

export default allNfts;
