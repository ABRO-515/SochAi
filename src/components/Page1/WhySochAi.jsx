import Image from 'next/image';

export default function WhySochAi() {
    const sochAiFeatures = [
        {
            title: 'Chat With AI',
            description: 'Life Hacks, Smart Advice, Quick Info',
            textColor: 'text-yellow-400',
            icon: '/images/bot.png',
            sizer:'h-[11rem] w-[11rem]'
        },
        {
            title: 'Community Posts',
            description: 'Share Experiences, Ask And Answer Questions',
            textColor: 'text-white',
            icon: '/images/cartoon.png',
            sizer:'h-[9.5rem] w-[7.5rem]'
        },
        {
            title: 'Personalized Experience',
            description: 'AI Understands You Better With Time',
            textColor: 'text-red-500',
            icon: '/images/rocket.png',
            sizer:'h-[12rem] w-[12rem]'
        },
        {
            title: 'Safe & Smart',
            description: 'Content Moderation With AI + Human Checks',
            textColor: 'text-green-500',
            icon: '/images/icons.png',
            spinSpeed: "animate-[spin_13s_linear_infinite]",
            sizer:'h-[8.5rem] w-[9.5rem]'
        },
        {
            title: 'Evolving Every Day',
            description: 'The More You Ask, The Smarter It Gets',
            textColor: 'text-fuchsia-500',
            icon: '/images/bot.png',
            sizer:'h-[10rem] w-[10rem]'
        },
    ];

    return (
        <main className="w-full h-fit flex flex-col items-center mb-24 "  >
            <div className="bg-[#313030] w-full py-8 border-t mb-24 border-b border-[#494949]"></div>

            <div className="w-full max-w-7xl px-4 flex flex-col items-center ">
                <h2 id='whySoch' className="text-white text-center text-4xl md:text-5xl font-light SF-Pro-Display-Regular italic mb-12">
                    Why You'll Love Using{' '}
                    <br />
                    <span className="not-italic font-bold text-white">
                        Soch<span className="text-red-600 text-4xl md:text-5xl">Ai</span>
                    </span>
                </h2>

                {/* Added gap-y-16 for vertical row gap */}
                <div   className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-x-8 xl:gap-x-40 gap-y-16 w-full justify-items-center">
                    {sochAiFeatures.map((item, index) => (
                        <div
                            key={index}
                            className={`relative w-full xl:p-8 xl:h-56 xl:w-[40rem] max-w-md h-48 hover:bg-[#0D6DD5] hover:shadow-2xl rounded-xl p-6 border border-white/10 bg-[#252525] flex flex-col justify-between transition-all hover:scale-[1.02]`}
                        >
                            <div>
                                <h3 className={`text-2xl xl:text-4xl SF-Pro-Bold text-left font-semibold ${item.textColor}`}>
                                    {item.title}
                                </h3>
                                <p className="text-gray-300 SF-Pro-Display-Regular text-base mt-2 text-left">
                                    {item.description}
                                </p>
                            </div>

                            {item.icon && (
                                <div className="absolute bottom-[-28px] right-0 w-fit h-fit">
                                    <Image
                                        src={item.icon}
                                        alt={item.title}
                                        width={1500}
                                        height={1500}
                                        className={`object-contain ${item.spinSpeed || ''} ${item.sizer}`}
                                    />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}