import Web3 from "web3";

export function useWeb3() {
  const web3 = new Web3(Web3.givenProvider);
  return web3;
}
