import { width } from "@fortawesome/free-regular-svg-icons/faAddressBook";
import Image from "next/image";
import Link from "next/link";

export default function Pricing() {
  return (
    <div className="bg-gradient-to-r from-[#3a3a3a] to-[#313131] w-full border-t-[13px] border-[#484848]">
      <div className="bg-[url(https://assets.challonge.com/_next/static/media/section-background.7b05ad11.png)] bg-no-repeat">
        <div className="flex flex-col lg:items-center py-16 px-5 lg:px-20 text-white tracking-tighter gap-8">
          <h2 className="header text-3xl sm:text-4xl font-bold italic">
            Pricing & Plans Overview
          </h2>
          <div className="flex flex-col gap-0 border border-[#191919] mx-auto">
            <div className="flex flex-col sm:flex-row items-start gap-0 sm:gap-10 bg-[#191919] px-10 pb-12">
              <div className="w-36 xl:w-48 min-w-36 xl:min-w-48 mx-auto">
                <Image
                  src={"/image/pricing/premier-plan.webp"}
                  width={200}
                  height={200}
                  alt="..."
                />
              </div>
              <div className="name-container flex flex-col gap-5 pt-12 flex-1">
                <h2 className="name text-3xl italic font-bold">
                  7-day Free Trial
                </h2>
                <p className="paragraph text-[#b4b4b4]">
                  Perfect for any person, venue, brand, group, team, or
                  organization ready to professionalize and promote their
                  efforts.
                </p>
                <Link href={"/"}>
                  <button className="w-full py-3 font-bold block bg-[#f8844a] hover:bg-[#f3752c]">
                    SIGN UP
                  </button>
                </Link>
              </div>
            </div>
            <div className="px-10 py-2 text-lg bg-[#2a2a2a]">No ads</div>
            <div className="px-10 py-2 text-lg bg-[#191919]">
              One free{" "}
              <Link href={"/"} className="text-[#F17D3D]">
                {" "}
                Pro Community License
              </Link>
            </div>
            <div className="px-10 py-2 text-lg bg-[#2a2a2a]">
              Embed brackets using custom themes
            </div>
            <div className="px-10 py-2 text-lg bg-[#191919]">
              Priority support
            </div>
            <div className="px-10 py-2 text-lg bg-[#2a2a2a]">
              Create unlimited tournaments, events, and communities
            </div>
            <div className="px-10 py-2 text-lg bg-[#191919]">
              Up to 512 participants per tournament
            </div>
            <div className="px-10 py-2 text-lg bg-[#2a2a2a]">
              Match attachments as file uploads (up to 25mb)
            </div>
            <div className="px-10 py-2 text-lg bg-[#191919]">
              Stripe integration (No Challonge fee for paid event and tournament
              registrations)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
