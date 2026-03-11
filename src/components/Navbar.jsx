import { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';

const Navbar = () => {
    const { cartCount, toggleCart } = useCart();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Menu', href: '#menu' },
        { name: 'Gallery', href: '#gallery' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-4' : 'bg-black/30 backdrop-blur-sm py-6'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <div className="flex-shrink-0 flex items-center">
                        <a href="#home" className="flex items-center gap-2">
                            <img src="/FJ_logo.png" alt="Food Junction Logo" className="h-10 md:h-12 w-auto object-contain" />
                            <h1 className={`text-2xl font-serif font-bold ${scrolled ? 'text-brand-primary' : 'text-white'}`}>
                                Food Junction
                            </h1>
                        </a>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8 items-center">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className={`font-medium transition-colors duration-200 ${scrolled ? 'text-gray-700 hover:text-brand-primary' : 'text-white hover:text-brand-secondary'}`}
                            >
                                {link.name}
                            </a>
                        ))}
                        <a href="#menu" className="bg-brand-primary text-white px-5 py-2 rounded-full hover:bg-red-600 transition-colors font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                            Order Now
                        </a>
                        
                        {/* Shopping Cart Icon (Desktop) */}
                        <button 
                            onClick={toggleCart} 
                            className={`relative p-2 rounded-full transition-colors ${scrolled ? 'text-gray-700 hover:text-brand-primary hover:bg-gray-100' : 'text-white hover:text-brand-secondary hover:bg-white/10'}`}
                        >
                            <ShoppingCart size={24} />
                            {cartCount > 0 && (
                                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-red-600 rounded-full">
                                    {cartCount}
                                </span>
                            )}
                        </button>
                    </div>

                    {/* Mobile Menu Button & Cart Icon */}
                    <div className="md:hidden flex items-center space-x-4">
                        {/* Shopping Cart Icon (Mobile) */}
                        <button 
                            onClick={toggleCart} 
                            className={`relative p-2 rounded-full transition-colors ${scrolled ? 'text-gray-700 hover:text-brand-primary' : 'text-white hover:text-brand-secondary'}`}
                        >
                            <ShoppingCart size={24} />
                            {cartCount > 0 && (
                                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-red-600 rounded-full">
                                    {cartCount}
                                </span>
                            )}
                        </button>
                        <button onClick={() => setIsOpen(!isOpen)} className={`${scrolled ? 'text-gray-800' : 'text-white'}`}>
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden bg-white shadow-xl absolute w-full left-0 top-full border-t"
                >
                    <div className="px-4 pt-2 pb-6 space-y-2">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-brand-primary hover:bg-gray-50 rounded-md"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <a 
                            href="#menu" 
                            className="block px-3 py-2 mt-4 text-center text-base font-medium text-white bg-brand-primary hover:bg-red-600 rounded-md shadow-md"
                            onClick={() => setIsOpen(false)}
                        >
                            Order Now
                        </a>
                    </div>
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;
