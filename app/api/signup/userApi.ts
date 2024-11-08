import type { userSignin, userSignup } from "@/app/assets/types/userTypes";
import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const userAxios: AxiosInstance = axios.create({
  baseURL: apiUrl,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

const handleError = (error: AxiosError) => {
  console.log(error.response?.data || error?.message);
  throw error.response?.data || error?.message;
};

export const userSignupService = async (data: userSignup) => {
  try {
    const res: AxiosResponse = await userAxios.post("/api/auth/signup", data);
    return res?.data;
  } catch (error) {
    return handleError(error as AxiosError);
  }
};

export const userSigninService = async (data: userSignin) => {
  try {
    const res: AxiosResponse = await userAxios.post("/api/auth/signin", data);
    return res?.data;
  } catch (error) {
    return handleError(error as AxiosError);
  }
};
