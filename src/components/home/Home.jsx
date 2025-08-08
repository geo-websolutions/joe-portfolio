// components/Home.js
"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import ClientMarquee from "./ClientMarquee";

const headers = [
  { main: "Crafting Unbreakable Connections with", span: "Ideal Clients" },
  { main: "Accelerating Your Growth by Reaching", span: "Perfect Prospects" },
  { main: "Turning Conversations into Conversions with", span: "Precision Targeting" },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
}

const titleVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 80 } },
}


export default function Home() {

  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % headers.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const stats = [
    { value: "6+", label: "Years Of Experience" },
    { value: "700+", label: "Campaigns/Projects" },
    { value: "100+", label: "Thriving Client Partnerships" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren"
      }
    }
  };

  const titleVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const statVariants = {
    hidden: { 
      y: 30,
      opacity: 0,
      scale: 0.9
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 10
      }
    }
  };

  const statHoverVariants = {
    hover: {
      y: -8,
      boxShadow: "0 15px 30px -5px rgba(109, 139, 116, 0.3)",
      transition: {
        type: "spring",
        stiffness: 300
      }
    }
  };

  const ctaVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        delay: 0.5
      }
    }
  };

  const marqueeVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        delay: 0.4
      }
    }
  };

  return (
    <section id="home" className="flex flex-col justify-center min-h-screen pb-12 overflow-hidden bg-dark">
      <div className="container mx-auto px-6 sm:px-8 space-y-8">
        
        {/* Header Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: false, margin: "-100px" }}
          className="space-y-6"
        >
          <AnimatePresence mode="wait">
            <motion.h1
              key={index}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-beige leading-tight"
              variants={titleVariants}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
            >
              {headers[index].main}{" "}
              <motion.span
                className="text-accent inline-block"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: 1,
                  scale: [1, 1.05, 1],
                  textShadow: [
                    "0 0 0px rgba(109,139,116,0)",
                    "0 0 12px rgba(109,139,116,0.5)",
                    "0 0 0px rgba(109,139,116,0)",
                  ],
                }}
              >
                {headers[index].span}
              </motion.span>
            </motion.h1>
          </AnimatePresence>

          <motion.p
            className="text-lg sm:text-xl text-gray-light max-w-3xl leading-relaxed"
            variants={{
              hidden: { x: -30, opacity: 0 },
              visible: {
                x: 0,
                opacity: 1,
                transition: {
                  type: "spring",
                  delay: 0.4,
                },
              },
            }}
          >
            Architecting high-performance lead generation systems that drive sustainable growth.
            Combining strategic vision with operational excellence to transform your pipeline
            from uncertain to unstoppable.
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: false, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-6"
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              variants={statVariants}
              whileHover="hover"
              className="bg-dark-gray hover:bg-darker transition-all p-6 rounded-lg border border-dark"
            >
              <motion.p 
                className="text-4xl font-bold text-accent-light mb-2"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: index * 0.2
                }}
              >
                {stat.value}
              </motion.p>
              <p className="text-gray-light text-lg">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Client Marquee */}
        <motion.div
          variants={marqueeVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-50px" }}
          className="py-6"
        >
          <ClientMarquee />
        </motion.div>
        
        {/* CTA Button */}
        <motion.div
          variants={ctaVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-50px" }}
          className="pt-8 text-center"
        >
          <Link
            href="#contact"
            className="relative inline-flex items-center justify-center px-10 py-5 overflow-hidden font-bold text-beige border-2 border-accent rounded-lg group"
          >
            <motion.span 
              className="relative z-10 text-xl flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
            >
              Let's Build Your Pipeline
              <motion.svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                animate={{
                  x: [0, 8, 0],
                  rotate: [0, 15, -15, 0]
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </motion.svg>
            </motion.span>
            <motion.span 
              className="absolute inset-0 bg-accent/10 rounded-lg"
              initial={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}