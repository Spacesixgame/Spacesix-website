import { mint_abi } from "config/abi/mintSegment_abi";
import { constants } from "config/globalConfig";
import { getContract } from "helpers/contract-utils";

const useMintSegmentNFTContract = () => {
  const { mintSegmentNFTAddress } = constants;
  let mintSegmentContract = getContract(mint_abi, mintSegmentNFTAddress);

  return { mintSegmentContract, mintSegmentNFTAddress };
};

export default useMintSegmentNFTContract;
