import Image from "next/image";


export default function Footer() {
  return (
    <main className="w-full h-full">
      <div className="bg-white px-5 mx-3 py-4  rounded-[30px] mb-12 flex flex-col md:flex-row relative lg:justify-around justify-center" >

        {/* Left Side */}
        <div className="flex flex-col md:my-auto   items-center justify-center h-full" >
          <h2 className="text-[#0D6DD5] pt-4 sm:pt-0 md:w-[max-content] text-left uppercase text-2xl xl:text-5xl md:text-3xl SF-Pro-Bold   mb-6">
            Start your smarter
            <br />
            <span className=" lowercase SF-Pro-Display-Regular  font-thin text-[#252525]">
              journey today.
            </span>
          </h2>

          {/* GooglePlay and AppStore */}
          <div className="flex gap-3 xl:gap-8" >
            <div className="border-[3px] sepia-25 rounded-md " >
              <Image
                src="/store/googlePlay.webp"
                className="h-[2rem] w-[6.5rem] object-contain  md:h-[2.6rem] md:w-[7.9rem] lg:h-[2.2rem] lg:w-[7rem] xl:h-[4.2rem] xl:w-[8rem]"
                width={500}
                height={500}
                alt="Google Play"
              />
            </div  >
            <div className="border-[3px] sepia-25 rounded-md " >
              <Image
                src="/store/appStore.webp"
                className="h-[2rem] w-[6.5rem] object-contain  md:h-[2.6rem] md:w-[7.9rem] lg:h-[2.2rem] lg:w-[7rem] xl:h-[4.2rem] xl:w-[8rem]"
                width={500}
                height={500}
                alt="App STore"
              />
            </div  >



          </div>
        </div>


        {/* Right Side */}
        <div className="flex flex-col mx-auto md:mx-0 items-center my-8 justify-center w-fit relative" >
          <Image
            src="/images/appleWatch.png"
            className="h-[13rem] md:h-[17rem] xl:h-[27rem] 2xl:h-[31rem] w-fit object-contain"
            width={500}
            height={500}
            alt="Apple Watch"
          />
          <div className="absolute right-0 bottom-0" >

            <Image
              src="/images/botShy.png"
              className="h-[8rem] w-fit xl:h-[13rem]  object-contain"
              width={500}
              height={500}
              alt="Bot"
            />
          </div>
        </div>

      </div>



      {/* Last Box */}
      <div className="flex flex-col lg:flex-row lg:justify-between" >
        <div className=" flex font-bold ml-8 gap-2  text-xl items-center" >
          <Image
            src="/logo.png"
            width={500}
            height={500}
            alt="Picture of the author"
            className="h-[3.8rem] w-fit  object-contain"
          />
          <h3 className="SF-Pro-Display-Regular text-3xl" >Soch<span className="  text-red-500" >Ai</span> </h3>
        </div>

        <ul className="text-sm font-thin mx-8 mt-8 gap-x-5 flex flex-col lg:flex-row gap-2 " >
          <li>Contact Us</li>
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
        </ul>
      </div>

      <h2 className="flex item-center justify-center my-8 text-sm text-[#868686]" >© 2025 sochai</h2>

    </main>
  )
}
