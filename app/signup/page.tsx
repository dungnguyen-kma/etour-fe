import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import Link from "next/link";

export default function Signin() {
  return (
    <div className="w-full max-w-[2200px] bg-[#323232] my-0 mx-auto">
      <div className="flex flex-row items-start py-12 bg-[url(https://assets.challonge.com/assets/redesign/section-background.png)] bg-no-repeat">
        <div className="px-4 lg:px-10 flex-grow min-h-[calc(100vh-48px)] max-w-[100vw]">
          <div className="content-wrapper max-w-screen-sm mx-auto">
            <div className="header max-w-xl mx-auto mb-8">
              <h1 className="text-xl lg:text-3xl text-left italic font-bold text-white mt-5 mb-2.5">
                Sign up for Challonge
              </h1>
              <p className="text-[#737373] text-sm lg:text-base mb-2.5">
                Get started easily by signing up to manage your tournaments and
                events!
              </p>
            </div>
            <form className=" mx-auto max-w-xl flex flex-col gap-5">
              <div className="relative">
                <input
                  type="text"
                  id="username"
                  className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-white bg-[#2a2a2a] rounded-sm border border-[#2a2a2a] appearance-none hover:border-[#f3732966] focus:border-[#f37329e6] focus:outline-none peer"
                  placeholder=" "
                />
                <label
                  htmlFor="username"
                  className="absolute text-sm text-[#999] duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg[#2a2a2a] px-2 peer-focus:px-2 peer-focus:bg-[#2a2a2a] peer-focus:text-[#999] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1.5 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  Username
                </label>
              </div>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-white bg-[#2a2a2a] rounded-sm border border-[#2a2a2a] appearance-none hover:border-[#f3732966] focus:border-[#f37329e6] focus:outline-none peer"
                  placeholder=" "
                />
                <label
                  htmlFor="email"
                  className="absolute text-sm text-[#999] duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg[#2a2a2a] px-2 peer-focus:px-2 peer-focus:bg-[#2a2a2a] peer-focus:text-[#999] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1.5 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  Email
                </label>
              </div>
              <div className="relative">
                <input
                  type="number"
                  id="phone"
                  className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-white bg-[#2a2a2a] rounded-sm border border-[#2a2a2a] appearance-none hover:border-[#f3732966] focus:border-[#f37329e6] focus:outline-none peer"
                  placeholder=" "
                />
                <label
                  htmlFor="phone"
                  className="absolute text-sm text-[#999] duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg[#2a2a2a] px-2 peer-focus:px-2 peer-focus:bg-[#2a2a2a] peer-focus:text-[#999] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1.5 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  Phone number
                </label>
              </div>
              <div className="relative">
                <input
                  type="password"
                  id="password"
                  className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-white bg-[#2a2a2a] rounded-sm border border-[#2a2a2a] appearance-none hover:border-[#f3732966] focus:border-[#f37329e6] focus:outline-none peer"
                  placeholder=" "
                />
                <label
                  htmlFor="password"
                  className="absolute text-sm text-[#999] duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg[#2a2a2a] px-2 peer-focus:px-2 peer-focus:bg-[#2a2a2a] peer-focus:text-[#999] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1.5 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  Password
                </label>
              </div>
              <div className="relative">
                <input
                  type="password"
                  id="retype-password"
                  className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-white bg-[#2a2a2a] rounded-sm border border-[#2a2a2a] appearance-none hover:border-[#f3732966] focus:border-[#f37329e6] focus:outline-none peer"
                  placeholder=" "
                />
                <label
                  htmlFor="retype-password"
                  className="absolute text-sm text-[#999] duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg[#2a2a2a] px-2 peer-focus:px-2 peer-focus:bg-[#2a2a2a] peer-focus:text-[#999] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1.5 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  Retype password
                </label>
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
    </div>
  );
}
