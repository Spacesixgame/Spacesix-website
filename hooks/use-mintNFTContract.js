import {constants} from "config/globalConfig";
import { getContract } from "helpers/contract-utils";
import { mint_abi } from "config/abi/mint_abi";

const useMintNFTContract = () => {
  const { mintNFTAddress } = constants;
  let mintNFTContract = getContract(mint_abi, mintNFTAddress);

  return { mintNFTContract, mintNFTAddress };
};

export default useMintNFTContract;
