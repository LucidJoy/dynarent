import Router from "next/router";
import React, {useContext} from "react";

import NFTRentContext from "../context/NftRentContext";

import {shortenAddress} from "../utils/shortenAddress"

const Button = ({ classStyles, btnName, moveTo, handleClick }) => {
  const {currentAccount} = useContext(NFTRentContext);
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {btnName === "Cancel" ? (
        <button
          type="button"
          onClick={() => {}}
          className={`border border-[#EC7F44] text-sm minlg:text-lg py-2 px-6 minlg:px-8 font-poppins font-semibold dark:text-white text-nft-black-1 ${classStyles}`}
        >
          {btnName}
        </button>
      ) : (
        <button
          type="button"
          onClick={() => {
            if (handleClick) {
              handleClick();
            } else {
              Router.push(`/${moveTo}`);
            }
          }}
          // onClick={handleClick}
          className={`nft-gradient text-sm minlg:text-lg px-6 py-2 minlg:px-8 font-poppins font-semibold text-nft-black-1 transition ease-in-out duration-300 hover:scale-105 ${classStyles} `}
        >
          {btnName == "Connect" && currentAccount ? shortenAddress(currentAccount) : btnName}
          {}
        </button>
      )}
    </>
  );
};

export default Button;
