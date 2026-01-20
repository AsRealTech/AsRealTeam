export function Services(){
    return(
        <>
            <div className="row rounded services-section-wrapper">
                <div className="col-md-12 services-section-header">
                    <h2 className="services-section-title text-center">What We Can Do For You</h2>
                    <p>Our comprehensive suite of services helps businesses establish a strong digital presence and streamline their operations.</p>
                </div>
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                           <i className="fas fa-star-half m-2"></i> AI Customer Service Chatbot
                        </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          Implement intelligent chatbots that handle customer inquiries 24/7, improving response times and customer satisfaction.
                            <div className="">
                                    <h6>Key Benefits:</h6>
                                    <ul>
                                        <li><i className="fas fa-check"></i> 24/7 customer support without additional staff</li>
                                        <li><i className="fas fa-check"></i> Personalized customer interactions based on behavior</li>
                                        <li><i className="fas fa-check"></i> Seamless integration with your existing systems</li>
                                    </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <i className="fas fa-robot m-2"></i> Business Process Automation
                        </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            Streamline your operations with custom automation solutions that reduce manual work and increase efficiency.
                            <div className="">
                                 <h6>Key Benefits:</h6>
                                 <ul>
                                    <li><i className="fas fa-check"></i> Increased operational efficiency</li>
                                    <li><i className="fas fa-check"></i> Reduced human error</li>
                                    <li><i className="fas fa-check"></i> Scalable solutions tailored to your business needs</li>
                                 </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <i className="fas fa-globe m-2"></i> Domain Registration & Management
                        </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                           Secure your online identity with our domain registration and management services, including DNS configuration.
                            <div className="">
                                    <h6>Key Benefits:</h6>
                                 <ul>
                                    <li><i className="fas fa-check"></i> Secure your brand identity online</li>
                                    <li><i className="fas fa-check"></i> Expert DNS configuration and management</li>
                                    <li><i className="fas fa-check"></i> Domain monitoring and renewal services</li>
                                 </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFour">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                           <i className="fas fa-chart-line m-2"></i> Visitor & Customer Analytics
                        </button>
                        </h2>
                        <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                           Gain valuable insights into your website traffic and customer behavior with comprehensive analytics dashboards.
                           <div className="">
                                 <h6>Key Benefits:</h6>
                               <ul>
                                    <li><i className="fas fa-check"></i> Real-time visitor tracking and behavior analysis</li>
                                    <li><i className="fas fa-check"></i> Conversion optimization based on data insights</li>
                                    <li><i className="fas fa-check"></i> Custom reporting dashboards from your customers</li>
                               </ul>
                           </div>
                        </div>
                        </div>
                    </div>
                    </div>
            </div>
        </>
    )
}