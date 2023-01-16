import React from "react";
import { motion } from "framer-motion";

const Button = ({ text, href, onClick }) => {
  return (
    <motion.button
      className="text-lg capitalize px-4 py-2 w-1/2 phone:w-full my-2 rounded-md bg-primary hover:bg-purple text-white"
      whileInView={{ scale: [null, 1.2, 1.0] }}
      href={href}
      onClick={onClick}
    >
      {text}
    </motion.button>
  );
};

export default Button;
