// components/About.js
"use client";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaUserTie, FaChartLine, FaLaptopCode, FaRocket } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";
import Link from "next/link";

const careerSteps = [
  {
    title: "Cold Caller → Sales Expert",
    company: "Independent Sales Agent",
    year: "2018",
    description: "Mastered the art of cold outreach, securing high-value sales for clients through relentless persistence and sharp communication.",
    icon: <FaPhoneAlt className="text-xl md:text-2xl text-beige" />, // Smaller base size
    color: "bg-accent-dark",
    iconSize: "w-10 h-10 md:w-16 md:h-16" // Responsive container sizing
  },
  {
    title: "Team Leader → Sales Strategist",
    company: "Sales Team Lead",
    year: "2019",
    description: "Promoted to lead a sales team, optimizing workflows, assigning tasks, and refining the sales process for maximum efficiency.",
    icon: <FaUserTie className="text-xl md:text-2xl text-accent-light" />,
    color: "bg-dark-gray",
    iconSize: "w-10 h-10 md:w-16 md:h-16"
  },
  {
    title: "Operations & Lead Management",
    company: "CC Docs",
    year: "2020",
    description: "Learned the backbone of operations—managing dialers, securing premium leads, and streamlining sales pipelines for scalability.",
    icon: <FaChartLine className="text-xl md:text-2xl text-beige" />,
    color: "bg-darker",
    iconSize: "w-10 h-10 md:w-16 md:h-16"
  },
  {
    title: "Founder & CEO",
    company: "Door Closers LLC",
    year: "2021",
    description: "Built a powerhouse agency from the ground up, specializing in lead generation and sales optimization across industries.",
    icon: <FaRocket className="text-xl md:text-2xl text-beige" />,
    color: "bg-accent",
    iconSize: "w-10 h-10 md:w-16 md:h-16"
  },
  {
    title: "CTO & Tech Innovator",
    company: "Sunsci",
    year: "2022",
    description: "Expanded into tech leadership, developing automation tools and CRM integrations to enhance sales operations.",
    icon: <FaLaptopCode className="text-xl md:text-2xl text-accent-light" />,
    color: "bg-dark-gray",
    iconSize: "w-10 h-10 md:w-16 md:h-16"
  },
  {
    title: "Director of Operations",
    company: "Growthify Labs",
    year: "2023",
    description: "Scaling growth strategies while managing Door Closers, blending operational excellence with visionary leadership.",
    icon: <FaUserTie className="text-xl md:text-2xl text-beige" />,
    color: "bg-accent-dark",
    iconSize: "w-10 h-10 md:w-16 md:h-16"
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-dark overflow-hidden">
      <div className="container mx-auto px-6 sm:px-8">
        {/* Animated Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          viewport={{ once: false, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-beige mb-4">
            From <span className="text-accent">Cold Calls</span> to <span className="text-accent-light">Leadership</span>
          </h2>
          <p className="text-xl text-gray-light max-w-3xl mx-auto">
            A journey of relentless growth, strategic evolution, and mastering the art of sales & operations.
          </p>
        </motion.div>

        {/* Interactive Timeline */}
        <div className="relative">
          {/* Vertical Timeline Line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            viewport={{ once: false }}
            className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-accent/30 h-full"
          />

          {/* Career Steps */}
          <div className="space-y-12">
            {careerSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ type: "spring", stiffness: 100, delay: index * 0.15 }}
                viewport={{ once: false, margin: "-50px" }}
                className={`flex ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} items-center gap-8`}
              >
                {/* Icon & Year */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className={`${step.iconSize} rounded-full flex items-center justify-center flex-shrink-0 relative z-10 ${step.color}`}
                >
                  {step.icon}
                  <motion.span 
                    className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm text-gray-light"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    {step.year}
                  </motion.span>
                </motion.div>

                {/* Content Card */}
                <motion.div
                  whileHover={{ y: -5 }}
                  className={`flex-1 p-6 rounded-xl border ${index % 2 === 0 ? "border-accent" : "border-accent-light"} bg-dark-gray`}
                >
                  <h3 className="text-2xl font-bold text-beige mb-2">{step.title}</h3>
                  <p className="text-accent-light mb-2">{step.company}</p>
                  <p className="text-gray-light">{step.description}</p>
                  <motion.div
                    initial={{ x: -10, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="flex items-center mt-4 text-accent"
                  >
                    <FiChevronRight className="mr-2" />
                    <span className="text-sm">Key Achievement</span>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: false }}
          className="mt-20 text-center"
        >
          <h3 className="text-3xl font-bold text-beige mb-4">Ready to Elevate Your Business?</h3>
          <p className="text-xl text-gray-light max-w-3xl mx-auto mb-8">
            Let’s apply this expertise to <span className="text-accent">your growth strategy</span>.
          </p>
          <Link
            href="#contact"
            className="inline-block px-8 py-4 bg-accent hover:bg-accent-light text-dark font-bold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-accent/30"
          >
            Let’s Talk Growth
          </Link>
        </motion.div>
      </div>
    </section>
  );
}