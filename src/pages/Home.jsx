import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import About from './About';
const Home = () => {
  const socialLinks = [
    { name: 'Facebook', icon: <FaFacebook />, url: 'https://facebook.com' },
    { name: 'Instagram', icon: <FaInstagram />, url: 'https://instagram.com' },
    { name: 'GitHub', icon: <FaGithub />, url: 'https://github.com' },
    { name: 'LinkedIn', icon: <FaLinkedin />, url: 'https://linkedin.com' }
  ];

  return (
    <>
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
            I'm <span className="text-blue-600">Irahoza Daniel</span>
          </h1>
          
          <div className="text-2xl sm:text-3xl font-semibold text-gray-700 h-12">
            <TypeAnimation
              sequence={[
                'Software Developer',
                2000,
                'UX/UI Designer',
                2000,
                'Backend Developer',
                2000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>
          
          <p className="text-lg text-gray-600 leading-relaxed">
            Full-Stack Developer & UI/UX Designer — I build modern web apps using 
            React, Node.js, and Tailwind CSS, combining clean code with intuitive, 
            user-friendly design to create seamless digital experiences.
          </p>
          
          {/* Social Media Icons */}
          <div className="flex space-x-4 pt-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-2xl text-gray-700 hover:text-blue-600 transition-colors"
                aria-label={social.name}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-br from-blue-100 to-blue-300 overflow-hidden shadow-xl">
              <img 
                src="/dan.jpg" 
                alt="Irahoza Daniel" 
                className="rounded-full object-contain p-8"
              />
            </div>
            <div className="absolute -bottom-5 -right-5 bg-white px-4 py-2 rounded-full shadow-md">
              <span className="font-medium text-blue-600">Available for work</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
          <section>
       <About/>
         </section>
    </>
  );
};

export default Home;