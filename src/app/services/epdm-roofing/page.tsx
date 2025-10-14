import { Metadata } from 'next';
import Link from 'next/link';
import { 
  ShieldCheckIcon, 
  CheckCircleIcon, 
  StarIcon,
  ClockIcon,
  CurrencyDollarIcon,
  CogIcon,
  HeartIcon,
  HomeIcon
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'EPDM Roofing Systems | Arizona Flat Roof Specialists',
  description: 'Professional EPDM roofing installation and repair in Arizona. Ethylene Propylene Diene Monomer roofing systems for durability and reliability.',
  keywords: 'EPDM roofing Arizona, ethylene propylene diene monomer, commercial EPDM installation, rubber roofing systems, durable roofing',
};

const epdmFeatures = [
  {
    name: 'Exceptional Durability',
    description: 'Proven performance in extreme weather conditions with excellent resistance to UV rays',
    benefit: 'Long-lasting protection in Arizona climate'
  },
  {
    name: 'Flexible Installation',
    description: 'Can be installed in cold weather and accommodates building movement',
    benefit: 'Reliable performance in all conditions'
  },
  {
    name: 'Cost Effective',
    description: 'Competitive pricing with low maintenance requirements throughout its lifespan',
    benefit: 'Excellent value for long-term roofing investment'
  },
  {
    name: 'Easy Maintenance',
    description: 'Simple to repair and maintain with minimal ongoing costs',
    benefit: 'Low maintenance requirements and easy repairs'
  },
  {
    name: 'Chemical Resistant',
    description: 'Resistant to many chemicals and pollutants commonly found in commercial environments',
    benefit: 'Ideal for industrial and manufacturing facilities'
  },
  {
    name: 'Environmentally Friendly',
    description: 'Recyclable material with energy-efficient properties',
    benefit: 'Sustainable roofing solution'
  }
];

const epdmApplications = [
  {
    name: 'Medical Facilities',
    description: 'Perfect for hospitals and medical centers requiring reliable, long-lasting roofing',
    benefits: ['Medical grade quality', 'Reliable performance', 'Easy maintenance']
  },
  {
    name: 'Educational Buildings',
    description: 'Ideal for schools and universities needing durable, cost-effective roofing',
    benefits: ['Cost effective', 'Durable', 'Weather resistant']
  },
  {
    name: 'Manufacturing Plants',
    description: 'Excellent for industrial facilities with chemical exposure concerns',
    benefits: ['Chemical resistant', 'Durable', 'Low maintenance']
  },
  {
    name: 'Apartment Complexes',
    description: 'Suitable for residential and mixed-use developments',
    benefits: ['Flexible installation', 'Cost effective', 'Long lasting']
  }
];

const installationProcess = [
  {
    step: 1,
    title: 'Substrate Preparation',
    description: 'Thorough preparation of the roof deck and installation of insulation'
  },
  {
    step: 2,
    title: 'Membrane Layout',
    description: 'Precise layout and cutting of EPDM membrane to fit roof dimensions'
  },
  {
    step: 3,
    title: 'Adhesive Application',
    description: 'Professional application of adhesive using industry-standard techniques'
  },
  {
    step: 4,
    title: 'Membrane Installation',
    description: 'Careful installation and seaming of EPDM membrane'
  },
  {
    step: 5,
    title: 'Flashing & Detailing',
    description: 'Installation of flashing and sealing of all penetrations and edges'
  }
];

const epdmAdvantages = [
  {
    icon: ShieldCheckIcon,
    title: 'Proven Reliability',
    description: 'Over 40 years of proven performance in commercial applications'
  },
  {
    icon: CurrencyDollarIcon,
    title: 'Cost Effective',
    description: 'Competitive initial cost with minimal maintenance requirements'
  },
  {
    icon: ClockIcon,
    title: 'Quick Installation',
    description: 'Faster installation compared to traditional built-up roofing systems'
  },
  {
    icon: StarIcon,
    title: 'Long Warranty',
    description: 'Manufacturer warranties up to 25 years with proper installation'
  }
];

const epdmTypes = [
  {
    name: 'Fully Adhered System',
    description: 'EPDM membrane fully adhered to the substrate for maximum performance',
    features: ['Maximum adhesion', 'Superior wind resistance', 'Professional installation'],
    bestFor: 'High-wind areas and critical applications'
  },
  {
    name: 'Ballasted System',
    description: 'EPDM membrane held in place with ballast stones or pavers',
    features: ['Cost effective', 'Easy installation', 'Good wind resistance'],
    bestFor: 'Large flat roofs with adequate structural capacity'
  },
  {
    name: 'Mechanically Attached',
    description: 'EPDM membrane secured with mechanical fasteners',
    features: ['Reliable attachment', 'Suitable for various substrates', 'Professional installation'],
    bestFor: 'Buildings with specific attachment requirements'
  }
];

export default function EPDMRoofingPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              EPDM Roofing Systems
            </h1>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              Professional EPDM roofing installation and repair across Arizona. 
              Durable, reliable, and cost-effective ethylene propylene diene monomer systems.
            </p>
          </div>
        </div>
      </div>

      {/* EPDM Features */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why Choose EPDM Roofing?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              EPDM (Ethylene Propylene Diene Monomer) roofing offers exceptional durability and reliability for commercial applications.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
              {epdmFeatures.map((feature) => (
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

      {/* EPDM Applications */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              EPDM Applications
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              EPDM roofing systems are versatile and suitable for various commercial building types and applications.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
              {epdmApplications.map((application) => (
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

      {/* EPDM Types */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              EPDM Installation Methods
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We offer various EPDM installation methods to suit your building's specific requirements and conditions.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
              {epdmTypes.map((type) => (
                <div key={type.name} className="flex flex-col justify-between rounded-2xl bg-gray-50 p-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{type.name}</h3>
                    <p className="text-gray-600 mb-6">{type.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 mb-3">Features:</h4>
                      <ul className="space-y-2">
                        {type.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                            <CheckCircleIcon className="h-4 w-4 text-green-500 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-blue-50 rounded-lg p-4">
                      <p className="text-sm text-blue-800">
                        <span className="font-semibold">Best for:</span> {type.bestFor}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Advantages Section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              EPDM Roofing Advantages
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Discover why EPDM roofing is a trusted choice for commercial buildings worldwide.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
              {epdmAdvantages.map((advantage) => (
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
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Professional EPDM Installation
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our certified technicians follow industry best practices for EPDM roofing installation.
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

      {/* Reliability Highlight */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-16">
            <div className="mx-auto max-w-2xl text-center">
              <HeartIcon className="mx-auto h-12 w-12 text-white mb-6" />
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Proven Reliability
              </h2>
              <p className="mt-6 text-lg leading-8 text-blue-100">
                EPDM roofing has been protecting commercial buildings for over 40 years, 
                making it one of the most trusted and reliable roofing systems available.
              </p>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">40+</div>
                  <div className="text-sm text-blue-100">Years Proven</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">25+</div>
                  <div className="text-sm text-blue-100">Year Warranty</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">100%</div>
                  <div className="text-sm text-blue-100">Reliable</div>
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
              Ready for EPDM Roofing?
            </h2>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              Get a free consultation and quote for your EPDM roofing project. Our experts will help you choose the right system for your building.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="rounded-md bg-white px-6 py-3 text-lg font-semibold text-blue-600 shadow-sm hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors"
              >
                Get EPDM Quote
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
