import { portfolioData } from '../data/portfolio';
import { Link } from 'react-router-dom';
// import picture from "/favicon.ico";
import jc from "/jc.png"

export function Hero() {
  return (
    <section id="home" className="hero">
      <div id="home" className="row">
        <div className="col-sm hero-left">
          <span className='name-short'> {portfolioData.name}</span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white text-uppercase">
           hey! i'm chisom joel
          </h1>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 gradient-text fw-semibold text-uppercase">
           I'm A software engineer |
          </h2>
          <p className="text-2xl md:text-3xl text-blue-400 mb-6">
            {portfolioData.title}
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8" style={{paddingTop:"20px"}}>
            {portfolioData.preamble[0]["concise"]}
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center in-Touch">
            <a
              href="#contact"
              className="btn btn-primary btn-r"
            >
              Get In Touch
            </a>
            <div className="mt-12 text-gray-400 text-sm">
              <Link to={portfolioData.social.linkedlin}><i className="fab fa-linkedin"></i></Link>
              <Link to={portfolioData.social.github}><i className="fab fa-github"></i></Link>
              <Link to={portfolioData.social.x}><i className="fab fa-twitter"></i></Link>
            </div>

          </div>
        </div>
        <div className='col-sm hero-right'>
          <img src={jc} className='hero-img img-fluid' />
        </div>
        <div className='col-sm-12 hero-bottom'>
          <ul className='d-flex'>
            <li><Link to={"#"}><i className='fab fa-google'></i></Link></li>
            <li><Link to={"#"}><i className='fab fa-facebook'></i></Link></li>
            <li><Link to={"#"}><i className='fab fa-instagram'></i></Link></li>
            <li><Link to={"#"}><i className='fab fa-linkedin'></i></Link></li>
            <li><Link to={"#"}><i className='fab fa-twitter'></i></Link></li>
          </ul>
        </div>
      </div>
    </section>
  );
}
