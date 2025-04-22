

import Image from 'next/image';

export default function WhySochAiSection() {
  return (
    <section className="bg-gradient-to-b from-[#252525] via-[#1b3d62] to-[#0a0a0a] text-white py-24 px-4 md:px-12">
        <h2 className="relative z-10 text-white text-left  text-4xl md:text-5xl font-light SF-Pro-Display-Regular italic mb-12">
          Why&nbsp;
          <span className="SF-Pro-Bold not-italic 2xl:text-6xl"> Soch</span>
          <span className="text-red-500 SF-Pro-Bold 2xl:text-6xl not-italic">Ai </span> is Different??
        </h2>
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left Text Section */}
        <div className="flex flex-col gap-8 text-left w-full lg:w-1/2">
       

          <div className="bg-[#112340]/40 p-4 rounded-xl">
            <p className="text-[#1d9bf0]  SF-Pro-Bold italic text-3xl">Smart Answers</p>
            <p className="text-sm text-white/80">not random ones</p>
          </div>

          <div className="bg-[#240909]/40 p-4 rounded-xl">
            <p className="text-red-600 font-bold text-xl">Designed For</p>
            <p className="text-sm text-white/80">real people with real problems</p>
          </div>

          <div className="bg-[#240933]/40 p-4 rounded-xl">
            <p className="text-pink-500 font-bold text-xl">Gen Z To</p>
            <p className="text-sm text-white/80">parents everyone’s voice matters</p>
          </div>
        </div>

        {/* Center Image Section */}
        <div className="w-full lg:w-[28rem] flex justify-center relative">
          <Image
            src="/images/Iphone16pro.png"
            alt="App Screenshot Center"
            width={300}
            height={600}
            className="relative z-10"
          />
   
        </div>

        {/* Right Text Section */}
        <div className="flex flex-col gap-8 text-left w-full lg:w-1/2">
          <div className="bg-[#0c1f14]/40 p-4 rounded-xl">
            <p className="text-green-400 font-bold text-xl">Fast, Simple</p>
            <p className="text-sm text-white/80">and easy-to-use</p>
          </div>

          <div className="bg-[#1f1a08]/40 p-4 rounded-xl">
            <p className="text-yellow-400 font-bold text-xl">Proudly Built</p>
            <p className="text-sm text-white/80">for South Asia</p>
          </div>
        </div>
      </div>
    </section>
  );
}
