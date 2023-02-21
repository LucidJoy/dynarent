/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

import { Button } from ".";
import { DivvyContext } from "../context/DivvyContext";
import NFTRentContext from "../context/NftRentContext";

import images from "../assets";

const ButtonGroup = ({ setActive, router, setIsOpen, isMobile }) => {
  const { connectWallet } = useContext(DivvyContext);

  return (
    <Button
      btnName="Connect"
      classStyles="mx-2 rounded-xl"
      handleClick={connectWallet}
    />
  );
};

const Navbar = () => {
  // const { currentAccount } = useContext(DivvyContext);
  const {
    selectedBtn,
    setSelectedBtn,
    fetchNfts,
    getNftDetailsByHash,
    getMarketplaceNfts,
    getMyRentedNfts,
    currentAccount,
    myNfts,
    marketplaceNfts,
    setRentedNfts,
    rentedNfts
  } = useContext(NFTRentContext);
  let admin = true;
  const router = useRouter();
  const param = router.pathname;

  useEffect(() => {
    if (param === "/") {
      setSelectedBtn("");
    }
  }, []);

  return (
    <nav className="flex items-center justify-around w-screen fixed z-10 p-4 flex-row border-b dark:bg-nft-dark bg-white dark:border-nft-black-1 border-nft-gray-1">
      {/* <div className="md:hidden flex justify-around"> */}
      <div className="rounded-md white-glassmorphism pt-3 pl-3 pr-3 pb-[0.35rem] hover:cursor-pointer">
        <Link href="/">
          <Image
            src={images.divvyLogo}
            objectFit="contain"
            width={32}
            height={32}
            alt="logo"
          />
        </Link>
      </div>
      <div className="ml-4 flex flex-row gap-[15px]">
        <button
          className={`font-poppins text-[15px] transition-all duration-150 ease-in-out hover:scale-[1.05] ${
            selectedBtn === "marketplace" && "focus:text-[#eb7d42]"
          }`}
          onClick={async () => {
            setSelectedBtn("marketplace");
            let result = await getMarketplaceNfts();
            console.log("Marketplace: ", result);
            router.push("/marketplace");
          }}
        >
          <p>Marketplace</p>
        </button>

        <button
          className={`font-poppins text-[15px] transition-all duration-150 ease-in-out hover:scale-[1.05] ${
            selectedBtn === "mynfts" && "focus:text-[#eb7d42]"
          }`}
          onClick={async () => {
            setSelectedBtn("mynfts");
            const data = await fetchNfts(currentAccount);
            console.log("Data: ", data);
            console.log("NFTs: ", myNfts);
            console.log("Rent: ", rentedNfts);
            router.push("/mynfts");
          }}
        >
          <p>My NFTs</p>
        </button>

        <button
          className={`font-poppins text-[15px] transition-all duration-150 ease-in-out hover:scale-[1.05] ${
            selectedBtn === "rentednfts" && "focus:text-[#eb7d42]"
          }`}
          onClick={async () => {
            setSelectedBtn("rentednfts");

            let result = await getMyRentedNfts(currentAccount);
            console.log("Rented: ", result);
            let res;
            let arrList = [];
            let name;

            result.map(async (hash, index) => {
              console.log(hash);
              res = await getNftDetailsByHash(hash);
              console.log(res.nftName);
              name = {
                nftName: res.nftName,
                chainName: res.chainName,
                price: Number(res.price),
                duration: Number(res.duration),
                tokenUri: res.tokenUri
              }

              arrList.push(name);
              // console.log("Hi ", response);
              // res.push(response);
            });

            setRentedNfts(arrList);
            console.log("Single Rented: ", arrList);
            router.push("/rentednfts");
            res = []
          }}
        >
          <p>Rented NFTs</p>
        </button>

        <ButtonGroup />
      </div>
      {/* </div> */}
    </nav>
  );
};

export default Navbar;
