import { faEarthAsia, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function CommunityList() {
  const slideData = [
    {
      id: 1,
      name: "Badminton 1",
      img: "/image/carousel/Badminton.webp",
      imgAlt: "badminton",
      follower: "6",
    },
    {
      id: 2,
      name: "Badminton 2",
      img: "/image/carousel/Badminton.webp",
      follower: "10",
    },
    {
      id: 3,
      name: "Badminton 3",
      img: "/image/carousel/Badminton.webp",
      imgAlt: "badminton",
      follower: "115",
    },
    {
      id: 4,
      name: "Badminton 4",
      img: "/image/carousel/Badminton.webp",
      imgAlt: "badminton",
      follower: "20",
    },
    {
      id: 5,
      name: "Badminton 5",
      img: "/image/carousel/Badminton.webp",
      imgAlt: "badminton",
      follower: "56",
    },
    {
      id: 6,
      name: "Badminton 6",
      img: "/image/carousel/Badminton.webp",
      imgAlt: "badminton",
      follower: "102",
    },
  ];
  return (
    <div className="w-full overflow-hidden">
      <Swiper
        className="flex items-center gap-7 flex-row"
        spaceBetween={30}
        slidesPerView={3}
        navigation={{
          nextEl: ".community-swiper-button-next",
          prevEl: ".community-swiper-button-prev",
        }}
        modules={[Navigation]}
        breakpoints={{
          1024: { slidesPerView: 3 },
          768: { slidesPerView: 2.5 },
          640: { slidesPerView: 2 },
          320: { slidesPerView: 1 },
        }}
      >
        {slideData.map((item) => (
          <SwiperSlide key={item.id}>
            <Link href={"/"} className="min-w-full md:min-w-[340px]">
              <div className="h-full p-1 border-transparent hover:rounded-2xl hover:bg-[#ef8e5e] active:bg-[#ef8e5e]">
                <div className="flex flex-col gap-0 h-[calc(100%-8px)] rounded-2xl border-black border bg-[#191919] text-lg overflow-hidden">
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
                    <div className="flex flex-col gap-5 text-white">
                      <div className="flex flex-row gap-4 items-center">
                        <FontAwesomeIcon
                          className="size-5"
                          icon={faEarthAsia}
                        />
                        <p className="text-xl font-bold">{item.name}</p>
                      </div>
                      <div className="flex flex-row gap-4 items-center">
                        <FontAwesomeIcon className="size-5" icon={faUsers} />
                        <p className="text-base">
                          {item.follower} Người theo dõi
                        </p>
                      </div>
                    </div>
                    <button className="text-lg text-white font-normal w-full h-12 min-w-12 pe-5 ps-5 gap-2 bg-gradient-to-b from-[#606060] to-[#484848] hover:bg-gradient-to-b hover:from-[#484848] hover:to-[#3a3a3a]">
                      VIEW COMMUNITY
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
