'use client'

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
  { path: "/", label: "Home", icon: FiHome, section: "home" },
  { path: "#services", label: "Services", icon: FiSettings, section: "services" },
  { path: "#about", label: "About", icon: FiUser, section: "about" },
  { path: "#contact", label: "Contact", icon: FiMail, section: "contact" },
];

const Menu = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);
  const menuRef = useRef(null);
  const scrollTimeout = useRef(null);

  const isServicesPage = pathname === '/services';

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

  // Improved scroll handler with debounce and proper section detection
  useEffect(() => {
    if (isServicesPage) return; // Skip section detection on services page

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      // Calculate scroll progress (0-100%)
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const progress = Math.min(100, (scrolled / scrollHeight) * 100);
      setScrollProgress(progress);

      // Get all sections
      const sections = menuLinks.map(link => ({
        id: link.section,
        element: document.getElementById(link.section)
      })).filter(s => s.element);

      // Find which section is currently in view
      let currentSection = "home";
      const scrollPosition = window.scrollY + 100; // Adding offset

      for (const section of sections) {
        const { element, id } = section;
        const { offsetTop, offsetHeight } = element;
        
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          currentSection = id;
          break;
        }
      }

      setActiveSection(currentSection);
    };

    // Add event listener with debounce
    const debouncedScroll = () => {
      clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(handleScroll, 50);
    };

    window.addEventListener('scroll', debouncedScroll);
    
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', debouncedScroll);
      clearTimeout(scrollTimeout.current);
    };
  }, [isServicesPage]);

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
    <div className="fixed top-0 left-0 right-0 z-50">
      <nav
        ref={menuRef}
        className={`w-full transition-all duration-300 ${
          isScrolled ? "bg-dark shadow-lg" : "bg-dark"
        }`}
      > 
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Desktop Menu - centered at bottom */}
          <div className="hidden px-4 md:flex justify-center pb-4">
            <div className="flex bg-darkest rounded-lg items-center space-x-1 p-1 relative">
              {menuLinks.map((link) => (
                <motion.div
                  key={link.path}
                  className="relative group"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={isServicesPage ? link.path.replace('#', '/') : link.path}
                    className={`p-3 rounded-full transition-all duration-300 flex flex-col items-center ${
                      (!isServicesPage && activeSection === link.section) 
                        ? "bg-accent text-darkest shadow-lg" 
                        : isServicesPage && link.path === '/services'
                        ? "bg-accent text-darkest shadow-lg"
                        : "text-beige hover:text-accent-light hover:bg-dark-gray"
                    }`}
                    onClick={() => !isServicesPage && setActiveSection(link.section)}
                  >
                    <link.icon className="h-5 w-5" />
                  </Link>
                  
                  {/* Tooltip - moved outside the Link component */}
                  <motion.span
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full bg-dark-gray text-beige text-xs px-2 py-1 rounded whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100"
                    initial={{ y: 5 }}
                    animate={{ y: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {link.label}
                    <span className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-dark-gray rotate-45" />
                  </motion.span>
                  
                  {/* Active section indicator */}
                  {(!isServicesPage && activeSection === link.section) && (
                    <motion.div 
                      className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-accent-light rounded-full"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 500 }}
                    />
                  )}
                </motion.div>
              ))}
              
              {/* Show All Services Button - Desktop */}
              {!isServicesPage && (
                <motion.div
                  className="relative group"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/services"
                    className="p-3 ml-2 rounded-full transition-all duration-300 flex flex-col items-center relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-accent to-accent-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
                    <div className="relative flex items-center gap-1 px-2">
                      <FiBriefcase className="h-5 w-5 text-beige group-hover:text-darkest transition-colors duration-300" />
                      <span className="text-beige group-hover:text-darkest text-sm font-medium transition-colors duration-300">
                        Show All Services
                      </span>
                    </div>
                    {/* Animated border */}
                    <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-accent-light transition-all duration-500" />
                  </Link>
                  
                  {/* Tooltip - Fixed version */}
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 z-50">
                    <motion.span
                      className="inline-block bg-dark-gray text-beige text-xs px-2 py-1 rounded whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100 shadow-lg"
                      initial={{ y: 5 }}
                      animate={{ y: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      Show All Services
                      <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-dark-gray rotate-45" />
                    </motion.span>
                  </div>
                </motion.div>
              )}
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
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
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
                      href={isServicesPage ? link.path.replace('#', '/') : link.path}
                      className={`flex items-center px-4 py-3 rounded-md text-base font-medium transition-all duration-300 ${
                        (!isServicesPage && activeSection === link.section) || 
                        (isServicesPage && link.path === '#services')
                          ? "bg-accent text-darkest shadow-md"
                          : "text-beige hover:text-accent-light hover:bg-dark"
                      }`}
                      onClick={() => {
                        setIsOpen(false);
                        !isServicesPage && setActiveSection(link.section);
                      }}
                    >
                      <link.icon className="mr-3 h-5 w-5" />
                      {link.label}
                      {(!isServicesPage && activeSection === link.section) && (
                        <motion.span 
                          className="ml-auto w-2 h-2 bg-accent-light rounded-full"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", stiffness: 500 }}
                        />
                      )}
                    </Link>
                  </motion.div>
                ))}
                
                {/* Show All Services Button - Mobile */}
                {!isServicesPage && (
                  <motion.div
                    variants={menuItemVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    transition={{ 
                      duration: 0.3,
                      delay: menuLinks.length * 0.1
                    }}
                  >
                    <Link
                      href="/services"
                      className="flex items-center px-4 py-3 rounded-md text-base font-medium transition-all duration-300 relative overflow-hidden group"
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-accent to-accent-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="relative z-10 flex items-center gap-2">
                        <FiBriefcase className="h-5 w-5 text-beige group-hover:text-darkest transition-colors duration-300" />
                        <span className="text-beige group-hover:text-darkest transition-colors duration-300">
                          Show All Services
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
};

export default Menu;