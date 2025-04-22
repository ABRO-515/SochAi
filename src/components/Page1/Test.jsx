// pages/index.js
import Image from "next/image";

export default function Home() {
    const cards = [
        {
            title: "SochAi",
            subtitle: "From Parenting Hacks To Daily Life Fixes",
            imageSrc: "/card1.png", // Add this image to public/
            tags: ["Parenting", "Health / Wellness", "DIY", "Deep Jugaar"],
        },
        {
            title: "SochAi",
            subtitle: "Ideas to Make Life Simpler",
            imageSrc: "/images/Iphone 14.png",
            tags: ["Life Tips", "Tech Fixes", "Smart Hacks"],
        },
        {
            title: "SochAi",
            subtitle: "Community Driven Knowledge",
            imageSrc: "/images/Iphone 14.png",
            tags: ["Explore", "Share", "Discover"],
        },
    ];

    return (
        <main className="min-h-screen bg-gray-100 py-10 px-4">

            <div className="bg-[#0D6DD5] min-h-[60vh] rounded-[25px] mx-3 my-24" >
                <h2 className="text-white py-16 text-center text-4xl md:text-5xl font-light SF-Pro-Display-Regular italic mb-12">How&nbsp;
                    <span className="SF-Pro-Bold not-italic" > Soch</span>
                    <span className="text-red-500 SF-Pro-Bold not-italic" >Ai </span> Works </h2>


                <div className="grid grid-cols-1 lg:grid-cols-3" >
                    {/* whole card*/}
                    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {cards.map((card, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col hover:shadow-xl transition duration-300"
                            >
                                <div className="bg-black text-white p-4">
                                    <h2 className="text-xl font-bold">
                                        Ask <span className="text-blue-400">SochAi</span> Anything
                                    </h2>
                                    <p className="text-sm mt-1">{card.subtitle}</p>
                                </div>

                                <div className="relative h-64">
                                    <Image
                                        src={card.imageSrc}
                                        alt={card.title}
                                        layout="fill"
                                        objectFit="cover"
                                    />
                                </div>

                                <div className="p-4">
                                    <p className="text-lg font-semibold text-center">What can I help with?</p>
                                    <div className="flex flex-wrap justify-center gap-2 mt-3">
                                        {card.tags.map((tag, i) => (
                                            <span
                                                key={i}
                                                className="text-xs bg-gray-200 px-3 py-1 rounded-full"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </main>


    );
}
