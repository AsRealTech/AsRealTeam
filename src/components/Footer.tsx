import { portfolioData } from "../data/portfolio";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="row footer">
      <div className="col">
        <div className="">
          <div className="text-gray-400 text-sm">
            <p>&copy; {currentYear} {portfolioData.companyName}. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
