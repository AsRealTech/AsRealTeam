export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="row footer">
      <div className="col">
        <div className="">
          <div className="text-gray-400 text-sm">
            <p>&copy; {currentYear} IGWECHIMA JOEL CHISOM. All rights reserved.</p>
          </div>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a
              href="#home"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              Back to Top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
