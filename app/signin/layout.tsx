import { Archivo_Narrow, Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const archivoNarrow = Archivo_Narrow({ subsets: ["latin"] });

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={inter.className}>
      <div className="flex min-h-screen flex-col items-center justify-between lg:mt-16 mt-14">
        {children}
      </div>
    </div>
  );
}
