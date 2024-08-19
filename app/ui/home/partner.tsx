import Image from "next/image";

export default function Partner() {
  const partnerData = [
    { id: 1, src: "/image/partners/twitch-rivals.webp", alt: "Twitch rivals" },
    { id: 2, src: "/image/partners/dicethrone.webp", alt: "Dice Throne" },
    { id: 3, src: "/image/partners/klask_white.webp", alt: "Klask" },
    { id: 4, src: "/image/partners/pokemon-go.webp", alt: "Pokemon Go" },
  ];
  return (
    <div className=" flex flex-col lg:flex-row gap-0 mt-20 mr-0 lg:mr-20 relative z-10">
      <div className="bg-gradient-to-r from-[#ef8e5e] to-[#f37329] pt-10 px-5 lg:py-10 lg:pl-20 lg:pr-[100px] text-center lg:text-left content-center lg:bg-gradient-to-r lg:from-[#f0844b] lg:to-[#ef8e5e] cp-partner-intro-polygon">
        <p className="text-2xl italic font-semibold text-white tracking-tighter">
          Challonge Is Trusted By
        </p>
      </div>
      <div className="logo-container flex-grow ml-0 lg:-ml-[51px] py-10 px-5 lg:px-20 content-center bg-gradient-to-r from-[#ef8e5e] to-[#f37329] cp-partner-logo-polygon lg:bg-gradient-to-r lg:from-[#f18246] lg:to-[#f37329]">
        <div className="logo-list flex flex-row gap-5 items-center">
          {partnerData.map((item) => (
            <div key={item.id} className="logo-item flex-1 ">
              <Image
                alt={item.alt}
                width={180}
                height={200}
                className="my-0 mx-auto"
                src={item.src}
                style={{
                  maxWidth: "100%",
                  height: "auto"
                }}></Image>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
