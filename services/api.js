import axios from "axios";
import { logout } from "store/auth-actions";
import tokenService from "./token.service";
import store from "store";
import { baseApiURL } from "config/globalConfig";

const instance = axios.create({
  baseURL: baseApiURL,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use((config) => {
  const token = tokenService.getAccessToken();
  config.headers.Authorization = token ? `Bearer ${token}` : "";

  return config;
});

instance.interceptors.response.use(
  (response) => {
    // do what ever you want with your response
    return response;
  },
  (error) => {
    //handle error
    if (
      error &&
      error.response &&
      (error.response.status === 401 || error.response.status === 403)
    ) {
      store.dispatch(logout());
    }
    return error;
  }
);
// };
// interceptors();

// instance.interceptors.request.use(function (config) {
//   const token = tokenService.getAccessToken();
//   config.headers.Authorization = token ? `Bearer ${token}` : "";

//   return config;
// });

// instance.interceptors.response.use(
//   (response) => {
//     console.log("response");
//     return response;
//   },
//   (error) => {
//     if (
//       error &&
//       error.response &&
//       (error.response.status === 401 || error.response.status === 403)
//     ) {
//       console.log("eror");
//       store.dispatch(logout());
//     }
//     return error;
//   }
// );

export default instance;
