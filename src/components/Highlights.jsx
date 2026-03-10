import { Star, ShieldCheck, Users, PartyPopper } from 'lucide-react';

const Highlights = () => {
    const features = [
        {
            icon: <ShieldCheck size={40} />,
            title: "Fresh & Hygienic",
            desc: "Top quality ingredients and strict hygiene standards used in every dish."
        },
        {
            icon: <Users size={40} />,
            title: "Family Friendly",
            desc: "A warm, smoke-free ambiance tailored perfectly for family gatherings."
        },
        {
            icon: <PartyPopper size={40} />,
            title: "Event Hosting",
            desc: "Dedicated arrangements for birthday parties, anniversaries and celebrations."
        },
        {
            icon: <Star size={40} />,
            title: "Premuim Taste",
            desc: "Authentic flavors cooked to perfection by our expert culinary team."
        }
    ];

    return (
        <section className="py-20 bg-brand-dark text-white relative overflow-hidden">
            {/* Abstract Shapes */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-brand-primary/10 rounded-full filter blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-secondary/10 rounded-full filter blur-3xl transform translate-x-1/2 translate-y-1/2"></div>

            <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                    {features.map((feature, i) => (
                        <div key={i} className="p-8 bg-white/5 rounded-3xl hover:bg-white/10 transition-all duration-300 backdrop-blur-sm border border-white/5 group hover:shadow-2xl hover:-translate-y-2">
                            <div className="text-brand-secondary mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300 bg-white/10 w-20 h-20 mx-auto rounded-full items-center">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3 font-serif tracking-wide">{feature.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default Highlights;
