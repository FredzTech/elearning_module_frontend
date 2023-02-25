import React from "react";
import { motion } from "framer-motion";

const Button = ({ text, onClick }) => {
  return (
    <motion.button
      className="text-lg capitalize px-4 w-56 py-2 my-1 rounded-md bg-primary  hover:bg-purple text-white"
      whileInView={{ scale: [null, 1.1, 1.0] }}
      onClick={onClick}
    >
      {text}
    </motion.button>
  );
};

export default Button;
