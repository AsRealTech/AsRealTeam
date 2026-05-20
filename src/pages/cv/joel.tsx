export default function JoelCV() {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 flex justify-center">
      <div className="w-full max-w-5xl bg-white shadow-2xl rounded-3xl overflow-hidden grid md:grid-cols-3">
        {/* Sidebar */}
        <aside className="bg-slate-900 text-white p-8 space-y-8">
          <div>
            <h1 className="text-3xl font-bold leading-tight">
              Joel Chisom
              <span className="block text-slate-300">Igwechima</span>
            </h1>
            <p className="mt-3 text-sm text-slate-300">
              Frontend & Full Stack Developer
            </p>
          </div>

          <section>
            <h2 className="text-lg font-semibold border-b border-slate-700 pb-2 mb-4">
              Contact
            </h2>
            <div className="space-y-3 text-sm text-slate-300">
              <p>📍 Awka, Nigeria</p>
              <p>📞 +2348131311159</p>
              <p>📞 +2348070447902</p>
              <p>✉️ joelchisom@gmail.com</p>
              <p className="break-all">
                🔗 linkedin.com/in/chisom-joel-igwechima-24391b2b8
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold border-b border-slate-700 pb-2 mb-4">
              Technical Skills
            </h2>
            <div className="space-y-3 text-sm text-slate-300">
              <div>
                <h3 className="font-medium text-white">Frontend</h3>
                <p>HTML5, CSS3, JavaScript, React.js, Tailwind CSS</p>
              </div>

              <div>
                <h3 className="font-medium text-white">Backend</h3>
                <p>Node.js, Express.js, REST APIs, PHP, Python</p>
              </div>

              <div>
                <h3 className="font-medium text-white">Tools</h3>
                <p>Git, GitHub, Postman, MySQL</p>
              </div>

              <div>
                <h3 className="font-medium text-white">Other</h3>
                <p>Networking, IT Support, Problem Solving</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold border-b border-slate-700 pb-2 mb-4">
              Certifications
            </h2>
            <ul className="space-y-2 text-sm text-slate-300 list-disc list-inside">
              <li>Responsive Web Design — freeCodeCamp</li>
              <li>JavaScript Algorithms & Data Structures</li>
              <li>Front End Development Libraries</li>
              <li>Back End Development & APIs</li>
            </ul>
          </section>
        </aside>

        {/* Main Content */}
        <main className="md:col-span-2 p-8 md:p-10 space-y-10">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Professional Summary
            </h2>
            <p className="text-gray-700 leading-7">
              Frontend and Full Stack Developer with practical experience
              building responsive web applications, REST APIs, and scalable
              user interfaces using React.js, Node.js, JavaScript, and modern
              frontend technologies. Passionate about creating high-performance
              digital solutions and improving user experience through clean,
              maintainable code.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Professional Experience
            </h2>

            <div className="space-y-8">
              <div>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800">
                      Full Stack Engineer Intern
                    </h3>
                    <p className="text-slate-600">3MTT Nigeria — Remote</p>
                  </div>
                  <span className="text-sm text-gray-500">
                    Aug 2025 – Dec 2025
                  </span>
                </div>

                <ul className="mt-4 list-disc list-inside text-gray-700 space-y-2 leading-7">
                  <li>
                    Built responsive web applications and backend APIs using
                    modern development tools.
                  </li>
                  <li>
                    Collaborated on software engineering projects and debugging
                    workflows.
                  </li>
                  <li>
                    Improved frontend responsiveness and application usability.
                  </li>
                </ul>
              </div>

              <div>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800">
                      Freelance Web Developer
                    </h3>
                    <p className="text-slate-600">AsRealTech — Remote</p>
                  </div>
                  <span className="text-sm text-gray-500">
                    Feb 2021 – Present
                  </span>
                </div>

                <ul className="mt-4 list-disc list-inside text-gray-700 space-y-2 leading-7">
                  <li>
                    Developed responsive websites and modern frontend interfaces.
                  </li>
                  <li>
                    Worked directly with clients to improve usability and
                    website performance.
                  </li>
                  <li>
                    Implemented mobile-first and user-focused design practices.
                  </li>
                </ul>
              </div>

              <div>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800">
                      Computer Specialist Intern
                    </h3>
                    <p className="text-slate-600">
                      Cisco Networking Academy
                    </p>
                  </div>
                  <span className="text-sm text-gray-500">
                    Feb 2019 – Apr 2019
                  </span>
                </div>

                <ul className="mt-4 list-disc list-inside text-gray-700 space-y-2 leading-7">
                  <li>
                    Assisted with networking support, troubleshooting, and
                    computer maintenance.
                  </li>
                  <li>
                    Gained practical IT support and networking experience.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Projects
            </h2>

            <div className="space-y-6">
              <div className="border border-gray-200 rounded-2xl p-5 hover:shadow-md transition">
                <h3 className="text-lg font-semibold text-slate-800">
                  Expense REST API
                </h3>
                <p className="text-sm text-slate-500 mt-1">
                  Node.js • Express.js • PostgreSQL
                </p>
                <p className="mt-3 text-gray-700 leading-7">
                  Developed a RESTful API for expense tracking with CRUD
                  operations, middleware support, and scalable backend
                  architecture.
                </p>
              </div>

              <div className="border border-gray-200 rounded-2xl p-5 hover:shadow-md transition">
                <h3 className="text-lg font-semibold text-slate-800">
                  LiveBase Chat Application
                </h3>
                <p className="text-sm text-slate-500 mt-1">
                  Node.js • Express.js • JavaScript
                </p>
                <p className="mt-3 text-gray-700 leading-7">
                  Built a real-time messaging application with user interaction
                  and communication features.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Education
            </h2>

            <div className="space-y-5">
              <div>
                <h3 className="text-lg font-semibold text-slate-800">
                  Higher National Diploma (HND)
                </h3>
                <p className="text-slate-600">
                  Federal Polytechnic Oko — Library & Information Science
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-800">
                  Ordinary National Diploma (OND)
                </h3>
                <p className="text-slate-600">
                  Akanu Ibiam Federal Polytechnic, Unwana
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}