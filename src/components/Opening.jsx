import { PartyPopper, MessageCircle } from 'lucide-react';

const Opening = () => {
    // Use the officially provided WhatsApp number
    const whatsappNumber = "917091380430"; 
    const whatsappMessage = encodeURIComponent("Hi! I would like to book a party/table at Food Junction Bikram.");
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    return (
        <section id="opening" className="bg-gradient-to-r from-brand-primary to-orange-500 py-16 text-white overflow-hidden relative shadow-inner">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-repeat" style={{ backgroundImage: 'radial-gradient(circle, white 2px, transparent 2.5px)', backgroundSize: '20px 20px' }}></div>

            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between relative z-10 gap-8 text-center md:text-left">
                <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
                    <div className="bg-white text-brand-primary p-6 rounded-full shadow-lg transform hover:rotate-12 transition-transform duration-300">
                        <PartyPopper size={48} className="" />
                    </div>
                    <div>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-2 leading-tight">Book For Parties</h2>
                        <p className="text-white/90 text-xl font-medium">Celebrate your special moments with us!</p>
                    </div>
                </div>

                <a 
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center bg-white text-brand-dark hover:bg-gray-100 px-8 py-5 rounded-2xl shadow-2xl transition-all transform hover:scale-105 group border-4 border-white/20 bg-clip-padding"
                >
                    <div className="flex items-center space-x-4">
                        <MessageCircle size={36} className="text-[#25D366] group-hover:animate-pulse" />
                        <div className="flex flex-col text-left">
                            <span className="text-xl font-bold tracking-wide leading-tight mt-1">Book via WhatsApp</span>
                            <span className="text-base font-semibold text-gray-500">+91 7091380430</span>
                        </div>
                    </div>
                </a>
            </div>
        </section>
    )
}
export default Opening;
