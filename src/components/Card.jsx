import React from "react";
import { motion } from "framer-motion";

export default function Card (props) {
    let mydelay = props.delay;
    return (
        <motion.div className="card" initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: mydelay, duration: 0.7}}>
                <img src={props.img} alt="mehdi" />
                <div className="text">
                    <a href={props.link} target="_blank"><h2>{props.title} <i class="fas fa-external-link-alt"></i></h2></a>
                </div>
            </motion.div>
    );
}