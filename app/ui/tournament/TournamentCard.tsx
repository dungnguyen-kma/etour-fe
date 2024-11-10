import { faCalendar, faEarthAsia, faTrophy, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export default function TournamentCard(props: any) {
  const { data: item } = props;
  return (
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
            >
              VIEW
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
