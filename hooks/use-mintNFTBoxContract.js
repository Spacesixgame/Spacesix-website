import { mint_abi } from "config/abi/mintNFTBox_abi";
import { constants } from "config/globalConfig";
import { getContract } from "helpers/contract-utils";

const useMintNFTBoxContract = () => {
  const { mintNFTBoxAddress } = constants;
  let mintNFTBoxContract = getContract(mint_abi, mintNFTBoxAddress);

  return { mintNFTBoxContract, mintNFTBoxAddress };
};

export default useMintNFTBoxContract;
