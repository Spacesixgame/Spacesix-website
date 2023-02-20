import {constants} from "config/globalConfig";
import { getContract } from "helpers/contract-utils";
import { stake_abi } from "config/abi/stake_abi"; //main

const useStakeContract = () => {
  const { stakeAddress } = constants;
  let stakeContract = getContract(stake_abi, stakeAddress);

  return {stakeContract,stakeAddress};
};

export default useStakeContract;
