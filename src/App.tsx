import { Facebook, ShoppingBag, MessageCircle, MessageSquare, Instagram } from 'lucide-react';
import { motion } from 'motion/react';
import { Analytics } from '@vercel/analytics/react';

export default function App() {
  const links = [
    {
      title: 'Instagram',
      url: import.meta.env.VITE_INSTAGRAM_URL || '#',
      icon: <Instagram className="w-6 h-6" />,
      style: 'bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white shadow-lg shadow-pink-500/25',
    },
    {
      title: 'Shopee',
      url: import.meta.env.VITE_SHOPEE_URL || '#',
      icon: <ShoppingBag className="w-6 h-6" />,
      style: 'bg-[#ee4d2d] text-white shadow-lg shadow-[#ee4d2d]/30',
    },
    {
      title: 'Facebook',
      url: import.meta.env.VITE_FACEBOOK_URL || '#',
      icon: <Facebook className="w-6 h-6" />,
      style: 'bg-[#1877f2] text-white shadow-lg shadow-[#1877f2]/30',
    },
    {
      title: 'Channel WA',
      url: import.meta.env.VITE_WA_CHANNEL_URL || '#',
      icon: <MessageSquare className="w-6 h-6" />,
      style: 'bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30',
    },
    {
      title: 'WhatsApp Admin',
      url: import.meta.env.VITE_WA_ADMIN_URL || '#',
      icon: <MessageCircle className="w-6 h-6" />,
      style: 'bg-[#128C7E] text-white shadow-lg shadow-[#128C7E]/30',
    },
  ];

  return (
    <>
      <Analytics />
      <div className="min-h-screen bg-gradient-to-br from-[#fff7ed] via-[#ffedd5] to-[#fcd34d]/20 flex flex-col items-center py-12 px-4 sm:px-6 font-sans relative overflow-hidden">
      {/* Decorative colorful blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-5%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#fde68a]/40 blur-3xl mix-blend-multiply"></div>
        <div className="absolute bottom-[10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-[#fed7aa]/40 blur-3xl mix-blend-multiply"></div>
        <div className="absolute top-[30%] right-[10%] w-[30%] h-[30%] rounded-full bg-[#fbcfe8]/40 blur-3xl mix-blend-multiply"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="max-w-md w-full z-10 flex flex-col items-center pt-8 pb-12"
      >
        {/* Logo / Profile */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5, type: 'spring' }}
          className="w-32 h-32 mb-6 rounded-full overflow-hidden border-4 border-white shadow-xl flex items-center justify-center bg-white relative"
        >
          <svg
            viewBox="0 0 100 100"
            className="w-24 h-24 text-[#cfa144]"
            fill="currentColor"
          >
            <path d="M50 35c-12 0-22 8-25 19h50c-3-11-13-19-25-19z" />
            <path
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              d="M15 65 c 20 -10, 50 -10, 70 0"
            />
            <path
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              d="M25 70 c 15 -8, 35 -8, 50 0"
            />
            <line x1="50" y1="10" x2="50" y2="20" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            <line x1="30" y1="15" x2="35" y2="24" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            <line x1="70" y1="15" x2="65" y2="24" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            <line x1="15" y1="30" x2="24" y2="35" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            <line x1="85" y1="30" x2="76" y2="35" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            <line x1="10" y1="48" x2="20" y2="48" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            <line x1="90" y1="48" x2="80" y2="48" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-3xl font-bold text-[#432c0a] mb-2 tracking-tight flex items-center gap-1"
        >
          Solar hijab<span className="text-[#cfa144]">.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-[#785a28] mb-10 text-center text-base px-4 font-medium leading-relaxed"
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
              className={`flex items-center w-full p-4 rounded-2xl transition-all ${link.style}`}
            >
              <div className="flex-shrink-0 bg-white/20 backdrop-blur-sm p-2.5 rounded-xl">
                {link.icon}
              </div>
              <span className="flex-grow text-center font-semibold tracking-wide text-lg">
                {link.title}
              </span>
              <div className="w-11 h-11 opacity-0"></div>
            </motion.a>
          ))}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-14 text-sm font-medium text-[#a17a3a]"
        >
          &copy; {new Date().getFullYear()} Solar Hijab
        </motion.div>
      </motion.div>
    </div>
    </>
  );
}
