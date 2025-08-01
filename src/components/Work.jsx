// components/Work.js
"use client";
import { motion } from "framer-motion";
import { FaChartLine, FaUsers, FaLightbulb, FaHandshake } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";

const projects = [
  {
    title: "Door Closers LLC",
    role: "Founder & CEO",
    description: "Built a high-performance lead gen agency from scratch, delivering 300+ qualified leads monthly for real estate and solar clients.",
    icon: <FaHandshake className="text-4xl text-accent" />,
    stats: "200% Client Growth",
    color: "bg-accent-dark"
  },
  {
    title: "Sunsci Tech Solutions",
    role: "CTO",
    description: "Developed AI-driven CRM tools that automated lead scoring, boosting sales team efficiency by 40%.",
    icon: <FaLightbulb className="text-4xl text-accent-light" />,
    stats: "40% Efficiency Gain",
    color: "bg-dark-gray"
  },
  {
    title: "Growthify Labs",
    role: "Director of Operations",
    description: "Scaled operations for a SaaS startup, reducing customer acquisition costs by 35% while doubling MRR.",
    icon: <FaChartLine className="text-4xl text-beige" />,
    stats: "2X Revenue Growth",
    color: "bg-darker"
  },
  {
    title: "Real Estate Lead Engine",
    role: "Lead Strategist",
    description: "Designed a targeted cold-calling system that increased appointment-setting rates by 75% for realtors.",
    icon: <FaUsers className="text-4xl text-gray-light" />,
    stats: "75% More Appointments",
    color: "bg-accent"
  },
];

export default function Work() {
  return (
    <section id="work" className="py-20 bg-dark overflow-hidden">
      <div className="container mx-auto px-6 sm:px-8">
        {/* Animated Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          viewport={{ once: false, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-beige mb-4">
            <span className="text-accent">Proven Results</span> Across Industries
          </h2>
          <p className="text-xl text-gray-light max-w-3xl mx-auto">
            From startups to enterprises—here’s how I’ve driven growth and efficiency.
          </p>
        </motion.div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                type: "spring", 
                stiffness: 100, 
                delay: index * 0.15 
              }}
              viewport={{ once: false, margin: "-50px" }}
              whileHover={{ 
                y: -10,
                boxShadow: "0 15px 30px -10px rgba(109, 139, 116, 0.3)"
              }}
              className={`${project.color} p-8 rounded-xl border border-dark-gray overflow-hidden relative group`}
            >
              <motion.div
                animate={{
                  rotate: [0, 5, -5, 0],
                transition: {
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "reverse"
                }
              }}
                className="absolute -top-10 -right-10 opacity-10 group-hover:opacity-20 transition-all"
              >
                {project.icon}
              </motion.div>

              <div className="relative z-10">
                <motion.div
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.3 }}
                  className="mb-6"
                >
                  {project.icon}
                </motion.div>
                <h3 className="text-2xl font-bold text-beige mb-2">{project.title}</h3>
                <p className="text-accent-light mb-3">{project.role}</p>
                <p className="text-gray-light mb-4">{project.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-beige bg-dark/50 px-3 py-1 rounded-full">
                    {project.stats}
                  </span>
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center text-gray-light cursor-pointer"
                  >
                    <span className="text-sm mr-2">Case Study</span>
                    <FiArrowRight />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: false }}
          className="mt-20 text-center"
        >
          <h3 className="text-3xl font-bold text-beige mb-4">
            Ready to Transform <span className="text-accent">Your Business?</span>
          </h3>
          <Link
            href="#contact"
            className="inline-block px-8 py-4 bg-accent hover:bg-accent-light text-dark font-bold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-accent/30"
          >
            Let’s Discuss Your Goals
          </Link>
        </motion.div>
      </div>
    </section>
  );
}