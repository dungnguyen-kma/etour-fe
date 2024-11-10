"use client";

import { Checkbox } from "flowbite-react";
import Link from "next/link";
import { useState } from "react";
import { userSignin, userSignup } from "../assets/types/userTypes";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { userSigninService } from "../api/signup/userApi";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialState: userSignin = {
  user_name: "",
  password: "",
};

export default function Signin() {
  const [formData, setFormData] = useState(initialState);
  const [isCheckedRemember, setIscheckedRemember] = useState(false);

  const queryClient = useQueryClient();

  const signinMutation = useMutation({
    mutationFn: (formData: userSignin) => userSigninService(formData),
    onSuccess: (data) => {
      toast.success("successfully Signin");
    },
    onError: (err: any) => {
      toast.error("" + err?.detail);
    },
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    signinMutation.mutate(formData);
    setFormData(initialState);
  };
  return (
    <div className="max-w-screen-sm mx-auto">
      <ToastContainer />
      <div className="max-w-xl mx-auto mb-8">
        <h1 className="text-xl lg:text-3xl text-left italic font-bold text-white mt-5 mb-2.5">
          Sign in to Challonge
        </h1>
        <p className="text-[#737373] text-sm lg:text-base mb-2.5">
          Welcome back! Please enter your details
        </p>
      </div>
      <form
        className=" mx-auto max-w-xl flex flex-col gap-5"
        onSubmit={handleSubmit}
      >
        <div className="relative">
          <input
            type="text"
            id="user_name"
            name="user_name"
            className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-white bg-[#2a2a2a] rounded-sm border border-[#2a2a2a] appearance-none hover:border-[#f3732966] focus:border-[#f37329e6] focus:outline-none peer"
            placeholder=" "
            onChange={handleInputChange}
            value={formData?.user_name || ""}
            required
          />
          <label
            htmlFor="user_name"
            className="absolute text-sm text-[#999] duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg[#2a2a2a] px-2 peer-focus:px-2 peer-focus:bg-[#2a2a2a] peer-focus:text-[#999] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1.5 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
          >
            User name
          </label>
        </div>
        <div className="relative">
          <input
            type="password"
            id="password"
            name="password"
            className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-white bg-[#2a2a2a] rounded-sm border border-[#2a2a2a] appearance-none hover:border-[#f3732966] focus:border-[#f37329e6] focus:outline-none peer"
            placeholder=" "
            onChange={handleInputChange}
            value={formData?.password || ""}
            required
          />
          <label
            htmlFor="password"
            className="absolute text-sm text-[#999] duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg[#2a2a2a] px-2 peer-focus:px-2 peer-focus:bg-[#2a2a2a] peer-focus:text-[#999] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1.5 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
          >
            Password
          </label>
        </div>
        <div className="relative flex flex-row gap-3">
          <Checkbox
            id="register-as-team"
            className="my-auto"
            theme={{
              root: {
                base: "h-4 w-4 rounded border border-gray-600 bg-[#2a2a2a] focus:ring-0 focus:ring-offset-0",
                color: {
                  default:
                    "text-[#f37329] bg-[#2a2a2a] border-gray-600 checked:border-transparent",
                },
              },
            }}
            checked={isCheckedRemember}
            onChange={() => setIscheckedRemember(!isCheckedRemember)}
          />
          <label htmlFor="register-as-team" className="text-base text-white">
            Remember user name
          </label>
        </div>
        <button
          type="submit"
          className="text-white bg-[#f8844a] hover:bg-[#f3752c] w-full font-bold rounded-full italic px-10 py-2.5 text-center"
        >
          Sign In
        </button>
      </form>
      <div className="max-w-xl text-white mx-auto my-5 flex flex-row items-center text-center before:content-[''] before:w-full before:h-px before:block before:bg-[#404040] before:my-0 before:mr-2 after:content-[''] after:w-full after:h-px after:block after:bg-[#404040] after:my-0 after:ml-2">
        Or
      </div>
      <Link href={"/signup"} className="mx-auto flex justify-center">
        <button className="max-w-xl text-white bg-[#666666] hover:bg-[#555] w-full font-bold rounded-full italic px-10 py-2.5 text-center">
          Sign Up
        </button>
      </Link>
    </div>
  );
}
