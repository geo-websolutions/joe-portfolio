"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const clients = [
  { name: "Next.JS", logo: "/assets/icons/nextjs-logo.png", width: 180, height: 80 },
  { name: "HTML", logo: "/assets/icons/html-logo.png", width: 160, height: 70 },
  { name: "CSS", logo: "/assets/icons/css-logo.png", width: 150, height: 60 },
  { name: "Javascript", logo: "/assets/icons/javascript-logo.png", width: 140, height: 50 },
  { name: "React", logo: "/assets/icons/react-logo.png", width: 140, height: 50 },
  { name: "Go High Level", logo: "/assets/icons/ghl-logo.png", width: 140, height: 50 },
  { name: "Zaiper", logo: "/assets/icons/zapier-logo.png", width: 140, height: 50 },
  { name: "Slack", logo: "/assets/icons/slack-logo.png", width: 140, height: 50 },
  { name: "Air Table", logo: "/assets/icons/airtable-logo.png", width: 140, height: 50 },
  { name: "Doorclosers", logo: "/assets/icons/doorclosers-logo.png", width: 200, height: 80 },
];

export default function ClientMarquee() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const displayedClients = [...clients, ...clients]; // Only duplicate once

  return (
    <div className="relative w-full overflow-hidden py-4 border-t border-b border-accent">
      <motion.div
        className="flex w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: isMobile ? 15 : 25,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {displayedClients.map((client, index) => (
          <div
            key={`${client.name}-${index}`}
            className="flex-shrink-0 mx-4 md:mx-8 flex items-center justify-center"
            style={{
              width: `${isMobile ? client.width * 0.8 : client.width}px`,
            }}
          >
            <Image
              src={client.logo}
              alt={client.name}
              width={client.width}
              height={client.height}
              className="object-contain"
              style={{
                height: `${isMobile ? client.height * 0.8 : client.height}px`,
                width: "auto",
              }}
              priority={index < 8}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
