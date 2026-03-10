import { useState } from 'react';
import { menuData } from '../data/menuData';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'react-hot-toast';

const Menu = () => {
    const [filter, setFilter] = useState('All');

    const filteredItems = filter === 'All'
        ? menuData
        : menuData.filter(item => item.category === filter);

    const categories = ['All', 'Veg', 'Non-Veg', 'Fast Food'];

    return (
        <section id="menu" className="py-16 bg-brand-light relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-brand-primary/5 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-brand-secondary/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
                <div className="text-center mb-12">
                    <span className="text-brand-primary font-bold tracking-wider uppercase text-sm mb-2 block">Delicious Choices</span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark mb-4">
                        Explore Our Menu
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-brand-secondary to-brand-primary mx-auto rounded-full"></div>
                </div>

                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${filter === cat
                                    ? 'bg-brand-primary text-white shadow-lg shadow-brand-primary/30 scale-105'
                                    : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-brand-primary border border-gray-200'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Menu Grid */}
                <motion.div
                    layout
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence>
                        {filteredItems.map((item) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                key={item.id}
                                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group ring-1 ring-gray-100"
                            >
                                <div className="relative h-56 overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4"></div>
                                    <div className="absolute top-4 right-4 bg-white px-4 py-1 rounded-full text-sm font-bold shadow-md text-brand-dark">
                                        {item.price}
                                    </div>
                                    <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold text-white shadow-md uppercase tracking-wide ${item.category === 'Veg' ? 'bg-green-600' :
                                            item.category === 'Non-Veg' ? 'bg-red-600' :
                                                'bg-yellow-500'
                                        }`}>
                                        {item.category}
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-brand-dark mb-2 font-serif group-hover:text-brand-primary transition-colors">{item.name}</h3>
                                    <p className="text-gray-500 text-sm mb-6 line-clamp-2 leading-relaxed">{item.description}</p>
                                    <div className="flex items-center justify-between">
                                        <button 
                                            onClick={() => toast.success(`${item.name} added to your order!`, {
                                                style: { background: '#1F2937', color: '#fff' },
                                                iconTheme: { primary: '#EF4444', secondary: '#fff' }
                                            })}
                                            className="w-full bg-brand-light text-brand-dark hover:bg-brand-primary hover:text-white font-medium py-3 rounded-xl transition-colors duration-300 flex items-center justify-center space-x-2"
                                        >
                                            <span>Add to Order</span>
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                <div className="text-center mt-12">
                    <a href="#" className="inline-flex items-center text-brand-primary font-semibold hover:text-brand-dark transition-colors">
                        View Full Menu <span className="ml-2 text-xl">→</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Menu;
