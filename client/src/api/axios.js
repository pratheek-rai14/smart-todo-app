import axios from "axios";

export default axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

// Add token authomatically to every request 
API.interceptors.request.use((req) => {
  const userInfo = JSON.parse(
    localStorage.getItem("userInfo")
  );

  if (userInfo?.token) {
    req.headers.Authorization = `Bearer ${userInfo.token}`;
  }

  return req;
});

export default API;

