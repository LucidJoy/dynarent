import React, { useContext } from "react";
import Image from "next/image";

import nft1 from "../assets/nft1.png";
import NFTRentContext from "../context/NftRentContext";

const FormModal = () => {
  const { toggleModal, listToMarketplace, cardId, nftHash, nftAddress, nftDescription,nftId,nftName,tokenUri,nftPrice, nftDuration, nftChainName   } = useContext(NFTRentContext);

  return (
    <div>
      <div className='bg-nft-black-3 w-[950px] h-[500px] rounded-[20px] px-[30px] py-[30px]  '>
        <div className='flex flex-col items-center w-full h-full gap-[15px]'>
          <div className='flex flex-row w-full gap-[30px]'>
            <Image
              src={nft1}
              className='object-cover rounded-[10px]'
              width={160}
              height={160}
            />

            <div className='flex flex-col font-poppins justify-between py-[5px]'>
              <p className='text-nft-gray-1 text-[16px] font-medium'>Name: {nftName}</p>
              <p className='text-nft-gray-1 text-[16px] font-medium'>
                Description: {nftDescription}
              </p>
              <p className='text-nft-gray-1 text-[16px] font-medium'>Damage:</p>
              <p className='text-nft-gray-1 text-[16px] font-medium'>
                Durability:
              </p>
              <p className='text-nft-gray-1 text-[16px] font-medium'>
                Chain: {nftChainName}
              </p>
            </div>
          </div>

          <div className='flex flex-col gap-[3px] items-start justify-start w-full'>
            <div className='flex items-center'>
              <label
                htmlFor='platform'
                className='font-poppins text-[13px] font-normal text-[#989898]'
              >
                Type of renting
              </label>
            </div>

            <div className='w-[250px] h-[40px]'>
              <select
                name=''
                id=''
                className='w-full h-full px-[16px] bg-nft-black-2 text-white  rounded-[5px] outline-none font-poppins text-[15px] '
                // onChange={(e) => {
                //   setCurrTokenIndex(e.target.value);
                // }}
              >
                <option value='stream'>Stream</option>
                <option value='onetime'>One Time</option>
              </select>
            </div>
          </div>

          <div className='flex flex-row items-center justify-start w-full'>
            <div className='flex flex-col gap-[3px] items-start w-full -mr-[300px]'>
              <div className='flex items-center'>
                <label
                  htmlFor='platform'
                  className='font-poppins text-[13px] font-normal text-[#989898]'
                >
                  Initial fee (fdaix)
                </label>
              </div>

              <div className='w-[250px] h-[40px]'>
                <input
                  type='number'
                  min={0}
                  id='name'
                  className='w-full h-[40px] bg-nft-black-2 font-poppins rounded-[5px] py-[15px] px-[16px] placeholder:text-[16px] placeholder:text-[#fffcfc33] outline-none text-white placeholder:font-poppins text-[15px]'
                  placeholder=''
                  // onChange={(e) => setErc721ContractAddress(e.target.value)}
                />
              </div>
            </div>

            <div className='flex flex-col gap-[3px] items-start justify-start w-full'>
              <div className='flex items-center'>
                <label
                  htmlFor='platform'
                  className='font-poppins text-[13px] font-normal text-[#989898]'
                >
                  Max no. of days you want to rent (days)
                </label>
              </div>

              <div className='w-[250px] h-[40px]'>
                <input
                  type='number'
                  min={0}
                  id='name'
                  className='w-full h-[40px] bg-nft-black-2 font-poppins rounded-[5px] py-[15px] px-[16px] placeholder:text-[16px] placeholder:text-[#fffcfc33] outline-none text-white placeholder:font-poppins text-[15px]'
                  placeholder=''
                  // onChange={(e) => setErc721ContractAddress(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className='flex flex-row items-center justify-start w-full'>
            <div className='flex flex-col gap-[3px] items-start justify-start w-full'>
              <div className='flex items-center'>
                <label
                  htmlFor='platform'
                  className='font-poppins text-[13px] font-normal text-[#989898]'
                >
                  Attribute in focus
                </label>
              </div>

              <div className='w-[250px] h-[40px]'>
                <input
                  type='text'
                  min={0}
                  id='name'
                  className='w-full h-[40px] bg-nft-black-2 font-poppins rounded-[5px] py-[15px] px-[16px] placeholder:text-[16px] placeholder:text-[#fffcfc33] outline-none text-white placeholder:font-poppins text-[15px]'
                  placeholder=''
                  // onChange={(e) => setErc721ContractAddress(e.target.value)}
                />
              </div>
            </div>

            <div className='flex flex-col gap-[3px] items-start justify-start w-full'>
              <div className='flex items-center'>
                <label
                  htmlFor='platform'
                  className='font-poppins text-[13px] font-normal text-[#989898]'
                >
                  Flowrate after 1st decrease (fdaix/sec)
                </label>
              </div>

              <div className='w-[250px] h-[40px]'>
                <input
                  type='text'
                  min={0}
                  id='name'
                  className='w-full h-[40px] bg-nft-black-2 font-poppins rounded-[5px] py-[15px] px-[16px] placeholder:text-[16px] placeholder:text-[#fffcfc33] outline-none text-white placeholder:font-poppins text-[15px]'
                  placeholder=''
                  // onChange={(e) => setErc721ContractAddress(e.target.value)}
                />
              </div>
            </div>

            <div className='flex flex-col gap-[3px] items-start justify-start w-full'>
              <div className='flex items-center'>
                <label
                  htmlFor='platform'
                  className='font-poppins text-[13px] font-normal text-[#989898]'
                >
                  Increase in flowrate on reduction of attribute
                </label>
              </div>

              <div className='w-[250px] h-[40px]'>
                <select
                  name=''
                  id=''
                  className='w-full h-full px-[16px] bg-nft-black-2 text-white  rounded-[5px] outline-none font-poppins text-[15px] '
                  // onChange={(e) => {
                  //   setCurrTokenIndex(e.target.value);
                  // }}
                >
                  <option value='linear'>Linear</option>
                  <option value='exponential'>Exponential</option>
                </select>
              </div>
            </div>
          </div>

          <div className='flex items-center justify-center'>
            <button
              className='mt-[10px] min-w-[100px] nft-gradient text-sm minlg:text-lg px-6 py-2 minlg:px-8 font-poppins font-semibold text-nft-black-1 transition ease-in-out duration-300 hover:scale-105 rounded-[10px]'
              onClick={async () => {
                toggleModal();
                const res = await listToMarketplace(nftHash, nftAddress, nftId, nftName, tokenUri, "10", "2", nftChainName);
                console.log(res);
              }}
            >
              List
            </button>
          </div>
        </div>

        <div className='flex items-center justify-center mt-[50px] mb-[20px]'>
          <button
            className='mb-[20px] border-[2px] border-[#EC7F44] text-sm minlg:text-lg py-2 px-6 minlg:px-8 font-poppins font-semibold text-white bg- rounded-[10px] hover:bg-[#EC7F44] hover:text-nft-black-1 transition-all duration-150 ease-in-out'
            onClick={() => toggleModal()}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormModal;
