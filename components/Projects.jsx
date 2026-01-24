import Icons from "./Icons";
const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "Heart Disease Prediction",
            description: "Classification model to predict heart disease risks from patient data.",
            githubUrl: "https://github.com/abdelrhman744/Heart-diseasePrediction",
            imageUrl: "/hd.jpg",
        },
        {
            id: 2,
            title: "Bank Churn Model",
            description: "Predictive model to identify customers likely to churn.",
            githubUrl: "https://github.com/abdelrhman744/Bank-churn-Model",
            imageUrl: "/bank.jpg",
        },
        {
            id: 3,
            title: "Stroke Detection with Deployment",
            description: "Built and deployed a stroke detection model with a web interface.",
            githubUrl: "https://github.com/abdelrhman744/Stroke-Detection",
            imageUrl: "/stroke.jpg",
        },
        {
            id: 4,
            title: "Electronics E-Commerce Website",
            description: "Responsive electronics store built with modern web technologies.",
            githubUrl: "https://github.com/abdelrhman744/Electronics-WebSite",
            imageUrl: "/e-commerce.jpg",
        },
        {
            id: 5,
            title: "Steganography & Speaker Verification",
            description: "Secure audio transmission using steganography and speaker verification.",
            githubUrl: "https://github.com/abdelrhman744/steganography-speaker-verification",
            imageUrl: "/s.jpg",
        },
        {
            id: 6,
            title: "Mimi Foods Website",
            description: "Restaurant website with menu showcase and online ordering.",
            githubUrl: "https://github.com/abdelrhman744/Mimi-Foods",
            imageUrl: "/mimi.jpg",
        },
        {
            id: 7,
            title: "Flood Segmentation Model",
            description:
                "Deep learning segmentation model using U-Net with EfficientNetB3 for flood detection.",
            githubUrl: "https://github.com/abdelrhman744/Flood-Segmentation",
            imageUrl: "/Flooding.jpg",
        },
    ];

    return (
        <section id="works" className="py-24 bg-gray-50">
            <div className="container mx-auto px-4">
                {/* Title */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-black mb-3">PROJECTS</h2>
                    <p className="text-gray-500">Some of the work I’ve built recently</p>
                    <div className="w-16 h-1 bg-black mx-auto mt-4"></div>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
                        >
                            {/* Image Placeholder */}
                            <div className="h-44 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center text-gray-500 text-sm">
                                <img
                                    src={project.imageUrl}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-black mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 text-sm mb-5">
                                    {project.description}
                                </p>

                                {/* GitHub Button */}
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-sm text-black font-medium border border-black px-4 py-2 rounded-full 
                                hover:bg-black hover:text-white transition"
                                >
                                    <Icons.Github className="w-4 h-4" />
                                    View on GitHub
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Projects;