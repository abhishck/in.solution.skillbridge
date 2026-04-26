import React from "react";
import { motion } from "framer-motion";

const WhatsAppBtn = () => {
  const message = encodeURIComponent(
    "Hi, I want to know more about your IT services and internship program."
  );

  return (
    <motion.a
      href={`https://wa.me/919569065009?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"

      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.4 }}

      whileHover={{ scale: 1.1 }}
      className="fixed bottom-28 right-6 z-[100]"
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        className="w-14 h-14 rounded-full flex items-center justify-center 
        bg-gradient-to-br from-green-400 to-green-600 
        shadow-[0_10px_30px_rgba(0,255,150,0.4)]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="w-7 h-7 fill-white"
        >
          <path d="M16 .396C7.164.396 0 7.56 0 16.396c0 2.885.756 5.708 2.192 8.197L0 32l7.58-2.146A15.93 15.93 0 0 0 16 32c8.836 0 16-7.164 16-16.004C32 7.56 24.836.396 16 .396zm0 29.257c-2.623 0-5.187-.706-7.418-2.043l-.531-.316-4.496 1.27 1.2-4.382-.346-.565a13.38 13.38 0 0 1-2.06-7.221c0-7.424 6.037-13.461 13.451-13.461 7.415 0 13.452 6.037 13.452 13.461 0 7.425-6.037 13.462-13.452 13.462zm7.387-10.04c-.403-.202-2.385-1.178-2.754-1.314-.37-.135-.64-.202-.91.202-.27.403-1.044 1.314-1.28 1.585-.235.27-.47.303-.873.101-.403-.202-1.703-.628-3.245-2.003-1.2-1.07-2.01-2.392-2.246-2.795-.235-.403-.025-.62.177-.822.182-.182.403-.47.605-.706.202-.235.27-.403.403-.673.135-.27.067-.505-.034-.707-.101-.202-.91-2.192-1.246-3.003-.327-.785-.66-.678-.91-.69l-.776-.014c-.27 0-.707.101-1.078.505-.37.403-1.414 1.382-1.414 3.37 0 1.988 1.448 3.909 1.65 4.178.202.27 2.85 4.354 6.907 6.1.965.416 1.716.664 2.302.85.967.307 1.848.264 2.544.16.776-.115 2.385-.973 2.72-1.912.336-.94.336-1.746.235-1.912-.101-.168-.37-.27-.776-.47z" />
        </svg>
      </motion.div>
    </motion.a>
  );
};

export default WhatsAppBtn;