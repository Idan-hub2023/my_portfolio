import React, { useState, useEffect } from 'react';
import { Code, Coffee, Zap, Heart, Github, Linkedin, Mail, ArrowRight } from 'lucide-react';

function About() {
    const [isVisible, setIsVisible] = useState(false);
    const [activeSkill, setActiveSkill] = useState(0);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const skills = [
        { name: 'Frontend Development', level: 90, icon: Code },
        { name: 'Backend Development', level: 85, icon: Zap },
        { name: 'UI/UX Design', level: 80, icon: Heart },
        { name: 'Problem Solving', level: 95, icon: Coffee }
    ];

    const technologies = [
        'React', 'Node.js', 'MongoDB','Mysql','Express', 'Git','Vue.js','Html   & Css', 'Tailwind CSS', 'Next.js'
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
            {/* Hero Section */}
            <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
                
                <div className="max-w-6xl mx-auto px-6 py-20">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        
                        {/* Image Section */}
                        <div className={`relative transform transition-all duration-1000 ${
                            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
                        }`}>
                            <div className="relative">
                                {/* Background decorative elements */}
                                <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl opacity-20 animate-pulse"></div>
                                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full opacity-10 animate-bounce"></div>
                                
                                {/* Main image container */}
                                <div className="relative bg-white p-8 rounded-3xl shadow-2xl border border-gray-100">
                                    <div className="w-48 h-48 mx-auto bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center overflow-hidden group">
                                        <img 
                                            src="/vite.svg" 
                                            alt="Profile" 
                                            className="w-24 h-24 object-contain transform group-hover:scale-110 transition-transform duration-300"
                                        />
                                    </div>
                                    
                                    {/* Floating stats */}
                                    <div className="absolute -top-6 right-8 bg-white rounded-xl shadow-lg p-3 border border-gray-100">
                                        <div className="flex items-center space-x-2 text-sm">
                                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                            <span className="text-gray-600">Available for work</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Content Section */}
                        <div className={`transform transition-all duration-1000 delay-300 ${
                            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
                        }`}>
                            <div className="space-y-6">
                                {/* Badge */}
                                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-full px-4 py-2">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                                    <span className="text-sm font-medium text-blue-700">Software Developer</span>
                                </div>

                                {/* Main heading */}
                                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                                    I'm Software Developer & Ux/Ui Design 
                                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
                                        Software Developer
                                    </span>
                                </h1>

                                {/* Description */}
                                <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                                    Passionate about creating digital experiences that combine beautiful design 
                                    with powerful functionality. I turn ideas into reality through clean, 
                                    efficient code.
                                </p>

                                {/* Stats */}
                                <div className="grid grid-cols-3 gap-6 py-6">
                                    <div className="text-center">
                                        <div className="text-3xl font-bold text-gray-900">2+</div>
                                        <div className="text-sm text-gray-600">Years Experience</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-3xl font-bold text-gray-900">10+</div>
                                        <div className="text-sm text-gray-600">Projects Completed</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-3xl font-bold text-gray-900">100%</div>
                                        <div className="text-sm text-gray-600">Client Satisfaction</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Skills Section */}
            <div className="max-w-6xl mx-auto px-6 py-20">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-indigo-600 mb-4">Skills & Expertise</h2>
                    <p className="text-xl text-gray-900 max-w-2xl mx-auto">
                        Here are some of the technologies and skills I work with to bring projects to life
                    </p>
                </div>

                {/* Skills Grid */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    {skills.map((skill, index) => {
                        const Icon = skill.icon;
                        return (
                            <div
                                key={skill.name}
                                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 cursor-pointer"
                                onMouseEnter={() => setActiveSkill(index)}
                            >
                                <div className="flex items-center space-x-4 mb-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center">
                                        <Icon className="text-blue-600" size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">{skill.name}</h3>
                                        <p className="text-sm text-gray-600">{skill.level}% Proficiency</p>
                                    </div>
                                </div>
                                
                                {/* Progress bar */}
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div 
                                        className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                                        style={{ 
                                            width: activeSkill === index ? `${skill.level}%` : '0%'
                                        }}
                                    ></div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Technologies */}
                <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Technologies I Work With</h3>
                    <div className="flex flex-wrap justify-center gap-3">
                        {technologies.map((tech, index) => (
                            <span
                                key={tech}
                                className="bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 cursor-pointer"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Contact Section */}
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
                <div className="max-w-6xl mx-auto px-6 py-16">
                    <div className="text-center">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">Let's Work Together</h2>
                        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                            Have a project in mind? I'd love to hear about it and see how we can bring your ideas to life.
                        </p>
                        
                        {/* Social Links */}
                        <div className="flex justify-center space-x-6 mb-8">
                            {[
                                { icon: Github, href: '#', label: 'GitHub' },
                                { icon: Linkedin, href: '#', label: 'LinkedIn' },
                                { icon: Mail, href: '#', label: 'Email' }
                            ].map((social) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center hover:bg-white/20 transition-all duration-300 group"
                                    >
                                        <Icon size={20} className="group-hover:scale-110 transition-transform" />
                                    </a>
                                );
                            })}
                        </div>

                        <button className="bg-white text-gray-900 px-8 py-4 rounded-2xl font-medium hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-0.5">
                            Get In Touch
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;