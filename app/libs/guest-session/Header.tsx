import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function GuestHeader() {
  return (
    <div className="bg-[#484848] shadow-md h-14 lg:h-16 flex flex-row fixed top-0 w-full justify-between lg:py-3.5 py-3 z-20">
      <div className="min-w-[62px] max-w-80 md:w-80 lg:pl-12 lg:pr-4 md:pl-4 md:pr-20 pl-4">
        <Link key={"home"} href="/" className="">
          <div className="md:bg-[url(https://assets.challonge.com/_next/static/media/logo-white-text.928c8884.svg)] bg-contain bg-no-repeat h-[40px] bg-[url(https://assets.challonge.com/_next/static/media/logo-symbol-only.8b0dbfc7.svg)]"></div>
        </Link>
      </div>
      <div className="flex gap-6 lg:pr-12 md:pr-4 pr-4 items-center">
        <div>
          <Link key={"search"} href={"/search"}>
            <button className="text-white w-5 h-5 opacity-70 hover:opacity-100">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </Link>
        </div>
        <div>
          <Link key={"signin"} href={"/signin"}>
            <button className="text-white hover:bg-[#555]  font-bold rounded-full text-sm italic px-4 py-1.5 text-center">
              SIGN IN
            </button>
          </Link>
        </div>
        <div>
          <Link key={"signup"} href={"/signup"}>
            <button className="text-white bg-[#f8844a] hover:bg-[#f3752c]  font-bold rounded-full text-sm italic px-4 py-1.5 text-center">
              SIGN UP
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
