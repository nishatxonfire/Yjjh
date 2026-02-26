import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Home, GraduationCap, Share2, Code, Mail, Send, User, MapPin, AtSign, MessageSquare, Phone, Github, Linkedin, Facebook } from 'lucide-react';

const HomeSection = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    className="p-6 flex flex-col items-center text-center space-y-6"
  >
    <motion.div 
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="w-32 h-32 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 p-1 shadow-xl shadow-indigo-500/20"
    >
      <img src="https://picsum.photos/seed/profile/200/200" alt="Profile" className="w-full h-full object-cover rounded-full border-4 border-[#0a0a0a]" referrerPolicy="no-referrer" />
    </motion.div>
    
    <div>
      <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">আপনার নাম</h1>
      <p className="text-slate-400 mt-2 font-medium">বয়স: ১৮ বছর</p>
    </div>

    <div className="bg-white/5 p-6 rounded-3xl border border-white/10 backdrop-blur-md w-full shadow-lg">
      <h2 className="text-xl font-semibold mb-4 flex items-center justify-center gap-2 text-slate-200">
        <User className="w-5 h-5 text-indigo-400" />
        আমার সম্পর্কে
      </h2>
      <p className="text-slate-300 leading-relaxed text-sm">
        আমি একজন ওয়েব ডেভেলপার এবং টেকনোলজি প্রেমী। নতুন কিছু শিখতে এবং তৈরি করতে ভালোবাসি। আমার লক্ষ্য হলো প্রযুক্তির মাধ্যমে মানুষের জীবনে ইতিবাচক পরিবর্তন আনা।
      </p>
    </div>
  </motion.div>
);

