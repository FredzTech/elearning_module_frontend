import React from "react";
import { motion } from "framer-motion";

const Button = ({ text, href, onClick }) => {
  return (
    <motion.button
      className="text-lg px-4 py-2 w-1/2 phone:w-full my-2 rounded-md bg-green-400 text-white hover:bg-rose-600"
      whileInView={{ scale: [null, 1.2, 1.0] }}
      href={href}
      onClick={onClick}
    >
      {text}
    </motion.button>
  );
};

export default Button;
