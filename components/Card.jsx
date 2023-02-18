import React, { useContext } from "react";
import Image from "next/image";

import nft1 from "../assets/nft1.png";
import NFTRentContext from "../context/NftRentContext";

const Card = ({ handleSetState }) => {
  const { toggleModal } = useContext(NFTRentContext);

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
          <div className='card-actions justify-center w-full mt-[10px]'>
            <button
              className='btn w-full hover:border hover:border-[#EC7F44] transition-all duration-150 ease-in-out'
              onClick={() => handleModal()}
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
