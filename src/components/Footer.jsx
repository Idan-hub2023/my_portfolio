import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  Phone, 
  MapPin, 
  Heart, 
  ArrowUp,
  Code,
  Coffee
} from 'lucide-react';
import { motion } from 'framer-motion';

function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' }
    ];

    const services = [
        { name: 'Web Development', href: '#web-dev' },
        { name: 'Backend Development', href: '#mobile' },
        { name: 'UI/UX Design', href: '#design' },
    ];

    const socialLinks = [
        { icon: Github, href: '#', label: 'GitHub', color: 'hover:text-gray-200' },
        { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:text-blue-400' },
        { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:text-sky-400' },
        { icon: Mail, href: '#', label: 'Email', color: 'hover:text-red-400' }
    ];

    return (
        <footer className="relative bg-gray-700 text-white overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 opacity-10">
                <motion.div 
                    initial={{ x: -100, y: -100 }}
                    animate={{ x: 0, y: 0 }}
                    transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
                    className="absolute top-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
                ></motion.div>
                <motion.div 
                    initial={{ x: 100, y: 100 }}
                    animate={{ x: 0, y: 0 }}
                    transition={{ duration: 25, repeat: Infinity, repeatType: "reverse" }}
                    className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"
                ></motion.div>
            </div>

            <div className="relative z-10">
                {/* Main Footer Content */}
                <div className="max-w-7xl mx-auto px-6 py-16 sm:px-8">
                    <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10">
                        
                        {/* Brand Section */}
                        <div className="lg:col-span-1 space-y-6">
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                <div className="flex items-center space-x-3 mb-4">
                                    <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-md">
                                        <Code className="text-white" size={20} />
                                    </div>
                                    <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                                        Daniel Irahoza
                                    </h3>
                                </div>
                                <p className="text-gray-400 leading-relaxed">
                                    Crafting exceptional digital experiences with modern technologies and user-centered design.
                                </p>
                            </motion.div>
                            
                            {/* Contact Info */}
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                viewport={{ once: true }}
                                className="space-y-3"
                            >
                                <a href="mailto:hello@daniel.dev" className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors group">
                                    <Mail size={16} className="group-hover:text-blue-400 transition-colors" />
                                    <span className="text-sm">irahozadaniel9@gmail.com</span>
                                </a>
                                <a href="tel:+1234567890" className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors group">
                                    <Phone size={16} className="group-hover:text-green-400 transition-colors" />
                                    <span className="text-sm">+250 790088831</span>
                                </a>
                                <div className="flex items-center space-x-3 text-gray-400 group">
                                    <MapPin size={16} className="group-hover:text-red-400 transition-colors" />
                                    <span className="text-sm">Musanze, Rwanda</span>
                                </div>
                            </motion.div>
                        </div>

                        {/* Quick Links */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <h4 className="text-lg font-semibold text-white">Navigation</h4>
                            <ul className="space-y-3">
                                {quickLinks.map((link) => (
                                    <li key={link.name}>
                                        <motion.a 
                                            href={link.href}
                                            whileHover={{ x: 5 }}
                                            className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center space-x-2 group"
                                        >
                                            <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                            <span>{link.name}</span>
                                        </motion.a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Services */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <h4 className="text-lg font-semibold text-white">Services</h4>
                            <ul className="space-y-3">
                                {services.map((service) => (
                                    <li key={service.name}>
                                        <motion.a 
                                            href={service.href}
                                            whileHover={{ x: 5 }}
                                            className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center space-x-2 group"
                                        >
                                            <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                            <span>{service.name}</span>
                                        </motion.a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Newsletter & Social */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <h4 className="text-lg font-semibold text-white">Connect</h4>
                            
                            {/* Newsletter */}
                            <div className="space-y-4">
                                <p className="text-gray-400 text-sm">
                                    Subscribe for updates on my latest projects and articles.
                                </p>
                                <div className="flex">
                                    <input 
                                        type="email" 
                                        placeholder="Your email address"
                                        className="flex-1 bg-gray-800 border border-gray-700 rounded-l-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 transition-colors placeholder-gray-500"
                                    />
                                    <motion.button 
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-3 rounded-r-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center"
                                    >
                                        <Mail size={16} />
                                    </motion.button>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div>
                                <p className="text-sm text-gray-400 mb-4">Follow me</p>
                                <div className="flex space-x-3">
                                    {socialLinks.map((social) => {
                                        const Icon = social.icon;
                                        return (
                                            <motion.a
                                                key={social.label}
                                                href={social.href}
                                                whileHover={{ y: -3 }}
                                                whileTap={{ scale: 0.9 }}
                                                className={`w-10 h-10 bg-gray-800/50 backdrop-blur-sm rounded-lg flex items-center justify-center text-gray-300 ${social.color} transition-all duration-300 border border-gray-700 hover:border-blue-400/30`}
                                                aria-label={social.label}
                                            >
                                                <Icon size={18} />
                                            </motion.a>
                                        );
                                    })}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800/50">
                    <div className="max-w-7xl mx-auto px-6 py-6 sm:px-8">
                        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                            
                            {/* Copyright */}
                            <motion.div 
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                                className="flex items-center space-x-2 text-gray-400 text-sm"
                            >
                                <span>© {currentYear} Daniel Irahoza. Crafted with</span>
                                <Heart size={14} className="text-red-500 animate-pulse" />
                                <span>and</span>
                                <Coffee size={14} className="text-amber-500" />
                            </motion.div>

                            {/* Back to Top */}
                            <motion.button
                                onClick={scrollToTop}
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300 group"
                            >
                                <span className="text-sm">Back to top</span>
                                <ArrowUp size={16} className="group-hover:-translate-y-0.5 transition-transform" />
                            </motion.button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Floating Scroll to Top Button */}
            <motion.button
                onClick={scrollToTop}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 z-50 flex items-center justify-center backdrop-blur-sm"
                aria-label="Scroll to top"
            >
                <ArrowUp size={20} />
            </motion.button>
        </footer>
    );
}

export default Footer;