"use client"
import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const cardsData = [
  'Card 1', 'Card 2', 'Card 3', 'Card 4', 'Card 5',
  'Card 6', 'Card 7', 'Card 8', 'Card 9', 'Card 10'
];

const randomX = () => Math.floor(Math.random() * 90) + 5 + '%';

export default function ShowerCards() {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true });
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    // Generate random X positions for cards once
    setPositions(cardsData.map(() => randomX()));
  }, []);

  useEffect(() => {
    if (inView) {
      controls.start(i => ({
        y: 0,
        opacity: 1,
        transition: {
          delay: i * 0.15,
          duration: 5,
          bounce: 0.3,
          type: 'spring'
        }
      }));
    }
  }, [inView]);

  return (
    <div ref={ref} className="relative h-screen overflow-hidden bg-blue-500 flex justify-center items-end">
      <h1>Hello This is your boy</h1>
      <div></div>
      {cardsData.map((text, i) => (
        <motion.div
          key={i}
          custom={i}
          initial={{ y: -200, opacity: 0 }}
          animate={controls}
          className="absolute p-4 rounded-xl shadow-lg bg-white text-black"
          style={{
            bottom: 40,
            left: positions[i] || '50%',
            transform: 'translateX(-50%)',
          }}
        >
          {text}
        </motion.div>
      ))}
    </div>
  );
}
