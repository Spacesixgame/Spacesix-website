import useMintNFTBoxContract from "./use-mintNFTBoxContract";
import useMintNFTContract from "./use-mintNFTContract";
import useMintResourcesContract from "./use-mintResources";
import useMintSegmentNFTContract from "./use-mintSegmentNFTContract";
import useMintSpaceshipNFTContract from "./use-mintSpaceshipNFTContract";

const useContract = () => {
  const getMintContract = async (category) => {
    if (category) {
      if (category === "spaceship") {
        const { mintSpaceshipNFTContract } = useMintSpaceshipNFTContract();
        return {
          mintContract: mintSpaceshipNFTContract,
        };
      } else if (category === "segment") {
        const { mintSegmentContract } = useMintSegmentNFTContract();
        return {
          mintContract: mintSegmentContract,
        };
      } else if (category === "box") {
        const { mintNFTBoxContract } = useMintNFTBoxContract();
        return {
          mintContract: mintNFTBoxContract,
        };
      } else if (category === "resources") {
        const { mintResourcesContract } = useMintResourcesContract();
        return {
          mintContract: mintResourcesContract,
        };
      } else {
        const { mintNFTContract } = useMintNFTContract();
        return {
          mintContract: mintNFTContract,
        };
      }
    }
  };

  const getMintAddress = async (category) => {
    if (category) {
      if (category === "spaceship") {
        const { mintSpaceshipNFTAddress } = useMintSpaceshipNFTContract();
        return {
          mintAddress: mintSpaceshipNFTAddress,
        };
      } else if (category === "segment") {
        const { mintSegmentNFTAddress } = useMintSegmentNFTContract();
        return {
          mintAddress: mintSegmentNFTAddress,
        };
      } else if (category === "box") {
        const { mintNFTBoxAddress } = useMintNFTBoxContract();
        return {
          mintAddress: mintNFTBoxAddress,
        };
      } else if (category === "resources") {
        const { mintResourcesAddress } = useMintResourcesContract();
        return {
          mintAddress: mintResourcesAddress,
        };
      } else {
        const { mintNFTAddress } = useMintNFTContract();
        return {
          mintAddress: mintNFTAddress,
        };
      }
    }
  };

  // const getStakeAddress = async (category) => {
  //   if (category) {
  //     if (category === "spaceship") {
  //       const { stakeContract, stakeAddress } = useStakeContract();
  //       const { stakeSpaceshipContract, stakeSpaceshipAddress } =
  //         useStakeSpaceshipContract(); // for stake spaceships
  //       const { mintSpaceshipNFTAddress } = useMintSpaceshipNFTContract();
  //       return {
  //         mintAddress: mintSpaceshipNFTAddress,
  //       };
  //     } else if (category === "segment") {
  //       const { mintSegmentNFTAddress } = useMintSegmentNFTContract();
  //       return {
  //         mintAddress: mintSegmentNFTAddress,
  //       };
  //     } else {
  //       const { mintNFTAddress } = useMintNFTContract();
  //       return {
  //         mintAddress: mintNFTAddress,
  //       };
  //     }
  //   }
  // };

  return {
    getMintAddress,
    getMintContract,
  };
};

export default useContract;
