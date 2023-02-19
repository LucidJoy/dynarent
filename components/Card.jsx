import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";

import nft1 from "../assets/nft1.png";
import NFTRentContext from "../context/NftRentContext";

const Card = ({ handleSetState, nftData }) => {
  const { toggleModal,setNftDescription, image, setImage, apiResult, setApiResult, setNftHash, setNftAddress,setNftId,setNftName,setTokenUri,setNftPrice, setNftDuration,setNftChainName   } = useContext(NFTRentContext);

  const handleModal = () => {
    handleSetState();
    toggleModal();
  };

  useEffect(() => {
    const func = async () => {
      console.log(nftData.tokenUri);
      const result = await axios(`https://the-tommorow-times.revise.link/1`);
      setApiResult(result);
      console.log(result);
      setImage(result.data.image);

    }

    func();
  }, [])
  

  return (
    <div className='px-[30px] my-[50px] font-poppins'>
      <div className='card w-[300px] bg-nft-black-3 shadow-xl h-fit'>
        <figure>
          <Image src={nft1} alt='Shoes' className='rounded-t-[30px]' />
        </figure>
        <div className='card-body p-[20px] text-[15px]'>
          <p>Name: {nftData.tokenName}</p>
          <p>Description: {apiResult.data?.description}</p>
          <p>Damage: {nftData.tokenName}</p>
          <p>Chain: {nftData.chainName}</p>
          <div className='card-actions justify-center w-full mt-[10px]'>
            <button
              className='btn w-full hover:border hover:border-[#EC7F44] transition-all duration-150 ease-in-out'
              onClick={() =>{
                 handleModal()
                setNftHash(nftData.tokenHash)
                setNftAddress(nftData.tokenAddress)
                setNftId(nftData.tokenId)
                setNftName(nftData.tokenName)
                setTokenUri(nftData.tokenUri)
                setNftChainName(nftData.chainName)
                setNftDescription(apiResult.data?.description)
                }}
            >
              List
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
