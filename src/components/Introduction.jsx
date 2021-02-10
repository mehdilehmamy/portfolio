import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
    hidden: { 
      opacity: 0, 
    },
    visible: { 
      opacity: 1, 
      transition: { delay: 1, duration: 1 }
    }
  };


export default function Introduction () {
    return (
        <motion.div className="intro" 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            >
            <p>Hey! I'm <span>Mehdi.</span></p>
            <p>I build interactive web apps that run across platforms & devices.</p>
            <a href="/about">More About Me <i class="fas fa-arrow-right"></i></a>
        </motion.div>
    );
}