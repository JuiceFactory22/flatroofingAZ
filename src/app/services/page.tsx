import { Metadata } from 'next';
import Link from 'next/link';
import { 
  PaintBrushIcon, 
  WrenchScrewdriverIcon, 
  ShieldCheckIcon,
  BuildingOffice2Icon,
  CogIcon,
  ExclamationTriangleIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Commercial Flat Roofing Services | Arizona Flat Roof Specialists',
  description: 'Professional commercial flat roofing services including roof coatings, resurfacing, maintenance, and repairs. TPO, EPDM, and coating systems across Arizona.',
  keywords: 'commercial flat roofing services, roof coatings Arizona, roof resurfacing, commercial roof maintenance, TPO roofing, EPDM roofing',
};

const services = [
  {
    name: 'Roof Coating Systems',
    description: 'Professional roof coating applications including acrylic, silicone, and polyurethane systems to extend roof life and improve energy efficiency.',
    icon: PaintBrushIcon,
    href: '/services/roof-coatings',
    features: [
      'Energy Savings up to 30%',
      'UV Protection & Weather Resistance',
      'Extended Roof Life',
      'Cool Roof Technology',
      'Low Maintenance Requirements'
    ],
    benefits: 'Reduce energy costs, extend roof lifespan, and improve building efficiency with our premium coating systems.'
  },
  {
    name: 'Roof Resurfacing',
    description: 'Complete roof resurfacing services for commercial buildings, including membrane replacement and structural repairs.',
    icon: BuildingOffice2Icon,
    href: '/services/roof-resurfacing',
    features: [
      'Full Membrane Replacement',
      'Structural Assessment & Repair',
      'Drainage System Installation',
      'Insulation Upgrades',
      'Warranty Protection'
    ],
    benefits: 'Complete roof restoration with modern materials and improved performance characteristics.'
  },
  {
    name: 'Commercial Maintenance',
    description: 'Comprehensive maintenance programs to prevent costly repairs and extend the life of your commercial roof system.',
    icon: CogIcon,
    href: '/services/commercial-maintenance',
    features: [
      'Regular Inspections',
      'Preventive Maintenance',
      'Emergency Response',
      'Maintenance Scheduling',
      'Performance Monitoring'
    ],
    benefits: 'Proactive care that prevents problems and maximizes your roof investment.'
  },
  {
    name: 'Roof Repairs',
    description: 'Expert repair services for leaks, membrane damage, flashing issues, and other commercial roof problems.',
    icon: WrenchScrewdriverIcon,
    href: '/services/roof-repairs',
    features: [
      'Leak Detection & Repair',
      'Membrane Patching',
      'Flashing Repair & Replacement',
      'Drainage System Repair',
      'Emergency Response'
    ],
    benefits: 'Quick, effective repairs that restore your roof to optimal condition.'
  },
  {
    name: 'TPO Roofing',
    description: 'Thermoplastic Polyolefin (TPO) roofing systems offering excellent durability and energy efficiency for commercial buildings.',
    icon: ShieldCheckIcon,
    href: '/services/tpo-roofing',
    features: [
      'Energy Efficient Design',
      'Superior Durability',
      'Cost-Effective Installation',
      'Easy Maintenance',
      'Long-Term Warranty'
    ],
    benefits: 'Modern roofing solution with excellent performance and energy savings.'
  },
  {
    name: 'Emergency Services',
    description: '24/7 emergency roofing services to address urgent issues and prevent further damage to your property.',
    icon: ExclamationTriangleIcon,
    href: '/services/emergency',
    features: [
      '24/7 Availability',
      'Rapid Response Time',
      'Temporary Repairs',
      'Damage Assessment',
      'Insurance Coordination'
    ],
    benefits: 'Immediate response to protect your property and minimize damage costs.'
  }
];

export default function ServicesPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Commercial Flat Roofing Services
            </h1>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              Comprehensive flat roofing solutions for commercial properties across Arizona. 
              From routine maintenance to complete roof replacement, we have the expertise to protect your investment.
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Service Portfolio
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We specialize in all aspects of commercial flat roofing, providing solutions that meet your specific needs and budget requirements.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
              {services.map((service) => (
                <div key={service.name} className="flex flex-col justify-between rounded-2xl bg-gray-50 p-8">
                  <div>
                    <div className="flex items-center gap-x-4 text-sm">
                      <service.icon className="h-8 w-8 flex-none text-blue-600" aria-hidden="true" />
                      <span className="text-lg font-semibold leading-7 text-gray-900">{service.name}</span>
                    </div>
                    <p className="mt-4 text-base leading-7 text-gray-600">{service.description}</p>
                    <p className="mt-4 text-sm font-medium text-blue-600">{service.benefits}</p>
                    
                    <ul className="mt-6 space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                          <div className="h-1.5 w-1.5 bg-blue-600 rounded-full flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-8">
                    <Link
                      href={service.href}
                      className="inline-flex items-center gap-2 text-sm font-semibold leading-6 text-blue-600 hover:text-blue-500"
                    >
                      Learn more about {service.name.toLowerCase()}
                      <ArrowRightIcon className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Our Services */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why Choose Our Services?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our commitment to quality and customer satisfaction sets us apart in the commercial roofing industry.
            </p>
          </div>
          
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600">15+</div>
              <div className="mt-2 text-lg font-semibold text-gray-900">Years Experience</div>
              <div className="mt-1 text-sm text-gray-600">Serving Arizona commercial properties</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600">500+</div>
              <div className="mt-2 text-lg font-semibold text-gray-900">Projects Completed</div>
              <div className="mt-1 text-sm text-gray-600">Successfully delivered roofing solutions</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600">100%</div>
              <div className="mt-2 text-lg font-semibold text-gray-900">Satisfaction Rate</div>
              <div className="mt-1 text-sm text-gray-600">Customer satisfaction guaranteed</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Get Started?
            </h2>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              Contact us today for a free consultation and quote. Our experts will assess your needs and provide a customized solution for your commercial roofing project.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="rounded-md bg-white px-6 py-3 text-lg font-semibold text-blue-600 shadow-sm hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors"
              >
                Get Free Quote
              </Link>
              <Link
                href="tel:6025550123"
                className="flex items-center justify-center gap-2 rounded-md border border-white px-6 py-3 text-lg font-semibold text-white hover:bg-blue-500 transition-colors"
              >
                Call (602) 555-0123
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
