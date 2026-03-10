import { Calendar, PartyPopper } from 'lucide-react';

const Opening = () => {
    return (
        <section className="bg-gradient-to-r from-brand-primary to-orange-500 py-16 text-white overflow-hidden relative shadow-inner">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-repeat" style={{ backgroundImage: 'radial-gradient(circle, white 2px, transparent 2.5px)', backgroundSize: '20px 20px' }}></div>

            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between relative z-10 gap-8 text-center md:text-left">
                <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
                    <div className="bg-white text-brand-primary p-6 rounded-full shadow-lg transform hover:rotate-12 transition-transform duration-300">
                        <PartyPopper size={48} className="" />
                    </div>
                    <div>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-2 leading-tight">Special Offer</h2>
                        <p className="text-white/90 text-xl font-medium">Delicious taste at the best price!</p>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center bg-white/10 backdrop-blur-md px-10 py-6 rounded-2xl border border-white/20 shadow-2xl skew-x-[-10deg] transform hover:skew-x-0 transition-transform cursor-default">
                    <div className="skew-x-[10deg] flex items-center space-x-4">
                        <Calendar size={32} className="text-yellow-300" />
                        <span className="text-3xl lg:text-4xl font-bold font-mono tracking-widest text-shadow">Till 15 FEB 2026</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Opening;
