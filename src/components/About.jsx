import { CheckCircle } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="section-padding bg-white overflow-hidden">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Images */}
                <div className="relative">
                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=600"
                            alt="Restaurant Ambience"
                            className="rounded-2xl shadow-lg w-full h-64 object-cover transform translate-y-8 hover:scale-105 transition-transform duration-500"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1555126634-323283e090fa?auto=format&fit=crop&q=80&w=600"
                            alt="Delicious Meal"
                            className="rounded-2xl shadow-lg w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                    {/* Badge */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-full shadow-xl text-center w-32 h-32 flex flex-col justify-center items-center border-4 border-brand-primary/10 z-10">
                        <span className="text-3xl font-bold text-brand-primary">2026</span>
                        <span className="text-xs text-gray-500 font-medium uppercase mt-1">Est. Year</span>
                    </div>
                </div>

                {/* Content */}
                <div className="relative">
                    <span className="text-brand-primary font-bold tracking-wider uppercase text-sm mb-2 block">Our Story</span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark mb-6">
                        Experience the Taste of <span className="text-brand-primary">Tradition</span>
                    </h2>
                    <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                        Welcome to <span className="font-semibold text-brand-dark">Food Junction Bikram</span>, where every meal is a celebration of flavor. Located in the heart of Bikram, Patna, we bring you a diverse culinary experience ranging from authentic Indian curries to zesty fast food favorites.
                    </p>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                        Our mission is simple: to serve fresh, hygienic, and delicious food in a warm, family-friendly environment. Whether it's a birthday bash or a quiet dinner, we are here to make every moment memorable.
                    </p>

                    <div className="grid grid-cols-2 gap-y-4 gap-x-6 mb-8">
                        {[
                            "Fresh Ingredients",
                            "Family Atmosphere",
                            "Hygiene Focused",
                            "Best Chefs",
                            "Live Kitchen",
                            "Party Hall"
                        ].map((item, index) => (
                            <div key={index} className="flex items-center space-x-2">
                                <CheckCircle className="text-brand-primary flex-shrink-0" size={20} />
                                <span className="font-medium text-gray-800">{item}</span>
                            </div>
                        ))}
                    </div>

                    <a href="#menu" className="bg-brand-dark text-white px-8 py-3 rounded-lg font-medium hover:bg-brand-primary transition-colors shadow-lg shadow-gray-400/50">
                        More About Us
                    </a>
                </div>
            </div>
        </section>
    );
};

export default About;
