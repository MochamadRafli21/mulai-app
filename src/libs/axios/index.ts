import axios from 'axios';
import Cookie from 'js-cookie';
const axiosInterceptorInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API,
});


axiosInterceptorInstance.interceptors.request.use(
  (config) => {

    const accessToken = Cookie.get("accessToken");

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);



axiosInterceptorInstance.interceptors.response.use(
  (response) => response,
  (error) => {

    if (error.response.status == 401) {
      Cookie.remove("accessToken");
      Cookie.remove("expiresAt");
      window.location.href = "/login";
      return Promise.reject(error);
    }

    return Promise.reject(error);
  }
);

export default axiosInterceptorInstance;
