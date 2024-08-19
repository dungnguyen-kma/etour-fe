"use client";

import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/swiper-bundle.css";

export default function About() {
  const carouselData = [
    {
      id: 1,
      src: "/image/carousel/bracket.webp",
      alt: "bracket.webp",
    },
    {
      id: 2,
      src: "/image/carousel/Badminton.webp",
      alt: "Badminton.webp",
    },
    {
      id: 3,
      src: "/image/carousel/badminton2.jpg",
      alt: "badminton2.jpg",
    },
  ];

  return (
    <div className="bg-[#484848] w-full pl-6 pt-24 lg:pl-28 tracking-tighter pb-12 text-lg leading-8 gap-3 flex flex-col lg:flex-row">
      <div className="w-full max-w-[660px] text-white gap-7 flex flex-col pr-6 lg:pr-0">
        <h2 className="text-2xl font-bold italic">
          <span className="text-[#ef8e5e]">EVERY GAME. </span>
          EVERY SPORT
        </h2>
        <div className="text-7xl font-bold italic">
          SIMPLIFIED TOURNAMENT MANAGEMENT
        </div>
        <div className=" text-[#b4b4b4]">
          Millions of people around the world trust Challonge to manage their
          tournaments, host their events, and keep their competitive communities
          organized, informed, and playing together. Take on the Challonge
          challenge, and game on!
        </div>
        <div className="flex flex-col md:flex-row gap-3 mt-5 mb-12">
          <div>
            <Link key={"about-Signup"} href={"/signup"}>
              <button className="text-white bg-[#f8844a] hover:bg-[#f3752c] w-full font-bold rounded-full italic px-10 py-2 text-center">
                SIGN UP
              </button>
            </Link>
          </div>
          <div>
            <Link key={"try-generator"} href={"/"}>
              <button className="text-white hover:bg-[#555] font-bold rounded-full italic px-5 py-2.5 text-center justify-center flex w-full gap-2">
                <FontAwesomeIcon
                  icon={faRightToBracket}
                  className="size-7 self-center"
                />
                <span className="text-lg self-center">
                  TRY OUR BRACKET GENERATOR
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="lg:w-[62%] mt-12 lg:mt-0 pl-0">
        <div className="relative w-full h-[300px] lg:h-full">
          <div className="block absolute top-0  w-full lg:w-calc[calc(100%+80px)] h-full cp-path-polygon bg-[#3a3a3a]"></div>
          <div className="absolute -top-10 left-10 bg-white h-full w-[calc(100%-40px)] cp-path-polygon">
            <Swiper
              modules={[Autoplay]}
              slidesPerView={1}
              autoplay={{ delay: 3000 }}
              speed={2000}
              allowTouchMove={false}
              loop={true}
              className="w-full h-full"
              style={{ transitionTimingFunction: "ease-in-out" }}
            >
              {carouselData.map((item) => {
                return (
                  <SwiperSlide key={item.id}>
                    <Image
                      src={item.src}
                      alt={item.alt}
                      className="relative w-full h-full"
                      fill
                      sizes="100vw"
                      style={{
                        objectFit: "cover"
                      }} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
