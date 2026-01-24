const Skills = () => {
    const skills = {
        "ML Frameworks": [
            "TensorFlow",
            "Scikit-learn",
            "Computer Vision",
            "Data Preprocessing",
            "Feature Engineering",
        ],
        "Tools": [
            "MySQL",
            "Git",
            "GitHub",
            "Linux",
            "Jupyter Notebooks",
            "Adobe Photoshop",
            "Adobe Illustrator",
        ],
        "Web": [
            "React",
            "Next.js",
            "HTML",
            "CSS",
            "JavaScript",
            "UI/UX Principles",
        ],
        "Programming": [
            "Python (Advanced)",
            "C++",
            "Java",
        ],
    };

    return (
        <section id="services" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-black mb-16 text-center tracking-tight">
                    SKILLS
                </h2>

                <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {Object.entries(skills).map(([category, items]) => (
                        <div
                            key={category}
                            className="bg-white rounded-xl text-black shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border-2 border-black hover:bg-black hover:text-white group hover:-translate-y-1"
                        >
                            <h3 className="text-2xl font-bold mb-6 pb-3 border-b-2 border-black group-hover:border-white">{category}</h3>
                            <ul className="space-y-3">
                                {items.map((item, index) => (
                                    <li
                                        key={item}
                                        className="flex items-center transition-colors duration-200"
                                        style={{ animationDelay: `${index * 50}ms` }}
                                    >
                                        <span className="w-2 h-2 bg-black group-hover:bg-white rounded-full mr-3 flex-shrink-0"></span>
                                        <span className="font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Skills;