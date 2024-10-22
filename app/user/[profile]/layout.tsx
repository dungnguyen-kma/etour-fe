import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar } from "@mui/material";
import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={inter.className}>
      <div className="infor">
        <div className="cover relative">
          <Image
            src="/image/carousel/Badminton.webp"
            width={300}
            height={320}
            alt="..."
            style={{
              width: "100%",
              height: "320px",
              maxWidth: "100%",
            }}
          ></Image>
          <div className="absolute bottom-8 right-8 flex bg-[#706a6a] text-white p-4 rounded-full hover:bg-[#323232] hover:cursor-pointer">
            <FontAwesomeIcon icon={faCamera} className="size-5" />
          </div>
        </div>
        <div className="info-details bg-[#484848] px-6 lg:px-[10%] flex">
          <div className="avatar relative -mt-14 lg:-mt-0 lg:-top-20 h-32 w-32 lg:h-40 lg:w-40">
            <Avatar className="avatar w-full h-full">
              <Image
                width={160}
                height={160}
                src={"/image/default-avatar.webp"}
                alt="avatar image"
              />
            </Avatar>
            <div className="absolute bottom-0 right-0 flex bg-[#706a6a] text-white p-3 rounded-full hover:bg-[#323232] hover:cursor-pointer">
              <FontAwesomeIcon icon={faCamera} className="size-4" />
            </div>
          </div>
          <div className="details flex flex-col text-white mx-8">
            <div className="name text-3xl font-bold italic mt-4 mb-2">Test</div>
            <div className="follower text-[#D8D8D8]">0 follower</div>
            <div className="create-at text-[#D8D8D8]">
              {" "}
              Member since August 2024
            </div>
          </div>
        </div>
      </div>
      <div className="tab">
        <div className="tab-item">{children}</div>
      </div>
    </div>
  );
}
