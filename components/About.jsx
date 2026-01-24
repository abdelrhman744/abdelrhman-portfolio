const About = () => {
    return (
        <section id="about-me" className="py-32 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-black opacity-5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gray-900 opacity-5 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-20">
                    <span className="text-sm tracking-widest uppercase text-gray-500 mb-4 block">Who I Am</span>
                    <h2 className="text-5xl md:text-6xl font-bold text-black mb-4">ABOUT ME</h2>
                    <div className="w-32 h-1 bg-black mx-auto"></div>
                </div>

                <div className="max-w-5xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-start">
                        {/* Left column - Main text */}
                        <div className="space-y-6">
                            <div className="border-l-4 border-black pl-6">
                                <p className="text-xl text-gray-900 font-medium leading-relaxed">
                                    I am a technology and electronics professional specializing in Machine Learning, Deep Learning,
                                    and Computer Vision, with a strong focus on applying AI to real-world systems.
                                </p>
                            </div>

                            <p className="text-lg text-gray-700 leading-relaxed">
                                I work on building and deploying intelligent models that analyze data, extract insights,
                                and enable automation across software and hardware-integrated environments.
                            </p>
                        </div>

                        {/* Right column - Additional info */}
                        <div className="space-y-6">
                            <p className="text-lg text-gray-700 leading-relaxed">
                                My experience includes developing AI-driven solutions for image analysis,
                                pattern recognition, and decision support, turning complex data into practical, scalable technologies.
                            </p>

                            <div className="bg-black text-white p-6 rounded-xl">
                                <p className="text-base leading-relaxed">
                                    I am passionate about innovation and continuously exploring how advanced AI techniques can create real impact in
                                    modern technological systems.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default About;