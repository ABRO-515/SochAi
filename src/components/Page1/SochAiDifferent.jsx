

import Image from 'next/image';

export default function WhySochAiSection() {
  return (
    <section className="bg-gradient-to-b from-[#252525] via-[#1b3d62] to-[#252525] text-white py-24 ">
      <h2 className="relative mx-8 z-10 text-white text-left  text-4xl md:text-5xl font-light SF-Pro-Display-Regular italic mb-12">
        Why&nbsp;
        <span className="SF-Pro-Bold not-italic 2xl:text-6xl"> Soch</span>
        <span className="text-red-500 SF-Pro-Bold 2xl:text-6xl not-italic">Ai </span> is Different??
      </h2>
      <div className='w-full h-full flex flex-col lg:flex-row items-center justify-center md:px-6 lg:px-2 px-2' >

  {/* Three Boxes */}
  <div className=' flex-col gap-10 justify-between hidden lg:flex   '>
          <div className="border-[#4B4B4B] border py-6 pr-24 pl-10 rounded-xl">
            <p className="text-[#1d9bf0]  SF-Pro-Bold italic text-3xl xl:text-5xl">Smart Answers</p>
            <p className="text-xl text-white/80 SF-Pro-Display-Regular font-thin italic">not random ones</p>
          </div>
          <div className="border-[#4B4B4B] border py-6 pr-24 pl-10 rounded-xl">
            <p className="text-red-600  SF-Pro-Bold italic text-3xl xl:text-5xl">Designed For</p>
            <p className="text-xl text-white/80 SF-Pro-Display-Regular font-thin italic">real people with real problems</p>
          </div>
          <div className="border-[#4B4B4B] border py-6 pr-24 pl-10 rounded-xl">
            <p className="text-pink-500  SF-Pro-Bold italic text-3xl xl:text-5xl">Gen Z To</p>
            <p className="text-xl text-white/80 SF-Pro-Display-Regular font-thin italic">parents everyone’s voice matters</p>
          </div>
        </div>


        {/* Image */}
        <div className="w-full lg:w-[28rem] flex justify-center items-center">
          <Image
            src="/images/Iphone16pro.png"
            alt="App Screenshot Center"
            width={300}
            height={600}
            className="relative z-10 object-contain lg:h-[34rem] h-[94vw] w-[56vw] md:h-[91vw] md:w-[51vw]"
          />

    {/* Two Boxes from lg */}
    <div className=' flex-col py-24 justify-between hidden gap-8 lg:flex ml-[-36px] '>
          <div className="border-[#4B4B4B] border py-6 px-9 rounded-xl w-[max-content] " >
            <p className="text-green-400  SF-Pro-Bold italic text-3xl xl:text-4xl">Fast, Simple</p>
            <p className="text-xl text-white/80 SF-Pro-Display-Regular font-thin italic">and easy-to-use</p>
          </div>
          <div className="border-[#4B4B4B] border py-6 px-9 rounded-xl mb-8">
            <p className="text-yellow-400  SF-Pro-Bold italic text-3xl xl:text-4xl">Proudly Built</p>
            <p className="text-xl text-white/80 SF-Pro-Display-Regular font-thin italic">for South Asia</p>
          </div>
     
        </div>


          {/* Four Boxes till md */}
          <div className='flex flex-col gap-3 mx-2 lg:hidden'>
            <div className="border-[#4B4B4B] border sm:p-4 md:p-3 p-2 rounded-xl">
              <p className="text-red-600  SF-Pro-Bold italic text-[5vw] md:text-[4vw] xl:text-5xl">Designed For</p>
              <p className="text-[4vw] md:text-[3.5vw] text-white/80 SF-Pro-Display-Regular font-thin italic">real people with real problems</p>
            </div>
            <div className="border-[#4B4B4B] border sm:p-4 md:p-3 p-2 rounded-xl">
              <p className="text-yellow-400  SF-Pro-Bold italic text-[5vw] md:text-[4vw] xl:text-5xl">Proudly Built</p>
              <p className="text-[4vw] md:text-[3.5vw] text-white/80 SF-Pro-Display-Regular font-thin italic">for South Asia</p>
            </div>
            <div className="border-[#4B4B4B] border sm:p-4 md:p-3 p-2 rounded-xl lg:hidden">
              <p className="text-green-400  SF-Pro-Bold italic text-[5vw] md:text-[4vw] xl:text-5xl">Fast, Simple</p>
              <p className="text-[4vw] md:text-[3.5vw] text-white/80 SF-Pro-Display-Regular font-thin italic">and easy-to-use</p>
            </div>
            <div className="border-[#4B4B4B] border sm:p-4 md:p-3 p-2 rounded-xl lg:hidden">
              <p className="text-pink-500  SF-Pro-Bold italic text-[5vw] md:text-[4vw] xl:text-5xl">Gen Z To</p>
              <p className="text-[4vw] md:text-[3.5vw] text-white/80 SF-Pro-Display-Regular font-thin italic">parents everyone’s voice matters</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
