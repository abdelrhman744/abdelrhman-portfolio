"use client";

import React, { useState } from 'react';
import Icons from "./Icons";
import Button from "./Button";
const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitSuccess(true);
            setFormData({ name: '', email: '', message: '' });
            // Reset success message after 5 seconds
            setTimeout(() => setSubmitSuccess(false), 5000);
        }, 1000);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section id="connect" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">CONNECT</h2>
                    <div className="w-20 h-1 bg-black mx-auto"></div>
                </div>
                <div className="max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-2xl font-bold text-black mb-6">GET IN TOUCH</h3>
                            <p className="text-lg text-gray-700 mb-8">
                                Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <Icons.Mail className="w-6 h-6 text-black" />
                                    <a
                                        href="mailto:abdelrhmanhany912@gmail.com"
                                        className="text-gray-700 hover:text-black transition inline-flex items-center gap-1"
                                    >
                                        abdelrhmanhany912@gmail.com <span>↗</span>
                                    </a>
                                </div>

                                <div className="flex items-center gap-4">
                                    <Icons.Linkedin className="w-6 h-6 text-black" />
                                    <a
                                        href="https://www.linkedin.com/in/abdelrhman-hany74"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-700 hover:text-black transition inline-flex items-center gap-1"
                                    >
                                        Linkedin <span>↗</span>
                                    </a>
                                </div>

                                <div className="flex items-center gap-4">
                                    <Icons.Github className="w-6 h-6 text-black" />
                                    <a
                                        href="https://github.com/abdelrhman744"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-700 hover:text-black transition inline-flex items-center gap-1"
                                    >
                                        Github <span>↗</span>
                                    </a>
                                </div>

                                <div className="flex items-center gap-4">
                                    <Icons.Download className="w-6 h-6 text-black" />
                                    <a
                                        href="/Abdelrhman Hany.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-700 hover:text-black transition inline-flex items-center gap-1"
                                    >
                                        Download CV <span>↗</span>
                                    </a>
                                </div>

                                <div className="flex items-center gap-4">
                                    <Icons.Phone />
                                    <a
                                        href="tel:+201555445760"
                                        className="text-gray-700 hover:text-black transition"
                                    >
                                        +20 15 554 45 760
                                    </a>
                                </div>

                            </div>
                        </div>
                        <div>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm-custom font-medium text-gray-700 mb-1">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-black focus:border-transparent"
                                        placeholder="Your name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm-custom font-medium text-gray-700 mb-1">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-black focus:border-transparent"
                                        placeholder="your.email@example.com"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm-custom font-medium text-gray-700 mb-1">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="4"
                                        className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-black focus:border-transparent"
                                        placeholder="Your message"
                                    />
                                </div>
                                <Button
                                    type="submit"
                                    variant="primary"
                                    size="lg"
                                    icon={<Icons.Send />}
                                    disabled={isSubmitting}
                                    className="w-full"
                                >
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </Button>
                                {submitSuccess && (
                                    <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-lg">
                                        Message sent successfully! Ill get back to you soon.
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Contact;