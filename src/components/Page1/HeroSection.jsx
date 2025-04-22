"use client";
import Image from "next/image";
import { Link as ScrollLink } from 'react-scroll';


export default function HeroSection() {
    return (
        <main className="w-full h-full" >

            <div className=" h-[83.5vh] md:h-[87vh] relative mx-3 bg-[#0D6DD5] text-white rounded-[30px] my-5 flex flex-col " >

                {/* Brain and Arrow img */}
                <div className="flex w-full gap-2 justify-between absolute top-0 my-9 " >
                    <Image
                        width={500}
                        height={500}
                        src="/images/arrow.webp"
                        className=" h-[3rem] w-[9.2rem] md:h-[6rem] md:w-[22.2rem]"
                        alt="Arrow"
                    />
                    <div className="bg-[#   ] w-fit p-3 rounded-full mr-6 2xl:mr-24 h-fit" >
                        <Image
                            width={500}
                            height={500}
                            src="/images/brain.webp"
                            className=" h-[2.3rem] w-[2.3rem]  "
                            alt="Brain"
                        />
                    </div>
                </div>


                <Image
                    width={500}
                    height={500}
                    src="/images/linesRight.webp"
                    className=" h-[11vh] absolute hidden object-contain md:block right-[11vw] top-[12vh] w-[14vw]"
                    alt="linesRight"
                />


                {/* TExt-box  */}
                <div className="flex flex-col h-[78vh] lg:h-[86vh] w-full items-center justify-center relative" >
                    <div className=" text-center mb-5" >
                        <h1 className="uppercase font-bold md:text-5xl text-2xl  SF-Pro-Bold " >Genius say Jugaar tak</h1>
                        <h2 className="italic font-thin md:text-5xl text-2xl  SF-Pro-Display-Regular" >Smarter Together</h2>
                    </div>

                    <div className=" mb-9 text-center mx-2">
                        <h1 className="SF-Pro-Display-Thin  md:text-[19px] text-sm " >Get real-life advice, tips, and problem-solving — Powered by </h1>
                        <h3 className="font-bold SF-Pro-Bold md:text-[19px]  text-sm" >AI and people like you</h3>
                    </div>

                    {/* Google Play and app store */}
                    <div className="flex flex-col lg:flex-row lg:space-x-3 lg:space-y-0 space-y-2 md:space-y-3 items-center justify-center" >
                        <div className="border-[3px] sepia-25 rounded-md " >
                            <Image
                                src="/store/googlePlay.webp"
                                className="h-[2rem] w-[6.5rem]  md:h-[2.6rem] md:w-[7.9rem] lg:h-[2.2rem] lg:w-[7rem]"
                                width={500}
                                height={500}
                                alt="App Store"
                            />

                        </div  >
                        <div className="border-[3px] sepia-25 rounded-md " >
                            <Image
                                width={500}
                                height={500}
                                src="/store/appStore.webp"
                                className=" h-[2rem] w-[6.5rem]  md:h-[2.6rem] md:w-[7.9rem] lg:h-[2.2rem] lg:w-[7rem]"
                                alt="App Store"
                            />

                        </div>

                    </div>

                    {/* linesLeft */}

                    <Image
                        width={500}
                        height={500}
                        src="/images/linesLeft.webp"
                        className=" h-[11vh] absolute hidden object-contain md:block left-[11vw] bottom-[12vh] lg:bottom-[33vh] w-[14vw]"
                        alt="linesLeft"
                    />

                    {/* solderingIron and tOOLBOX img */}
                    <div className="flex justify-between  px-8 2xl:px-32 w-full absolute bottom-[22vh] lg:bottom-[38vh] 2xl:bottom-[50vh] md:bottom-[26vh]" >
                        <div className="bg-[#5699e2] w-fit p-3 rounded-full  mr-6" >
                            <Image
                                width={500}
                                height={500}
                                src="/images/solderingIron.webp"
                                className=" h-[2.3rem] w-[2.3rem]"
                                alt="solderingIron"
                            />
                        </div>
                        <div className="bg-[#5699e2] w-fit p-3 rounded-full  " >
                            <Image
                                width={500}
                                height={500}
                                src="/images/toolbox.webp"
                                className=" h-[2.3rem] w-[2.3rem] "
                                alt="toolbox"
                            />
                        </div>
                    </div>

                </div>




                {/* bot and iphoneHand img */}
                <div className="flex justify-between w-full  " >
                    {/* Bot  */}
                    <Image
                        src="/images/bot.webp"
                        className="h-full max-w-[40vw] object-contain md:max-w-[33vw] lg:md:max-w-[40vw] max-h-[20vh] lg:max-h-[39vh]  left-0  absolute bottom-0 w-full"
                        width={1500}
                        height={1500}
                        alt="bot "
                    />

                    {/* Iphone in Hand  */}
                    <Image
                        src="/images/iphoneHand.webp"
                        className="h-full max-w-[38vw] xl:hidden  max-h-[28vh] lg:max-h-[40vh]  md:max-h-[39vh] 2xl:max-h-[52vh] right-0  absolute bottom-0 w-full"
                        width={1500}
                        height={1500}
                        alt="Iphone in Hand"
                    />
                    {/* Iphone in Hand  */}
                    <Image
                        src="/images/iphoneHand.webp"
                        className="h-full max-w-[29vw] hidden xl:block  max-h-[54vh] 2xl:max-w-[22vw]  right-0  absolute bottom-0 w-full"
                        width={1500}
                        height={1500}
                        alt="Iphone in Hand"
                    />
                </div>

                {/* NEXT sECTION   */}
                <ScrollLink to="whySoch" smooth={true} duration={450} >
                <Image
                    src="/images/nextSection.webp"
                    className="h-full w-full cursor-pointer max-w-[8vw] max-h-[8vh] hidden 2xl:block absolute bottom-12 left-1/2 transform -translate-x-1/2 object-contain"
                    width={1500}
                    height={1500}
                    alt="Next Section "
                />
           

           </ScrollLink>




            </div>



        </main>
    )
}
