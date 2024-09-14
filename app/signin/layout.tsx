import { Archivo_Narrow, Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const archivoNarrow = Archivo_Narrow({ subsets: ["latin"] });

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={inter.className}>
      <div className="flex min-h-screen flex-col items-center justify-between lg:mt-16 mt-14">
        <div className="w-full max-w-[2200px] bg-[#323232] my-0 mx-auto">
          <div className="flex flex-row items-start py-12 bg-[url(https://assets.challonge.com/assets/redesign/section-background.png)] bg-no-repeat">
            <div className="px-4 lg:px-10 flex-grow min-h-[calc(100vh-48px)] max-w-[100vw]">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
