import { motion } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { useState } from "react";

interface FloatingWhatsAppProps {
  phoneNumber: string;
  message?: string;
  buttonText?: string;
}

export function FloatingWhatsApp({ 
  phoneNumber, 
  message = "Halo, saya ingin bertanya tentang produk Anda",
  buttonText = "Hubungi kami untuk produk lainnya"
}: FloatingWhatsAppProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      {/* Floating Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      >
        <motion.button
          onClick={handleWhatsAppClick}
          className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-full shadow-lg transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            animate={{
              rotate: [0, 10, -10, 10, 0],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatDelay: 3,
            }}
          >
            <MessageCircle className="h-6 w-6" />
          </motion.div>
          <span className="hidden md:inline font-medium">{buttonText}</span>
        </motion.button>

        {/* Pulse effect */}
        <motion.div
          className="absolute inset-0 bg-green-500 rounded-full -z-10"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </>
  );
}
