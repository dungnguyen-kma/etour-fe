"use client";

import { useState } from "react";
import { Bracket, Seed, SeedItem, SeedTeam } from "react-brackets";

const CustomTitle = (props: any) => {
    
  return (
    <div className="text-white font-bold bg-[#3c3c3ccc] py-2 px-4 rounded-md mx-0.5 text-center">
      {props}
    </div>
  );
};

const CustomSeed = ({
  seed,
  title,
  breakpoint,
  roundIndex,
  seedIndex,
}: any) => {
  // breakpoint passed to Bracket component
  // to check if mobile view is triggered or not
  // mobileBreakpoint is required to be passed down to a seed
  const homeTeam = seed.teams[0];
  const awayTeam = seed.teams[1];

  return (
    <Seed mobileBreakpoint={breakpoint}>
      <SeedItem>
        <div className="bg-[#626262]">
          <div className="border-b border-[#2a2a2a]">
            <SeedTeam>
              <div>{homeTeam.name ? homeTeam.name : "----"}</div>
              <div>{homeTeam.score}</div>
            </SeedTeam>
          </div>
          <SeedTeam>
            <div>{awayTeam.name ? awayTeam.name : "----"}</div>
            <div>{awayTeam.score}</div>
          </SeedTeam>
        </div>
      </SeedItem>
      <div className="text-white opacity-70">2021/22</div>
    </Seed>
  );
};

export default function TourBracket() {
  const rounds = [
    {
      title: "Round 1",
      seeds: [
        {
          id: 1,
          date: new Date().toDateString(),
          teams: [
            { id: 1, name: "A", score: 7 },
            { id: 3, name: "B", score: 6 },
          ],
        },
        {
          id: 2,
          date: new Date().toDateString(),
          teams: [
            { id: 1, name: "C", score: 2 },
            { id: 3, name: "D", score: 1 },
          ],
        },
        {
          id: 3,
          date: new Date().toDateString(),
          teams: [
            { id: 3, name: "E", score: 1 },
            { id: 3, name: "F", score: 7 },
          ],
        },
        {
          id: 4,
          date: new Date().toDateString(),
          teams: [
            { id: 1, name: "G", score: 2 },
            { id: 3, name: "H", score: 6 },
          ],
        },
      ],
    },
    {
      title: "Round 2",
      seeds: [
        {
          id: 5,
          date: new Date().toDateString(),
          teams: [
            { id: 1, name: "A", score: 10 },
            { id: 3, name: "C", score: 6 },
          ],
        },
        {
          id: 6,
          date: new Date().toDateString(),
          teams: [
            { id: 1, name: "F", score: 2 },
            { id: 3, name: "H", score: 6 },
          ],
        },
      ],
    },
    {
      title: "Final",
      seeds: [
        {
          id: 7,
          date: new Date().toDateString(),
          teams: [
            { id: 1, name: "A", score: 0 },
            { id: 3, name: "H", score: 6 },
          ],
        },
      ],
    },
    {
      title: "3 Place",
      seeds: [
        {
          id: 8,
          date: new Date().toDateString(),
          teams: [
            { id: 1, name: "C", score: 1 },
            { id: 3, name: "F", score: 6 },
          ],
        },
      ],
    },
  ];
  return (
    <div className="mt-6">
      <Bracket
        rounds={rounds}
        renderSeedComponent={CustomSeed}
        roundTitleComponent={CustomTitle}
        swipeableProps={{
          enableMouseEvents: true,
          animateHeight: true,
        }}
      />
    </div>
  );
}
