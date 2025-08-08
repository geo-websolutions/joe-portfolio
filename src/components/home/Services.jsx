// components/Services.js
"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import AnimatedBackgroundCircles from "./AnimatedBackgroundCircles"
import { 
  FiLayers, 
  FiZap, 
  FiCode,
  FiPieChart,
  FiTool,
  FiShield,
  FiBarChart2,
  FiDollarSign
} from "react-icons/fi";

// For any icons not available in react-icons/fi, we'll use alternatives
import { SlRocket } from "react-icons/sl";

const services = [
  {
    icon: <FiLayers className="text-4xl text-mint" />,
    title: "Operations Builds",
    description: "We build your business operations from the ground up, creating systems that keep everything running smoothly and scalable.",
    highlight: "Your business running like a well-oiled machine"
  },
  {
    icon: <FiZap className="text-4xl text-mint" />,
    title: "Expert Integrations",
    description: "We make your tools talk to each other through APIs and webhooks, automating information flow across your entire tech stack.",
    highlight: "Save hours of manual work every week"
  },
  {
    icon: <FiCode className="text-4xl text-mint" />,
    title: "Development Services",
    description: "High-converting websites, landing pages, and custom-built tools designed to generate leads and close deals effectively.",
    highlight: "Your online presence working as hard as you do"
  },
  {
    icon: <FiPieChart className="text-4xl text-mint" />,
    title: "Business Consulting",
    description: "We pinpoint where you're losing time or money and provide clear, actionable plans to streamline operations and scale faster.",
    highlight: "Run your business smarter, not harder"
  },
  {
    icon: <SlRocket className="text-4xl text-mint" />,
    title: "Business Start-up Packs",
    description: "Everything you need to launch your business idea the right way - branding, operational setup, tools, and processes ready in weeks.",
    highlight: "Start generating revenue quickly"
  },
  {
    icon: <FiTool className="text-4xl text-mint" />,
    title: "Go High Level Services",
    description: "We build your Go High Level to automate follow-ups, pipelines, and lead nurturing - like having a 24/7 sales assistant.",
    highlight: "Full automation without full-time costs"
  }
];


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      when: "beforeChildren"
    }
  }
};

const itemVariants = {
  hidden: { 
    y: 50,
    opacity: 0,
    scale: 0.95
  },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 12,
      mass: 0.5
    }
  }
};

const cardHoverVariants = {
  hover: {
    y: -15,
    scale: 1.02,
    boxShadow: "0 20px 40px -15px rgba(135, 206, 195, 0.3)",
    borderColor: "oklch(60.8% 0.071 152.0)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 15
    }
  }
};

const iconVariants = {
  hidden: { 
    rotate: -30,
    opacity: 0,
    scale: 0.5 
  },
  visible: {
    rotate: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      delay: 0.2
    }
  },
  hover: {
    rotate: [0, 10, -10, 0],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      repeatType: "mirror"
    }
  }
};

const highlightVariants = {
  hidden: { 
    x: -30, 
    opacity: 0,
    scale: 0.9 
  },
  visible: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.4,
      type: "spring",
      stiffness: 150
    }
  }
};

const gradientBackground = {
  hidden: { 
    backgroundPosition: "0% 50%" 
  },
  visible: { 
    backgroundPosition: "100% 50%",
    transition: {
      duration: 15,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "linear"
    }
  }
};

