// components/Services.js
"use client";
import { motion } from "framer-motion";
import { FiTarget, FiUsers, FiTrendingUp, FiShield, FiBarChart2, FiDollarSign } from "react-icons/fi";
import { FaSolarPanel, FaHome, FaHardHat } from "react-icons/fa";

const services = [
  {
    icon: <FiTarget className="text-4xl text-accent" />,
    title: "Strategic Lead Generation",
    description: "Custom-built lead gen systems tailored to your industry with precise targeting for real estate, solar, and roofing sectors.",
    highlight: "From cold outreach to warm referrals - we build your pipeline"
  },
  {
    icon: <FiUsers className="text-4xl text-accent" />,
    title: "Account Management Solutions",
    description: "End-to-end client relationship management that transforms one-time buyers into lifetime partners.",
    highlight: "4+ years perfecting client retention strategies"
  },
  {
    icon: <FaSolarPanel className="text-4xl text-accent" />,
    title: "Solar Industry Growth",
    description: "Specialized marketing funnels for solar panel companies to convert leads in this competitive space.",
    highlight: "Proven tactics that work in renewable energy markets"
  },
  {
    icon: <FaHome className="text-4xl text-accent" />,
    title: "Real Estate Prospecting",
    description: "Targeted campaigns that connect realtors with qualified buyers and sellers in your territory.",
    highlight: "Database-driven approach for maximum conversions"
  },
  {
    icon: <FaHardHat className="text-4xl text-accent" />,
    title: "Roofing Contractor Systems",
    description: "Storm response protocols and year-round lead systems for roofing businesses.",
    highlight: "Weather-triggered marketing automation"
  },
  {
    icon: <FiTrendingUp className="text-4xl text-accent" />,
    title: "Sales Process Optimization",
    description: "From first contact to closed deal - we streamline your operations for maximum efficiency.",
    highlight: "Wholesale-tested techniques that scale"
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
      stiffness: 100,
      damping: 15
    }
  }
};

const cardHoverVariants = {
  hover: {
    y: -10,
    boxShadow: "0 15px 30px -10px rgba(109, 139, 116, 0.3)",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 10
    }
  }
};

const iconVariants = {
  hidden: { rotate: -15, opacity: 0 },
  visible: {
    rotate: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 150,
      delay: 0.2
    }
  }
};

const highlightVariants = {
  hidden: { x: -20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.4
    }
  }
};

export default function Services() {
  return (
    <section id="services" className="py-20 rounded-xl bg-darker overflow-hidden">
      <div className="container mx-auto px-6 sm:px-8">
        {/* Animated Header */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: false, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold text-beige mb-4"
            variants={{
              hidden: { y: 30, opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
                transition: {
                  type: "spring",
                  stiffness: 100
                }
              }
            }}
          >
            Industry-Tailored <motion.span 
              className="text-accent"
              initial={{ textShadow: "0 0 0px rgba(109,139,116,0)" }}
              whileInView={{
                textShadow: [
                  "0 0 0px rgba(109,139,116,0)",
                  "0 0 10px rgba(109,139,116,0.5)",
                  "0 0 0px rgba(109,139,116,0)"
                ],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              viewport={{ once: false }}
            >
              Growth Systems
            </motion.span>
          </motion.h2>
          
          <motion.p 
            className="text-lg text-gray-light max-w-3xl mx-auto"
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
                transition: {
                  delay: 0.3
                }
              }
            }}
          >
            Specialized solutions developed through 4+ years of hands-on experience across multiple high-value industries.
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
              className="bg-dark-gray hover:bg-dark border border-dark rounded-xl p-8 transition-all"
              custom={index}
              viewport={{ once: false }}
            >
              <motion.div className="flex items-center gap-4 mb-5">
                <motion.div 
                  className="p-3 bg-dark rounded-lg"
                  variants={iconVariants}
                >
                  {service.icon}
                </motion.div>
                <motion.h3 
                  className="text-xl font-bold text-beige"
                  variants={{
                    hidden: { x: 20, opacity: 0 },
                    visible: {
                      x: 0,
                      opacity: 1,
                      transition: {
                        delay: 0.3
                      }
                    }
                  }}
                >
                  {service.title}
                </motion.h3>
              </motion.div>
              
              <motion.p 
                className="text-gray-light mb-4"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      delay: 0.4
                    }
                  }
                }}
              >
                {service.description}
              </motion.p>
              
              <motion.div 
                className="flex items-center gap-2 text-sm text-accent-light"
                variants={highlightVariants}
              >
                <motion.div
                  animate={{
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                >
                  <FiShield className="flex-shrink-0" />
                </motion.div>
                <span>{service.highlight}</span>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Performance Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ 
            opacity: 1, 
            scale: 1,
            transition: {
              type: "spring",
              stiffness: 100,
              delay: 0.3
            }
          }}
          viewport={{ once: false, margin: "-100px" }}
          className="mt-16 bg-accent-dark border border-accent rounded-xl p-8 text-center overflow-hidden"
        >
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ 
              y: 0,
              opacity: 1,
              transition: {
                delay: 0.5
              }
            }}
          >
            <FiBarChart2 className="mx-auto text-4xl text-accent mb-4" />
          </motion.div>
          
          <motion.h3 
            className="text-2xl font-bold text-beige mb-3"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ 
              y: 0,
              opacity: 1,
              transition: {
                delay: 0.6
              }
            }}
          >
            Performance-Driven Approach
          </motion.h3>
          
          <motion.p 
            className="text-gray-light max-w-3xl mx-auto mb-5"
            initial={{ y: 15, opacity: 0 }}
            whileInView={{ 
              y: 0,
              opacity: 1,
              transition: {
                delay: 0.7
              }
            }}
          >
            We combine strategic planning with operational excellence to deliver measurable results in:
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
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
            {['Lead Conversion', 'Client Retention', 'Process Automation', 'Team Training', 'Market Analysis', 'Revenue Growth'].map((item, i) => (
              <motion.span 
                key={i}
                variants={{
                  hidden: { y: 20, opacity: 0 },
                  visible: {
                    y: 0,
                    opacity: 1,
                    transition: {
                      type: "spring",
                      stiffness: 200
                    }
                  }
                }}
                className="bg-dark text-beige px-4 py-2 rounded-full text-sm flex items-center gap-2"
              >
                <motion.span
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.3
                  }}
                >
                  <FiDollarSign className="text-accent" />
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