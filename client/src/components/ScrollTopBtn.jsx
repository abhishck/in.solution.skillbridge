import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ScrollTopBtn = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, y: 40, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          whileHover={{ scale: 1.15, y: -4 }}
          whileTap={{ scale: 0.95 }}
          onClick={() =>
            window.scrollTo({ top: 0, behavior: "smooth" })
          }
          aria-label="Scroll to top"
          className="fixed bottom-8 right-8 z-50 w-11 h-11 rounded-full 
                     flex items-center justify-center text-white text-lg
                     bg-gradient-to-br from-orange-400 to-purple-500
                     shadow-[0_6px_25px_rgba(255,107,53,0.4)]
                     backdrop-blur-md border border-white/10"
        >
          ↑
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollTopBtn;