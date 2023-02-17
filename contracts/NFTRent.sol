// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

contract NFTRent {

    address payable owner;

    constructor() {
        owner = payable(msg.sender);
    }

    // NFT struct
    struct NftData {
        string nftHash;
        address nftddress;
        string nftId;
        string nftName;
        string nftSymbol;
        string tokenUri;
        string nftMetadata;
        address owner;
        uint256 price;
        uint256 duration;
    }

    NftData[] marketplaceNfts;

    // Mapping 
    mapping (address => mapping(string => bool)) public isRented;

    // My NFTs that I rented to others
    mapping (string => NftData[]) public myNfts;


    mapping (string => bool) public isListedMarketplace;

    mapping (address => string[]) public myRentedNfts;
    mapping (string => NftData) public nftDetails;

    

    // List NFT to marketplace
    function listToMarketplace(string memory _nftHash, address _nftAddress, string memory _nftId, string memory _nftName, string memory _nftSymbol, string memory _tokenUri, string memory _nftMetadata, uint256 _price, uint256 _duration) external {
        NftData memory newListing = NftData(_nftHash, _nftAddress, _nftId, _nftName, _nftSymbol, _tokenUri, _nftMetadata, msg.sender, _price, _duration);

        marketplaceNfts.push(newListing);
        isListedMarketplace[_nftHash] = true;
    }

    function getMarketplaceNfts() external view returns (NftData[] memory) {
        return marketplaceNfts; // returns array of all the NFTs in the marketplace
    }

    function rent(string memory _nftHash, address _user) external {
        myRentedNfts[_user].push(_nftHash); // will be used to fetch all the NFTs rented by the user
        isRented[_user][_nftHash] = true; // will be used in verification
        isListedMarketplace[_nftHash] = false;
    }

    function getMyRentedNfts(address _user) external view returns (string[] memory) {
        return myRentedNfts[_user];  // returns an array of all the nft hashes {maine kya kya dusro se rent kiya h}
    }

    function getNftDetailsByHash(string memory _nftHash) external view returns(NftData memory) {
        return nftDetails[_nftHash];  // returns the details of the nfts using the hash
    }

    // Chainlink automation

    function returnNft(address _user, string memory _nftHash) external {
        require(nftDetails[_nftHash].owner == msg.sender, "Only the owner of the NFT can execute this function");
        isRented[_user][_nftHash] = false;
    }


    // Verify NFT
    function verify(string memory _nftHash, address _user) view external returns(bool) {
        return isRented[_user][_nftHash];  // returns true or false to verify if the nft is rented or not
    }

    function getOwner() view external returns(address) {
        return owner;
    }

}