import { Metadata } from 'next';
import Link from 'next/link';
import { 
  ShieldCheckIcon, 
  CheckCircleIcon, 
  StarIcon,
  ClockIcon,
  CurrencyDollarIcon,
  CogIcon,
  BoltIcon,
  HomeIcon
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'TPO Roofing Systems | Arizona Flat Roof Specialists',
  description: 'Professional TPO roofing installation and repair in Arizona. Thermoplastic Polyolefin roofing systems for energy efficiency and durability.',
  keywords: 'TPO roofing Arizona, thermoplastic polyolefin roofing, commercial TPO installation, energy efficient roofing, TPO membrane systems',
};

const tpoFeatures = [
  {
    name: 'Energy Efficiency',
    description: 'Reflective white surface reduces cooling costs by up to 30%',
    benefit: 'Lower energy bills and improved building efficiency'
  },
  {
    name: 'Durability',
    description: 'Resistant to UV rays, chemicals, and extreme weather conditions',
    benefit: 'Long-lasting performance in Arizona climate'
  },
  {
    name: 'Cost Effective',
    description: 'Affordable installation and maintenance compared to other systems',
    benefit: 'Excellent value for commercial applications'
  },
  {
    name: 'Easy Maintenance',
    description: 'Simple to clean and maintain with minimal ongoing costs',
    benefit: 'Low maintenance requirements throughout roof life'
  },
  {
    name: 'Flexible Installation',
    description: 'Can be installed in various weather conditions',
    benefit: 'Flexible scheduling and faster installation'
  },
  {
    name: 'Environmentally Friendly',
    description: 'Recyclable materials and energy-saving properties',
    benefit: 'Sustainable roofing solution for eco-conscious businesses'
  }
];

const tpoApplications = [
  {
    name: 'Office Buildings',
    description: 'Perfect for commercial office complexes seeking energy efficiency',
    benefits: ['Energy savings', 'Professional appearance', 'Low maintenance']
  },
  {
    name: 'Retail Centers',
    description: 'Ideal for shopping centers and retail buildings',
    benefits: ['Cost effective', 'Durable', 'Weather resistant']
  },
  {
    name: 'Warehouses',
    description: 'Excellent choice for industrial and warehouse facilities',
    benefits: ['Large span capability', 'Chemical resistance', 'Easy installation']
  },
  {
    name: 'Manufacturing',
    description: 'Suitable for manufacturing facilities with specific requirements',
    benefits: ['Chemical resistance', 'Durable', 'Low maintenance']
  }
];

const installationProcess = [
  {
    step: 1,
    title: 'Site Preparation',
    description: 'Thorough preparation of the roof deck and removal of existing materials'
  },
  {
    step: 2,
    title: 'Insulation Installation',
    description: 'Installation of appropriate insulation for optimal energy efficiency'
  },
  {
    step: 3,
    title: 'TPO Membrane Installation',
    description: 'Professional installation of TPO membrane using heat welding techniques'
  },
  {
    step: 4,
    title: 'Flashing & Details',
    description: 'Installation of flashing and sealing of all roof penetrations'
  },
  {
    step: 5,
    title: 'Quality Inspection',
    description: 'Comprehensive inspection and testing to ensure proper installation'
  }
];

const tpoAdvantages = [
  {
    icon: CurrencyDollarIcon,
    title: 'Energy Cost Savings',
    description: 'Reflective surface can reduce cooling costs by 20-30% in Arizona'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Superior Durability',
    description: 'Resistant to UV radiation, chemicals, and extreme temperature changes'
  },
  {
    icon: ClockIcon,
    title: 'Quick Installation',
    description: 'Faster installation compared to traditional roofing systems'
  },
  {
    icon: StarIcon,
    title: 'Long Warranty',
    description: 'Manufacturer warranties up to 20 years with proper installation'
  }
];

export default function TPORoofingPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              TPO Roofing Systems
            </h1>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              Professional TPO roofing installation and repair across Arizona. 
              Energy-efficient, durable, and cost-effective thermoplastic polyolefin systems.
            </p>
          </div>
        </div>
      </div>

      {/* TPO Features */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why Choose TPO Roofing?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              TPO (Thermoplastic Polyolefin) roofing offers exceptional benefits for commercial applications in Arizona's climate.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
              {tpoFeatures.map((feature) => (
                <div key={feature.name} className="flex flex-col rounded-2xl bg-gray-50 p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <ShieldCheckIcon className="h-6 w-6 text-blue-600" />
                    <h3 className="text-xl font-semibold text-gray-900">{feature.name}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <p className="text-sm text-blue-800">
                      <span className="font-semibold">Benefit:</span> {feature.benefit}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* TPO Applications */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              TPO Applications
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              TPO roofing systems are versatile and suitable for various commercial building types.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
              {tpoApplications.map((application) => (
                <div key={application.name} className="flex flex-col justify-between rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{application.name}</h3>
                    <p className="text-gray-600 mb-6">{application.description}</p>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Benefits:</h4>
                      <ul className="space-y-2">
                        {application.benefits.map((benefit) => (
                          <li key={benefit} className="flex items-center gap-2 text-sm text-gray-600">
                            <CheckCircleIcon className="h-4 w-4 text-green-500 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Advantages Section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              TPO Roofing Advantages
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Discover why TPO roofing is an excellent choice for commercial buildings in Arizona.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
              {tpoAdvantages.map((advantage) => (
                <div key={advantage.title} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    <advantage.icon className="h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                    {advantage.title}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{advantage.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Installation Process */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Professional TPO Installation
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our certified technicians follow industry best practices for TPO roofing installation.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-5">
              {installationProcess.map((step) => (
                <div key={step.step} className="flex flex-col items-center text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white font-bold text-lg">
                    {step.step}
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-gray-900">{step.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Energy Efficiency Highlight */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-16">
            <div className="mx-auto max-w-2xl text-center">
              <BoltIcon className="mx-auto h-12 w-12 text-white mb-6" />
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Energy Efficiency in Arizona
              </h2>
              <p className="mt-6 text-lg leading-8 text-blue-100">
                TPO roofing's reflective white surface is particularly effective in Arizona's sunny climate, 
                helping reduce cooling costs by up to 30% compared to dark roofing materials.
              </p>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">30%</div>
                  <div className="text-sm text-blue-100">Energy Savings</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">20+</div>
                  <div className="text-sm text-blue-100">Year Warranty</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">100%</div>
                  <div className="text-sm text-blue-100">Recyclable</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready for TPO Roofing?
            </h2>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              Get a free consultation and quote for your TPO roofing project. Our experts will help you choose the right system for your building.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="rounded-md bg-white px-6 py-3 text-lg font-semibold text-blue-600 shadow-sm hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors"
              >
                Get TPO Quote
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
