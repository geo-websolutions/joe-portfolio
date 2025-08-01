'use client'

import { motion } from "framer-motion";
import { 
  FiLinkedin, 
  FiTwitter, 
  FiGithub,
  FiMail,
  FiPhone
} from "react-icons/fi";
import Image from "next/image";

const SocialCard = () => {
  return (
    <motion.div 
      className="max-w-md p-4 sm:p-5 mx-auto bg-dark-gray rounded-xl shadow-lg overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Photo Section with 3/4 aspect ratio */}
      <div className="relative aspect-[3/4] w-full">
        <Image
          src="/assets/images/photo.jpg"
          alt="Joseph Ayman"
          fill
          className="object-cover rounded-lg"
          priority
        />
      </div>

      {/* Content Section */}
      <div className="p-4 sm:p-6">
        {/* Name and Title */}
        <div className="text-center mb-5 sm:mb-6">
          <motion.h2 
            className="text-xl sm:text-2xl font-bold text-beige mb-2"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            Joseph Ayman
          </motion.h2>
          <p className="text-accent-light text-xs sm:text-sm font-medium">
            Product Management and Marketing Specialist
          </p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-3 sm:space-x-4 mb-5 sm:mb-6">
          <motion.a 
            href="#" 
            className="text-beige hover:text-accent-light transition-colors duration-200"
            whileHover={{ y: -2, scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiLinkedin className="h-4 w-4 sm:h-5 sm:w-5" />
          </motion.a>
          <motion.a 
            href="#" 
            className="text-beige hover:text-accent-light transition-colors duration-200"
            whileHover={{ y: -2, scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiTwitter className="h-4 w-4 sm:h-5 sm:w-5" />
          </motion.a>
          <motion.a 
            href="#" 
            className="text-beige hover:text-accent-light transition-colors duration-200"
            whileHover={{ y: -2, scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiMail className="h-4 w-4 sm:h-5 sm:w-5" />
          </motion.a>
          <motion.a 
            href="#" 
            className="text-beige hover:text-accent-light transition-colors duration-200"
            whileHover={{ y: -2, scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiPhone className="h-4 w-4 sm:h-5 sm:w-5" />
          </motion.a>
        </div>

        {/* Let's Talk Button */}
        <div className="text-center">
          <motion.button
            className="bg-accent hover:bg-accent-dark text-darkest font-medium py-2 px-5 sm:py-2 sm:px-6 rounded-full transition-colors duration-200 text-xs sm:text-sm"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 4px 8px rgba(109, 139, 116, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Talk
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default SocialCard;