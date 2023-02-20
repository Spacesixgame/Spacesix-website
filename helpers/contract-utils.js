import { useWeb3 } from "hooks/use-web3";

const web3 = useWeb3();

export const getContract = (abi, address) => {
  try {
    return new web3.eth.Contract(abi, address);
  } catch {
    console.log("err in contract");
  }
};
