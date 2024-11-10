"use client";

import React from "react";
import TournamentCard from "./TournamentCard";


export default function TournamentList() {

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
        <TournamentCard key={item?.id} data={item}/>
      ))}
    </>
  );
}
