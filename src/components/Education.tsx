import { portfolioData } from '@/data/portfolio';

export function Education() {
  return (
    <section id="education" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 gradient-text">Education & Certifications</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {portfolioData.education.map((edu, index) => (
            <div
              key={index}
              className="glass-effect p-6 rounded-lg hover-scale border-t border-blue-500"
            >
              <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
              <p className="text-blue-400 font-semibold mb-2">{edu.institution}</p>
              <div className="text-gray-400 text-sm space-y-1">
                <p>{edu.duration}</p>
                {edu.cgpa && <p className="text-blue-300">CGPA: {edu.cgpa}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
