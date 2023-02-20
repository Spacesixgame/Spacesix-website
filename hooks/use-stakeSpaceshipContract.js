import { constants } from "config/globalConfig";
import { getContract } from "helpers/contract-utils";
import { stake_abi } from "config/abi/stake_spaceship_abi";

const useStakeSpaceshipContract = () => {
  const { stakeSpaceshipAddress } = constants;
  let stakeSpaceshipContract = getContract(stake_abi, stakeSpaceshipAddress);

  return { stakeSpaceshipContract, stakeSpaceshipAddress };
};

export default useStakeSpaceshipContract;