const EducationSection = () => {
  const eduData = [
    { title: "বর্তমান ক্লাস", desc: "একাদশ শ্রেণী (বিজ্ঞান বিভাগ)", year: "২০২৪ - বর্তমান", icon: GraduationCap },
    { title: "এসএসসি / সমমান", desc: "জিপিএ: ৫.০০", year: "২০২৪", icon: GraduationCap },
    { title: "জেএসসি / সমমান", desc: "জিপিএ: ৫.০০", year: "২০২১", icon: GraduationCap },
    { title: "পিএসসি / সমাপনী", desc: "জিপিএ: ৫.০০", year: "২০১৮", icon: GraduationCap },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="p-6 space-y-6"
    >
      <h2 className="text-2xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">শিক্ষাগত যোগ্যতা</h2>
      
      <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
        {eduData.map((item, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-[#0a0a0a] group-[.is-active]:bg-emerald-500/20 text-emerald-400 group-[.is-active]:text-emerald-300 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
              <item.icon className="w-5 h-5" />
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white/5 p-5 rounded-2xl border border-white/10 backdrop-blur-md shadow-lg">
              <div className="flex flex-col">
                <span className="text-emerald-400 text-xs font-bold mb-2 tracking-wider">{item.year}</span>
                <h3 className="font-bold text-lg text-slate-100">{item.title}</h3>
                <p className="text-sm text-slate-400 mt-1">{item.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const SocialSection = () => {
  const socials = [
    { name: "WhatsApp", url: "#", icon: Phone, color: "text-green-400", bg: "bg-green-400/10", border: "border-green-400/20" },
    { name: "Facebook", url: "#", icon: Facebook, color: "text-blue-400", bg: "bg-blue-400/10", border: "border-blue-400/20" },
    { name: "Instagram", url: "#", icon: Share2, color: "text-pink-400", bg: "bg-pink-400/10", border: "border-pink-400/20" },
    { name: "GitHub", url: "#", icon: Github, color: "text-slate-200", bg: "bg-slate-200/10", border: "border-slate-200/20" },
    { name: "LinkedIn", url: "#", icon: Linkedin, color: "text-blue-500", bg: "bg-blue-500/10", border: "border-blue-500/20" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="p-6"
    >
      <h2 className="text-2xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-rose-400">সোশ্যাল মিডিয়া</h2>
      
      <div className="grid grid-cols-2 gap-4">
        {socials.map((social, idx) => (
          <motion.a
            href={social.url}
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`flex flex-col items-center justify-center p-6 rounded-3xl border ${social.border} backdrop-blur-md ${social.bg} hover:bg-opacity-20 transition-all shadow-lg`}
          >
            <social.icon className={`w-8 h-8 mb-3 ${social.color}`} />
            <span className="font-medium text-slate-200 text-sm">{social.name}</span>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const projects = [
    { title: "ই-কমার্স ওয়েবসাইট", desc: "একটি সম্পূর্ণ ই-কমার্স প্ল্যাটফর্ম যেখানে ইউজাররা কেনাকাটা করতে পারে।", link: "#" },
    { title: "ওয়েদার অ্যাপ", desc: "যেকোনো শহরের বর্তমান আবহাওয়া জানার অ্যাপ।", link: "#" },
    { title: "টাস্ক ম্যানেজার", desc: "দৈনন্দিন কাজগুলো গুছিয়ে রাখার জন্য একটি সুন্দর অ্যাপ।", link: "#" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="p-6"
    >
      <h2 className="text-2xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-400">আমার প্রজেক্টসমূহ</h2>
      
      <div className="space-y-4">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white/5 p-6 rounded-3xl border border-white/10 backdrop-blur-md group hover:border-amber-500/30 transition-all shadow-lg"
          >
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-lg font-bold text-slate-100">{project.title}</h3>
              <a href={project.link} className="p-2.5 bg-amber-500/10 text-amber-400 rounded-full hover:bg-amber-500/20 transition-colors">
                <Code className="w-4 h-4" />
              </a>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">{project.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', address: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    const botToken = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
    const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      alert("Telegram Bot Token or Chat ID is missing in environment variables. Please set VITE_TELEGRAM_BOT_TOKEN and VITE_TELEGRAM_CHAT_ID.");
      setStatus('error');
      return;
    }

    const text = `
New Contact Message:
Name: ${formData.name}
Address: ${formData.address}
Email: ${formData.email}
Message: ${formData.message}
    `;

    try {
      const res = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text: text,
        })
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', address: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="p-6 pb-24"
    >
      <h2 className="text-2xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">যোগাযোগ করুন</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-1.5">
          <label className="text-sm text-slate-400 flex items-center gap-2 ml-1"><User className="w-4 h-4"/> নাম</label>
          <input 
            required
            type="text" 
            value={formData.name}
            onChange={e => setFormData({...formData, name: e.target.value})}
            className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3.5 text-slate-100 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all placeholder:text-slate-600"
            placeholder="আপনার নাম লিখুন"
          />
        </div>
        <div className="space-y-1.5">
          <label className="text-sm text-slate-400 flex items-center gap-2 ml-1"><MapPin className="w-4 h-4"/> ঠিকানা</label>
          <input 
            required
            type="text" 
            value={formData.address}
            onChange={e => setFormData({...formData, address: e.target.value})}
            className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3.5 text-slate-100 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all placeholder:text-slate-600"
            placeholder="আপনার ঠিকানা"
          />
        </div>
        <div className="space-y-1.5">
          <label className="text-sm text-slate-400 flex items-center gap-2 ml-1"><AtSign className="w-4 h-4"/> ইমেইল</label>
          <input 
            required
            type="email" 
            value={formData.email}
            onChange={e => setFormData({...formData, email: e.target.value})}
            className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3.5 text-slate-100 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all placeholder:text-slate-600"
            placeholder="example@email.com"
          />
        </div>
        <div className="space-y-1.5">
          <label className="text-sm text-slate-400 flex items-center gap-2 ml-1"><MessageSquare className="w-4 h-4"/> মেসেজ</label>
          <textarea 
            required
            rows={4}
            value={formData.message}
            onChange={e => setFormData({...formData, message: e.target.value})}
            className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3.5 text-slate-100 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all resize-none placeholder:text-slate-600"
            placeholder="আপনার মেসেজ লিখুন..."
          />
        </div>

        <button 
          type="submit" 
          disabled={status === 'loading'}
          className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-medium rounded-2xl px-4 py-4 mt-2 flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50 shadow-lg shadow-blue-500/25"
        >
          {status === 'loading' ? 'পাঠানো হচ্ছে...' : status === 'success' ? 'মেসেজ পাঠানো হয়েছে!' : <><Send className="w-5 h-5"/> মেসেজ পাঠান</>}
        </button>
      </form>
    </motion.div>
  );
};

const tabs = [
  { id: 'home', icon: Home, label: 'হোম' },
  { id: 'edu', icon: GraduationCap, label: 'শিক্ষা' },
  { id: 'social', icon: Share2, label: 'সোশ্যাল' },
  { id: 'projects', icon: Code, label: 'প্রজেক্ট' },
  { id: 'contact', icon: Mail, label: 'যোগাযোগ' },
];

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="h-screen w-full bg-[#050505] text-slate-50 overflow-hidden flex flex-col font-sans selection:bg-indigo-500/30 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-500/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-emerald-500/10 blur-[120px]" />
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-y-auto pb-24 relative z-10 scroll-smooth">
        <AnimatePresence mode="wait">
          {activeTab === 'home' && <HomeSection key="home" />}
          {activeTab === 'edu' && <EducationSection key="edu" />}
          {activeTab === 'social' && <SocialSection key="social" />}
          {activeTab === 'projects' && <ProjectsSection key="projects" />}
          {activeTab === 'contact' && <ContactSection key="contact" />}
        </AnimatePresence>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 w-full h-20 bg-[#050505]/80 backdrop-blur-xl border-t border-white/5 flex justify-around items-center px-2 z-50 pb-safe">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="relative flex flex-col items-center justify-center w-16 h-full gap-1.5"
            >
              {isActive && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute inset-0 bg-white/5 rounded-2xl my-2"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <tab.icon 
                className={`w-6 h-6 z-10 transition-colors duration-300 ${isActive ? 'text-indigo-400' : 'text-slate-500'}`} 
                strokeWidth={isActive ? 2.5 : 2}
              />
              <span className={`text-[10px] font-medium z-10 transition-colors duration-300 ${isActive ? 'text-indigo-400' : 'text-slate-500'}`}>
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
