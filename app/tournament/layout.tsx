import { Inter } from "next/font/google";
import SearchInput from "../ui/tournament/searchInput";
import SideBar from "../ui/tournament/sideBar";

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
                <button
                  type="submit"
                  className="text-white bg-[#f8844a] hover:bg-[#f3752c] absolute end-2.5 bottom-2.5 focus:ring-4 font-medium rounded-full text-base px-4 py-2"
                >
                  Create Tournament
                </button>
              </div>

              <div className="flex flex-row mt-8">
                <div className=" w-64 h-screen bg-[#2a2a2a] mr-4">
                  <SideBar />
                </div>
                <div className="w-full h-screen bg-transparent border-l-2 border-dashed border-[#f3732966]">
                  <div className="w-full h-full bg-[#2a2a2a] ml-4 overflow-y-scroll">
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
