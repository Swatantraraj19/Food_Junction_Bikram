import { MapPin, Phone, Clock } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="section-padding bg-brand-light">
            <div className="grid lg:grid-cols-2 gap-0 bg-white rounded-3xl overflow-hidden shadow-2xl">
                {/* Info */}
                <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-brand-dark text-white">
                    <span className="text-brand-secondary font-bold tracking-wider uppercase text-sm mb-2 block">Visit Us</span>
                    <h2 className="text-3xl md:text-5xl font-serif font-bold mb-10">
                        Get in Touch
                    </h2>

                    <div className="space-y-10">
                        <div className="flex items-start space-x-6 group">
                            <div className="bg-white/10 p-4 rounded-full text-brand-secondary group-hover:bg-brand-primary group-hover:text-white transition-colors">
                                <MapPin size={28} />
                            </div>
                            <div>
                                <h4 className="font-bold text-xl mb-2">Our Location</h4>
                                <p className="text-gray-400 leading-relaxed text-lg">NH139, Near Khoraiytha Golambar,<br /> Bikram, Patna, Bihar 801104</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-6 group">
                            <div className="bg-white/10 p-4 rounded-full text-brand-secondary group-hover:bg-brand-primary group-hover:text-white transition-colors">
                                <Phone size={28} />
                            </div>
                            <div>
                                <h4 className="font-bold text-xl mb-2">Phone Number</h4>
                                <p className="text-gray-400 text-lg">+91 98765 43210</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-6 group">
                            <div className="bg-white/10 p-4 rounded-full text-brand-secondary group-hover:bg-brand-primary group-hover:text-white transition-colors">
                                <Clock size={28} />
                            </div>
                            <div>
                                <h4 className="font-bold text-xl mb-2">Opening Hours</h4>
                                <p className="text-gray-400 text-lg">Mon - Sun: 10:00 AM - 11:00 PM</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Map Placeholder */}
                <div className="bg-gray-200 h-96 lg:h-full min-h-[400px] relative">
                    <iframe
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        scrolling="no"
                        marginHeight="0"
                        marginWidth="0"
                        title="Food Junction Location"
                        src="https://maps.google.com/maps?q=Bikram,+Patna&t=&z=15&ie=UTF8&iwloc=&output=embed"
                        className="filter grayscale hover:grayscale-0 transition-all duration-500 w-full h-full"
                    ></iframe>
                    <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-lg shadow-md font-bold text-brand-dark text-sm">
                        Locate Us
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Contact;
