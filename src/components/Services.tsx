import Link from 'next/link';
import { 
  PaintBrushIcon, 
  WrenchScrewdriverIcon, 
  ShieldCheckIcon,
  BuildingOffice2Icon,
  CogIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline';

const services = [
  {
    name: 'Roof Coating Systems',
    description: 'Professional roof coating applications including acrylic, silicone, and polyurethane systems to extend roof life and improve energy efficiency.',
    icon: PaintBrushIcon,
    href: '/services/roof-coatings',
    features: ['Energy Savings', 'UV Protection', 'Weather Resistance']
  },
  {
    name: 'Roof Resurfacing',
    description: 'Complete roof resurfacing services for commercial buildings, including membrane replacement and structural repairs.',
    icon: BuildingOffice2Icon,
    href: '/services/roof-resurfacing',
    features: ['Full Replacement', 'Membrane Systems', 'Structural Repairs']
  },
  {
    name: 'Commercial Maintenance',
    description: 'Comprehensive maintenance programs to prevent costly repairs and extend the life of your commercial roof system.',
    icon: CogIcon,
    href: '/services/commercial-maintenance',
    features: ['Preventive Care', 'Regular Inspections', 'Emergency Response']
  },
  {
    name: 'Roof Repairs',
    description: 'Expert repair services for leaks, membrane damage, flashing issues, and other commercial roof problems.',
    icon: WrenchScrewdriverIcon,
    href: '/services/roof-repairs',
    features: ['Leak Repairs', 'Membrane Patching', 'Flashing Repair']
  },
  {
    name: 'TPO Roofing',
    description: 'Thermoplastic Polyolefin (TPO) roofing systems offering excellent durability and energy efficiency for commercial buildings.',
    icon: ShieldCheckIcon,
    href: '/services/tpo-roofing',
    features: ['Energy Efficient', 'Durable', 'Cost Effective']
  },
  {
    name: 'Emergency Services',
    description: '24/7 emergency roofing services to address urgent issues and prevent further damage to your property.',
    icon: ExclamationTriangleIcon,
    href: '/services/emergency',
    features: ['24/7 Response', 'Quick Repairs', 'Damage Prevention']
  }
];

export default function Services() {
  return (
    <div className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Professional Flat Roofing Services
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We specialize in comprehensive commercial flat roofing solutions designed to protect your investment and maximize your roof's lifespan.
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <service.icon className="h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                  {service.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{service.description}</p>
                  <div className="mt-4">
                    <ul className="text-sm text-gray-500 space-y-1">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 bg-blue-600 rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="mt-6">
                    <Link
                      href={service.href}
                      className="text-sm font-semibold leading-6 text-blue-600 hover:text-blue-500"
                    >
                      Learn more <span aria-hidden="true">→</span>
                    </Link>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/services"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            View All Services
          </Link>
        </div>
      </div>
    </div>
  );
}
