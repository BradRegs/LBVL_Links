import Image from "next/image";
import { Inter } from "next/font/google";
import { GrYoutube, GrInstagram, GrTrophy, GrGlobe } from "react-icons/gr";
import { TbPlayVolleyball } from "react-icons/tb";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-green-200 after:via-green-800 after:blur-2xl after:content-[''] before:bg-gradient-to-br before:from-transparent before:to-green-700/10 after:from-green-900 after:via-green/40 before:lg:h-[360px]">
        <Image
          className="relative drop-shadow-[0_0_0.3rem_#00000070]"
          src="/LVL_Logo.png"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="mb-[40px] text-center w-full min-w-[220px] max-w-[500px]">
      <a
          href="https://lbvl.net"
          className=" my-[10px] flex flex-row justify-center items-center group rounded-lg border border-transparent p-4 transition-colors border-gray-300 bg-black border-neutral-700 hover:shadow-xl hover:outline hover:outline-2 hover:outline-offset-2"          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`sm:text-[15px] md:text-[20px] font-semibold flex flex-row justify-center items-center w-full`}>
            <GrGlobe className={"mr-[10px]"}/> Website
          </h2>
        </a>

        <a
          href="https://lbvl.net/register"
          className="my-[10px] flex flex-row justify-center items-center group rounded-lg border border-transparent p-4 transition-colors border-gray-300 bg-black border-neutral-700 hover:shadow-xl hover:outline hover:outline-2 hover:outline-offset-2"          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`sm:text-[15px] md:text-[20px] font-semibold flex flex-row justify-center items-center w-full`}>
            <TbPlayVolleyball className={"mr-[10px]"}/> Leagues
          </h2>
        </a>

        <a
          className="my-[10px] flex flex-row justify-center items-center group rounded-lg border border-transparent p-4 transition-colors border-gray-300 bg-black border-neutral-700 hover:shadow-xl hover:outline hover:outline-2 hover:outline-offset-2"          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`sm:text-[15px] md:text-[20px] font-semibold flex flex-row justify-center items-center w-full`}>
            <GrTrophy className={"mr-[10px]"}/> Tournaments (Coming Soon!)
          </h2>
        </a>

        <a
          className="my-[10px] flex flex-row justify-center items-center group rounded-lg border border-transparent p-4 transition-colors border-gray-300 bg-black border-neutral-700 hover:shadow-xl hover:outline hover:outline-2 hover:outline-offset-2"          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/lbvlvolleyball"
        >
          <h2 className={`sm:text-[15px] md:text-[20px] font-semibold flex flex-row justify-center items-center w-full`}>
            <GrInstagram className={"mr-[10px]"}/> <div>Instagram{" "}</div>
          </h2>
        </a>
        
        <a
          href="https://www.youtube.com/channel/UCwVjD4ln7CO2hYYwG11px5Q"
          className="my-[10px] min-w-[200px] flex flex-row justify-center items-center group rounded-lg border border-transparent p-4 transition-colors border-gray-300 bg-black border-neutral-700 hover:shadow-xl hover:outline hover:outline-2 hover:outline-offset-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`sm:text-[15px] md:text-[20px] font-semibold flex flex-row justify-center items-center w-full`}>
            <GrYoutube className={"mr-[10px]"}/> <div>Youtube Channel{" "}</div>
          </h2>
        </a>
      </div>
    </main>
  );
}
