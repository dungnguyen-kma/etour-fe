import Image from "next/image";

export default function AdvancedFormat() {
  return (
    <div className="grid grid-cols-1 gap-10">
      <div className="grid-item flex flex-col lg:flex-row gap-5 bg-[#191919] rounded-md p-5">
        <div className="image w-96 min-w-96">
          <Image
            width={500}
            height={500}
            src="/image/feature-format/two-stage.webp"
            alt="two-stage"
            style={{
              maxWidth: "100%",
              height: "auto"
            }}></Image>
        </div>
        <div className="flex flex-col gap-2.5">
          <h2 className=" text-white italic font-bold">Two Stage</h2>
          <p className="text-[#7b7b7b]">
            Compete in a group stage using single elimination, double
            elimination, round robin, or Swiss. Those who advance from their
            groups compete in a final stage.
          </p>
        </div>
      </div>
    </div>
  );
}
