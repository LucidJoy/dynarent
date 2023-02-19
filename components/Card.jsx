import React, { useContext } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import nft1 from "../assets/nft1.png";
import NFTRentContext from "../context/NftRentContext";

const Card = ({ handleSetState }) => {
  const { toggleModal, selectedBtn, setSelectedBtn } =
    useContext(NFTRentContext);

  const router = useRouter();
  const path = router.pathname;

  const handleModal = () => {
    handleSetState();
    toggleModal();
  };

  return (
    <div className='px-[30px] my-[50px] font-poppins'>
      <div className='card w-[300px] bg-nft-black-3 shadow-xl h-fit'>
        <figure>
          <Image src={nft1} alt='Shoes' className='rounded-t-[30px]' />
        </figure>
        <div className='card-body p-[20px] text-[15px]'>
          <p>Name: </p>
          <p>Description: </p>
          <p>Damage: </p>
          <p>Durability: </p>
          {path !== "/rentednfts" && (
            <div className='card-actions justify-center w-full mt-[10px]'>
              {path === "/mynfts" ? (
                <button
                  className='btn w-full hover:border hover:border-[#EC7F44] transition-all duration-150 ease-in-out'
                  onClick={() => handleModal()}
                >
                  List
                </button>
              ) : (
                <button
                  className='btn w-full hover:border hover:border-[#EC7F44] transition-all duration-150 ease-in-out'
                  onClick={() => handleModal()}
                >
                  Rent
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
