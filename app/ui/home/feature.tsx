import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import FeatureFormat from "./featureFormat";
import Partner from "./partner";

export default function Feature() {
  return (
    <div className="bg-gradient-to-r from-[#3a3a3a] to-[#313131] w-full">
      <div className="bg-[url(https://assets.challonge.com/_next/static/media/section-background.7b05ad11.png)] bg-no-repeat ">
        <div className="flex flex-col lg:flex-row items-center max-w-[1600px] mx-auto gap-20 px-5 py-20 md:px-20">
          <div className="min-w-0 md:min-w-[440px]">
            <Image
              src={"/image/video-placeholder.webp"}
              width={702}
              height={404}
              alt={"video placeholder"}
            />
          </div>
          <div className="bot flex flex-col gap-5 tracking-tighter text-lg">
            <h2 className="Slogan text-3xl sm:text-5xl text-white italic font-bold">
              Your Tournament. Your Way.
            </h2>
            <p className="paragraph leading-8 text-[#b4b4b4] max-w-[700px]">
              Challonge has a large number of tournament formats and settings
              that can handle anything from your Friday night game with friends
              to an ongoing tournament series or multi-day, world-class
              tournament with thousands of participants.
            </p>
            <div className="flex flex-col md:flex-row gap-3 text-sm md:text-base">
              <div>
                <Link  href={"/"}>
                  <button className="text-white bg-[#f8844a] hover:bg-[#f3752c] w-full font-bold rounded-full italic px-10 py-2 text-center">
                    PLAY VIDEO
                  </button>
                </Link>
              </div>
              <div>
                <Link  href={"/"}>
                  <button className="text-white hover:bg-[#555] font-bold rounded-full italic px-5 py-2 text-center justify-center flex w-full gap-3">
                    <span className="self-center">FEARTURES</span>
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="size-5 md:size-6 self-center"
                    />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <FeatureFormat />
        <Partner />
      </div>
    </div>
  );
}
