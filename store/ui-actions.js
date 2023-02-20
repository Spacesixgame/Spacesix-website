import axios from "axios";

export const fetchData = (url) => {
  return async (dispatch) => {
    return await axios.get(url).then((res) => {
      return res.data;
    });
  };
};

export const formatAddress = (address, padding) => {
  return (dispatch) => {
    if (address && address.length > 0) {
      return `${address.substr(0, padding + 2)}…${address.substr(
        padding * -1
      )}`;
    } else {
      return address;
    }
  };
};
