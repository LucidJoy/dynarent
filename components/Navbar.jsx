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
      btnName='Connect'
      classStyles='mx-2 rounded-xl'
      handleClick={connectWallet}
    />
  );
};

const Navbar = () => {
  const { currentAccount } = useContext(DivvyContext);
  const { selectedBtn, setSelectedBtn } = useContext(NFTRentContext);
  let admin = true;
  const router = useRouter();
  const param = router.pathname;

  useEffect(() => {
    if (param === "/") {
      setSelectedBtn("");
    }
  }, []);

  return (
    <nav className='flex items-center justify-around w-screen fixed z-10 p-4 flex-row border-b dark:bg-nft-dark bg-white dark:border-nft-black-1 border-nft-gray-1'>
      {/* <div className="md:hidden flex justify-around"> */}
      <div className='rounded-md white-glassmorphism pt-3 pl-3 pr-3 pb-[0.35rem] hover:cursor-pointer'>
        <Link href='/'>
          <Image
            src={images.divvyLogo}
            objectFit='contain'
            width={32}
            height={32}
            alt='logo'
          />
        </Link>
      </div>
      <div className='ml-4 flex flex-row gap-[15px]'>
        <button
          className={`font-poppins text-[15px] transition-all duration-150 ease-in-out hover:scale-[1.05] ${
            selectedBtn === "marketplace" && "focus:text-[#eb7d42]"
          }`}
          onClick={() => {
            setSelectedBtn("marketplace");
            router.push("/marketplace");
          }}
        >
          <p>Marketplace</p>
        </button>

        <button
          className={`font-poppins text-[15px] transition-all duration-150 ease-in-out hover:scale-[1.05] ${
            selectedBtn === "mynfts" && "focus:text-[#eb7d42]"
          }`}
          onClick={() => {
            setSelectedBtn("mynfts");
            router.push("/mynfts");
          }}
        >
          <p>My NFTs</p>
        </button>

        <button
          className={`font-poppins text-[15px] transition-all duration-150 ease-in-out hover:scale-[1.05] ${
            selectedBtn === "rentednfts" && "focus:text-[#eb7d42]"
          }`}
          onClick={() => {
            setSelectedBtn("rentednfts");
            router.push("/rentednfts");
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
