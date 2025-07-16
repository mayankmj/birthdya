// src/BirthdayPage.jsx
import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";
import SwiperCarousel from "./SwiperCarousel";

// Custom hook for window size
function useWindowSize() {
  const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
    const handleResize = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size;
}

export default function Homepage() {
  const size = useWindowSize();
  const [showConfetti, setShowConfetti] = useState(true);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-yellow-100 flex flex-col items-center justify-center p-6">
      {showConfetti && (
        <Confetti
          width={size.width}
          height={size.height}
          recycle={false}
          numberOfPieces={300}
        />
      )}

      <h1 className="text-5xl md:text-6xl font-extrabold text-purple-800 text-center mb-4 drop-shadow-lg">
        🎉 Happy Birthday, Kanishka! 🎂
      </h1>

      <p className="text-lg md:text-2xl text-purple-700 text-center mb-10 max-w-3xl">
        Wishing you all the love, laughter, and happiness in the world today and always.
        You make the world brighter just by being you 💖
      </p>

      <SwiperCarousel />

<button
  onClick={() => {
    setShowConfetti(false);       // stop current confetti (hide it)
    setTimeout(() => setShowConfetti(true), 100); // start confetti again after 100ms
  }}
  className="mt-8 px-6 py-3 bg-purple-600 text-white font-semibold rounded-full shadow-lg hover:bg-purple-500 transform hover:scale-105 transition"
>
  🎊 Celebrate Again!
</button>
    </div>
  );
}
