'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const TEXTS = [
  'AI-Powered Market Insights',
  'Real-Time Trading Signals',
  'Advanced Risk Analytics'
];

// Must have export default
export default function Typewriter() {
  const [index, setIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % TEXTS.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      key={index}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="text-lg md:text-xl font-medium"
    >
      {TEXTS[index]}
    </motion.div>
  );
}