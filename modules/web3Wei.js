import Web3 from "web3";

export function fromWei(number, unit) {
  return number ? Web3.utils.fromWei(number, unit) : 0;
}

export function toWei(number, unit) {
  return number ? Web3.utils.toWei(number, unit) : 0;
}

export function roundNumber(number, digits) {
  if (number === "") return "";
  var multiplier = Math.pow(10, 4),
    adjustedNum = number * multiplier,
    truncatedNum = Math[adjustedNum < 0 ? "ceil" : "floor"](adjustedNum);
  return truncatedNum / multiplier;
}

export function roundDecimal(value, precision) {
  var multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
}