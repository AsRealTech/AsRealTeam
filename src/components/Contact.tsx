import { portfolioData } from '../data/portfolio';

export function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 gradient-text text-center">Get In Touch</h2>
        
        <div className="max-w-2xl mx-auto">
          <div className="glass-effect p-8 rounded-lg">
            <div className="space-y-6">
              {/* Email */}
              <a
                href={`mailto:${portfolioData.email}`}
                className="flex items-center gap-4 p-4 rounded-lg hover:bg-blue-900 hover:bg-opacity-30 transition-colors group"
              >
                <div className="text-2xl">📧</div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <p className="text-white font-semibold group-hover:text-blue-400">
                    {portfolioData.email}
                  </p>
                </div>
              </a>

              {/* Phone */}
              <a
                href={`tel:${portfolioData.phone}`}
                className="flex items-center gap-4 p-4 rounded-lg hover:bg-blue-900 hover:bg-opacity-30 transition-colors group"
              >
                <div className="text-2xl">📞</div>
                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <p className="text-white font-semibold group-hover:text-blue-400">
                    {portfolioData.phone}
                  </p>
                </div>
              </a>

              {/* Website */}
              <a
                href={`https://${portfolioData.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-lg hover:bg-blue-900 hover:bg-opacity-30 transition-colors group"
              >
                <div className="text-2xl">🌐</div>
                <div>
                  <p className="text-gray-400 text-sm">Website</p>
                  <p className="text-white font-semibold group-hover:text-blue-400">
                    {portfolioData.website}
                  </p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4 p-4 rounded-lg">
                <div className="text-2xl">📍</div>
                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p className="text-white font-semibold">
                    {portfolioData.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8 pt-8 border-t border-gray-700">
              <p className="text-gray-400 text-sm mb-4">Connect with me</p>
              <div className="flex gap-4">
                <a
                  href={`mailto:${portfolioData.email}`}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                >
                  Send Email
                </a>
                <a
                  href={`https://${portfolioData.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-blue-400 text-blue-400 hover:bg-blue-900 hover:bg-opacity-30 rounded-lg transition-colors"
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
