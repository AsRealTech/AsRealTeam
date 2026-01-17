import { Link } from 'react-router-dom';
import { portfolioData } from '../data/portfolio';
import picture from "/jcc.png"

export function AboutUs() {
  return (
    <section id="home" className="About">
      <div id="home" className="row About-wrapper">
        <div className='col-sm about-left'>
          <img src={picture} className='about-img img-fluid rounded mx-auto d-block' />
        </div>
        <div className="col-sm mx-auto px-6">
          <span className='name-short'> About Me</span>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
            {portfolioData.name}
          </h2>
          <p className="text-2xl md:text-3xl text-blue-400 mb-6 ">
            {portfolioData.title}
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
            {portfolioData.summary}
          </p>
          <div className="About-right-bottom">
            <ul>
              <li><Link to={"#"}></Link><span>10+</span><br/>Year's Experience</li>
              <li><Link to={"#"}></Link><span>10+</span><br/>Google Reviews</li>
              <li><Link to={"#"}></Link><span>100+</span><br/>Project Completed</li>
            </ul>
          </div>
          <div className="About-right-bottom-btn">
                <a
                  href="#contact"
                  className="btn btn-sm btn-primary btn-r"
                >
                  Get In Touch  <i className='fas fa-arrow-right'></i>
                </a>
          </div>
        </div>
      </div>
    </section>
  );
}
