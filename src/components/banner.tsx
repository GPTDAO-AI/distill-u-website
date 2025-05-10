"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Banner = () => {
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  // Use ref instead of regular variable to persist between renders
  const currentWordIndexRef = useRef(0);
  
  useEffect(() => {
    const words = [
      "Uniqueness",
      "Ultraverse",
      "Universe",
      "Ultimation",
      "Unicorn",
      "Upsurge",
      "Utopia"
    ];
    
    // Use .current to access the ref value
    const word = words[currentWordIndexRef.current];
    
    // Mechanical typing effect parameters
    const baseTypingSpeed = 120;
    const typingVariation = 40;
    const delayAfterWord = 1500;
    
    const typingSpeed = baseTypingSpeed + Math.floor(Math.random() * typingVariation);
    
    if (!isDeleting && currentText !== word) {
      // Still typing the current word
      timeoutRef.current = setTimeout(() => {
        setCurrentText(word.substring(0, currentText.length + 1));
      }, typingSpeed);
    } else if (!isDeleting && currentText === word) {
      // Finished typing, wait a bit before deleting
      timeoutRef.current = setTimeout(() => {
        setIsDeleting(true);
      }, delayAfterWord);
    } else if (isDeleting && currentText !== "") {
      // Deleting the current word
      timeoutRef.current = setTimeout(() => {
        setCurrentText(word.substring(0, currentText.length - 1));
      }, typingSpeed / 1.5); // Faster deletion
    } else if (isDeleting && currentText === "") {
      // Finished deleting, move to next word
      setIsDeleting(false);
      // Update the ref value
      currentWordIndexRef.current = (currentWordIndexRef.current + 1) % words.length;
    }
    
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentText, isDeleting]); // Remove currentWordIndex from deps

  // Character animation variants
  const characterVariants = {
    hidden: { opacity: 0, y: 5 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="h-screen w-full max-w-7xl flex flex-col items-start justify-center md:items-center gap-y-24 md:gap-y-36 py-4 md:py-8 px-4">
      <div className="text-5xl md:text-7xl lg:text-8xl flex flex-wrap items-center justify-center">
        <span className="inline-block">Distill</span>
        <span className="inline-block">&nbsp;</span>
        <div className="text-text-2 flex items-baseline">
          {currentText.split("").map((char: string, index: number) => (
            <motion.span
              key={`${index}-${char}`}
              initial="hidden"
              animate="visible"
              variants={characterVariants}
              transition={{ 
                duration: 0.1,
                type: "spring", 
                stiffness: 500,
                damping: 10
              }}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
            
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-text-2 ml-1"
          >
                _
          </motion.span>
        </div>
      </div>
      <div className="w-full text-lg md:text-xl lg:text-2xl flex justify-end">
        <p className="w-full md:w-1/2 text-left">
          We partner with visionary founders at day one, leveraging Palo Alto&apos;s unmatched ecosystem to sharpen technology, scale markets, and execute relentlessly. No hype, no shortcuts — just Silicon Valley&apos;s blueprint for turning AI moonshots into trillion-dollar realities.
        </p>
      </div>
    </div>
  );
};

export default Banner;