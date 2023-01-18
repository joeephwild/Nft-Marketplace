//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

//Console functions to help debug the smart contract just like in Javascript
import "hardhat/console.sol";
//OpenZeppelin's NFT Standard Contracts. We will extend functions from this in our implementation
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract ANENFT is ERC721URIStorage {
    address owner;
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    Counters.Counter private _ItemsSold;

    uint256 listingPrice = 0.03 ether;

    constructor() ERC721("ANENFT", "ANT") {
        owner = payable(msg.sender);
    }

    struct listedToken {
        uint256 tokenId;
        address payable owner;
        address payable seller;
        uint256 price;
        bool currentlyListed;
    }

    mapping(uint256 => listedToken) private idToListedToken;

    modifier onlOwner() {
        require(owner == msg.sender, "only owner can call this function");
        _;
    }

    function updateListPrice(uint256 _listPrice) public payable {
        listingPrice = _listPrice;
    }

    function getListingPrice() public view returns (uint256) {
        return listingPrice;
    }

    function getLatestIdToken() public view returns (listedToken memory) {
        uint256 currentTokenId = _tokenIds.current();
        return idToListedToken[currentTokenId];
    }

    function getListedTokenId(uint256 tokenId)
        public
        view
        returns (listedToken memory)
    {
        return idToListedToken[tokenId];
    }

    function getCurrentTokenId() public view returns (uint256) {
        return _tokenIds.current();
    }

    function createToken(string memory tokenURI, uint256 price)
        public
        payable
        returns (uint256)
    {
        require(msg.value == listingPrice, "send enough ethers");
        require(price > 0, "make sure price is not a negative value");

        _tokenIds.increment();
        uint256 currentTokenId = _tokenIds.current();
        _safeMint(msg.sender, currentTokenId);

        _setTokenURI(currentTokenId, tokenURI);
        createListedToken(currentTokenId, price);
        return currentTokenId;
    }

    function createListedToken(uint256 tokenId, uint256 price) private {
        //Make sure the sender sent enough ETH to pay for listing
        require(
            msg.value == listingPrice,
            "Hopefully sending the correct price"
        );
        //Just sanity check
        require(price > 0, "Make sure the price isn't negative");
        idToListedToken[tokenId] = listedToken(
            tokenId,
            payable(address(this)),
            payable(msg.sender),
            price,
            true
        );
        _transfer(msg.sender, address(this), tokenId);
    }

    function getAllNfts() public view returns (listedToken[] memory) {
        uint256 nftCount = _tokenIds.current();
        listedToken[] memory tokens = new listedToken[](nftCount);

        uint256 currentIndex = 0;

        //at the moment currentlyListed is true for all, if it becomes false in the future we will
        //filter out currentlyListed == false over here
        for (uint256 i = 0; i < nftCount; i++) {
            uint256 currentId = i + 1;
            listedToken storage currentItem = idToListedToken[currentId];
            tokens[currentIndex] = currentItem;
            currentIndex += 1;
        }
        //the array 'tokens' has the list of all NFTs in the marketplace
        return tokens;
    }

    function getMyNFTs() public view returns (listedToken[] memory) {
        uint totalItemCount = _tokenIds.current();
        uint itemCount = 0;
        uint currentIndex = 0;
        
        //Important to get a count of all the NFTs that belong to the user before we can make an array for them
        for(uint i=0; i < totalItemCount; i++)
        {
            if(idToListedToken[i+1].owner == msg.sender || idToListedToken[i+1].seller == msg.sender){
                itemCount += 1;
            }
        }

        //Once you have the count of relevant NFTs, create an array then store all the NFTs in it
        listedToken[] memory items = new listedToken[](itemCount);
        for(uint i=0; i < totalItemCount; i++) {
            if(idToListedToken[i+1].owner == msg.sender || idToListedToken[i+1].seller == msg.sender) {
                uint currentId = i+1;
                listedToken storage currentItem = idToListedToken[currentId];
                items[currentIndex] = currentItem;
                currentIndex += 1;
            }
        }
        return items;
    }


    function executeSale(uint256 tokenId) public payable{
        uint price = idToListedToken[tokenId].price;
        require(msg.value == price, "pls submit the asking price before purchasing");
        address seller = idToListedToken[tokenId].seller;
        idToListedToken[tokenId].currentlyListed = true;
        _ItemsSold.increment();

        _transfer(address(this), msg.sender, tokenId);

        approve(address(this), tokenId);

        payable(owner).transfer(listingPrice);
        payable(seller).transfer(msg.value);
    }
}
