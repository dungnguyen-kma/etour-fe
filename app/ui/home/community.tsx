"use client";

import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import CommunityList from "./community-list";

export default function Community() {
  return (
    <div className="flex flex-col xl:flex-row gap-20 bg-gradient-to-tr from-[#313131] to-[#606060] w-full pb-20 pt-24 px-6 lg:pl-32 border-t-[15px] border-t-[#484848] max-w-[2200px]">
      <div className="flex flex-col gap-7 max-w-full lg:max-w-[600px] min-w-full sm:min-w-[600px] text-white">
        <h2 className="text-3xl md:text-5xl italic font-bold leading-[2.375rem] md:leading-[3.75rem] tracking-tighter">
          Build and Manage Your Community
        </h2>
        <p className="text-base md:text-lg leading-8 text-[#b4b4b4]">
          Co-Host, Organize, and Promote your tournaments, leagues, and events
          all from one place. Challonge Communities allow you to mobilize
          participants for frequent competitions. Get started for free.
        </p>
        <Link key={"create-community"} href={"/"}>
          <button className="text-white bg-[#f8844a] hover:bg-[#f3752c] w-full md:w-auto font-bold rounded-full italic px-10 py-2.5 text-center text-sm md:text-base">
            START YOUR COMMUNITY
          </button>
        </Link>
      </div>
      <div className="overflow-auto">
        <div className="text-[#b4b4b4] flex flex-col-reverse md:flex-row items-start md:items-center gap-5 mb-10">
          <div>
            <button className="community-swiper-button-prev h-10 min-w-10 text-sm pe-0 ps-0 gap-2">
              <FontAwesomeIcon className="w-5 h-5" icon={faChevronLeft} />
            </button>
            <button className="community-swiper-button-next h-10 min-w-10 text-sm pe-0 ps-0 gap-2">
              <FontAwesomeIcon className="w-5 h-5" icon={faChevronRight} />
            </button>
          </div>
          <h2 className="text-xl md:text-2xl font-bold italic">
            1.2M+ Active Communities
          </h2>
        </div>
        <CommunityList />
      </div>
    </div>
  );
}
