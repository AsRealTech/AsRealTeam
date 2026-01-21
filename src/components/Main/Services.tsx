import { servicesData } from '../../data/services';
import { AccordionItem } from './AccordionItem';

export function Services() {
  return (
    <>
      <div className="row rounded services-section-wrapper">
        <div className="col-md-12 services-section-header">
          <h2 className="services-section-title text-center">What We Can Do For You</h2>
          <p>Our comprehensive suite of services helps businesses establish a strong digital presence and streamline their operations.</p>
        </div>
        <div className="accordion" id="accordionExample">
          {servicesData.map((service, index) => (
            <AccordionItem
              key={service.id}
              service={service}
              isFirst={index === 0}
            />
          ))}
        </div>
      </div>
    </>
  );
}