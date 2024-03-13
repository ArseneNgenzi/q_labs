import { motion } from "framer-motion";

const AnimatedDiv = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Initial animation properties
      animate={{ opacity: 1, y: 0 }}   // Animation properties when scrolled into view
      transition={{ duration: 0.5 }}   // Animation duration
      className="bg-blue-500 p-8 rounded-lg" // Tailwind CSS classes for styling
    >
      Your content goes here
    </motion.div>
  );
};

export default AnimatedDiv;
