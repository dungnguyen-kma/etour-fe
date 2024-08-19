import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import { faChevronUp} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function GuestFooter() {
  return (
    <div className="h-auto flex flex-col w-full">
      <div className="bg-[#484848] py-6 lg:px-12 px-4">
        <div className="flex flex-col md:flex-row justify-between md:gap-24 gap-8 md:items-center">
          <div className="min-w-60 pr-10 max-w-60 self-start">
            <Link key={"home"} href={"/"}>
              <div className="bg-contain bg-no-repeat h-8 bg-[url(https://assets.challonge.com/_next/static/media/logo-white-text.928c8884.svg)]"></div>
            </Link>
          </div>
          <div className="md:gap-2 gap-8 flex flex-wrap md:flex-wrap text-sm text-white">
            <div>
              <Link key={"info"} href={"/"}>
                <button className=" md:px-4 py-1.5 italic font-bold rounded-full  hover:bg-[#555]">
                  THÔNG TIN
                </button>
              </Link>
            </div>
            <div>
              <Link key={"pricing"} href={"/"}>
                <button className=" md:px-4 py-1.5 italic font-bold rounded-full  hover:bg-[#555]">
                  PRICING
                </button>
              </Link>
            </div>
            <div>
              <Link key={"knowledge"} href={"/"}>
                <button className=" md:px-4 py-1.5 italic font-bold rounded-full  hover:bg-[#555]">
                  KNOWLEDGE BASE
                </button>
              </Link>
            </div>
            <div>
              <Link key={"contact"} href={"/"}>
                <button className=" md:px-4 py-1.5 italic font-bold rounded-full  hover:bg-[#555]">
                  LIÊN HỆ
                </button>
              </Link>
            </div>
            <div>
              <Link key={"partners"} href={"/"}>
                <button className=" md:px-4 py-1.5 italic font-bold rounded-full  hover:bg-[#555]">
                  PARTNERS
                </button>
              </Link>
            </div>
            <div>
              <Link key={"api"} href={"/"}>
                <button className=" md:px-4 py-1.5 italic font-bold rounded-full  hover:bg-[#555]">
                  API
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-5 bg-[#2a2a2a] justify-between text-sm pt-3 pb-11 px-4 lg:px-12 text-[#b4b4b4]">
        <div className="links-container flex gap-3">
          <div className="hover:text-white">
            <Link key={"languague"} href={"/"} className="flex gap-2">
              <p>Tiếng Việt</p>
              <FontAwesomeIcon icon={faChevronUp} className="size-3 self-center"/>
            </Link>
          </div>
          <p className="">|</p>
          <div className="hover:text-white">
            <Link key={"term"} href={"/"}>
              <p>Điều khoản</p>
            </Link>
          </div>
          <p className="">|</p>
          <div className="hover:text-white">
            <Link key={"privacy"} href={"/"}>
              <p>Privacy</p>
            </Link>
          </div>
          <p className="">|</p>
          <div className="hover:text-white">
            <Link key={"generator"} href={"/"}>
              <p>Bracket generator</p>
            </Link>
          </div>
        </div>
        <div className="flex gap-1">
          <FontAwesomeIcon icon={faCopyright} className="size-3 self-center" />
          <p>2024 Challonge, LLC</p>
        </div>
      </div>
    </div>
  );
}
