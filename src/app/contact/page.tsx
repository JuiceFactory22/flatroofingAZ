import { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import { PhoneIcon, EnvelopeIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Contact Us | Arizona Flat Roof Specialists',
  description: 'Get in touch with Arizona\'s premier commercial flat roofing experts. Free quotes, 24/7 emergency service, and professional consultations.',
  keywords: 'contact flat roofing Arizona, commercial roofing quote, emergency roof repair contact',
};

const contactInfo = [
  {
    name: 'Phone',
    value: '(602) 555-0123',
    icon: PhoneIcon,
    description: 'Available 24/7 for emergencies'
  },
  {
    name: 'Email',
    value: 'info@arizonaflatroof.com',
    icon: EnvelopeIcon,
    description: 'We respond within 2 hours'
  },
  {
    name: 'Service Area',
    value: 'All of Arizona',
    icon: MapPinIcon,
    description: 'Phoenix, Tucson, Mesa, Chandler & more'
  },
  {
    name: 'Business Hours',
    value: '24/7 Emergency Service',
    icon: ClockIcon,
    description: 'Monday-Friday: 7AM-6PM'
  }
];

export default function ContactPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Contact Arizona's Flat Roof Experts
            </h1>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              Ready to protect your commercial property? Get a free quote or emergency service. 
              Our team of experienced professionals is standing by to help.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Info Grid */}
      <div className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((item) => (
              <div key={item.name} className="text-center">
                <div className="mx-auto h-12 w-12 flex items-center justify-center rounded-lg bg-blue-600">
                  <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">{item.name}</h3>
                <p className="mt-2 text-base font-medium text-blue-600">{item.value}</p>
                <p className="mt-1 text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Form and Map */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Get Your Free Quote
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Fill out the form below and we'll get back to you within 2 hours with a detailed quote for your commercial roofing needs.
              </p>
              <ContactForm />
            </div>

            {/* Map Placeholder */}
            <div className="lg:pl-8">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">
                Service Areas
              </h3>
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🗺️</div>
                  <h4 className="text-xl font-semibold text-blue-900 mb-2">Serving All of Arizona</h4>
                  <p className="text-blue-800">
                    Phoenix • Tucson • Mesa • Chandler<br />
                    Scottsdale • Glendale • Gilbert • Tempe<br />
                    And all surrounding areas
                  </p>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Emergency Service</h4>
                <p className="text-gray-600 mb-4">
                  Need immediate assistance? Our emergency response team is available 24/7 to address urgent roofing issues and prevent further damage to your property.
                </p>
                <a
                  href="tel:6025550123"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 transition-colors"
                >
                  <PhoneIcon className="h-5 w-5" />
                  Call Emergency Line
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