export default function Services() {
  return (
    <section id="services" className="py-24 rounded-xl bg-darkest overflow-hidden relative">
      {/* Animated background elements */}
      <motion.div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 0.1,
            transition: { duration: 2 }
          }
        }}
      >
        <AnimatedBackgroundCircles />
      </motion.div>

      <div className="container mx-auto px-6 sm:px-8 relative z-10">
        {/* Animated Header */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: false, margin: "-100px" }}
          className="text-center mb-20"
        >
          <motion.h2 
            className="text-4xl sm:text-5xl font-bold text-beige mb-6"
            variants={{
              hidden: { y: 40, opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
                transition: {
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }
              }
            }}
          >
            Transform Your <motion.span 
              className="text-transparent bg-clip-text bg-gradient-to-r from-mint to-accent"
              variants={gradientBackground}
            >
              Business Operations
            </motion.span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-lighter max-w-3xl mx-auto"
            variants={{
              hidden: { y: 30, opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
                transition: {
                  delay: 0.3,
                  type: "spring",
                  stiffness: 100
                }
              }
            }}
          >
            Specialized solutions to automate, optimize and scale your business processes
          </motion.p>
        </motion.div>

        {/* Animated Services Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: false, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
              className="bg-dark-gray hover:bg-dark border border-dark-gray hover:border-mint rounded-2xl p-8 transition-all relative overflow-hidden group"
              custom={index}
              viewport={{ once: false }}
            >
              {/* Hover effect background */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-dark to-darkest opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={{ opacity: 0 }}
              />
              
              <motion.div className="flex items-center gap-5 mb-6 relative z-10">
                <motion.div 
                  className="p-4 bg-dark rounded-xl group-hover:bg-darkest group-hover:shadow-lg group-hover:shadow-mint/20"
                  variants={iconVariants}
                  whileHover="hover"
                >
                  {service.icon}
                </motion.div>
                <motion.h3 
                  className="text-2xl font-bold text-beige group-hover:text-mint"
                  variants={{
                    hidden: { x: 20, opacity: 0 },
                    visible: {
                      x: 0,
                      opacity: 1,
                      transition: {
                        delay: 0.3,
                        type: "spring"
                      }
                    }
                  }}
                >
                  {service.title}
                </motion.h3>
              </motion.div>
              
              <motion.p 
                className="text-gray-lighter mb-6 relative z-10 group-hover:text-cool-beige"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: 0.4,
                      type: "spring"
                    }
                  }
                }}
              >
                {service.description}
              </motion.p>
              
              <motion.div 
                className="flex items-center gap-3 text-sm font-medium relative z-10"
                variants={highlightVariants}
              >
                <motion.div
                  animate={{
                    rotate: [0, 15, -15, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                  className="text-mint"
                >
                  <FiShield className="text-lg" />
                </motion.div>
                <span className="text-mint group-hover:text-warm-beige">{service.highlight}</span>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Show All Services Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ 
            opacity: 1, 
            y: 0,
            transition: {
              delay: 0.4,
              type: "spring",
              stiffness: 100
            }
          }}
          viewport={{ once: false, margin: "-50px" }}
          className="flex justify-center mt-12"
        >
          <Link 
            href="/services"
            className="relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium text-mint transition duration-300 ease-out border-2 border-mint rounded-full hover:text-dark group"
          >
            <motion.span
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="absolute inset-0 flex items-center justify-center w-full h-full text-dark duration-300 -translate-x-full bg-mint group-hover:translate-x-0 ease"
            >
              <FiTool className="mr-2" />
            </motion.span>
            <motion.span
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="absolute flex items-center justify-center w-full h-full text-mint transition-all duration-300 transform group-hover:translate-x-full ease"
            >
              View All Services
            </motion.span>
            <span className="relative invisible">View All Services</span>
          </Link>
        </motion.div>

        {/* Performance Banner */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ 
            opacity: 1, 
            y: 0,
            transition: {
              type: "spring",
              stiffness: 100,
              delay: 0.3
            }
          }}
          viewport={{ once: false, margin: "-100px" }}
          className="mt-20 bg-gradient-to-r from-dark to-accent-dark border border-accent rounded-2xl p-10 text-center overflow-hidden relative"
        >
          {/* Animated background elements */}
          <motion.div 
            className="absolute inset-0 opacity-10 pointer-events-none"
            variants={gradientBackground}
            initial="hidden"
            animate="visible"
          />
          
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ 
              scale: 1,
              opacity: 1,
              transition: {
                delay: 0.5
              }
            }}
            className="relative z-10"
          >
            <div className="inline-flex p-4 bg-dark rounded-full mb-6">
              <FiBarChart2 className="text-4xl text-mint" />
            </div>
          </motion.div>
          
          <motion.h3 
            className="text-3xl font-bold text-beige mb-4 relative z-10"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ 
              y: 0,
              opacity: 1,
              transition: {
                delay: 0.6
              }
            }}
          >
            Measurable Business Impact
          </motion.h3>
          
          <motion.p 
            className="text-gray-lighter max-w-3xl mx-auto mb-6 text-lg relative z-10"
            initial={{ y: 15, opacity: 0 }}
            whileInView={{ 
              y: 0,
              opacity: 1,
              transition: {
                delay: 0.7
              }
            }}
          >
            We combine strategic planning with operational excellence to deliver:
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-4 relative z-10"
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.8
                }
              }
            }}
          >
            {['Process Automation', 'Revenue Growth', 'Cost Reduction', 'Team Efficiency', 'System Integration', 'Scalability'].map((item, i) => (
              <motion.span 
                key={i}
                variants={{
                  hidden: { y: 25, opacity: 0, scale: 0.8 },
                  visible: {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    transition: {
                      type: "spring",
                      stiffness: 300
                    }
                  }
                }}
                className="bg-darkest text-beige px-5 py-2.5 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-dark hover:text-mint transition-all"
              >
                <motion.span
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.2
                  }}
                  className="text-mint"
                >
                  <FiDollarSign />
                </motion.span>
                {item}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}