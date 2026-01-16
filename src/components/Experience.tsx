import { portfolioData } from '@/data/portfolio';

export function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 gradient-text">Work Experience</h2>
        
        <div className="space-y-8">
          {portfolioData.experience.map((job, index) => (
            <div
              key={index}
              className="glass-effect p-8 rounded-lg border-l-4 border-blue-500 hover-scale"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white">{job.position}</h3>
                  <p className="text-blue-400 text-lg">{job.company}</p>
                </div>
                <span className="text-gray-400 text-sm mt-2 md:mt-0">{job.duration}</span>
              </div>
              
              <ul className="space-y-2 text-gray-300">
                {job.responsibilities.map((responsibility, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="text-blue-400">•</span>
                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
