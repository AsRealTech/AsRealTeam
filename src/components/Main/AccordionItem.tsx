import { type Service } from '../../data/services';

interface AccordionItemProps {
  service: Service;
  isFirst?: boolean;
}

export function AccordionItem({ service, isFirst = false }: AccordionItemProps) {
  const headingId = `heading${service.id.charAt(0).toUpperCase()}${service.id.slice(1)}`;
  const collapseId = `collapse${service.id.charAt(0).toUpperCase()}${service.id.slice(1)}`;

  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id={headingId}>
        <button
          className={`accordion-button ${!isFirst ? 'collapsed' : ''}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#${collapseId}`}
          aria-expanded={isFirst}
          aria-controls={collapseId}
        >
          <i className={`fas ${service.icon} m-2`}></i> {service.title}
        </button>
      </h2>
      <div
        id={collapseId}
        className={`accordion-collapse collapse ${isFirst ? 'show' : ''}`}
        aria-labelledby={headingId}
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
          {service.description}
          <div className="">
            <h6>Key Benefits:</h6>
            <ul>
              {service.benefits.map((benefit, index) => (
                <li key={index}>
                  <i className="fas fa-check"></i> {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
