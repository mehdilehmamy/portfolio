import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
    hidden: { 
      opacity: 0, 
      x: '100vw' 
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { type: 'spring', delay: 0.5 }
    }
  };

export default function About (props) {
    return (
        <motion.div 
            className="about"  
            variants={containerVariants}
            initial="hidden"
            animate="visible"
             >
            <div className="mehdi">
                <img src="images/mehdi.jpg" alt="mehdi"/>
                <p>I'm <span>Mehdi</span>, a coding enthusiast and fullstack developer who loves to build things from scratch and bring ideas into life. 
                I'm currently doing freelance work making web apps for clients using React, ExpressJs and MongoDB.</p>
            </div>
            <center><a href="/portfolio">Portfolio <i class="fas fa-arrow-right"></i></a></center>
            </motion.div>
    );
}