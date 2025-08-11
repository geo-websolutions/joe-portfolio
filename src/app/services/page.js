'use client'; // Required for client-side interactivity in Next.js

import React from 'react';
import { motion } from 'framer-motion';
// React Icons imports
import { FaLightbulb, FaTools, FaLink, FaGlobe, FaChartLine, FaRocket, FaGoogle, FaUsers, FaRobot, FaChalkboardTeacher, FaPhoneVolume, FaUserTie } from 'react-icons/fa';
import { MdOutlineBusinessCenter, MdWorkspacePremium } from 'react-icons/md';


const services = [
  {
    title: 'Business Consulting',
    description: 'We help you run your business smarter, not harder. Our deep-dive analysis pinpoints inefficiencies, identifies hidden cost sinks, and uncovers untapped opportunities. You receive a meticulously crafted, actionable strategy to streamline operations, amplify efficiency, and accelerate scalable growth without succumbing to burnout. Transform challenges into stepping stones for unprecedented success.',
    icon: FaLightbulb,
  },
  {
    title: 'Operations Builds',
    description: 'Envision your enterprise functioning with the precision of a finely tuned machine – where every task, process, and team member operates in perfect synchronicity. We architect and implement these robust operational frameworks from the ground up, designing bespoke systems that ensure seamless workflow, unparalleled efficiency, and effortless scalability as your business evolves.',
    icon: FaTools,
  },
  {
    title: 'Expert Integrations, APIs & Webhooks',
    description: 'Unlock the true power of your digital ecosystem by allowing your essential business tools to communicate flawlessly. We specialize in automating data flow between your CRM, payment gateways, marketing platforms, and reporting dashboards. This intelligent integration eliminates manual data entry, drastically reduces errors, and frees up countless hours each week, allowing you to focus on strategic initiatives.',
    icon: FaLink,
  },
  {
    title: 'Development Services (Websites, Landing Pages, Custom Projects)',
    description: 'Your online presence is your most diligent salesperson. We craft high-converting websites, dynamic landing pages, and bespoke digital tools meticulously engineered not just for aesthetic appeal, but to actively generate qualified leads, nurture prospects, and consistently close deals. Elevate your digital footprint into a powerful revenue engine.',
    icon: FaGlobe,
  },
  {
    title: 'Google Looker Studio & Advanced Google Sheets',
    description: 'Transform raw data into crystal-clear, intuitive visual dashboards that provide instantaneous insights into your business performance. Say goodbye to guesswork and embrace data-driven decision-making. We empower you with real-time analytics, enabling you to identify trends, mitigate risks, and seize opportunities with unprecedented speed and accuracy.',
    icon: FaChartLine,
  },
  {
    title: 'Business Start-up Packs',
    description: 'Got a brilliant business idea waiting to blossom? We provide the comprehensive launchpad to ensure your venture takes off with precision and impact. Our all-inclusive packages cover everything from foundational branding and legal setup to operational frameworks, essential tools, and streamlined processes. Be revenue-ready in weeks, not months, equipped with everything you need for a confident debut.',
    icon: FaRocket,
  },
  {
    title: 'Google Workspace Setups',
    description: 'Optimize your team’s productivity and collaboration with expert Google Workspace configurations. We ensure your email, document management, cloud storage, and calendar systems are meticulously organized, robustly secure, and seamlessly integrated for peak collaborative performance. Empower your team to work faster, smarter, and with complete peace of mind.',
    icon: FaGoogle,
  },
  {
    title: 'Outsourcing Talents (VAs, Callers, Texters, Assistants)',
    description: 'Reclaim your invaluable time and energy. Our service connects you with highly skilled virtual assistants, professional callers, proficient texters, and dedicated administrative support. Delegate repetitive, time-consuming tasks with confidence, allowing you to re-focus your efforts entirely on core business growth and strategic expansion.',
    icon: FaUsers,
  },
  {
    title: 'Go High Level Automation Builds & Services',
    description: 'Supercharge your sales and marketing efforts with custom Go High Level automation builds. We engineer sophisticated sequences that handle your follow-ups, optimize sales pipelines, and automate lead nurturing around the clock. It’s akin to having a tireless, full-time sales assistant working 24/7, without the overhead of an additional salary, ensuring no lead is ever left behind.',
    icon: FaRobot,
  },
  {
    title: 'Training Services for Outreach Industries',
    description: 'We don’t just build high-performing teams; we sculpt them into industry leaders. Our tailored training programs for outreach industries – including call center agents, virtual assistants, and sales appointment setters – are designed to sharpen skills, instill confidence, and dramatically improve conversion rates, transforming average team members into extraordinary revenue generators.',
    icon: FaChalkboardTeacher,
  },
  {
    title: 'Call Center Training',
    description: 'Empower your call center teams with the confidence and expertise to excel in every interaction. Our specialized training rigorously coaches them to master communication scripts, adeptly overcome objections, and consistently deliver superior service and results. We bridge the gap between merely making calls and actively converting conversations into valuable business opportunities.',
    icon: FaPhoneVolume,
  },
  {
    title: 'VA Training',
    description: 'Equip your virtual assistants with the comprehensive skills and strategic insights required to seamlessly integrate as true extensions of your core team. From mastering advanced communication protocols to efficiently managing complex workflows, our training ensures they deliver measurable value and drive productivity from their very first day.',
    icon: MdOutlineBusinessCenter,
  },
  {
    title: 'Sales Training for Appointment Setters & Office VAs',
    description: 'Elevate your sales pipeline by training your appointment setters and office-based VAs to identify prime prospects, build instant rapport, expertly handle objections, and consistently book high-quality appointments. Our proven strategies empower them to transform initial contacts into tangible sales opportunities, driving your business forward.',
    icon: FaUserTie,
  },
];

