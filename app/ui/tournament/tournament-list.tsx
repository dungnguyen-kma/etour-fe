"use client";

import React, { useContext } from "react";
import {
  faCalendar,
  faEarthAsia,
  faTrophy,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { TournamentContext } from "@/app/tournament/layout";

export default function TournamentList() {
  const { setSelectedTournament } = useContext(TournamentContext);

  console.log(setSelectedTournament);

  const listData = [
    {
      id: 1,
      name: "Badminton 1",
      img: "/image/carousel/Badminton.webp",
      imgAlt: "badminton",
      owner: "tounament owner",
      format: "single elimination",
      participantNumber: "6",
      createAt: "created 8/15/2024",
    },
    {
      id: 2,
      name: "Badminton 2",
      img: "/image/carousel/Badminton.webp",
      imgAlt: "badminton",
      owner: "tounament owner",
      format: "double elimination",
      participantNumber: "6",
      createAt: "created 8/15/2024",
    },
    {
      id: 3,
      name: "Badminton 3",
      img: "/image/carousel/Badminton.webp",
      imgAlt: "badminton",
      owner: "tounament owner",
      format: "single elimination",
      participantNumber: "6",
      createAt: "created 8/15/2024",
    },
    {
      id: 4,
      name: "Badminton 4",
      img: "/image/carousel/Badminton.webp",
      imgAlt: "badminton",
      owner: "tounament owner",
      format: "double elimination",
      participantNumber: "6",
      createAt: "created 8/15/2024",
    },
    {
      id: 5,
      name: "Badminton 5",
      img: "/image/carousel/Badminton.webp",
      imgAlt: "badminton",
      owner: "tounament owner",
      format: "single elimination",
      participantNumber: "6",
      createAt: "created 8/15/2024",
    },
    {
      id: 6,
      name: "Badminton 6",
      img: "/image/carousel/Badminton.webp",
      imgAlt: "badminton",
      owner: "tounament owner",
      format: "double elimination",
      participantNumber: "6",
      createAt: "created 8/15/2024",
    },
  ];
  return (
    <>
      {listData.map((item) => (
        <div key={item.id} className="min-w-full">
          <div className="h-full border-transparent hover:rounded-2xl">
            <div className="flex flex-col gap-0 h-[calc(100%-8px)] rounded-2xl border border-black bg-[#191919] text-lg overflow-hidden">
              <Image
                src={item.img}
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
                  <p className="text-xl font-bold mb-3">{item.name}</p>
                  <div className="flex flex-row gap-4 items-center">
                    <FontAwesomeIcon className="size-5" icon={faEarthAsia} />
                    <p className="text-base">{item.owner}</p>
                  </div>
                  <div className="flex flex-row gap-4 items-center">
                    <FontAwesomeIcon className="size-5" icon={faTrophy} />
                    <p className="text-base">{item.format}</p>
                  </div>
                  <div className="flex flex-row gap-4 items-center">
                    <FontAwesomeIcon className="size-5" icon={faUser} />
                    <p className="text-base">{item.participantNumber}</p>
                  </div>
                  <div className="flex flex-row gap-4 items-center">
                    <FontAwesomeIcon className="size-5" icon={faCalendar} />
                    <p className="text-base">{item.createAt}</p>
                  </div>
                </div>
                <Link
                  href={`tournament/${item.name}`}
                  className="text-base text-white flex justify-center items-center font-bold w-full rounded-full italic h-12 min-w-12 pe-5 ps-5 gap-2 bg-gradient-to-b from-[#606060] to-[#484848] hover:bg-gradient-to-b hover:from-[#484848] hover:to-[#3a3a3a]"
                  onClick={() => setSelectedTournament(item)}
                >
                  VIEW
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
