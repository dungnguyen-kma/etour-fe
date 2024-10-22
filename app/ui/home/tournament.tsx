"use client";

import {
  faArrowRight,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { EffectCoverflow, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import TournamentList from "./tournament-list";

export default function Tournament() {
  return (
    <div className="flex flex-col xl:flex-row gap-20 bg-gradient-to-tr from-[#3a3a3a] to-[#606060] -mt-20 px-6 pt-44 pb-20 lg:pl-32 lg:pr-6 border-t-[15px] border-t-[#484848] w-full max-w-[2200px]">
      <div className="flex flex-col gap-7 max-w-full lg:max-w-[600px] text-white">
        <h2 className="text-xl md:text-2xl italic font-bold">
          JOIN THE MASSES
        </h2>
        <h2 className="text-3xl md:text-5xl italic font-bold leading-[2.375rem] md:leading-[3.75rem]">
          Manage Your Next Tournament With Challonge
        </h2>
        <p className="text-base md:text-lg leading-8 text-[#b4b4b4]">
          For almost 15 years Challonge has been offering a web-based SaaS
          platform, as well as an API that can be integrated into websites,
          games, bots, and other software applications. Everything about the
          user experience has been developed with you in mind. Simple, quick,
          and reliable. That’s the Challonge difference.
        </p>
        <div className="flex flex-col md:flex-row gap-3 text-sm md:text-base">
          <Link key={"create-tour"} href={"/"}>
            <button className="text-white bg-[#f8844a] hover:bg-[#f3752c] w-full font-bold rounded-full italic px-10 py-2.5 text-center">
              CREATE A TOURNAMENT
            </button>
          </Link>
          <Link key={"search-tour"} href={"/tournament"}>
            <button className="text-white hover:bg-[#555] font-bold rounded-full italic px-5 py-2.5 text-center justify-center flex w-full gap-3">
              <span className="self-center">SEARCH TOURNAMENTS</span>
              <FontAwesomeIcon
                icon={faArrowRight}
                className="size-5 md:size-6 self-center"
              />
            </button>
          </Link>
        </div>
      </div>
      <div className="bg-right-top bg-[url(https://assets.challonge.com/_next/static/media/reverse-bracket-bg.4c49a3cc.png)] bg-cover bg-no-repeat overflow-auto">
        <div className="text-[#b4b4b4] flex flex-col-reverse md:flex-row items-start md:items-center gap-5 mb-10">
          <div>
            <button className="custom-swiper-button-prev h-10 min-w-10 text-sm pe-0 ps-0 gap-2">
              <FontAwesomeIcon className="w-5 h-5" icon={faChevronLeft} />
            </button>
            <button className="custom-swiper-button-next h-10 min-w-10 text-sm pe-0 ps-0 gap-2">
              <FontAwesomeIcon className="w-5 h-5" icon={faChevronRight} />
            </button>
          </div>
          <h2 className="text-xl md:text-2xl font-bold italic">
            36M+ Brackets Created
          </h2>
        </div>
        <TournamentList />
      </div>
    </div>
  );
}
