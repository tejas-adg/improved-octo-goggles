import { h } from "preact";
import { Head } from "$fresh/runtime.ts";
import BannerScroll from "../islands/BannerScroll.tsx";
import ScatterLayeredText from "../islands/ScatterLayeredText.tsx";
import WeDoSection from "../islands/WeDoSection.tsx";
import LoadingScreen from "../islands/LoadingScreen.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Developyy</title>
        <link rel="stylesheet" href="/styles.css" />
        <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Aclonica&display=swap" rel="stylesheet" />
      </Head>

      {/* FULL PAGE WRAPPER */}
      <main class="w-full text-white font-sans"
        style={{
          background: "linear-gradient(180deg, #000000 0%, #242424 50%, #717171 100%)"
        }}
      >
        <LoadingScreen />

        {/* HERO SECTION */}
        <section class="w-screen h-screen flex items-center justify-center relative overflow-hidden">
          {/* Background GIF */}
          <div class="absolute top-0 left-0 w-[90vw] h-[90vh] z-10 overflow-hidden shadow-lg border-4 border-black">
            <img
              src="/developyy.gif"
              alt="CRT vibes"
              class="w-full h-full object-cover"
            />
          </div>

          {/* Layered Developyy Text */}
          <div class="absolute top-[70%] left-[70%] -translate-x-1/2 -translate-y-1/2 z-20">
            <ScatterLayeredText text="Developyy" />
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section class="w-full min-h-screen flex flex-col lg:flex-row p-12 gap-8 items-center justify-center relative z-10">
          {/* Text Content */}
          <div class="flex-1 text-left max-w-9xl relative z-20">
            {/* Headings */}
            <div class="aboreto-regular text-[8rem] leading-none tracking-wide text-white mb-24">
              <span class="block text-left">ABOUT</span>
              <span class="block text-right text-8xl mt-4 text-gray-200">US</span>
            </div>

            <p class="aboreto-regular -mt-4 text-6xl text-gray-100 leading-none tracking-wide">
              WE CRAFT INNOVATIVE, END-TO-END DIGITAL SOLUTIONS THAT EMPOWER
              BUSINESSES TO SUCCEED IN A RAPIDLY EVOLVING DIGITAL WORLD.
            </p>
          </div>

          {/* Image Block */}
          <div class="flex-1 flex items-center justify-center z-10">
            <img
              src="/goth.png"
              alt="Girl holding DEVELOPYYY sign"
              class="max-h-[90vh] object-contain rounded-md"
            />
          </div>
        </section>

        <section class="w-full -mt-[5rem] relative z-30">
          <BannerScroll text="Developyy" color="red" speed={100} />
        </section>

        <WeDoSection />

        <section class="w-full relative z-30">
          <BannerScroll text="Developyy" color="yellow" speed={100} />
        </section>

        <section class="w-full flex flex-col px-8 py-24">
          {/* Text on left */}
          <div class="w-full max-w-6xl text-left mb-12">
            <p class="text-6xl text-white font-[Aclonica]">ARE YOU</p>
            <p class="text-6xl text-black font-[Aclonica] mt-4">ENLIGHTENED?</p>
          </div>

          {/* Image on right */}
          <div class="w-full flex justify-end overflow-x-visible">
          <img
            src="/enlightened.png"
            alt="Developyy poster"
            class="scale-[1.20] origin-right max-h-[90vh] rounded-md shadow-lg"
          />
          </div>
        </section>

        <section class="w-full flex flex-col px-8 py-24">
          <div class="flex items-start justify-start w-full">
            {/* Image on the left */}
            <img
              src="/why.png"
              alt="Cowboy holding DEVELOPYYY sign"
              class="max-h-[90vh] object-contain rounded-md shadow-lg"
            />

            {/* Text on the right - takes up remaining space */}
            <div class="flex flex-col justify-start text-left flex-1 ml-8">
              <h2 class="text-white text-6xl aboreto-regular leading-tight mb-6 -ml-[6rem] -mt-[2rem] z-10">
                <span class="block">WHY</span>
                <span class="block">CHOOSE US?</span>
              </h2>
              <p class="text-gray-300 text-5xl aboreto-regular leading-relaxed tracking-wide">
                OUR APPROACH ENABLES US TO SLASH INITIAL DEVELOPMENT COSTS BY APPROXIMATELY 20% COMPARED TO
                CONVENTIONAL MARKET RATES, WHILE ALSO CUTTING ONGOING MAINTENANCE EXPENDITURES DOWN TO JUST 5–10% 
                OF INITIAL COSTS. THAT IS JUST HALF THE INDUSTRY NORM. WE CRAFT EVERY SOLUTION IN-HOUSE, ENSURING 
                UNMATCHED PRECISION, RELIABILITY, AND UNCOMPROMISING DATA SECURITY.
              </p>
            </div>
          </div>
        </section>

        <section class="w-full relative z-30">
          <BannerScroll text="Developyy" color="lime" speed={100} />
        </section>

        <section class="w-full flex flex-col px-8 pt-2 pb-6">
          <div class="flex w-full justify-end relative">
            {/* Image aligned right */}
            <img
              src="/contact.png"
              alt="Woman on phone"
              class="max-w-[60%] h-auto object-contain"
            />

            {/* Contact text on the left, vertically lower */}
            <div class="absolute left-[18rem] top-[85%] -translate-y-1/2 text-left">
              <p class="text-white text-8xl font-[Aclonica] leading-none">
                CONTA<span class="text-black">CT</span>
              </p>
              <p class="text-white text-8xl font-[Aclonica] leading-none">US</p>
            </div>
          </div>

          {/* Email and design credits */}
          <div class="text-center mt-8">
            <p class="text-black text-8xl font-['Aclonica']">info@developyy.com</p>
            <p class="text-black text-xl mt-4 font-['Aclonica']">web design by Tirna, Tejas and Jayant</p>
          </div>
        </section>

      </main>
    </>
  );
}
