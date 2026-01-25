import { useState } from 'react';
import { portfolioData } from '../data/portfolio';

export function Contact() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const contactItems = [
    { id: 'email', icon: '📧', label: 'Email', value: portfolioData.email, href: `mailto:${portfolioData.email}` },
    { id: 'phone', icon: '📞', label: 'Phone', value: portfolioData.phone, href: `tel:${portfolioData.phone}` },
    { id: 'website', icon: '🌐', label: 'Website', value: portfolioData.website, href: `https://${portfolioData.website}`, external: true },
    { id: 'location', icon: '📍', label: 'Location', value: portfolioData.location }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 gradient-text text-center">Get In Touch</h2>
        
        <div className="max-w-2xl mx-auto">
          <div className="glass-effect p-8 rounded-lg">
            <div className="space-y-6">
              {contactItems.map((item) => (
                item.id === 'location' ? (
                  <div
                    key={item.id}
                    className="flex items-center gap-4 p-4 rounded-lg contact-item-static"
                  >
                    <div className="text-2xl">{item.icon}</div>
                    <div>
                      <p className="text-gray-400 text-sm">{item.label}</p>
                      <p className="text-white font-semibold">
                        {item.value}
                      </p>
                    </div>
                  </div>
                ) : (
                  <a
                    key={item.id}
                    href={item.href}
                    {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="flex items-center gap-4 p-4 rounded-lg hover:bg-blue-900 hover:bg-opacity-30 transition-all group contact-item"
                    onMouseEnter={() => setHoveredItem(item.id)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <div className={`text-2xl transition-transform ${hoveredItem === item.id ? 'scale-110' : ''}`}>
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{item.label}</p>
                      <p className="text-white font-semibold group-hover:text-blue-400 transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </a>
                )
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-8 pt-8 border-t border-gray-700">
              <p className="text-gray-400 text-sm mb-4">Connect with me</p>
              <div className="flex gap-4 flex-wrap">
                <a
                  href={`mailto:${portfolioData.email}`}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  Send Email
                </a>
                <a
                  href={`https://${portfolioData.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-blue-400 text-blue-400 hover:bg-blue-900 hover:bg-opacity-30 rounded-lg transition-all duration-300 hover:scale-105"
                >
                  Visit Website
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
