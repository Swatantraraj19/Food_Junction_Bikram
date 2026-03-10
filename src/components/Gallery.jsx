const Gallery = () => {
    const images = [
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=600",
    ];

    return (
        <section id="gallery" className="section-padding bg-white">
            <div className="text-center mb-12">
                <span className="text-brand-primary font-bold tracking-wider uppercase text-sm mb-2 block">Gallery</span>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark mb-4">
                    Glimpses of Food Junction
                </h2>
                <div className="w-20 h-1 bg-brand-primary mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {images.map((img, idx) => (
                    <div key={idx} className="relative overflow-hidden rounded-2xl group h-64 md:h-80 cursor-pointer shadow-md hover:shadow-xl transition-shadow">
                        <img src={img} alt="Gallery" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                            <span className="text-white font-bold tracking-widest border-2 border-white px-6 py-2 uppercase text-sm hover:bg-white hover:text-black transition-colors">View</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
export default Gallery;
