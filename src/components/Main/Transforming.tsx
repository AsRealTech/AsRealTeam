import { portfolioData } from '../../data/portfolio';

export function Transforming(){
    return (
        <>
            <div className="row rounded transforming-section-wrapper">
                <div className="col-md-12 transforming-section-header">
                    <h2>Transforming Ideas into Reality with <span>Cutting-Edge Solutions</span></h2>
                </div>
                    <p>We build custom websites, software, and applications that help businesses and entrepreneurs establish their digital presence and streamline their operations.</p>
                <div className="transforming-inner">
                    <div>
                        <div className="row">
                        <div className="col-sm">
                            <section className='d-flex justify-content- align-items-center header-trans'>
                                <small><i className="fas fa-lightbulb fa-3x m-2"></i></small>
                                <h4>Innovative Ideas</h4>
                            </section>
                                <p>We thrive on creativity and innovation, turning your concepts into functional solutions.</p>
                        </div>
                        <div className="col-sm">
                            <section className='d-flex justify-content- align-items-center header-trans'>
                                <small><i className="fas fa-cogs fa-3x m-2"></i></small>
                                <h4>Cutting-Edge Technology</h4>
                            </section>
                            <p>Utilizing the latest tools and technologies to build robust and scalable applications.</p>
                        
                        </div>
                        <div className="col-sm">
                            <section className='d-flex justify-content align-items-center header-trans'>
                                <small><i className="fas fa-rocket fa-3x m-2"></i></small>
                                <h4>Real-World Solutions</h4>
                            </section>
                            <p>Delivering practical and effective solutions that drive business growth and success.</p>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-md-12 text-center mb-3 mt-3">
                    <h4>Ready to bring your digital vision to life?</h4>
                    <p>Whether you need a simple website or a complex application, AsRealTech has the expertise to deliver solutions that meet your unique needs.</p>
                </div>
                <div className="col-md-12 text-center">
                    <a className="btn btn-primary btn-transforming" href={portfolioData.whatsapplink}>Start Your Project Now <i className="fas fa-arrow-right"></i> </a>
                </div>
            </div>
        </>
    )
}