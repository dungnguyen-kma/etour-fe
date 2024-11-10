"use client";

import Link from "next/link";
import { useState } from "react";
import { userSignup } from "../assets/types/userTypes";
import {
  validateName,
  validateEmail,
  validatePhoneNumber,
} from "../assets/ultis/validateForm";
import { Datepicker, Dropdown } from "flowbite-react";
import { convertNowToYYYYMMDD } from "../assets/ultis/formatDate";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { userSignupService } from "../api/signup/userApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import {
  USER_SEX_CONTANST,
  USER_SEX_LIST,
} from "../assets/constants/userConstants";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialState: userSignup = {
  user_name: "",
  fullname: "",
  sex: 0,
  email: "",
  cellphone: 0,
  dob: "",
  password: "",
  address: "",
  address2: "",
};

export default function Signup() {
  const [formData, setFormData] = useState<userSignup>(initialState);
  const [retypePassword, setRetypePassword] = useState("");

  const queryClient = useQueryClient();

  const signupMutation = useMutation({
    mutationFn: (formData: userSignup) => userSignupService(formData),
    onSuccess: (data) => {
      toast.success("successfully registered!");
      queryClient.setQueryData(["user"], data);
    },
    onError: (err:any) => {
      toast.error("" + err?.detail);
    },
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    if (name === "cellphone") {
      setFormData((prev: any) => ({ ...prev, [name]: Number(value) }));
    }
    setFormData((prev: any) => ({ ...prev, [name]: value }));
  };

  const handleSexSelection = (selectedSex: number) => {
    setFormData((prev) => ({ ...prev, sex: selectedSex }));
  };

  const handleDateChange = (selectedDate: Date) => {
    setFormData((prev: any) => ({
      ...formData,
      dob: convertNowToYYYYMMDD(selectedDate),
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    signupMutation.mutate(formData);
    setFormData(initialState);
    setRetypePassword("");
  };

  return (
    <div className="w-full max-w-[2200px] bg-[rgb(50,50,50)] my-0 mx-auto">
      <div className="flex flex-row items-start py-12 bg-[url(https://assets.challonge.com/assets/redesign/section-background.png)] bg-no-repeat">
        <div className="px-4 lg:px-10 flex-grow min-h-[calc(100vh-48px)] max-w-[100vw]">
          <div className="content-wrapper max-w-screen-sm mx-auto">
            <div className="header max-w-xl mx-auto mb-8">
              <h1 className="text-xl lg:text-3xl text-left italic font-bold text-white mt-5 mb-2.5">
                Sign up for Challonge
              </h1>
              <p className="text-[#737373] text-base lg:text-base mb-2.5">
                Get started easily by signing up to manage your tournaments and
                events!
              </p>
              {signupMutation.isSuccess && (
                <p className="text-black p-1 rounded-sm bg-white text-base lg:text-base mb-2.5">
                  You successfully registered. Please check your email{" "}
                  <span className="italic text-green-500">
                    {formData?.email || "example@gmail.com"}
                  </span>{" "}
                  in order to proceed with Account setup. That email may be in
                  the spam folder.
                </p>
              )}
            </div>
            <form
              className=" mx-auto max-w-xl flex flex-col gap-5"
              onSubmit={handleSubmit}
            >
              <div className="relative">
                <input
                  type="text"
                  id="username"
                  name="user_name"
                  className="block px-2.5 pb-2.5 pt-4 w-full text-base text-white bg-[#2a2a2a] rounded-sm border border-[#2a2a2a] appearance-none hover:border-[#f3732966] focus:border-[#f37329e6] focus:outline-none peer"
                  required
                  maxLength={16}
                  onChange={handleInputChange}
                  value={formData?.user_name || ""}
                />
                <label
                  htmlFor="username"
                  className="absolute text-base text-[#999] duration-300 transform -translate-y-3 scale-75 top-2 origin-[0] bg[#2a2a2a] px-2 peer-focus:px-2 peer-focus:bg-[#2a2a2a] peer-focus:text-[#999] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1.5 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  User name
                </label>
              </div>
              <div className="relative">
                <input
                  type="text"
                  id="fullname"
                  name="fullname"
                  className="block px-2.5 pb-2.5 pt-4 w-full text-base text-white bg-[#2a2a2a] rounded-sm border border-[#2a2a2a] appearance-none hover:border-[#f3732966] focus:border-[#f37329e6] focus:outline-none peer"
                  required
                  maxLength={64}
                  onChange={handleInputChange}
                  value={formData?.fullname || ""}
                />
                <label
                  htmlFor="fullname"
                  className="absolute text-base text-[#999] duration-300 transform -translate-y-3 scale-75 top-2 origin-[0] bg[#2a2a2a] px-2 peer-focus:px-2 peer-focus:bg-[#2a2a2a] peer-focus:text-[#999] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1.5 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  Full name
                </label>
                {validateName(formData?.fullname) && (
                  <p className="text-red-500 text-xs mt-1">
                    Tên không được chứa số hoặc ký tự đặc biệt!
                  </p>
                )}
              </div>
              <div className="relative">
                <Datepicker
                  id="dateofbirth"
                  name="dob"
                  className="w-full text-base text-white bg-[#2a2a2a] rounded-sm border border-[#2a2a2a] appearance-none hover:border-[#f3732966] focus:border-[#f37329e6] focus:outline-none peer"
                  onChange={() => handleDateChange}
                  required
                  value={
                    formData.dob
                      ? new Date(formData.dob)
                      : undefined || new Date()
                  }
                ></Datepicker>
                <label
                  htmlFor="dateofbirth"
                  className="absolute text-base text-[#999] bg-[#2a2a2a] duration-300 transform -translate-y-6 scale-75 top-2 origin-[0] bg[#2a2a2a] px-2 peer-focus:px-2 peer-focus:bg-[#2a2a2a] peer-focus:text-[#999] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1.5 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  Date of birth
                </label>
              </div>
              <div className="relative">
                <Dropdown
                  dismissOnClick={true}
                  renderTrigger={() => (
                    <button
                      type="button"
                      className="w-full text-left px-2.5 py-4 text-sm text-white bg-[#2a2a2a] rounded-sm border border-[#2a2a2a] hover:border-[#f3732966] focus:border-[#f37329e6] focus:outline-none flex justify-between items-center"
                    >
                      <span className="">
                        {USER_SEX_LIST[formData?.sex - 1] || "male"}
                      </span>
                      <FontAwesomeIcon icon={faChevronDown} />
                    </button>
                  )}
                >
                  {USER_SEX_LIST.map((item) => (
                    <Dropdown.Item
                      key={item}
                      onClick={() =>
                        handleSexSelection(USER_SEX_CONTANST[item])
                      }
                    >
                      {item}
                    </Dropdown.Item>
                  ))}
                </Dropdown>
                <label
                  htmlFor="sex"
                  className="absolute text-base text-[#999] duration-300 transform -translate-y-3 scale-75 top-2 origin-[0] bg[#2a2a2a] px-2 peer-focus:px-2 peer-focus:bg-[#2a2a2a] peer-focus:text-[#999] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1.5 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  Sex
                </label>
              </div>
              <div className="relative">
                <input
                  type="text"
                  id="address"
                  name="address"
                  className="block px-2.5 pb-2.5 pt-4 w-full text-base text-white bg-[#2a2a2a] rounded-sm border border-[#2a2a2a] appearance-none hover:border-[#f3732966] focus:border-[#f37329e6] focus:outline-none peer"
                  required
                  onChange={handleInputChange}
                  value={formData?.address || ""}
                />
                <label
                  htmlFor="address"
                  className="absolute text-base text-[#999] duration-300 transform -translate-y-3 scale-75 top-2 origin-[0] bg[#2a2a2a] px-2 peer-focus:px-2 peer-focus:bg-[#2a2a2a] peer-focus:text-[#999] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1.5 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  Address
                </label>
              </div>
              <div className="relative">
                <input
                  type="text"
                  id="address2"
                  name="address2"
                  className="block px-2.5 pb-2.5 pt-4 w-full text-base text-white bg-[#2a2a2a] rounded-sm border border-[#2a2a2a] appearance-none hover:border-[#f3732966] focus:border-[#f37329e6] focus:outline-none peer"
                  onChange={handleInputChange}
                  value={formData?.address2 || ""}
                />
                <label
                  htmlFor="address2"
                  className="absolute text-base text-[#999] duration-300 transform -translate-y-3 scale-75 top-2 origin-[0] bg[#2a2a2a] px-2 peer-focus:px-2 peer-focus:bg-[#2a2a2a] peer-focus:text-[#999] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1.5 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  Address 2 (optional)
                </label>
              </div>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="block px-2.5 pb-2.5 pt-4 w-full text-base text-white bg-[#2a2a2a] rounded-sm border border-[#2a2a2a] appearance-none hover:border-[#f3732966] focus:border-[#f37329e6] focus:outline-none peer"
                  required
                  onChange={handleInputChange}
                  value={formData?.email || ""}
                />
                <label
                  htmlFor="email"
                  className="absolute text-base text-[#999] duration-300 transform -translate-y-3 scale-75 top-2 origin-[0] bg[#2a2a2a] px-2 peer-focus:px-2 peer-focus:bg-[#2a2a2a] peer-focus:text-[#999] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1.5 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  Email
                </label>
                {validateEmail(formData?.email) && (
                  <p className="text-red-500 text-xs mt-1">Email không đúng!</p>
                )}
              </div>
              <div className="relative">
                <input
                  type="number"
                  id="phone"
                  name="cellphone"
                  className="block px-2.5 pb-2.5 pt-4 w-full text-base text-white bg-[#2a2a2a] rounded-sm border border-[#2a2a2a] appearance-none hover:border-[#f3732966] focus:border-[#f37329e6] focus:outline-none peer"
                  required
                  onChange={handleInputChange}
                  value={formData?.cellphone || ""}
                />
                <label
                  htmlFor="phone"
                  className="absolute text-base text-[#999] duration-300 transform -translate-y-3 scale-75 top-2 origin-[0] bg[#2a2a2a] px-2 peer-focus:px-2 peer-focus:bg-[#2a2a2a] peer-focus:text-[#999] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1.5 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  Phone number
                </label>
                {validatePhoneNumber(formData?.cellphone) && (
                  <p className="text-red-500 text-xs mt-1">
                    Số điện thoại không đúng!
                  </p>
                )}
              </div>
              <div className="relative">
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="block px-2.5 pb-2.5 pt-4 w-full text-base text-white bg-[#2a2a2a] rounded-sm border border-[#2a2a2a] appearance-none hover:border-[#f3732966] focus:border-[#f37329e6] focus:outline-none peer"
                  required
                  value={formData?.password || ""}
                  onChange={handleInputChange}
                />
                <label
                  htmlFor="password"
                  className="absolute text-base text-[#999] duration-300 transform -translate-y-3 scale-75 top-2 origin-[0] bg[#2a2a2a] px-2 peer-focus:px-2 peer-focus:bg-[#2a2a2a] peer-focus:text-[#999] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1.5 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  Password
                </label>
              </div>
              <div className="relative">
                <input
                  type="password"
                  id="retype-password"
                  name="retype_password"
                  className="block px-2.5 pb-2.5 pt-4 w-full text-base text-white bg-[#2a2a2a] rounded-sm border border-[#2a2a2a] appearance-none hover:border-[#f3732966] focus:border-[#f37329e6] focus:outline-none peer"
                  required
                  onChange={(e) => setRetypePassword(e.target.value)}
                  value={retypePassword || ""}
                />
                <label
                  htmlFor="retype-password"
                  className="absolute text-base text-[#999] duration-300 transform -translate-y-3 scale-75 top-2 origin-[0] bg[#2a2a2a] px-2 peer-focus:px-2 peer-focus:bg-[#2a2a2a] peer-focus:text-[#999] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1.5 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  Retype password
                </label>
                {retypePassword !== formData?.password && (
                  <p className="text-red-500 text-xs mt-1">
                    Mật khẩu không khớp!
                  </p>
                )}
              </div>
              <button
                type="submit"
                className="text-white bg-[#f8844a] hover:bg-[#f3752c] w-full font-bold rounded-full italic px-10 py-2.5 text-center"
              >
                Sign up
              </button>
            </form>
            <div className="max-w-xl text-white mx-auto my-5 flex flex-row items-center text-center before:content-[''] before:w-full before:h-px before:block before:bg-[#404040] before:my-0 before:mr-2 after:content-[''] after:w-full after:h-px after:block after:bg-[#404040] after:my-0 after:ml-2">
              Or
            </div>
            <Link href={"/signin"} className="flex justify-center">
              <button className="max-w-xl text-white bg-[#666666] hover:bg-[#555] w-full font-bold rounded-full italic px-10 py-2.5 text-center">
                Sign In
              </button>
            </Link>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
