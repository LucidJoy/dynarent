import React, { useState, useEffect, createContext } from "react";
import { ethers } from "ethers";
import Web3Modal from "web3modal";

import Moralis from "moralis";
import { EvmChain } from "@moralisweb3/common-evm-utils";

// Moralis.default();

const NFTRentContext = createContext({});

import ContractJson from "./NFTRent.json";

const abi = ContractJson.abi;
const CONTRACT_ADDRESS = "0x0cFb71850fB1d2f5fB778F9f4AAF2F70FA8d05aC";
const MORALIS_API_KEY =
  "ea7RIctgYCrticyh409mE0xSQi8nby1hsbLkL4zfopadb6ett7i6mPTDfAeHRSRD";

export const NFTRentProvider = ({ children }) => {
  const [modal, setModal] = useState(false);
  const [cardId, setCardId] = useState(1);

  const [loading, setLoading] = useState(false);
  const [currentAccount, setCurrentAccount] = useState("");
  const [myRentedNfts, setMyRentedNfts] = useState([]);
  const [marketplaceNfts, setMarketplaceNfts] = useState([]);
  const [myNfts, setMyNfts] = useState([]);
  const [selectedBtn, setSelectedBtn] = useState("");

  let myAllNfts;

  const fetchNfts = async (address) => {
    try {
      await Moralis.start({
        apiKey: MORALIS_API_KEY,
        // ...and any other configuration
      });
    } catch (error) {
      console.log(error);
    }

    const allNFTs = [];

    const chains = [EvmChain.GOERLI, EvmChain.MUMBAI];

    for (const chain of chains) {
      const response = await Moralis.EvmApi.nft.getWalletNFTs({
        address,
        chain,
      });

      let item;
      // console.log(response.result);

      response.result.map((nft) => {
        item = {
          tokenHash: nft._data.tokenHash,
          tokenAddress: nft._data.tokenAddress._value,
          tokenId: nft._data.tokenId,
          tokenName: nft._data.name,
          tokenUri: nft._data.tokenUri,
          ownerOf: nft._data.ownerOf._value,
          chain: nft._data.chain._chainlistData.chain,
          chainName: nft._data.chain._chainlistData.name,
        };
        allNFTs.push(item);
      });

      // allNFTs.push(response);
    }

    console.log(allNFTs);
    return allNFTs;
  };

  const checkIfWalletIsConnected = async () => {
    try {
      if (!window.ethereum) return alert("Please install MetaMask.");

      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });

      if (accounts.length) {
        setCurrentAccount(accounts[0]);
      } else {
        console.log("No accounts found.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const connectWallet = async () => {
    if (!window.ethereum) return alert("Please install MetaMask.");

    // Fetch all the eth accounts------------------------------------here----------------
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    setCurrentAccount(accounts[0]);
  };

  useEffect(() => {
    try {
      checkIfWalletIsConnected();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const listToMarketplace = async (
    _nftHash,
    _nftAddress,
    _nftId,
    _nftName,
    _nftSymbol,
    _tokenUri,
    _nftMetadata,
    _price,
    _duration
  ) => {
    if (window.ethereum) {
      const web3Modal = new Web3Modal();
      const connection = await web3Modal.connect();
      const provider = new ethers.providers.Web3Provider(connection);
      const signer = provider.getSigner();

      const contract = new ethers.Contract(CONTRACT_ADDRESS, abi, signer);

      const txRes = await contract.listToMarketplace(
        _nftHash,
        _nftAddress,
        _nftId,
        _nftName,
        _nftSymbol,
        _tokenUri,
        _nftMetadata,
        _price,
        _duration,
        {
          gasLimit: 5000000,
        }
      );

      setLoading(true);
      await txRes.wait(1);
      setLoading(false);

      console.log(txRes);
    }
  };

  const rent = async (_nftHash, _renter) => {
    if (window.ethereum) {
      const web3Modal = new Web3Modal();
      const connection = await web3Modal.connect();
      const provider = new ethers.providers.Web3Provider(connection);
      const signer = provider.getSigner();

      const contract = new ethers.Contract(CONTRACT_ADDRESS, abi, signer);

      const txRes = await contract.rent(_nftHash, _renter, {
        gasLimit: 5000000,
      });

      setLoading(true);
      await txRes.wait(1);
      setLoading(false);

      console.log(txRes);
    }
  };

  const returnNft = async (_nftHash, _renter) => {
    if (window.ethereum) {
      const web3Modal = new Web3Modal();
      const connection = await web3Modal.connect();
      const provider = new ethers.providers.Web3Provider(connection);
      const signer = provider.getSigner();

      const contract = new ethers.Contract(CONTRACT_ADDRESS, abi, signer);

      const txRes = await contract.returnNft(_renter, _nftHash, {
        gasLimit: 5000000,
      });

      setLoading(true);
      await txRes.wait(1);
      setLoading(false);

      console.log(txRes);
    }
  };

  const getMarketplaceNfts = async () => {
    if (window.ethereum) {
      const web3Modal = new Web3Modal();
      const connection = await web3Modal.connect();
      const provider = new ethers.providers.Web3Provider(connection);
      const signer = provider.getSigner();

      const contract = new ethers.Contract(CONTRACT_ADDRESS, abi, provider);

      const txRes = await contract.getMarketplaceNfts();

      console.log(txRes);

      return txRes;
    }
  };

  const getMyRentedNfts = async (_renter) => {
    if (window.ethereum) {
      const web3Modal = new Web3Modal();
      const connection = await web3Modal.connect();
      const provider = new ethers.providers.Web3Provider(connection);
      const signer = provider.getSigner();

      const contract = new ethers.Contract(CONTRACT_ADDRESS, abi, provider);

      const txRes = await contract.getMyRentedNfts(_renter);

      console.log(txRes);

      return txRes;
    }
  };

  const getNftDetailsByHash = async (_nftHash) => {
    if (window.ethereum) {
      const web3Modal = new Web3Modal();
      const connection = await web3Modal.connect();
      const provider = new ethers.providers.Web3Provider(connection);
      const signer = provider.getSigner();

      const contract = new ethers.Contract(CONTRACT_ADDRESS, abi, provider);

      const txRes = await contract.getNftDetailsByHash(_nftHash);

      console.log(txRes);

      return txRes;
    }
  };

  const verify = async (_nftHash, _renter) => {
    if (window.ethereum) {
      const web3Modal = new Web3Modal();
      const connection = await web3Modal.connect();
      const provider = new ethers.providers.Web3Provider(connection);
      const signer = provider.getSigner();

      const contract = new ethers.Contract(CONTRACT_ADDRESS, abi, provider);

      const txRes = await contract.verify(_nftHash, _renter);

      console.log(txRes);

      return txRes;
    }
  };

  const getOwner = async (_nftHash, _renter) => {
    if (window.ethereum) {
      const web3Modal = new Web3Modal();
      const connection = await web3Modal.connect();
      const provider = new ethers.providers.Web3Provider(connection);
      const signer = provider.getSigner();

      const contract = new ethers.Contract(CONTRACT_ADDRESS, abi, provider);

      const txRes = await contract.getOwner();

      console.log(txRes);

      return txRes;
    }
  };

  const toggleModal = () => setModal(!modal);

  return (
    <NFTRentContext.Provider
      value={{
        toggleModal,
        modal,
        setModal,
        cardId,
        setCardId,
        currentAccount,
        selectedBtn,
        setSelectedBtn,
      }}
    >
      {children}
    </NFTRentContext.Provider>
  );
};

export default NFTRentContext;
