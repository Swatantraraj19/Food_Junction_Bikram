import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=1920')", // A rich table spread
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
            </div>

            <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-16">
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-brand-secondary font-medium tracking-widest text-lg uppercase mb-4 block"
                >
                    Welcome to
                </motion.span>
                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight text-shadow-lg"
                >
                    Food Junction Bikram<br />
                    <span className="text-3xl md:text-5xl font-light italic font-sans text-gray-200 mt-2 block">Test That makes you smile </span>
                </motion.h1>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex items-center justify-center gap-4 text-gray-300 text-lg md:text-xl mb-10 font-light tracking-wide"
                >
                    <span>Veg</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-primary"></span>
                    <span>Non-Veg</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-primary"></span>
                    <span>Fast Food</span>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <a href="#menu" className="bg-brand-primary text-white border-2 border-brand-primary px-8 py-3 rounded-full text-lg font-medium hover:bg-transparent hover:text-white transition-all transform hover:scale-105 shadow-lg shadow-red-900/40">
                        View Menu
                    </a>
                    <a href="#contact" className="bg-transparent text-white border-2 border-white px-8 py-3 rounded-full text-lg font-medium hover:bg-white hover:text-brand-dark transition-all transform hover:scale-105 backdrop-blur-sm">
                        Visit Us
                    </a>
                </motion.div>
            </div>

            {/* Floating Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/50"
            >
                <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
                    <div className="w-1.5 h-1.5 bg-white/80 rounded-full"></div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
