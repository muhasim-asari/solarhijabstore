import { Facebook, ShoppingBag, MessageCircle, Instagram, Store } from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  const links = [
    {
      title: 'Instagram',
      url: import.meta.env.VITE_INSTAGRAM_URL || '#',
      icon: <Instagram className="w-5 h-5" />,
      style: 'bg-[#fff0f5] text-[#d81b60] border border-[#fce4ec] hover:shadow-[0_8px_20px_-6px_rgba(216,27,96,0.25)] hover:border-[#f8bbd0]',
      iconStyle: 'bg-white text-[#d81b60]',
    },
    {
      title: 'Shopee',
      url: import.meta.env.VITE_SHOPEE_URL || '#',
      icon: <ShoppingBag className="w-5 h-5" />,
      style: 'bg-[#fff3e0] text-[#e65100] border border-[#ffe0b2] hover:shadow-[0_8px_20px_-6px_rgba(230,81,0,0.25)] hover:border-[#ffcc80]',
      iconStyle: 'bg-white text-[#e65100]',
    },
    {
      title: 'Toco Store',
      url: import.meta.env.VITE_TOCO_URL || 'https://toco.id/store/toko-solar-hijab',
      icon: <Store className="w-5 h-5" />,
      style: 'bg-[#fef9e7] text-[#b7791f] border border-[#fdebd0] hover:shadow-[0_8px_20px_-6px_rgba(183,121,31,0.25)] hover:border-[#f9e79f]',
      iconStyle: 'bg-white text-[#b7791f]',
    },
    {
      title: 'Facebook',
      url: import.meta.env.VITE_FACEBOOK_URL || '#',
      icon: <Facebook className="w-5 h-5" />,
      style: 'bg-[#e3f2fd] text-[#1565c0] border border-[#bbdefb] hover:shadow-[0_8px_20px_-6px_rgba(21,101,192,0.25)] hover:border-[#90caf9]',
      iconStyle: 'bg-white text-[#1565c0]',
    },
    {
      title: 'WhatsApp Admin',
      url: import.meta.env.VITE_WA_ADMIN_URL || '#',
      icon: <MessageCircle className="w-5 h-5" />,
      style: 'bg-[#e0f2f1] text-[#00695c] border border-[#b2dfdb] hover:shadow-[0_8px_20px_-6px_rgba(0,105,92,0.25)] hover:border-[#80cbc4]',
      iconStyle: 'bg-white text-[#00695c]',
    },
  ];

  return (
    <div className="min-h-screen bg-[#faf8f5] flex flex-col items-center py-12 px-4 sm:px-6 font-sans relative overflow-hidden">
      {/* Decorative minimalist blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-5%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#fce4ec]/60 blur-3xl mix-blend-multiply"></div>
        <div className="absolute bottom-[5%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#fff3e0]/60 blur-3xl mix-blend-multiply"></div>
        <div className="absolute top-[40%] right-[10%] w-[30%] h-[30%] rounded-full bg-[#e3f2fd]/50 blur-3xl mix-blend-multiply"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="max-w-md w-full z-10 flex flex-col items-center pt-8 pb-12"
      >
        {/* Brand Logo Header */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5, type: 'spring' }}
          className="flex flex-col items-center mb-2"
        >
          <img
            src="/assets/aistudio/Logo_Solar_Hijab_-_TP_f7fc6fb8.png"
            alt="Solar Hijab"
            className="w-56 sm:w-64 h-auto object-contain hover:scale-105 transition-transform duration-300"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-[#8d6e63] mb-10 text-center text-base px-4 font-medium leading-relaxed"
        >
          Menyediakan koleksi baju balita, anak, dan perempuan.
        </motion.p>

        {/* Links */}
        <div className="w-full space-y-4 px-2">
          {links.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className={`flex items-center w-full p-4 rounded-full transition-all group relative overflow-hidden ${link.style}`}
            >
              <div className={`flex-shrink-0 p-2.5 rounded-full shadow-sm ${link.iconStyle}`}>
                {link.icon}
              </div>
              <span className="flex-grow text-center font-bold tracking-wide text-[15px]">
                {link.title}
              </span>
              <div className="w-10 h-10 opacity-0"></div>
            </motion.a>
          ))}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-14 text-sm font-medium text-[#bcaaa4]"
        >
          &copy; {new Date().getFullYear()} Solar Hijab
        </motion.div>
      </motion.div>
    </div>
  );
}
