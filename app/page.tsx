import About from "./ui/home/About";
import Community from "./community/page";
import Feature from "./ui/home/Feature";
import './ui/home/home.css'
import Pricing from "./ui/home/Pricing";
import Tournament from "./ui/home/Tournament";

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
