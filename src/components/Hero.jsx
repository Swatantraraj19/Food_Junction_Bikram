import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image with Parallax Effect */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed transform scale-105"
                style={{
                    backgroundImage: "url('/Hero_bg.avif')", // A rich table spread
                }}
            >
                {/* Darker gradient for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80"></div>
            </div>

            <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20">
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-brand-secondary font-semibold tracking-[0.2em] text-sm md:text-base uppercase mb-6 block"
                >
                    Welcome to
                </motion.span>
                <motion.h1
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-3 leading-tight drop-shadow-2xl"
                >
                    Food Junction Bikram
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-2xl md:text-3xl lg:text-4xl font-light italic font-sans text-gray-200 mb-8 tracking-wide"
                >
                    Taste That Makes You Smile
                </motion.p>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-wrap items-center justify-center gap-6 md:gap-8 text-gray-200 text-base md:text-lg mb-12 font-medium tracking-wide"
                >
                    <div className="flex items-center gap-2">
                        <div className="flex items-center justify-center w-5 h-5 border-2 border-green-500 bg-white/90 rounded-sm">
                            <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
                        </div>
                        <span className="uppercase text-xs md:text-sm tracking-wider font-semibold text-white">Pure Veg</span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                        <div className="flex items-center justify-center w-5 h-5 border-2 border-red-500 bg-white/90 rounded-sm">
                            <div className="w-2.5 h-2.5 bg-red-500 rounded-full"></div>
                        </div>
                        <span className="uppercase text-xs md:text-sm tracking-wider font-semibold text-white">Non-Veg</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <div className="flex items-center justify-center w-5 h-5 border-2 border-yellow-500 bg-white/90 rounded-sm">
                            <div className="w-2.5 h-2.5 bg-yellow-500 rounded-sm"></div>
                        </div>
                        <span className="uppercase text-xs md:text-sm tracking-wider font-semibold text-white">Fast Food</span>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <a href="#menu" className="bg-brand-primary text-white border border-brand-primary px-7 py-2.5 rounded-full text-base font-semibold hover:bg-transparent hover:text-white transition-all transform hover:scale-105 shadow-lg shadow-red-900/40 tracking-wide uppercase">
                        View Menu
                    </a>
                    <a href="#contact" className="bg-transparent text-white border border-white/60 px-7 py-2.5 rounded-full text-base font-semibold hover:bg-white hover:text-brand-dark transition-all transform hover:scale-105 backdrop-blur-sm tracking-wide uppercase">
                        Visit Us
                    </a>
                </motion.div>
            </div>

            {/* Floating Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
                <a 
                    href="#opening"
                    aria-label="Scroll to Special Offer section"
                    className="flex justify-center pt-2 w-6 h-10 border-2 border-white/50 rounded-full text-white/50 hover:border-white hover:text-white transition-colors cursor-pointer"
                >
                    <div className="w-1.5 h-1.5 bg-white/80 rounded-full"></div>
                </a>
            </motion.div>
        </section>
    );
};

export default Hero;
