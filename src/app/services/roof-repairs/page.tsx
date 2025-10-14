import { Metadata } from 'next';
import Link from 'next/link';
import { 
  WrenchScrewdriverIcon, 
  CheckCircleIcon, 
  ExclamationTriangleIcon,
  ClockIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon,
  HomeIcon,
  BoltIcon
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Commercial Roof Repairs | Arizona Flat Roof Specialists',
  description: 'Expert commercial roof repair services in Arizona. Leak repairs, membrane patching, flashing repair, and emergency response.',
  keywords: 'commercial roof repair Arizona, roof leak repair, membrane repair, flashing repair, emergency roof repair, roof patching',
};

const repairServices = [
  {
    name: 'Leak Detection & Repair',
    description: 'Advanced leak detection technology and expert repair services to stop water damage quickly.',
    features: ['Electronic Leak Detection', 'Infrared Scanning', 'Precise Repair Work', 'Water Damage Prevention'],
    urgency: 'High Priority'
  },
  {
    name: 'Membrane Patching',
    description: 'Professional membrane repair and patching to restore roof integrity and prevent future issues.',
    features: ['Seam Repair', 'Puncture Patching', 'Blisters Repair', 'Material Matching'],
    urgency: 'Standard'
  },
  {
    name: 'Flashing Repair',
    description: 'Expert flashing repair and replacement to prevent water intrusion at critical roof junctions.',
    features: ['Perimeter Flashing', 'Penetration Sealing', 'Wall Flashing', 'Drain Flashing'],
    urgency: 'High Priority'
  },
  {
    name: 'Drainage System Repair',
    description: 'Complete drainage system repair and maintenance to ensure proper water flow and prevent ponding.',
    features: ['Drain Cleaning', 'Pipe Repair', 'Gutter Maintenance', 'Overflow Systems'],
    urgency: 'Standard'
  }
];

const emergencySigns = [
  'Active water leaks or dripping',
  'Visible water damage on ceilings or walls',
  'Sagging or bulging roof areas',
  'Missing or damaged roofing materials',
  'Pooling water on the roof surface',
  'Strong musty odors indicating moisture',
  'Electrical issues caused by water',
  'Recent severe weather damage'
];

const repairProcess = [
  {
    step: 1,
    title: 'Emergency Assessment',
    description: 'Immediate evaluation of the damage and safety concerns'
  },
  {
    step: 2,
    title: 'Temporary Protection',
    description: 'Quick temporary repairs to prevent further damage'
  },
  {
    step: 3,
    title: 'Detailed Inspection',
    description: 'Comprehensive assessment to identify all issues'
  },
  {
    step: 4,
    title: 'Permanent Repair',
    description: 'Professional repair using appropriate materials and techniques'
  },
  {
    step: 5,
    title: 'Quality Assurance',
    description: 'Testing and verification of repair effectiveness'
  }
];

const repairTypes = [
  {
    name: 'Emergency Repairs',
    description: 'Immediate response to urgent issues that require same-day attention',
    responseTime: '2-4 hours',
    examples: ['Active leaks', 'Storm damage', 'Safety hazards']
  },
  {
    name: 'Urgent Repairs',
    description: 'Quick repairs for issues that need attention within 24-48 hours',
    responseTime: '24-48 hours',
    examples: ['Minor leaks', 'Flashing issues', 'Drain problems']
  },
  {
    name: 'Scheduled Repairs',
    description: 'Planned repairs that can be scheduled at your convenience',
    responseTime: 'Within 1 week',
    examples: ['Preventive maintenance', 'Cosmetic repairs', 'Upgrades']
  }
];

export default function RoofRepairsPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Commercial Roof Repairs
            </h1>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              Expert repair services for commercial roofs across Arizona. 
              Fast response, quality workmanship, and comprehensive solutions for all roofing issues.
            </p>
          </div>
        </div>
      </div>

      {/* Emergency CTA */}
      <div className="bg-red-600 py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <ExclamationTriangleIcon className="h-8 w-8 text-white" />
              <h2 className="text-2xl font-bold text-white">Emergency Roof Repair?</h2>
            </div>
            <p className="text-red-100 mb-6">24/7 Emergency Response - Call Now!</p>
            <Link
              href="tel:6025550123"
              className="inline-flex items-center gap-2 rounded-md bg-white px-6 py-3 text-lg font-semibold text-red-600 shadow-sm hover:bg-red-50 transition-colors"
            >
              <BoltIcon className="h-5 w-5" />
              Call Emergency Line: (602) 555-0123
            </Link>
          </div>
        </div>
      </div>

      {/* Repair Services */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Professional Repair Services
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We provide comprehensive repair services for all types of commercial roofing issues.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
              {repairServices.map((service) => (
                <div key={service.name} className="flex flex-col justify-between rounded-2xl bg-gray-50 p-8">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold text-gray-900">{service.name}</h3>
                      <span className={`text-sm font-medium px-2 py-1 rounded-full ${
                        service.urgency === 'High Priority' 
                          ? 'text-red-700 bg-red-100' 
                          : 'text-blue-700 bg-blue-100'
                      }`}>
                        {service.urgency}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 mb-3">Services Include:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                            <CheckCircleIcon className="h-4 w-4 text-green-500 flex-shrink-0" />
                            {feature}
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

      {/* Emergency Signs */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Emergency Repair Signs
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Don't ignore these warning signs. Immediate action can prevent costly damage and business disruption.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="rounded-2xl bg-red-50 p-8">
              <div className="flex items-center mb-6">
                <ExclamationTriangleIcon className="h-8 w-8 text-red-600 mr-3" />
                <h3 className="text-xl font-semibold text-red-900">Call for Emergency Repair If You See:</h3>
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {emergencySigns.map((sign, index) => (
                  <li key={index} className="flex items-start gap-3 text-red-800">
                    <div className="h-2 w-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm">{sign}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Repair Types */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Repair Response Times
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We understand that different issues require different response times. Here's how we prioritize your repairs.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
              {repairTypes.map((type) => (
                <div key={type.name} className="flex flex-col justify-between rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{type.name}</h3>
                    <div className="text-lg font-bold text-blue-600 mb-4">{type.responseTime}</div>
                    <p className="text-gray-600 mb-6">{type.description}</p>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 mb-3">Examples:</h4>
                      <ul className="space-y-2">
                        {type.examples.map((example) => (
                          <li key={example} className="flex items-center gap-2 text-sm text-gray-600">
                            <CheckCircleIcon className="h-4 w-4 text-green-500 flex-shrink-0" />
                            {example}
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

      {/* Repair Process */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Repair Process
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We follow a systematic approach to ensure effective repairs and prevent future issues.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-5">
              {repairProcess.map((step) => (
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

      {/* CTA Section */}
      <div className="bg-blue-600 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Need Roof Repairs?
            </h2>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              Don't wait for small issues to become big problems. Get expert repair services from Arizona's trusted roof specialists.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="rounded-md bg-white px-6 py-3 text-lg font-semibold text-blue-600 shadow-sm hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors"
              >
                Get Repair Quote
              </Link>
              <Link
                href="tel:6025550123"
                className="flex items-center justify-center gap-2 rounded-md border border-white px-6 py-3 text-lg font-semibold text-white hover:bg-blue-500 transition-colors"
              >
                <BoltIcon className="h-5 w-5" />
                Emergency: (602) 555-0123
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
