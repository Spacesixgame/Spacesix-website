import { mint_abi } from "config/abi/mintResources_abi";
import { constants } from "config/globalConfig";
import { getContract } from "helpers/contract-utils";

const useMintResourcesContract = () => {
  const { mintResourcesAddress } = constants;
  let mintResourcesContract = getContract(mint_abi, mintResourcesAddress);

  return { mintResourcesContract, mintResourcesAddress };
};

export default useMintResourcesContract;
