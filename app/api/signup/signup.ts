import type { userSignup } from "@/app/assets/userTypes";
import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const userAxios: AxiosInstance = axios.create({
  baseURL: apiUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

const handleError = (error: AxiosError) => {
  console.log(error.response?.data || error?.message);
};

const userSignup = async (data: userSignup) => {
  try {
    const res = await userAxios.post("/api/auth/signup", data);
    return res?.data;
  } catch (error) {
    return handleError(error as AxiosError);
  }
};
