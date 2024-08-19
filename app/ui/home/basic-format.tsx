import Image from "next/image";

export default function BasicFormat() {
  const itemData = [
    {
      id: 1,
      src: "/image/feature-format/single-elimination.webp",
      alt: "Single Elimination",
      header: "Single Elimination",
      paragraph: "Immediate elimination after losing a match.",
    },
    {
      id: 2,
      src: "/image/feature-format/double-elimination.webp",
      alt: "Double Elimination",
      header: "Double Elimination",
      paragraph: "Elimination after losing two matches.",
    },
    {
      id: 3,
      src: "/image/feature-format/free-for-all.webp",
      alt: "Free For All",
      header: "Free For All",
      paragraph:
        "Compete against several participants at once in each match, with one or more winners advancing to the next round.",
    },
    {
      id: 4,
      src: "/image/feature-format/round-robin.webp",
      alt: "Round Robin",
      header: "Round Robin",
      paragraph: "Face off against all participants, one at a time.",
    },
    {
      id: 5,
      src: "/image/feature-format/Leaderboard.webp",
      alt: "Leaderboard",
      header: "Leaderboard",
      paragraph: "Compete for top rank, scored by whatever means you see fit.",
    },
  ];
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-10">
      {itemData.map((item) => (
        <div key={item.id} className="bg-[#191919] rounded-md flex gap-5 p-5">
          <div className="w-2/5 max-w-[40%] min-w-[40%]">
            <Image
              width={300}
              height={300}
              src={item.src}
              alt={item.alt}
              style={{
                maxWidth: "100%",
                height: "auto"
              }}></Image>
          </div>
          <div className="flex flex-col gap-2.5 justify-center">
            <h2 className=" text-white italic font-bold">
              {item.header}
            </h2>
            <p className=" text-[#7b7b7b]">{item.paragraph}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
