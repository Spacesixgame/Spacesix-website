import {constants} from "config/globalConfig";
import { getContract } from "helpers/contract-utils";
import { busd_abi } from "config/abi/BUSD_abi";
// import { busd_abi } from "config/abi/BUSD_abi";


const useBUSDContract = () => {
  const { BUSDAddress } = constants;
  let contract = getContract(busd_abi, BUSDAddress);
  return contract;
};

export default useBUSDContract;
