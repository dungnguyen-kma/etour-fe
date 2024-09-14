import Image from "next/image";
import SideBar from "../ui/tournament/sideBar";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faEarthAsia,
  faTrophy,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

export default function Tournament() {
  return (
    <div className="grid grid-cols-4 gap-y-6 gap-x-4">
      <div className="min-w-full md:min-w-[340px]">
        <div className="h-full p-1 border-transparent hover:rounded-2xl">
          <div className="flex flex-col gap-0 h-[calc(100%-8px)] rounded-2xl border border-black bg-[#191919] text-lg overflow-hidden">
            <Image
              src="/image/carousel/Badminton.webp"
              width={300}
              height={150}
              alt="..."
              style={{
                width: "100%",
                height: "150px",
                maxWidth: "100%",
              }}
            ></Image>
            <div className="flex flex-col gap-8 p-7">
              <div className="flex flex-col gap-5 text-white text-base">
                <p className="text-xl font-bold mb-3">Badminton 1</p>
                <div className="flex flex-row gap-4 items-center">
                  <FontAwesomeIcon className="size-5" icon={faEarthAsia} />
                  <p className="text-base">tounament owner</p>
                </div>
                <div className="flex flex-row gap-4 items-center">
                  <FontAwesomeIcon className="size-5" icon={faTrophy} />
                  <p className="text-base">single elimination</p>
                </div>
                <div className="flex flex-row gap-4 items-center">
                  <FontAwesomeIcon className="size-5" icon={faUser} />
                  <p className="text-base">6</p>
                </div>
                <div className="flex flex-row gap-4 items-center">
                  <FontAwesomeIcon className="size-5" icon={faCalendar} />
                  <p className="text-base">created 8/15/2024</p>
                </div>
              </div>
              <button className="text-base text-white font-bold w-full rounded-full italic h-12 min-w-12 pe-5 ps-5 gap-2 bg-gradient-to-b from-[#606060] to-[#484848] hover:bg-gradient-to-b hover:from-[#484848] hover:to-[#3a3a3a]">
                VIEW
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="min-w-full md:min-w-[340px]">
        <div className="h-full p-1 border-transparent hover:rounded-2xl">
          <div className="flex flex-col gap-0 h-[calc(100%-8px)] rounded-2xl border border-black bg-[#191919] text-lg overflow-hidden">
            <Image
              src="/image/carousel/Badminton.webp"
              width={300}
              height={150}
              alt="..."
              style={{
                width: "100%",
                height: "150px",
                maxWidth: "100%",
              }}
            ></Image>
            <div className="flex flex-col gap-8 p-7">
              <div className="flex flex-col gap-5 text-white text-base">
                <p className="text-xl font-bold mb-3">Badminton 1</p>
                <div className="flex flex-row gap-4 items-center">
                  <FontAwesomeIcon className="size-5" icon={faEarthAsia} />
                  <p className="text-base">tounament owner</p>
                </div>
                <div className="flex flex-row gap-4 items-center">
                  <FontAwesomeIcon className="size-5" icon={faTrophy} />
                  <p className="text-base">single elimination</p>
                </div>
                <div className="flex flex-row gap-4 items-center">
                  <FontAwesomeIcon className="size-5" icon={faUser} />
                  <p className="text-base">6</p>
                </div>
                <div className="flex flex-row gap-4 items-center">
                  <FontAwesomeIcon className="size-5" icon={faCalendar} />
                  <p className="text-base">created 8/15/2024</p>
                </div>
              </div>
              <button className="text-base text-white font-bold w-full rounded-full italic h-12 min-w-12 pe-5 ps-5 gap-2 bg-gradient-to-b from-[#606060] to-[#484848] hover:bg-gradient-to-b hover:from-[#484848] hover:to-[#3a3a3a]">
                VIEW
              </button>
            </div>
          </div>
        </div>
      </div><div className="min-w-full md:min-w-[340px]">
        <div className="h-full p-1 border-transparent hover:rounded-2xl">
          <div className="flex flex-col gap-0 h-[calc(100%-8px)] rounded-2xl border border-black bg-[#191919] text-lg overflow-hidden">
            <Image
              src="/image/carousel/Badminton.webp"
              width={300}
              height={150}
              alt="..."
              style={{
                width: "100%",
                height: "150px",
                maxWidth: "100%",
              }}
            ></Image>
            <div className="flex flex-col gap-8 p-7">
              <div className="flex flex-col gap-5 text-white text-base">
                <p className="text-xl font-bold mb-3">Badminton 1</p>
                <div className="flex flex-row gap-4 items-center">
                  <FontAwesomeIcon className="size-5" icon={faEarthAsia} />
                  <p className="text-base">tounament owner</p>
                </div>
                <div className="flex flex-row gap-4 items-center">
                  <FontAwesomeIcon className="size-5" icon={faTrophy} />
                  <p className="text-base">single elimination</p>
                </div>
                <div className="flex flex-row gap-4 items-center">
                  <FontAwesomeIcon className="size-5" icon={faUser} />
                  <p className="text-base">6</p>
                </div>
                <div className="flex flex-row gap-4 items-center">
                  <FontAwesomeIcon className="size-5" icon={faCalendar} />
                  <p className="text-base">created 8/15/2024</p>
                </div>
              </div>
              <button className="text-base text-white font-bold w-full rounded-full italic h-12 min-w-12 pe-5 ps-5 gap-2 bg-gradient-to-b from-[#606060] to-[#484848] hover:bg-gradient-to-b hover:from-[#484848] hover:to-[#3a3a3a]">
                VIEW
              </button>
            </div>
          </div>
        </div>
      </div><div className="min-w-full md:min-w-[340px]">
        <div className="h-full p-1 border-transparent hover:rounded-2xl">
          <div className="flex flex-col gap-0 h-[calc(100%-8px)] rounded-2xl border border-black bg-[#191919] text-lg overflow-hidden">
            <Image
              src="/image/carousel/Badminton.webp"
              width={300}
              height={150}
              alt="..."
              style={{
                width: "100%",
                height: "150px",
                maxWidth: "100%",
              }}
            ></Image>
            <div className="flex flex-col gap-8 p-7">
              <div className="flex flex-col gap-5 text-white text-base">
                <p className="text-xl font-bold mb-3">Badminton 1</p>
                <div className="flex flex-row gap-4 items-center">
                  <FontAwesomeIcon className="size-5" icon={faEarthAsia} />
                  <p className="text-base">tounament owner</p>
                </div>
                <div className="flex flex-row gap-4 items-center">
                  <FontAwesomeIcon className="size-5" icon={faTrophy} />
                  <p className="text-base">single elimination</p>
                </div>
                <div className="flex flex-row gap-4 items-center">
                  <FontAwesomeIcon className="size-5" icon={faUser} />
                  <p className="text-base">6</p>
                </div>
                <div className="flex flex-row gap-4 items-center">
                  <FontAwesomeIcon className="size-5" icon={faCalendar} />
                  <p className="text-base">created 8/15/2024</p>
                </div>
              </div>
              <button className="text-base text-white font-bold w-full rounded-full italic h-12 min-w-12 pe-5 ps-5 gap-2 bg-gradient-to-b from-[#606060] to-[#484848] hover:bg-gradient-to-b hover:from-[#484848] hover:to-[#3a3a3a]">
                VIEW
              </button>
            </div>
          </div>
        </div>
      </div><div className="min-w-full md:min-w-[340px]">
        <div className="h-full p-1 border-transparent hover:rounded-2xl">
          <div className="flex flex-col gap-0 h-[calc(100%-8px)] rounded-2xl border border-black bg-[#191919] text-lg overflow-hidden">
            <Image
              src="/image/carousel/Badminton.webp"
              width={300}
              height={150}
              alt="..."
              style={{
                width: "100%",
                height: "150px",
                maxWidth: "100%",
              }}
            ></Image>
            <div className="flex flex-col gap-8 p-7">
              <div className="flex flex-col gap-5 text-white text-base">
                <p className="text-xl font-bold mb-3">Badminton 1</p>
                <div className="flex flex-row gap-4 items-center">
                  <FontAwesomeIcon className="size-5" icon={faEarthAsia} />
                  <p className="text-base">tounament owner</p>
                </div>
                <div className="flex flex-row gap-4 items-center">
                  <FontAwesomeIcon className="size-5" icon={faTrophy} />
                  <p className="text-base">single elimination</p>
                </div>
                <div className="flex flex-row gap-4 items-center">
                  <FontAwesomeIcon className="size-5" icon={faUser} />
                  <p className="text-base">6</p>
                </div>
                <div className="flex flex-row gap-4 items-center">
                  <FontAwesomeIcon className="size-5" icon={faCalendar} />
                  <p className="text-base">created 8/15/2024</p>
                </div>
              </div>
              <button className="text-base text-white font-bold w-full rounded-full italic h-12 min-w-12 pe-5 ps-5 gap-2 bg-gradient-to-b from-[#606060] to-[#484848] hover:bg-gradient-to-b hover:from-[#484848] hover:to-[#3a3a3a]">
                VIEW
              </button>
            </div>
          </div>
        </div>
      </div><div className="min-w-full md:min-w-[340px]">
        <div className="h-full p-1 border-transparent hover:rounded-2xl">
          <div className="flex flex-col gap-0 h-[calc(100%-8px)] rounded-2xl border border-black bg-[#191919] text-lg overflow-hidden">
            <Image
              src="/image/carousel/Badminton.webp"
              width={300}
              height={150}
              alt="..."
              style={{
                width: "100%",
                height: "150px",
                maxWidth: "100%",
              }}
            ></Image>
            <div className="flex flex-col gap-8 p-7">
              <div className="flex flex-col gap-5 text-white text-base">
                <p className="text-xl font-bold mb-3">Badminton 1</p>
                <div className="flex flex-row gap-4 items-center">
                  <FontAwesomeIcon className="size-5" icon={faEarthAsia} />
                  <p className="text-base">tounament owner</p>
                </div>
                <div className="flex flex-row gap-4 items-center">
                  <FontAwesomeIcon className="size-5" icon={faTrophy} />
                  <p className="text-base">single elimination</p>
                </div>
                <div className="flex flex-row gap-4 items-center">
                  <FontAwesomeIcon className="size-5" icon={faUser} />
                  <p className="text-base">6</p>
                </div>
                <div className="flex flex-row gap-4 items-center">
                  <FontAwesomeIcon className="size-5" icon={faCalendar} />
                  <p className="text-base">created 8/15/2024</p>
                </div>
              </div>
              <button className="text-base text-white font-bold w-full rounded-full italic h-12 min-w-12 pe-5 ps-5 gap-2 bg-gradient-to-b from-[#606060] to-[#484848] hover:bg-gradient-to-b hover:from-[#484848] hover:to-[#3a3a3a]">
                VIEW
              </button>
            </div>
          </div>
        </div>
      </div><div className="min-w-full md:min-w-[340px]">
        <div className="h-full p-1 border-transparent hover:rounded-2xl">
          <div className="flex flex-col gap-0 h-[calc(100%-8px)] rounded-2xl border border-black bg-[#191919] text-lg overflow-hidden">
            <Image
              src="/image/carousel/Badminton.webp"
              width={300}
              height={150}
              alt="..."
              style={{
                width: "100%",
                height: "150px",
                maxWidth: "100%",
              }}
            ></Image>
            <div className="flex flex-col gap-8 p-7">
              <div className="flex flex-col gap-5 text-white text-base">
                <p className="text-xl font-bold mb-3">Badminton 1</p>
                <div className="flex flex-row gap-4 items-center">
                  <FontAwesomeIcon className="size-5" icon={faEarthAsia} />
                  <p className="text-base">tounament owner</p>
                </div>
                <div className="flex flex-row gap-4 items-center">
                  <FontAwesomeIcon className="size-5" icon={faTrophy} />
                  <p className="text-base">single elimination</p>
                </div>
                <div className="flex flex-row gap-4 items-center">
                  <FontAwesomeIcon className="size-5" icon={faUser} />
                  <p className="text-base">6</p>
                </div>
                <div className="flex flex-row gap-4 items-center">
                  <FontAwesomeIcon className="size-5" icon={faCalendar} />
                  <p className="text-base">created 8/15/2024</p>
                </div>
              </div>
              <button className="text-base text-white font-bold w-full rounded-full italic h-12 min-w-12 pe-5 ps-5 gap-2 bg-gradient-to-b from-[#606060] to-[#484848] hover:bg-gradient-to-b hover:from-[#484848] hover:to-[#3a3a3a]">
                VIEW
              </button>
            </div>
          </div>
        </div>
      </div><div className="min-w-full md:min-w-[340px]">
        <div className="h-full p-1 border-transparent hover:rounded-2xl">
          <div className="flex flex-col gap-0 h-[calc(100%-8px)] rounded-2xl border border-black bg-[#191919] text-lg overflow-hidden">
            <Image
              src="/image/carousel/Badminton.webp"
              width={300}
              height={150}
              alt="..."
              style={{
                width: "100%",
                height: "150px",
                maxWidth: "100%",
              }}
            ></Image>
            <div className="flex flex-col gap-8 p-7">
              <div className="flex flex-col gap-5 text-white text-base">
                <p className="text-xl font-bold mb-3">Badminton 1</p>
                <div className="flex flex-row gap-4 items-center">
                  <FontAwesomeIcon className="size-5" icon={faEarthAsia} />
                  <p className="text-base">tounament owner</p>
                </div>
                <div className="flex flex-row gap-4 items-center">
                  <FontAwesomeIcon className="size-5" icon={faTrophy} />
                  <p className="text-base">single elimination</p>
                </div>
                <div className="flex flex-row gap-4 items-center">
                  <FontAwesomeIcon className="size-5" icon={faUser} />
                  <p className="text-base">6</p>
                </div>
                <div className="flex flex-row gap-4 items-center">
                  <FontAwesomeIcon className="size-5" icon={faCalendar} />
                  <p className="text-base">created 8/15/2024</p>
                </div>
              </div>
              <button className="text-base text-white font-bold w-full rounded-full italic h-12 min-w-12 pe-5 ps-5 gap-2 bg-gradient-to-b from-[#606060] to-[#484848] hover:bg-gradient-to-b hover:from-[#484848] hover:to-[#3a3a3a]">
                VIEW
              </button>
            </div>
          </div>
        </div>
      </div><div className="min-w-full md:min-w-[340px]">
        <div className="h-full p-1 border-transparent hover:rounded-2xl">
          <div className="flex flex-col gap-0 h-[calc(100%-8px)] rounded-2xl border border-black bg-[#191919] text-lg overflow-hidden">
            <Image
              src="/image/carousel/Badminton.webp"
              width={300}
              height={150}
              alt="..."
              style={{
                width: "100%",
                height: "150px",
                maxWidth: "100%",
              }}
            ></Image>
            <div className="flex flex-col gap-8 p-7">
              <div className="flex flex-col gap-5 text-white text-base">
                <p className="text-xl font-bold mb-3">Badminton 1</p>
                <div className="flex flex-row gap-4 items-center">
                  <FontAwesomeIcon className="size-5" icon={faEarthAsia} />
                  <p className="text-base">tounament owner</p>
                </div>
                <div className="flex flex-row gap-4 items-center">
                  <FontAwesomeIcon className="size-5" icon={faTrophy} />
                  <p className="text-base">single elimination</p>
                </div>
                <div className="flex flex-row gap-4 items-center">
                  <FontAwesomeIcon className="size-5" icon={faUser} />
                  <p className="text-base">6</p>
                </div>
                <div className="flex flex-row gap-4 items-center">
                  <FontAwesomeIcon className="size-5" icon={faCalendar} />
                  <p className="text-base">created 8/15/2024</p>
                </div>
              </div>
              <button className="text-base text-white font-bold w-full rounded-full italic h-12 min-w-12 pe-5 ps-5 gap-2 bg-gradient-to-b from-[#606060] to-[#484848] hover:bg-gradient-to-b hover:from-[#484848] hover:to-[#3a3a3a]">
                VIEW
              </button>
            </div>
          </div>
        </div>
      </div><div className="min-w-full md:min-w-[340px]">
        <div className="h-full p-1 border-transparent hover:rounded-2xl">
          <div className="flex flex-col gap-0 h-[calc(100%-8px)] rounded-2xl border border-black bg-[#191919] text-lg overflow-hidden">
            <Image
              src="/image/carousel/Badminton.webp"
              width={300}
              height={150}
              alt="..."
              style={{
                width: "100%",
                height: "150px",
                maxWidth: "100%",
              }}
            ></Image>
            <div className="flex flex-col gap-8 p-7">
              <div className="flex flex-col gap-5 text-white text-base">
                <p className="text-xl font-bold mb-3">Badminton 1</p>
                <div className="flex flex-row gap-4 items-center">
                  <FontAwesomeIcon className="size-5" icon={faEarthAsia} />
                  <p className="text-base">tounament owner</p>
                </div>
                <div className="flex flex-row gap-4 items-center">
                  <FontAwesomeIcon className="size-5" icon={faTrophy} />
                  <p className="text-base">single elimination</p>
                </div>
                <div className="flex flex-row gap-4 items-center">
                  <FontAwesomeIcon className="size-5" icon={faUser} />
                  <p className="text-base">6</p>
                </div>
                <div className="flex flex-row gap-4 items-center">
                  <FontAwesomeIcon className="size-5" icon={faCalendar} />
                  <p className="text-base">created 8/15/2024</p>
                </div>
              </div>
              <button className="text-base text-white font-bold w-full rounded-full italic h-12 min-w-12 pe-5 ps-5 gap-2 bg-gradient-to-b from-[#606060] to-[#484848] hover:bg-gradient-to-b hover:from-[#484848] hover:to-[#3a3a3a]">
                VIEW
              </button>
            </div>
          </div>
        </div>
      </div><div className="min-w-full md:min-w-[340px]">
        <div className="h-full p-1 border-transparent hover:rounded-2xl">
          <div className="flex flex-col gap-0 h-[calc(100%-8px)] rounded-2xl border border-black bg-[#191919] text-lg overflow-hidden">
            <Image
              src="/image/carousel/Badminton.webp"
              width={300}
              height={150}
              alt="..."
              style={{
                width: "100%",
                height: "150px",
                maxWidth: "100%",
              }}
            ></Image>
            <div className="flex flex-col gap-8 p-7">
              <div className="flex flex-col gap-5 text-white text-base">
                <p className="text-xl font-bold mb-3">Badminton 1</p>
                <div className="flex flex-row gap-4 items-center">
                  <FontAwesomeIcon className="size-5" icon={faEarthAsia} />
                  <p className="text-base">tounament owner</p>
                </div>
                <div className="flex flex-row gap-4 items-center">
                  <FontAwesomeIcon className="size-5" icon={faTrophy} />
                  <p className="text-base">single elimination</p>
                </div>
                <div className="flex flex-row gap-4 items-center">
                  <FontAwesomeIcon className="size-5" icon={faUser} />
                  <p className="text-base">6</p>
                </div>
                <div className="flex flex-row gap-4 items-center">
                  <FontAwesomeIcon className="size-5" icon={faCalendar} />
                  <p className="text-base">created 8/15/2024</p>
                </div>
              </div>
              <button className="text-base text-white font-bold w-full rounded-full italic h-12 min-w-12 pe-5 ps-5 gap-2 bg-gradient-to-b from-[#606060] to-[#484848] hover:bg-gradient-to-b hover:from-[#484848] hover:to-[#3a3a3a]">
                VIEW
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
