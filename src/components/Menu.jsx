'use client'

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FiHome, 
  FiSettings, 
  FiUser, 
  FiMail, 
  FiBriefcase,
  FiMenu,
  FiX
} from "react-icons/fi";

const menuLinks = [
  { path: "/", label: "Home", icon: FiHome },
  { path: "#services", label: "Services", icon: FiSettings },
  { path: "#about", label: "About", icon: FiUser },
  { path: "#contact", label: "Contact", icon: FiMail },
  { path: "#work", label: "Work", icon: FiBriefcase },
];

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Menu item animation variants
  const menuItemVariants = {
    closed: { opacity: 0, y: -20 },
    open: { opacity: 1, y: 0 }
  };

  // Menu button animation variants
  const buttonVariants = {
    open: { rotate: 90 },
    closed: { rotate: 0 }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 ">
      <nav
        ref={menuRef}
        className={`w-full transition-all duration-300 ${
          isScrolled ? "bg-dark shadow-lg" : "bg-dark"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Desktop Menu - centered at bottom */}
          <div className="hidden px-4 md:flex justify-center pb-4">
            <div className="flex  bg-darkest rounded-lg items-center space-x-8">
              {menuLinks.map((link) => (
                <motion.div
                  key={link.path}
                  className="relative group"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={link.path}
                    className="text-beige hover:text-accent-light p-2 rounded-full transition-colors duration-200 flex flex-col items-center"
                  >
                    <link.icon className="h-6 w-6" />
                    {/* Tooltip */}
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-dark-gray text-beige text-xs px-2 py-1 rounded whitespace-nowrap">
                      {link.label}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center justify-center pb-4">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-beige hover:bg-dark-gray focus:outline-none"
              aria-expanded="false"
              variants={buttonVariants}
              animate={isOpen ? "open" : "closed"}
              transition={{ duration: 0.3 }}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <FiX className="h-6 w-6" />
              ) : (
                <FiMenu className="h-6 w-6" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden fixed top-15 left-0 right-0 overflow-hidden z-40 bg-dark-gray shadow-xl"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="px-2 pt-2 pb-3 space-y-4 sm:px-3">
                {menuLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    variants={menuItemVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    transition={{ 
                      duration: 0.3,
                      delay: index * 0.1
                    }}
                  >
                    <Link
                      href={link.path}
                      className="flex items-center px-3 py-2 rounded-md text-base font-medium text-beige hover:text-accent-light hover:bg-dark transition-colors duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      <link.icon className="mr-3 h-5 w-5" />
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.button
                  className="w-full mt-2 bg-accent hover:bg-accent-dark text-darkest font-medium py-2 px-4 rounded-md transition-colors duration-200"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  variants={menuItemVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  transition={{ 
                    duration: 0.3,
                    delay: menuLinks.length * 0.1
                  }}
                >
                  Get Started
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
};

export default Menu;