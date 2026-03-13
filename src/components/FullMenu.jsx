import { motion } from 'framer-motion';
import { X, Plus } from 'lucide-react';
import { fullMenuData } from '../data/fullMenuData';
import { useCart } from '../context/CartContext';

const FullMenu = ({ isOpen, onClose }) => {
    const { addToCart } = useCart();

    if (!isOpen) return null;

    const handleAdd = (item, size, categoryName) => {
        // Smart Naming Logic:
        // 1. Half portions ALWAYS get the (Half) suffix.
        // 2. Full portions get the (Full) suffix ONLY if:
        //    - The item actually has both Half and Full options, OR
        //    - It's NOT in a category where we usually skip labels (like Breads/Beverages).
        const isHalf = size === 'Half';
        const hasBoth = item.prices.half && item.prices.full;
        const skipLabel = ['Breads', 'Beverages & Desserts', 'Salad & Papad', 'Kababs & Tandoor'].includes(categoryName);
        
        let finalName = item.name;
        if (isHalf) {
            finalName = `${item.name} (Half)`;
        } else if (hasBoth || !skipLabel) {
            finalName = `${item.name} (Full)`;
        }
        
        const cartItem = {
            id: isHalf ? `${item.id}-Half` : item.id,
            name: finalName,
            price: size ? item.prices[size.toLowerCase()] : (item.prices.full || item.prices.half),
            category: item.type === 'veg' ? 'Veg' : 'Non-Veg',
            image: item.image || "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80&w=500"
        };
        addToCart(cartItem);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] bg-[#0c1117] w-full h-screen overflow-y-auto custom-scrollbar scroll-smooth"
        >
            {/* Elegant Sticky Header for Modal */}
            <div className="sticky top-0 z-[110] bg-[#0c1117]/95 backdrop-blur-md border-b border-[#d4af37]/20 px-4 py-4 md:px-8 flex justify-between items-center transition-all duration-300">
                <div>
                    <h2 className="text-xl md:text-3xl font-serif font-bold text-white tracking-wide">
                        Food <span className="text-[#d4af37]">Menu</span>
                    </h2>
                    <p className="text-[#d4af37]/70 text-[10px] md:text-sm tracking-widest uppercase mt-0.5 md:mt-1">Handpicked Selections</p>
                </div>
                <button 
                    onClick={onClose}
                    className="p-2 md:p-2.5 rounded-full bg-[#1a2332] text-white hover:bg-[#d4af37] hover:text-black transition-all duration-300 flex items-center justify-center group"
                >
                    <X size={20} className="md:w-6 md:h-6 group-hover:rotate-90 transition-transform duration-300" />
                </button>
            </div>

            {/* Menu Content Container */}
            <div className="flex flex-col items-center w-full px-4 py-12 md:px-12 pb-32">
                <div className="w-full max-w-5xl space-y-16 md:space-y-24">
                    {fullMenuData.map((categoryGroup, index) => (
                        <div key={index} className="w-full space-y-10 md:space-y-12">
                            
                            {/* Centered Category Header with Balance Lines */}
                            <div className="flex items-center justify-center gap-3 md:gap-6 w-full">
                                <div className="hidden sm:block h-px bg-gradient-to-r from-transparent via-[#d4af37]/40 to-[#d4af37] flex-grow"></div>
                                <div className="sm:hidden h-[1.5px] w-6 bg-[#d4af37]/40"></div>
                                <h3 className="text-xl md:text-4xl font-serif text-[#d4af37] text-center tracking-widest px-2 uppercase font-medium">
                                    {categoryGroup.category}
                                </h3>
                                <div className="sm:hidden h-[1.5px] w-6 bg-[#d4af37]/40"></div>
                                <div className="hidden sm:block h-px bg-gradient-to-l from-transparent via-[#d4af37]/40 to-[#d4af37] flex-grow"></div>
                            </div>

                            {/* Symmetric Grid - 1 col on mobile, 2 col on laptop */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 md:gap-y-10 w-full">
                                {categoryGroup.items.map((item) => {
                                    const hasBoth = item.prices.half && item.prices.full;
                                    const hideLabel = ['Breads', 'Beverages & Desserts', 'Salad & Papad', 'Kababs & Tandoor'].includes(categoryGroup.category);
                                    
                                    return (
                                        <div 
                                            key={item.id} 
                                            className="flex flex-col items-center md:items-start gap-4 group p-4 md:p-6 rounded-2xl hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-[#d4af37]/10"
                                        >
                                            <div className="flex items-center gap-2.5 md:gap-3">
                                                <div className={`w-2 h-2 rounded-full flex-shrink-0 ${item.type === 'veg' ? 'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.4)]' : 'bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.4)]'}`}></div>
                                                <span className="text-white font-medium text-lg md:text-2xl tracking-wide group-hover:text-[#d4af37] transition-colors text-center md:text-left leading-tight">
                                                    {item.name}
                                                </span>
                                            </div>

                                            {/* Pricing Options Row - Wide Clickable Boxes */}
                                            <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-1">
                                                {item.prices.half && (
                                                    <button 
                                                        onClick={() => handleAdd(item, 'Half', categoryGroup.category)}
                                                        className="flex items-center gap-4 bg-[#1a2332] px-5 py-2.5 rounded-xl border border-white/5 hover:border-[#d4af37]/50 transition-all hover:bg-[#d4af37]/5 group/btn active:scale-95"
                                                    >
                                                        <div className="flex flex-col items-start">
                                                            <span className="text-gray-400 text-[10px] uppercase font-bold tracking-widest group-hover/btn:text-[#d4af37]/70 transition-colors">Half</span>
                                                            <span className="text-white font-bold text-base md:text-xl">{item.prices.half}</span>
                                                        </div>
                                                        <div className="w-8 h-8 rounded-full bg-[#d4af37] flex items-center justify-center text-black shadow-lg group-hover/btn:rotate-90 transition-transform duration-300">
                                                            <Plus size={18} strokeWidth={3} />
                                                        </div>
                                                    </button>
                                                )}
                                                {item.prices.full && (
                                                    <button 
                                                        onClick={() => handleAdd(item, 'Full', categoryGroup.category)}
                                                        className="flex items-center gap-4 bg-[#1a2332] px-5 py-2.5 rounded-xl border border-white/5 hover:border-[#d4af37]/50 transition-all hover:bg-[#d4af37]/5 group/btn active:scale-95"
                                                    >
                                                        <div className="flex flex-col items-start">
                                                            {(!hideLabel || hasBoth) && <span className="text-gray-400 text-[10px] uppercase font-bold tracking-widest group-hover/btn:text-[#d4af37]/70 transition-colors">Full</span>}
                                                            <span className="text-white font-bold text-base md:text-xl">{item.prices.full}</span>
                                                        </div>
                                                        <div className="w-8 h-8 rounded-full bg-[#d4af37] flex items-center justify-center text-black shadow-lg group-hover/btn:rotate-90 transition-transform duration-300">
                                                            <Plus size={18} strokeWidth={3} />
                                                        </div>
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* Visual Footer */}
                <div className="mt-24 text-center">
                    <div className="w-12 h-1 bg-[#d4af37]/20 mx-auto rounded-full mb-4"></div>
                    <p className="text-gray-500 text-[10px] uppercase tracking-[0.5em] font-medium">Luxury Food Experience</p>
                </div>

            </div>
        </motion.div>
    );
};

export default FullMenu;
