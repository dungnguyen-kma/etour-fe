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
import TournamentList from "../ui/tournament/tournament-list";

export default function Tournament() {
  return (
    <div className=" px-4 pt-2 grid grid-cols-4 gap-y-6 gap-x-4">
      <TournamentList />
    </div>
  );
}
