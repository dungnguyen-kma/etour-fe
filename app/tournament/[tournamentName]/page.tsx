"use client";

import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import DetailOverview from "@/app/ui/tournament/tournament-details/overview";
import Ranking from "@/app/ui/tournament/tournament-details/ranking";
import TourBracket from "@/app/ui/tournament/tournament-details/bracket";

export default function TournamentDetails({ params }: any) {
  return (
    <div className="flex flex-col h-full px-3 py-4">
      <div className="tournament-detail">
        <div className="flex gap-6">
          <Link
            href={"/tournament"}
            className="flex gap-2 text-white text-lg font-bold bg-[#f8844a] hover:bg-[#f3752c] max-w-fit px-4 py-1.5 rounded-full justify-center items-center"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="size-6" />
            <span>Back</span>
          </Link>
          <h2 className="text-5xl text-white italic font-bold relative after:absolute after:bottom-0 after:left-0 after:content-[' '] after:border-b-[#f8844a] after:border-b after:w-full ">
            {decodeURIComponent(params.tournamentName)}
          </h2>
        </div>
        <DetailOverview />
        <TourBracket />
        <Ranking />
      </div>
    </div>
  );
}
