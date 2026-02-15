const Hero = () => {
    return (
        <section id='hero' className="min-h-screen bg-white flex items-center">
            <div className="w-full px-6 md:px-16">

                {/* BIG TITLE */}
                <div className="relative">
                    <h1 className="font-extrabold text-[6vw] leading-[0.9] tracking-tight text-black">
                        Intelligent System Engineer
                    </h1>

                    {/* LOCATION */}
                    <span className="absolute right-0 bottom-6 text-xs tracking-widest text-gray-500 uppercase">
                        B a s e d   i n   E g y p t
                    </span>
                </div>

                {/* CONTENT GRID */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12 items-center">

                    {/* LEFT TEXT */}
                    <div className="space-y-2 text-sm tracking-wide uppercase text-black">
                        <p>/ Machine Learning Engineer</p>
                        <p>/ Deep Learning Engineer</p>
                        <p>/ Computer Vision Engineer</p>
                        <p>/ Data Scientist</p>
                        <p>/ Front-End Developer</p>
                    </div>

                    {/* IMAGE */}
                    <div className="flex justify-center">
                        <div className="w-72 h-96 overflow-hidden grayscale">
                            <img
                                src="/WhatsApp Image 2026-02-15 at 7.30.18 PM.jpeg"
                                alt="profile"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* DESCRIPTION */}
                    <div className="text-xs tracking-widest uppercase text-gray-600 leading-relaxed">
                        I’m an Intelligent Systems Engineer specialized in<br />
                        Machine Learning, Artificial Intelligence, and<br />
                        Data Science, building real-world AI solutions.
                    </div>

                </div>

            </div>
        </section>

    );
};
export default Hero;