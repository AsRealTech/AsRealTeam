import { useState, useEffect } from 'react';
import { portfolioData } from "../data/portfolio";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'Learn More', href: '#projects' },
    // { label: 'Projects', href: '/projects' },
    { label: 'AS Application', href: '#experience' },
    { label: 'Contact Us', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`navbar navbar-expand-sm ${isScrolled ? 'navbar-scrolled' : ''}`}>
        <a className="navbar-brand text-white" href="/">AsRealTech</a>
        <button 
          className="navbar-toggler btn-sm" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNavAltMarkup" 
          aria-controls="navbarNavAltMarkup" 
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" style={{width:"1em",height:"1em"}}></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            {menuItems && menuItems.map(
              (nav) => ( 
                <a 
                  key={nav.label} 
                  className="nav-link text-white" 
                  href={nav.href}
                  onClick={handleNavClick}
                >
                  {nav.label}
                </a>
              )
            )}
            <a 
              className="btn btn-primary btn-r" 
              aria-current="page" 
              href={portfolioData.whatsapplink}
              onClick={handleNavClick}
            >
              Lets Talk
            </a>
          </div>
        </div>
    </nav>
  );
}
