export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  benefits: string[];
}

export const servicesData: Service[] = [
  {
    id: 'one',
    icon: 'fa-star-half',
    title: 'AI Customer Service Chatbot',
    description: 'Implement intelligent chatbots that handle customer inquiries 24/7, improving response times and customer satisfaction.',
    benefits: [
      '24/7 customer support without additional staff',
      'Personalized customer interactions based on behavior',
      'Seamless integration with your existing systems'
    ]
  },
  {
    id: 'two',
    icon: 'fa-robot',
    title: 'Business Process Automation',
    description: 'Streamline your operations with custom automation solutions that reduce manual work and increase efficiency.',
    benefits: [
      'Increased operational efficiency',
      'Reduced human error',
      'Scalable solutions tailored to your business needs'
    ]
  },
  {
    id: 'three',
    icon: 'fa-globe',
    title: 'Domain Registration & Management',
    description: 'Secure your online identity with our domain registration and management services, including DNS configuration.',
    benefits: [
      'Secure your brand identity online',
      'Expert DNS configuration and management',
      'Domain monitoring and renewal services'
    ]
  },
  {
    id: 'four',
    icon: 'fa-chart-line',
    title: 'Visitor & Customer Analytics',
    description: 'Gain valuable insights into your website traffic and customer behavior with comprehensive analytics dashboards.',
    benefits: [
      'Real-time visitor tracking and behavior analysis',
      'Conversion optimization based on data insights',
      'Custom reporting dashboards from your customers'
    ]
  }
];
