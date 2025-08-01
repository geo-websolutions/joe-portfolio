// components/Contact.js
"use client";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiSend, FiLinkedin, FiTwitter } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  const contactMethods = [
    {
      icon: <FiMail className="text-3xl text-accent" />,
      title: "Email Me",
      info: "contact@josephsamy.com",
      action: "mailto:contact@josephsamy.com",
      animation: { x: -30, opacity: 0 }
    },
    {
      icon: <FiPhone className="text-3xl text-accent-light" />,
      title: "Call Me",
      info: "+1 (555) 123-4567",
      action: "tel:+15551234567",
      animation: { y: 30, opacity: 0 }
    },
    {
      icon: <FaWhatsapp className="text-3xl text-green-400" />,
      title: "WhatsApp",
      info: "Chat instantly",
      action: "https://wa.me/15551234567",
      animation: { x: 30, opacity: 0 }
    },
    {
      icon: <FiLinkedin className="text-3xl text-blue-400" />,
      title: "LinkedIn",
      info: "Connect professionally",
      action: "https://linkedin.com/in/josephsamy",
      animation: { y: -30, opacity: 0 }
    },
  ];

  return (
    <section id="contact" className="py-20 rounded-xl bg-darker overflow-hidden">
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
            Let's <span className="text-accent">Work Together</span>
          </h2>
          <p className="text-xl text-gray-light max-w-3xl mx-auto">
            Whether you need lead generation, sales strategy, or operational scaling—I'm here to help.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Methods */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-50px" }}
            className="space-y-8"
          >
            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                href={method.action}
                target="_blank"
                rel="noopener noreferrer"
                initial={method.animation}
                whileInView={{ x: 0, y: 0, opacity: 1 }}
                transition={{ type: "spring", delay: index * 0.15, stiffness: 80 }}
                whileHover={{ 
                  y: -5,
                  backgroundColor: "rgba(109, 139, 116, 0.1)"
                }}
                className="flex items-start gap-6 p-6 rounded-xl border border-dark-gray hover:border-accent transition-all"
              >
                <motion.div
                  animate={{
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: index * 0.5
                  }}
                >
                  {method.icon}
                </motion.div>
                <div>
                  <h3 className="text-2xl font-bold text-beige mb-1">{method.title}</h3>
                  <p className="text-gray-light">{method.info}</p>
                </div>
              </motion.a>
            ))}

            {/* Location Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: false }}
              className="p-6 rounded-xl border border-dark-gray flex items-start gap-6"
            >
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
              >
                <FiMapPin className="text-3xl text-accent" />
              </motion.div>
              <div>
                <h3 className="text-2xl font-bold text-beige mb-1">Based In</h3>
                <p className="text-gray-light">Alexandria, Egypt (Working Globally)</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: false }}
            className="bg-dark-gray p-8 rounded-xl border border-dark-gray"
          >
            <h3 className="text-2xl font-bold text-beige mb-6">Send a Direct Message</h3>
            <form className="space-y-6">
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full bg-dark border-b border-gray-light/30 py-3 px-2 rounded-lg text-beige focus:border-accent focus:outline-none"
                />
              </motion.div>
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full bg-dark border-b border-gray-light/30 py-3 rounded-lg px-2 text-beige focus:border-accent focus:outline-none"
                />
              </motion.div>
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <textarea 
                  placeholder="Your Message" 
                  rows="5"
                  className="w-full bg-dark border-b border-gray-light/30 py-3 rounded-lg px-2 text-beige focus:border-accent focus:outline-none"
                ></textarea>
              </motion.div>
              <motion.button
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 bg-accent hover:bg-accent-light text-dark font-bold py-4 px-8 rounded-lg transition-all"
              >
                <FiSend /> Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}