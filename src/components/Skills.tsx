import { portfolioData } from '@/data/portfolio';

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 gradient-text">Technical Skills</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {portfolioData.skills.map((skillGroup) => (
            <div
              key={skillGroup.category}
              className="glass-effect p-6 rounded-lg hover-scale"
            >
              <h3 className="text-xl font-semibold text-blue-400 mb-4">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-blue-900 bg-opacity-50 text-blue-300 rounded-full text-sm hover:bg-blue-800 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
