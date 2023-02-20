export const constants =
  process.env.NEXT_PUBLIC_MODE === "STAGE" || process.env.NEXT_PUBLIC_MODE === "PRODUCTION"
    ? {
        chainId: 56, //main
        BUSDAddress: "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56", //main
        mintNFTAddress: "0xcB9ed56dB9960aa9ea305a1A2776e7eF64aa34d3", //main
        mintSpaceshipNFTAddress: "0xa47cf3CE42C2045e071f1119e3e305ef1638a20A", //main
        mintSegmentNFTAddress: "0x7FE1a9e8ac319bb886BA249a8e9496CA5ddF4776", //main
        mintNFTBoxAddress: "0x40a5Fc85D02561dF5fAC18FCFb86Bcd26b26b8Cb", //main
        stakeAddress: "0xdD673e7693D57ff4360f73f28978290201Af4F76", //main
        stakeSpaceshipAddress: "0x771cD662328C633A0c58735F34262070a03EE8Db", //main
        rpc: "https://bsc-dataseed1.binance.org",
      }
    : {
        chainId: 97, //test //97
        BUSDAddress: "0x04E52952d50B84363E856649db1b7941acc0C15F", //test
        mintNFTAddress: "0x33Ed3336Cb2Bf0CdDA5EAE7C336bdfC649F2a77d", //test
        mintSpaceshipNFTAddress: "0x1d82B13322A9024F866cb8b8EDa20A83D5750430", //test
        mintSegmentNFTAddress: "0x0B1916ce30639704D9323c72109B683814FD871E", //test
        mintNFTBoxAddress: "0xDa1b866220FB49021A426504F0d53a1b071604bE", //test
        mintResourcesAddress: "0x1031Da8cF0e62Eb7A6AB9dfa8954cb5cCf10e1a2", //test
        stakeAddress: "0x7Ce165a79B043fd77Fe35B2DDbd93DFd30644E7E", //test
        stakeSpaceshipAddress: "0x35cfAFcfdF52D2669855aC5c937F126a331E8672", //test
        rpc: "https://data-seed-prebsc-1-s1.binance.org:8545",
      };

export const baseApiURL =
  process.env.NEXT_PUBLIC_MODE === "PRODUCTION"
    ? "https://api.spacesix.io/api/v1/"
    : process.env.NEXT_PUBLIC_MODE === "STAGE"
    ? "https://api-stage.spacesix.io/api/v1/"
    : "https://api-dev.spacesix.io/api/v1/";
