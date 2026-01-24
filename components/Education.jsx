const Education = () => {
    return (
        <section className="py-24 bg-black text-white">
            <div className="container mx-auto px-4 max-w-4xl">

                {/* Title */}
                <h2 className="text-4xl font-bold mb-12 text-center tracking-widest">
                    EDUCATION
                </h2>

                {/* Content */}
                <div className="space-y-4 text-gray-300">
                    <h3 className="text-xl font-bold text-white">
                        Helwan National University
                    </h3>

                    <p className="italic text-gray-400">2022 – 2027</p>

                    <p className="font-medium text-gray-200">
                        Bachelor of Intelligent Systems Engineering
                    </p>

                    <ul className="list-disc pl-5 space-y-2">
                        <li>Specializing in Machine Learning, Artificial Intelligence, and Data Science</li>
                        <li>Studying Computer Vision, Neural Networks, and Deep Learning</li>
                        <li>Gaining expertise in Embedded Systems and Robotics</li>
                        <li>Strong foundation in Mathematical Modeling and Algorithms</li>
                    </ul>
                </div>

            </div>
        </section>
    );
};
export default Education;