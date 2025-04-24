'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

const smallCards = [
  { icon: '/images/heart.png', text: 'Health / Wellness', color: 'bg-blue-600' },
  { icon: '/images/stars.png', text: 'Deep Jugaad', color: 'bg-red-600' },
  { icon: '/images/parent.png', text: 'Parenting', color: 'bg-yellow-600' },
  { icon: '/images/diy.png', text: 'DIY', color: 'bg-green-600' },
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

export default function Community() {
  return (
    <main className="w-full min-h-screen bg-blue-500 px-4 flex items-center justify-center">
      <div className="relative bg-blue-500 w-full max-w-7xl mx-auto rounded-[30px] overflow-hidden px-6 pt-12">

        {/* Decorative Elements */}
        <Image src="/images/linesRight.webp" width={200} height={200} alt="Lines Right" className="absolute left-4 top-4 w-20 md:w-32" />
        <Image src="/images/arrowRight.webp" width={200} height={200} alt="Arrow" className="absolute right-4 top-0 w-24 md:w-40" />

        {/* Headings */}
        <div className="text-center mb-8">
          <h1 className="uppercase font-bold text-2xl md:text-4xl lg:text-5xl text-white">WHERE AI MEETS COMMUNITY</h1>
          <h2 className="italic font-light text-lg md:text-3xl lg:text-4xl text-white mt-2">Get Smarter Every Day</h2>
        </div>

        {/* Store Buttons */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
          <Image src="/store/googlePlay.webp" width={140} height={60} alt="Google Play" className="w-40 md:w-48" />
          <Image src="/store/appStore.webp" width={140} height={60} alt="App Store" className="w-40 md:w-48" />
        </div>

        {/* Small Cards (Animated Falling In) */}
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {smallCards.map((card, i) => (
            <div key={i} className={`flex items-center gap-2 px-4 py-2 rounded-[30px] text-white ${card.color}`}>
              <Image src={card.icon} width={24} height={24} alt={card.text} className="w-5 h-5" />
              <span className="text-sm SF-Pro-Display-Regular">{card.text}</span>
            </div>
          ))}
        </motion.div>

        {/* User Cards (Animated Falling In) */}
        <motion.div
          initial={{ y: -150, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.5, ease: 'easeOut' }}
          className="relative w-full flex flex-wrap justify-center gap-6"
        >
          {userCards.map((card, index) => (
            <div
              key={index}
              className={`bg-white w-[300px] sm:w-[320px] p-5 rounded-[20px] shadow-lg transform ${card.rotate}`}
            >
              <div className="flex items-center gap-3 mb-3">
                <img src={card.image} alt={card.user} className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <p className="text-black font-semibold text-sm">{card.user}</p>
                  <p className="text-xs text-gray-400">{card.time}</p>
                </div>
                <div className="ml-auto flex gap-1">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                </div>
              </div>
              <p className="text-sm text-black leading-snug SF-Pro-Display-Regular">{card.question}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </main>
  );
}
