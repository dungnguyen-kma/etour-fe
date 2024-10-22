import About from "./ui/home/about";
import Community from "./ui/home/community";
import Feature from "./ui/home/feature";
import './ui/home/home.css'
import Pricing from "./ui/home/pricing";
import Tournament from "./ui/home/tournament"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between lg:mt-16 mt-14">
      <About/>
      {/* <Feature/> */}
      <Tournament/>
      {/* <Community/> */}
      <Pricing/>
    </main>
  );
}
