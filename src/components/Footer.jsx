import { Instagram, Heart, Mail, Phone, MapPin, MessageCircle, Youtube } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { 
            icon: <Instagram size={18} />, 
            href: "https://instagram.com/food_junction_bikram", 
            label: "Instagram",
            hoverColor: "hover:text-pink-500 hover:border-pink-500 hover:bg-pink-500/5"
        },
        { 
            icon: <Youtube size={18} />, 
            href: "https://youtube.com/@FoodJunctionBikram", 
            label: "YouTube",
            hoverColor: "hover:text-red-600 hover:border-red-600 hover:bg-red-600/5"
        },
        { 
            icon: <MessageCircle size={18} />, 
            href: "https://whatsapp.com/channel/0029VbCAOo31t90Y62GJMu1i", 
            label: "WhatsApp Channel",
            hoverColor: "hover:text-green-500 hover:border-green-500 hover:bg-green-500/5"
        },
        { 
            icon: <Mail size={18} />, 
            href: "mailto:foodjunction006@gmail.com", 
            label: "Email",
            hoverColor: "hover:text-brand-primary hover:border-brand-primary hover:bg-brand-primary/5"
        }
    ];

    return (
        <footer className="bg-brand-dark text-white relative overflow-hidden border-t border-white/5" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">Footer</h2>
            
            {/* Top decorative gradient line */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-primary/40 to-transparent"></div>
            
            <div className="max-w-7xl mx-auto px-6 pt-24 pb-12 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 items-start mb-20">
                    
                    {/* Column 1: Brand Identity */}
                    <div className="space-y-8 border-l-2 border-transparent pl-4">
                        <div>
                            <motion.h3 
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="text-3xl font-serif font-bold tracking-tight text-white mb-2"
                            >
                                Food Junction
                            </motion.h3>
                            <motion.p 
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-brand-primary font-bold text-[10px] uppercase tracking-[0.4em]"
                            >
                                Bikram • Patna
                            </motion.p>
                        </div>
                        
                        <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-sm italic font-light">
                            Crafting culinary stories and premium experiences in the heart of Bikram. Your favorite destination for taste and togetherness.
                        </p>

                        <div className="flex gap-4">
                            {socialLinks.map((social, i) => (
                                <a 
                                    key={i} 
                                    href={social.href} 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`Visit our ${social.label}`}
                                    className={`w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 transition-all duration-300 ${social.hoverColor}`}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h3 className="text-white font-bold text-xs uppercase tracking-[0.3em] mb-10 border-l-2 border-brand-primary pl-4">Experience</h3>
                        <nav aria-label="Footer Navigation">
                            <ul className="space-y-4 pl-4">
                                {[
                                    { name: 'Home', link: '#home' },
                                    { name: 'About', link: '#about' },
                                    { name: 'Menu', link: '#menu' },
                                    { name: 'Gallery', link: '#gallery' },
                                    { name: 'Contact', link: '#contact' }
                                ].map((item) => (
                                    <li key={item.name}>
                                        <a 
                                            href={item.link} 
                                            className="text-gray-400 hover:text-white transition-colors text-sm font-medium flex items-center group"
                                        >
                                            <div className="w-0 group-hover:w-3 h-[1px] bg-brand-primary transition-all duration-300 mr-0 group-hover:mr-3"></div>
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>

                    {/* Column 3: Contact Info */}
                    <div>
                        <h3 className="text-white font-bold text-xs uppercase tracking-[0.3em] mb-10 border-l-2 border-brand-primary pl-4">Find Us</h3>
                        <div className="space-y-6 pl-4">
                            <div className="flex gap-4 group">
                                <div className="p-2 rounded-lg bg-white/5 group-hover:bg-brand-primary/10 transition-colors">
                                    <MapPin size={18} className="text-brand-primary shrink-0" />
                                </div>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    NH-139, 200mt west from Khoritha<br />
                                    Golambar, Bikram, Patna 801104
                                </p>
                            </div>
                            <div className="flex items-center gap-4 group">
                                <div className="p-2 rounded-lg bg-white/5 group-hover:bg-brand-primary/10 transition-colors">
                                    <Phone size={18} className="text-brand-primary shrink-0" />
                                </div>
                                <a href="tel:+917484915202" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">+91 7484915202</a>
                            </div>
                            <div className="flex items-center gap-4 group">
                                <div className="p-2 rounded-lg bg-white/5 group-hover:bg-brand-primary/10 transition-colors">
                                    <Mail size={18} className="text-brand-primary shrink-0" />
                                </div>
                                <a href="mailto:foodjunction006@gmail.com" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">foodjunction006@gmail.com</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-4 text-[10px] text-gray-500 tracking-[0.2em] uppercase">
                        <span>&copy; {currentYear} Food Junction Bikram</span>
                        <span className="hidden md:inline w-1 h-1 bg-gray-700 rounded-full"></span>
                        <span>All Rights Reserved</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-xs text-gray-500 italic">
                        <span>Made with</span>
                        <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                        >
                            <Heart size={14} className="text-brand-primary fill-brand-primary" aria-hidden="true" />
                        </motion.div>
                        <span>for our community</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
