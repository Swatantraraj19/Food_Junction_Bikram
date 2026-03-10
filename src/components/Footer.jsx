import { Facebook, Instagram, Twitter, Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white border-t border-gray-800 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="grid md:grid-cols-3 gap-12 mb-12">
                    <div>
                        <h2 className="text-2xl font-serif font-bold text-white mb-4">
                            Food Junction
                        </h2>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            A junction of taste where friends and family meet to enjoy the finest vegetarian, non-vegetarian, and fast food delights.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-brand-primary transition-colors">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-brand-primary transition-colors">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-brand-primary transition-colors">
                                <Twitter size={20} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-6 text-brand-secondary">Quick Links</h3>
                        <ul className="space-y-4">
                            <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                            <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                            <li><a href="#menu" className="text-gray-400 hover:text-white transition-colors">Menu</a></li>
                            <li><a href="#gallery" className="text-gray-400 hover:text-white transition-colors">Gallery</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-6 text-brand-secondary">Contact Info</h3>
                        <ul className="space-y-4 text-gray-400">
                            <li>NH139, Near Khoraiytha Golambar,<br /> Bikram, Patna, Bihar</li>
                            <li>+91 98765 43210</li>
                            <li>info@foodjunction.com</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm flex flex-col md:flex-row items-center justify-between">
                    <p>&copy; 2026 Food Junction. All rights reserved.</p>
                    <p className="flex items-center mt-2 md:mt-0">Made with <Heart size={16} className="text-brand-primary mx-1" fill="currentColor" /> in Patna</p>
                </div>
            </div>
        </footer>
    )
}
export default Footer;
