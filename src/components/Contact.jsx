import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Mail, Instagram, MessageCircle, Youtube } from 'lucide-react';

const Contact = () => {
    const contactInfo = [
        {
            icon: <MapPin className="w-6 h-6" />,
            title: "Visit Us",
            content: "NH-139, 200mt west from Khoritha Golambar, Bikram, Patna 801104",
            link: "https://maps.app.goo.gl/NFq7sZjmNvbQCykh7",
            label: "Get Directions"
        },
        {
            icon: <Phone className="w-6 h-6" />,
            title: "Call Us",
            content: "+91 7484915202",
            link: "tel:+917484915202",
            label: "Dial Now"
        },
        
        {
            icon: <Clock className="w-6 h-6" />,
            title: "Opening Hours",
            content: "Mon - Sun: 10:00 AM - 11:00 PM",
            link: "#",
            label: "Open Now"
        }
    ];

    return (
        <section id="contact" className="pt-12 pb-24 md:pt-16 md:pb-32 bg-[#faf9f6] relative overflow-hidden scroll-mt-24">
            {/* Background Decorative Element */}
            <div className="absolute top-0 right-0 w-[40%] h-full bg-brand-primary/5 -skew-x-12 transform translate-x-1/2 pointer-events-none z-0"></div>
            
            <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
                    
                    {/* Left Side: Invitation Content */}
                    <div className="w-full lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="mb-12"
                        >
                            <div className="inline-flex items-center gap-3 mb-6">
                                <div className="w-8 h-[1px] bg-brand-primary"></div>
                                <span className="text-brand-primary font-bold tracking-[0.4em] uppercase text-xs">Reach Out</span>
                                <div className="w-8 h-[1px] bg-brand-primary"></div>
                            </div>
                            <h2 className="text-4xl md:text-6xl font-serif font-bold text-brand-dark mb-8 leading-tight">
                                Join Us <br />
                                <span className="text-brand-primary italic">at the Table</span>
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed max-w-lg mb-10 font-light italic">
                                From family celebrations in our Party Hall to a quick craving fix, we bring the best of Patna's flavors to your plate.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5">
                            {contactInfo.map((item, idx) => (
                                <motion.a
                                    key={idx}
                                    href={item.link}
                                    target={item.link.startsWith('http') ? "_blank" : "_self"}
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="group flex items-center p-5 bg-white/70 backdrop-blur-sm border border-black/[0.03] rounded-3xl shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_25px_50px_-15px_rgba(212,175,55,0.15)] transition-all duration-500 hover:bg-white"
                                >
                                    <div className="w-14 h-14 shrink-0 bg-brand-primary/5 rounded-2xl flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all duration-500 transform group-hover:scale-110">
                                        {item.icon}
                                    </div>
                                    <div className="ml-5 flex-1 pr-4">
                                        <h4 className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em] mb-1">{item.title}</h4>
                                        <p className="text-brand-dark font-medium leading-tight group-hover:text-brand-primary transition-colors">{item.content}</p>
                                    </div>
                                    <div className="hidden sm:flex items-center justify-center w-24 h-8 border border-brand-primary/20 rounded-full opacity-0 group-hover:opacity-100 transition-all transform translate-x-4 group-hover:translate-x-0">
                                        <span className="text-[9px] font-bold text-brand-primary uppercase tracking-widest">{item.label}</span>
                                    </div>
                                </motion.a>
                            ))}
                        </div>

                        {/* Social Links */}
                        <motion.div 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                            className="mt-14 pt-10 border-t border-brand-primary/10 flex flex-wrap items-center gap-6"
                        >
                            <span className="text-brand-dark font-bold text-[10px] uppercase tracking-[0.4em]">Follow the Taste</span>
                            <div className="flex gap-3">
                                <a href="https://instagram.com/food_junction_bikram" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full bg-white border border-black/5 flex items-center justify-center text-gray-400 hover:text-brand-primary hover:border-brand-primary hover:shadow-lg transition-all"><Instagram size={18} /></a>
                                <a href="https://youtube.com/@FoodJunctionBikram" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full bg-white border border-black/5 flex items-center justify-center text-gray-400 hover:text-red-600 hover:border-red-600 hover:shadow-lg transition-all"><Youtube size={18} /></a>
                                <a href="https://whatsapp.com/channel/0029VbCAOo31t90Y62GJMu1i" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full bg-white border border-black/5 flex items-center justify-center text-gray-400 hover:text-green-500 hover:border-green-500 hover:shadow-lg transition-all"><MessageCircle size={18} /></a>
                                <a href="mailto:foodjunction006@gmail.com" className="w-11 h-11 rounded-full bg-white border border-black/5 flex items-center justify-center text-gray-400 hover:text-brand-primary hover:border-brand-primary hover:shadow-lg transition-all"><Mail size={18} /></a>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Side: Visual Map Frame */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="w-full lg:w-1/2 relative group"
                    >
                        {/* Map Architecture */}
                        <div className="relative z-10 w-full aspect-[1/1] sm:aspect-[4/3] lg:aspect-[5/6] rounded-[3.5rem] overflow-hidden bg-white shadow-2xl p-3 border border-black/5 transition-transform duration-700 hover:scale-[1.01]">
                            <div className="w-full h-full rounded-[2.8rem] overflow-hidden relative">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    frameBorder="0"
                                    scrolling="no"
                                    marginHeight="0"
                                    marginWidth="0"
                                    title="Food Junction Location"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.4910993338895!2d84.85471377508316!3d25.455272321151608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398d53e09d7e08ff%3A0x454a466777000ee0!2sFood%20Junction%20Restaurant%20Bikram!5e0!3m2!1sen!2sin!4v1741810500000!5m2!1sen!2sin"
                                    className="w-full h-full grayscale-[0.3] contrast-[1.1] hover:grayscale-0 transition-all duration-1000"
                                ></iframe>
                                
                                {/* Aesthetic Gradient Guard */}
                                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                                
                                {/* Info Floating Plate */}
                                <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-xl p-5 md:p-8 rounded-[2rem] shadow-2xl border border-white/40 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-[backOut]">
                                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                                        <div>
                                            <div className="flex items-center gap-2 mb-2">
                                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                                <span className="text-[10px] font-black text-brand-primary uppercase tracking-widest">Live at Bikram</span>
                                            </div>
                                            <h4 className="text-xl font-serif font-bold text-brand-dark">Food Junction Bikram</h4>
                                            <p className="text-xs text-gray-500 font-medium whitespace-pre-line">NH-139, 200mt west from Khoritha Golambar, Bikram, Patna</p>
                                        </div>
                                        <a 
                                            href="https://maps.app.goo.gl/NFq7sZjmNvbQCykh7" 
                                            target="_blank" 
                                            className="w-full md:w-auto text-center px-8 py-4 bg-brand-dark text-white rounded-2xl text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-brand-primary transition-all duration-300 shadow-xl"
                                        >
                                            View Route
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Background Floating Blob */}
                        <div className="absolute -top-10 -left-10 w-72 h-72 bg-brand-primary/10 rounded-full blur-[120px] -z-10 group-hover:bg-brand-primary/20 transition-all duration-1000"></div>
                        <div className="absolute -bottom-10 -right-10 w-96 h-96 bg-brand-secondary/5 rounded-full blur-[150px] -z-10"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
