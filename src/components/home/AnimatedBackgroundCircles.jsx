import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function AnimatedBackgroundCircles() {
  const [circles, setCircles] = useState([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Only run on client
    const generated = Array.from({ length: 12 }, () => ({
      width: Math.random() * 200 + 100,
      height: Math.random() * 200 + 100,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      x: Math.random() * 100 - 50,
      y: Math.random() * 100 - 50,
      duration: Math.random() * 20 + 10
    }));
    setCircles(generated);
    setMounted(true);
  }, []);

  if (!mounted) return null; // Avoid mismatch during SSR

  return (
    <>
      {circles.map((circle, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-mint"
          style={{
            width: circle.width,
            height: circle.height,
            left: circle.left,
            top: circle.top
          }}
          animate={{
            y: [0, circle.y],
            x: [0, circle.x],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: circle.duration,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
      ))}
    </>
  );
}
