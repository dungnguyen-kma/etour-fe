import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import TournamentCard from "../tournament/TournamentCard";

export default function TournamentSlide() {
  const slideData = [
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
    <div className="w-full overflow-hidden">
      <Swiper
        className="flex items-center gap-7 flex-row"
        spaceBetween={30}
        slidesPerView={3}
        navigation={{
          nextEl: ".custom-swiper-button-next",
          prevEl: ".custom-swiper-button-prev",
        }}
        modules={[Navigation]}
        breakpoints={{
          1024: { slidesPerView: 2.5 },
          768: { slidesPerView: 2 },
          640: { slidesPerView: 1.5 },
          320: { slidesPerView: 1 },
        }}
      >
        {slideData.map((item) => (
          <SwiperSlide key={item.id}>
            <TournamentCard data={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
