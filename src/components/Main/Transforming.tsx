import { portfolioData } from '../../data/portfolio';

export function Transforming(){
    return (
        <>
            <div className="row rounded transforming-section-wrapper">
                <div className="col-md-12 transforming-section-header">
                    <h2>Transforming Ideas into Reality with <span>Cutting-Edge Solutions</span></h2>
                </div>
                    <p>At AsRealTech, we specialize in turning your innovative ideas into tangible solutions. Our team of experts leverages the latest technologies to deliver high-quality applications that meet your unique needs. Whether you're looking to develop a web app, mobile app, or custom software, we have the skills and experience to bring your vision to life. Partner with us to transform your ideas into reality and stay ahead in the digital landscape.</p>
                <div className="transforming-inner">
                    <div>
                        <div className="row">
                        <div className="col-sm">
                            <small><i className="fas fa-lightbulb fa-3x mb-3"></i></small>
                            <h4>Innovative Ideas</h4>
                            <p>We thrive on creativity and innovation, turning your concepts into functional solutions.</p>
                        </div>
                        <div className="col-sm">
                            <small><i className="fas fa-cogs fa-3x mb-3"></i></small>
                            <h4>Cutting-Edge Technology</h4>
                            <p>Utilizing the latest tools and technologies to build robust and scalable applications.</p>
                        </div>
                        <div className="col-sm">
                            <small><i className="fas fa-rocket fa-3x mb-3"></i></small>
                            <h4>Real-World Solutions</h4>
                            <p>Delivering practical and effective solutions that drive business growth and success.</p>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-md-12 text-center">
                    <a className="btn btn-primary btn-transforming" href={portfolioData.whatsapplink}>Start Your Now <i className="fas fa-arrow-right"></i> </a>
                </div>
            </div>
        </>
    )
}