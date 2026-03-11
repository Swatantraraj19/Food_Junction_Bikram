import { Star, ShieldCheck, Users, PartyPopper } from 'lucide-react';

const Highlights = () => {
    const features = [
        {
            icon: <ShieldCheck size={36} strokeWidth={1.5} />,
            title: "Fresh & Hygienic",
            desc: "Top quality ingredients and strict hygiene standards used in every dish."
        },
        {
            icon: <Users size={36} strokeWidth={1.5} />,
            title: "Family Friendly",
            desc: "A warm, smoke-free ambiance tailored perfectly for family gatherings."
        },
        {
            icon: <PartyPopper size={36} strokeWidth={1.5} />,
            title: "Event Hosting",
            desc: "Dedicated arrangements for birthday parties, anniversaries and celebrations."
        },
        {
            icon: <Star size={36} strokeWidth={1.5} />,
            title: "Premium Taste",
            desc: "Authentic flavors cooked to perfection by our expert culinary team."
        }
    ];

    return (
        <section className="py-24 bg-brand-dark text-white relative overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-primary/20 rounded-full filter blur-[100px] opacity-40 transform -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-secondary/20 rounded-full filter blur-[100px] opacity-20 transform translate-y-1/2"></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-block mb-3">
                        <span className="text-brand-primary font-bold tracking-[0.2em] uppercase text-sm border-b-2 border-brand-primary/30 pb-1">Our Promise</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 leading-tight">
                        Why Choose <span className="text-brand-secondary italic">Us</span>
                    </h2>
                </div>

                {/* Feature Cards Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 text-center">
                    {features.map((feature, i) => (
                        <div key={i} className="group relative p-8 bg-white/[0.02] rounded-[2rem] hover:bg-white/[0.06] transition-all duration-500 backdrop-blur-xl border border-white/10 hover:border-brand-primary/40 hover:shadow-[0_0_40px_rgba(239,68,68,0.15)] hover:-translate-y-3 overflow-hidden">
                            {/* Premium Hover Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-b from-brand-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            
                            {/* Icon Container */}
                            <div className="relative text-brand-secondary mb-8 flex justify-center items-center w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-white/10 to-transparent shadow-inner border border-white/10 group-hover:scale-110 group-hover:text-brand-primary group-hover:border-brand-primary/50 transition-all duration-500">
                                {feature.icon}
                            </div>
                            
                            {/* Text Content */}
                            <h3 className="relative text-xl font-bold mb-4 font-serif tracking-wide text-gray-100 group-hover:text-white transition-colors">{feature.title}</h3>
                            <p className="relative text-gray-400 text-sm md:text-base leading-relaxed group-hover:text-gray-300 transition-colors font-light">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default Highlights;
