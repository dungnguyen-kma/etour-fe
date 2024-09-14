import { Inter } from "next/font/google";
import SearchInput from "../ui/tournament/searchInput";
import SideBar from "../ui/tournament/sideBar";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={inter.className}>
      <div className="flex flex-col items-center justify-between lg:mt-16 mt-14">
        <div className="w-full max-w-[2200px] bg-[#323232] my-0 mx-auto">
          <div className="flex py-12 bg-[url(https://assets.challonge.com/assets/redesign/section-background.png)] bg-no-repeat">
            <div className="px-4 lg:px-10 flex-grow min-h-[calc(100vh-48px)] max-w-[100vw]">
              <div className="relative">
                <SearchInput />
                <Link 
                  href={"/signup"}
                  type="submit"
                  className="text-white bg-[#f8844a] hover:bg-[#f3752c] absolute end-2.5 bottom-2.5 font-medium rounded-full text-base px-4 py-2"
                >
                  Create Tournament
                </Link>
              </div>
              <div className="flex flex-row mt-8">
                <div className="sticky top-14 w-64 h-screen bg-[#2a2a2a] mr-4">
                  <SideBar />
                </div>
                <div className="w-full bg-transparent border-l-2 border-dashed border-[#f3732966]">
                  <div className="w-[calc(100%-16px)] h-full bg-[#2a2a2a] ml-4">
                    {children}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