// Animation variants
// Removed containerVariants as items will handle their own whileInView
// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.1, // Stagger cards reveal
//     },
//   },
// };

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 10,
    },
  },
};

const headerVariants = {
  hidden: { y: -50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
      delay: 0.2,
    },
  },
};


export default function ServicesPage() {
  return (
    <div className='min-h-screen bg-darkest text-gray-light py-16 px-4 sm:px-6 lg:px-8'>
      {/* Page Header */}
      <motion.header
        className='max-w-4xl mx-auto text-center mb-16'
        variants={headerVariants}
        initial='hidden'
        animate='visible'
      >
        <h1 className='text-5xl font-extrabold text-mint mb-4'>
          Our Services
        </h1>
        <p className='text-xl text-cool-beige leading-relaxed'>
          Discover how we empower businesses to thrive in today's dynamic landscape. From strategic consulting to bespoke development and comprehensive training, our solutions are designed to optimize your operations, accelerate growth, and build lasting success.
        </p>
      </motion.header>

      {/* Services Grid */}
      <div // Changed from motion.div to div
        className='max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'
        // Removed variants, initial, whileInView, viewport as individual items will handle it
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            className='bg-darker rounded-xl p-8 shadow-xl flex flex-col items-center text-center group cursor-pointer
                       hover:scale-105 transition-transform duration-300 ease-in-out border border-transparent hover:border-accent'
            variants={itemVariants}
            initial='hidden' // Initial state for each card
            whileInView='visible' // Trigger animation when each card is in view
            viewport={{ once: true, amount: 0.3 }} // Once per card, when 30% is visible
            whileHover={{ y: -5, boxShadow: '0 15px 30px rgba(0, 0, 0, 0.4)' }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            {/* Service Icon */}
            <div className='mb-6 text-accent text-6xl group-hover:text-mint transition-colors duration-300'>
              {React.createElement(service.icon)}
            </div>
            {/* Service Title */}
            <h2 className='text-3xl font-semibold text-mint mb-4 group-hover:text-cool-beige transition-colors duration-300'>
              {service.title}
            </h2>
            {/* Service Description */}
            <p className='text-light-gray leading-relaxed text-lg'>
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
