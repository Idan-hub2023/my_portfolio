import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiFilter } from 'react-icons/fi';
import { FaReact, FaNodeJs, FaFigma, FaMobileAlt } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiGraphql } from 'react-icons/si';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'Full-featured online store with cart, checkout, and admin dashboard.',
      tags: ['web', 'react', 'node'],
      imgUrl: '/project1.jpg',
      codeLink: '#',
      projectLink: '#',
      tech: [<FaReact />, <SiTypescript />, <FaNodeJs />]
    },
    {
      id: 2,
      title: 'Mobile Fitness App',
      description: 'Workout tracking application with progress analytics and social features.',
      tags: ['mobile', 'react'],
      imgUrl: '/project2.jpg',
      codeLink: '#',
      projectLink: '#',
      tech: [<FaReact />, <FaMobileAlt />]
    },
    {
      id: 3,
      title: 'UI Design System',
      description: 'Comprehensive design system with reusable components and documentation.',
      tags: ['design', 'ui/ux'],
      imgUrl: '/project3.jpg',
      codeLink: '#',
      projectLink: '#',
      tech: [<FaFigma />, <SiTailwindcss />]
    },
    {
      id: 4,
      title: 'API Dashboard',
      description: 'Monitoring interface for REST and GraphQL APIs with analytics.',
      tags: ['web', 'node'],
      imgUrl: '/project4.jpg',
      codeLink: '#',
      projectLink: '#',
      tech: [<FaNodeJs />, <SiGraphql />]
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'Modern responsive portfolio with dark mode and animations.',
      tags: ['web', 'react'],
      imgUrl: '/project5.jpg',
      codeLink: '#',
      projectLink: '#',
      tech: [<FaReact />, <SiTailwindcss />]
    },
    {
      id: 6,
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for tracking engagement across platforms.',
      tags: ['web', 'ui/ux'],
      imgUrl: '/project6.jpg',
      codeLink: '#',
      projectLink: '#',
      tech: [<FaReact />, <FaFigma />]
    },
  ];

  const filters = [
    { name: 'all', label: 'All Projects' },
    { name: 'web', label: 'Web Development' },
    { name: 'mobile', label: 'Mobile Apps' },
    { name: 'design', label: 'UI/UX Design' },
    { name: 'react', label: 'React Projects' },
    { name: 'node', label: 'Node.js Projects' },
  ];

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);
    }, 500);
  };

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.tags.includes(activeFilter));

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">My Projects</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore my portfolio of recent work. Each project represents unique challenges and creative solutions.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter.name}
              onClick={() => handleFilterClick(filter.name)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center ${
                activeFilter === filter.name
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'
              }`}
            >
              {filter.name === 'all' && <FiFilter className="mr-2" />}
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          animate={animateCard}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 bg-gray-200 overflow-hidden">
                <img
                  src={project.imgUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                  <div className="flex space-x-2 text-gray-500">
                    {project.tech.map((Icon, i) => (
                      <span key={i} className="text-lg">{Icon}</span>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex justify-between items-center">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-3">
                    <a
                      href={project.codeLink}
                      className="text-gray-500 hover:text-gray-900 transition-colors"
                      aria-label="View code"
                    >
                      <FiGithub size={20} />
                    </a>
                    <a
                      href={project.projectLink}
                      className="text-gray-500 hover:text-blue-600 transition-colors"
                      aria-label="View project"
                    >
                      <FiExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <h3 className="text-xl font-medium text-gray-700 mb-2">
              No projects found in this category
            </h3>
            <p className="text-gray-500">
              Try selecting a different filter or check back later for new additions.
            </p>
          </motion.div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Have a project in mind?
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            I'm always interested in hearing about new projects and opportunities.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-md"
          >
            Let's Talk
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;