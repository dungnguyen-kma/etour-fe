"use client"

import { Inter } from "next/font/google";
import { useState } from "react";
import SearchInput from "../ui/tournament/searchInput";
import SideBar from "../ui/tournament/sideBar";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });


export default function Layout({ children }: { children: React.ReactNode }) {
  const [selectedTournament, setSelectedTournament] = useState({});
  return (
    <>
      <div className={inter.className}>
        <div className="flex flex-col items-center justify-between lg:mt-16 mt-14">
          <div className="w-full bg-[#323232] my-0 mx-auto">
            <div className="flex py-12 bg-[url(https://assets.challonge.com/assets/redesign/section-background.png)] bg-no-repeat">
              <div className="px-4 lg:px-10 flex-grow min-h-[calc(100vh-48px)] max-w-full">
                <div className="relative">
                  <SearchInput />
                  <Link
                    href={"/create-tournament"}
                    type="submit"
                    className="text-white bg-[#f8844a] hover:bg-[#f3752c] absolute end-2.5 bottom-2.5 font-medium rounded-full text-base px-4 py-2"
                  >
                    Create Tournament
                  </Link>
                </div>
                <div className="flex flex-row mt-8">
                  <div className="sticky top-14 w-64 h-screen  mr-4">
                    <SideBar />
                  </div>
                  <div className="w-full border-l-2 border-dashed border-[#f3732966]">
                    <div className="w-[calc(100%-16px)] h-full  ml-4">
                      {children}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
