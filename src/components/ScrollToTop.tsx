import { useState, useEffect } from 'react';
import '../styles/ScrollToTop.css';
import { portfolioData } from '../data/portfolio';

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>

      {/* whatsApp icon */}

      <div className="whatsapp-icon">
        <a
          href={portfolioData.whatsapplink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact via WhatsApp"
          title="Contact via WhatsApp"
        >
          <i className="fab fa-whatsapp fa-2x"></i>
        </a>
      </div>

      {isVisible && (
        <button
          type="button"
          onClick={scrollToTop}
          className="scroll-to-top"
          aria-label="Scroll to top"
          title="Scroll to top"
        >
          <i className="fas fa-arrow-up"></i>
        </button>
      )}
    </>
  );
}
