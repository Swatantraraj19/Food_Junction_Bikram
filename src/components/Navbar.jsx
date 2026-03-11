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
                        <a href="#home" className="flex items-center">
                            <img 
                                src="/FJ_logo.png" 
                                alt="Food Junction Logo" 
                                className="h-14 md:h-16 w-auto object-contain transition-transform duration-300 hover:scale-105" 
                            />
                        </a>
                    </div>

                    {/* Desktop Navigation Links */}
                    <div className="hidden md:flex space-x-8 items-center">
                        <ul className="flex space-x-8">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className={`font-medium transition-colors duration-200 ${scrolled ? 'text-gray-700 hover:text-brand-primary' : 'text-white hover:text-brand-secondary'}`}
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        
                        {/* Call to Action & Cart (Desktop) */}
                        <div className="flex items-center space-x-4">
                            <a href="#menu" className="bg-brand-primary text-white px-5 py-2 rounded-full hover:bg-red-600 transition-colors font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                                Order Now
                            </a>
                        
                            {/* Shopping Cart Icon (Desktop) */}
                            <button 
                                onClick={toggleCart} 
                                aria-label="Open Shopping Cart"
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
                    </div>

                    {/* Mobile Menu Button & Cart Icon */}
                    <div className="md:hidden flex items-center space-x-4">
                        {/* Shopping Cart Icon (Mobile) */}
                        <button 
                            onClick={toggleCart} 
                            aria-label="Open Shopping Cart"
                            className={`relative p-2 rounded-full transition-colors ${scrolled ? 'text-gray-700 hover:text-brand-primary' : 'text-white hover:text-brand-secondary'}`}
                        >
                            <ShoppingCart size={24} />
                            {cartCount > 0 && (
                                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-red-600 rounded-full">
                                    {cartCount}
                                </span>
                            )}
                        </button>
                        <button 
                            onClick={() => setIsOpen(!isOpen)} 
                            aria-label={isOpen ? "Close Menu" : "Open Menu"}
                            aria-expanded={isOpen}
                            className={`${scrolled ? 'text-gray-800' : 'text-white'} p-1`}
                        >
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
                    className="md:hidden absolute w-full left-0 top-full bg-white/95 backdrop-blur-md shadow-2xl border-t border-gray-100"
                >
                    <div className="px-6 pt-4 pb-8">
                        <ul className="flex flex-col">
                            {navLinks.map((link, index) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className={`block py-4 text-base font-semibold tracking-wide text-gray-800 hover:text-brand-primary transition-colors ${index !== navLinks.length - 1 ? 'border-b border-gray-100' : ''}`}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-6">
                            <a 
                                href="#menu" 
                                className="flex justify-center w-full px-4 py-3 text-base font-bold tracking-wider text-white uppercase transition bg-brand-primary hover:bg-red-600 rounded-xl shadow-lg shadow-red-500/30"
                                onClick={() => setIsOpen(false)}
                            >
                                Order Now
                            </a>
                        </div>
                    </div>
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;
