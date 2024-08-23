import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={inter.className}>
      <div className="flex flex-col items-center justify-between lg:mt-16 mt-14">
        {children}
      </div>
    </div>
  );
}
