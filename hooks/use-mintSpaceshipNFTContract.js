import { mint_abi } from "config/abi/mintSpaceship_abi";
import { constants } from "config/globalConfig";
import { getContract } from "helpers/contract-utils";

const useMintSpaceshipNFTContract = () => {
  const { mintSpaceshipNFTAddress } = constants;
  let mintSpaceshipNFTContract = getContract(mint_abi, mintSpaceshipNFTAddress);

  return { mintSpaceshipNFTContract, mintSpaceshipNFTAddress };
};

export default useMintSpaceshipNFTContract;
