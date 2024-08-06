import { motion } from "framer-motion";
import { splitStringUsingRegex } from "../../../utils/splitString";
import styles from './index.module.scss';

const variants = {
  hidden: {
    opacity: 0,
  },
  reveal: {
    opacity: 1,
  },
};

const TextReveal: React.FC<{ text: string, className?: string }> = ({ text, className = '' }) => {
  const chars = splitStringUsingRegex(text);

  return (
    <motion.span
      className={styles.TextReveal + " " + className}
      initial="hidden"
      whileInView="reveal"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.1 }}
    >
      {chars.map((char, key) => (
        <motion.span
          key={Math.random() + key}
          transition={{ duration: 0.4 }}
          variants={variants}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default TextReveal;
