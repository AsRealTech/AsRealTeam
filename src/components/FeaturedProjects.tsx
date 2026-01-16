import { portfolioData } from '../data/portfolio';

export function FeaturedProjects() {
  return (
    <section id="projects" className="py-20 bg-black bg-opacity-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 gradient-text">Featured Projects</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {portfolioData.featuredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-effect p-6 rounded-lg hover-scale group overflow-hidden border border-blue-500 border-opacity-20 hover:border-opacity-50 transition-all duration-300"
            >
              {/* Project Header */}
              <div className="mb-4">
                <div className="inline-block px-3 py-1 bg-blue-900 bg-opacity-50 text-blue-300 rounded-full text-xs font-semibold mb-3">
                  {project.category}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  {project.description}
                </p>
              </div>

              {/* Highlights */}
              <div className="mb-4">
                <p className="text-sm text-blue-400 font-semibold mb-2">Key Features:</p>
                <ul className="space-y-1">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="text-gray-400 text-sm flex gap-2">
                      <span className="text-blue-400">✓</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="mb-4">
                <p className="text-sm text-gray-400 font-semibold mb-2">Technologies:</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-900 bg-opacity-30 text-blue-300 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="pt-4 border-t border-gray-700 flex justify-between items-center">
                <span className="text-gray-400 text-sm">
                  <span className="text-blue-400 font-semibold">Role:</span> {project.role}
                </span>
                {project.link !== '#' && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded transition-colors"
                  >
                    View →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
