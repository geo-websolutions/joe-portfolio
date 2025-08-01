"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const clients = [
  { name: "Door Closers", logo: "/assets/icons/doorclosers-logo.png", width: 180, height: 80 },
  { name: "Growthify", logo: "/assets/icons/growthify-logo.png", width: 160, height: 70 },
  { name: "Magdy Holdings", logo: "/assets/icons/magdy-logo.png", width: 150, height: 60 },
  { name: "PBS Solutions", logo: "/assets/icons/pbs-logo.png", width: 140, height: 50 },
];

export default function ClientMarquee() {
  // Duplicate the array to create seamless looping
  const duplicatedClients = [...clients, ...clients];

  return (
    <div className="relative w-full overflow-hidden py-4 border-t border-b border-accent">
      <motion.div
        className="flex"
        animate={{
          x: ["0%", "-100%"],
        }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {duplicatedClients.map((client, index) => (
          <div 
            key={`${client.name}-${index}`} 
            className="flex-shrink-0 mx-8 flex items-center justify-center"
            style={{ width: `${client.width}px` }}
          >
            <Image
              src={client.logo}
              alt={client.name}
              width={client.width}
              height={client.height}
              className="object-contain"
              style={{
                height: `${client.height}px`,
                width: "auto",
              }}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}