import Image from 'next/image';
import { RiHeartPulseLine } from "react-icons/ri";
import { WiStars } from "react-icons/wi";

export default function Community() {
  const smallCards = [
    { icon: '/images/heart.png', text: 'Health / Wellness', color: 'bg-blue-600' , right:'right-5' , left: 'left-8' , top:'top-5', bottom:'botton-9' },
    { icon: '/images/stars.png', text: 'Deep Jugaad', color: 'bg-red-600' , right:'right-5' , left: 'left-8' , top:'top-5', bottom:'botton-9' },
    { icon: '/images/parent.png', text: 'Parenting', color: 'bg-yellow-600' , right:'right-5' , left: 'left-8' , top:'top-5', bottom:'botton-9' },
    { icon: '/images/diy.png', text: 'DIY', color: 'bg-green-600' , right:'right-5' , left: 'left-8' , top:'top-5', bottom:'botton-9' },
  ];

  const userCards = [   
    {
      user: 'Usama Raees',
      time: '1h Ago · Parenting',
      question: 'How Can I Manage Screen Time For Kids Effectively?',
      image: '/profile-pictures/user1.jpg',
      rotate: '-rotate-[3deg]',
    },
    {
      user: 'Abdul Aziz',
      time: '2h Ago · Parenting',
      question: 'How To Make Kids Interested In Studying Without Forcing Them?',
      image: '/profile-pictures/user2.jpg',
      rotate: 'rotate-[2deg]',
    },
    {
      user: 'Waleed Ansari',
      time: 'Deep Jugaad',
      question: 'How Can I Create A Balcony Garden In A Small Space?',
      image: '/profile-pictures/user5.jpg',
      rotate: 'rotate-[3deg]',
    },
    {
      user: 'Linta Zaidi',
      time: 'DIY',
      question: 'How Do I Paint My House Walls Like A Pro?',
      image: '/profile-pictures/user4.jpg',
      rotate: '-rotate-[4deg]',

    },
    {
      user: 'Rasil Abro',
      time: 'TECH',
      question: 'How To Become A Blockchain Developer',
      image: '/profile-pictures/user3.jpg',
      rotate: '-rotate-[4deg]',
    },
    {
      user: 'Hammad Afzal',
      time: 'DIY',
      question: 'How Do I Paint My House Walls Like A Pro?',
      image: '/profile-pictures/user6.jpg',
      rotate: '-rotate-[4deg]',
    },
    {
      user: 'Misbah Aslam',
      time: 'DIY',
      question: 'How Do I Paint My House Walls Like A Pro?',
      image: '/profile-pictures/user6.jpg',
      rotate: '-rotate-[4deg]',

    },
  ];
  return (
    <main className='w-full h-full'>
      <section className='h-screen overflow-hidden relative bg-blue-500 mx-3 rounded-[30px]'>
        {/* linesLeft and arrowRight img */}
        <div className="flex w-full gap-2 justify-between my-4">
          <div className="bg-transparent w-fit p-3 rounded-full mr-6 2xl:mr-24 h-fit">
            <Image
              width={500}
              height={500}
              src="/images/linesRight.webp"
              className="h-[3.3rem] md:h-[5rem] object-contain absolute left-12 w-fit"
              alt="linesRight"
            />
          </div>
          <Image
            width={500}
            height={500}
            src="/images/arrowRight.webp"
            className="h-[6rem] md:h-[10rem] w-fit object-contain absolute right-0"
            alt="Arrow"
          />
        </div>

        <div className="text-center mb-5 mt-24 xl:mt-24">
          <h1 className="uppercase font-bold md:text-5xl text-[1.35rem] SF-Pro-Bold">where AI meets community</h1>
          <h2 className="italic font-thin md:text-5xl text-[1.35rem] SF-Pro-Display-Regular">Get Smarter Every Day</h2>
        </div>

        {/* Google Play and app store */}
        <div className="flex flex-col lg:flex-row lg:space-x-3 lg:space-y-0 space-y-2 md:space-y-3 items-center justify-center">
          <div className="border-[3px] sepia-25 rounded-md">
            <Image
              src="/store/googlePlay.webp"
              className="h-[2rem] w-[6.5rem] md:h-[2.6rem] md:w-[7.9rem] lg:h-[2.2rem] lg:w-[7rem]"
              width={500}
              height={500}
              alt="Google Play"
            />
          </div>
          <div className="border-[3px] sepia-25 rounded-md">
            <Image
              width={500}
              height={500}
              src="/store/appStore.webp"
              className="h-[2rem] w-[6.5rem] md:h-[2.6rem] md:w-[7.9rem] lg:h-[2.2rem] lg:w-[7rem]"
              alt="App Store"
            />
          </div>
        </div>

        {/* linesRight */}
        <Image
          width={500}
          height={500}
          src="/images/linesRight.webp"
          className="h-[11vh] absolute hidden object-contain md:block right-[11vw] top-[12vh] w-[14vw]"
          alt="linesRight"
        />



<div className='w-full h-[66vh] relative ' >


        {/* SmallCards  */}
  {smallCards.map((item, index) => (
            <div
              key={index}
              className={`rounded-[30px]  absolute SF-Pro-Display-Regular flex gap-2 w-fit py-1 px-3 items-center ${item.color}`}
            >
              <Image
                width={500}
                height={500}
                src={item.icon}
                className="h-[1.6rem] object-contain w-fit"
                alt={item.text}
              />
              <h4>{item.text}</h4>
            </div>
          ))}




        {/* Profile Cards */}
        <div className="bg-white rounded-[20px] absolute bottom-0 shadow-lg p-5 w-[350px] transform rotate-[-3deg]">
          <div className="flex items-center gap-3 mb-3">
            <img
              src="/profile-pictures/user1.jpg"
              alt="Profile"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <p className="text-black font-semibold">Usama Raees</p>
              <p className="text-sm text-gray-400">1h Ago · Parenting</p>
            </div>
            <div className="ml-auto flex gap-1">
              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
            </div>
          </div>
          <h3 className="text-lg SF-Pro-Display-Regular text-black leading-snug">
            How Can I Manage Screen Time For Kids Effectively?
          </h3>
        </div>

        </div>
      </section>
    </main>
  )
}