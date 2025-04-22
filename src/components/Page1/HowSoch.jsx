import Image from "next/image";

export default function HowSoch() {
  const cards = [
    {
      firstLine: "Ask Anything",
      title: "SochAi",
      subtitle: "From Parenting Hacks To Daily Life Fixes",
      imageSrc: "/images/Iphone 14.png",
    },
    {
      firstLine: "Join The",
      title: "Community",
      subtitle: "Share And Discover Ideas",
      imageSrc: "/images/Iphone 14 (1).png",
     
    },
    {
      firstLine: "Learn From",
      title: "Others",
      subtitle: "Contribute Your Own Wisdom",
      imageSrc: "/images/Iphone 14 (2).png",
      marginBottom: "mb-6 lg:mb-0",
    },
  ];

  return (
    <main className="min-h-[50vh] w-full">
      <div className="relative xl:bg-[#252525] bg-[#0D6DD5] min-h-[60vh] rounded-[25px] mx-3 mt-6 overflow-hidden">
        {/* Special Low Z-Index Gradient Background */}
        <div
          className="absolute bottom-0 left-0 w-full h-1/2 z-[-10]"
          style={{
            background: "radial-gradient(circle at center, #0C1A2F 0%, #0C1A2F 100%)",
          }}
        />

        {/* Optional top half blue for xl */}
        <div className="hidden xl:block absolute top-0 left-0 w-full h-1/2 bg-[#0D6DD5] z-0 rounded-[25px]" />

        <h2 className="relative z-10 text-white pt-16 text-center text-4xl md:text-5xl font-light SF-Pro-Display-Regular italic mb-12">
          How&nbsp;
          <span className="SF-Pro-Bold not-italic"> Soch</span>
          <span className="text-red-500 SF-Pro-Bold not-italic">Ai </span> Works
        </h2>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-y-4  pb-10">
          {cards.map((item, index) => (
            <div
              className={`bg-white group hover:bg-red-500 cursor-pointer transition-colors duration-300 rounded-[20px] mx-3 xl:mx-10 ${item.marginBottom}`}
              key={index}
              style={{  boxShadow: "0 4px 20px rgba(13, 109, 213, 0.4)" }}
            >
              <h2 className="text-black group-hover:text-white transition-all duration-300 mt-11 text-center text-3xl md:text-5xl xl:text-2xl font-bold SF-Pro-Display-Regular">
                {item.firstLine}
                <span className="text-[#0D6DD5] SF-Pro-Bold"> {item.title} </span>
              </h2>
              <h1 className="SF-Pro-Display-Regular font-thin mb-12 text-black group-hover:text-white transition-all duration-300 text-sm text-center">
                {item.subtitle}
              </h1>
              <div className="flex justify-center items-center">
                <Image
                  width={500}
                  height={500}
                  src={`${item.imageSrc}`}
                  className="h-[17rem] hover:h-[17.5rem] hover:w-[15.5rem] transition-all duration-300 w-[15rem] object-contain"
                  alt="Iphone 14"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
