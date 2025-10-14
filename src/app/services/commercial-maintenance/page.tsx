import { Metadata } from 'next';
import Link from 'next/link';
import { 
  CogIcon, 
  CheckCircleIcon, 
  ClockIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon,
  ExclamationTriangleIcon,
  CalendarIcon,
  WrenchScrewdriverIcon
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Commercial Roof Maintenance | Arizona Flat Roof Specialists',
  description: 'Professional commercial roof maintenance programs in Arizona. Preventive care, regular inspections, and emergency response to protect your investment.',
  keywords: 'commercial roof maintenance Arizona, roof inspection services, preventive maintenance, roof care programs, building maintenance',
};

const maintenanceServices = [
  {
    name: 'Regular Inspections',
    description: 'Comprehensive quarterly inspections to identify and address issues before they become costly problems.',
    features: ['Quarterly Visits', 'Detailed Reports', 'Issue Documentation', 'Preventive Recommendations'],
    frequency: 'Every 3 months'
  },
  {
    name: 'Preventive Maintenance',
    description: 'Proactive maintenance tasks to keep your roof in optimal condition and extend its lifespan.',
    features: ['Drain Cleaning', 'Sealant Application', 'Minor Repairs', 'Gutter Maintenance'],
    frequency: 'As needed'
  },
  {
    name: 'Emergency Response',
    description: '24/7 emergency response service for urgent roofing issues that require immediate attention.',
    features: ['24/7 Availability', 'Rapid Response', 'Temporary Repairs', 'Damage Assessment'],
    frequency: '24/7 Emergency'
  }
];

const maintenancePrograms = [
  {
    name: 'Basic Maintenance Plan',
    price: 'Starting at $299/month',
    description: 'Essential maintenance for small to medium commercial buildings',
    features: [
      'Quarterly inspections',
      'Basic cleaning and maintenance',
      'Emergency response coverage',
      'Detailed inspection reports',
      'Minor repair coordination'
    ],
    bestFor: 'Small to medium commercial buildings'
  },
  {
    name: 'Comprehensive Maintenance Plan',
    price: 'Starting at $599/month',
    description: 'Complete maintenance program for larger commercial properties',
    features: [
      'Monthly inspections',
      'Full preventive maintenance',
      'Priority emergency response',
      'Seasonal maintenance tasks',
      'Comprehensive reporting',
      'Warranty coordination'
    ],
    bestFor: 'Large commercial buildings and complexes'
  },
  {
    name: 'Custom Maintenance Plan',
    price: 'Custom pricing',
    description: 'Tailored maintenance program designed for your specific needs',
    features: [
      'Customized inspection schedule',
      'Specialized maintenance tasks',
      'Dedicated account manager',
      'Flexible service options',
      'Comprehensive reporting',
      'Extended warranty options'
    ],
    bestFor: 'Unique properties with specific requirements'
  }
];

const benefits = [
  {
    icon: CurrencyDollarIcon,
    title: 'Cost Savings',
    description: 'Prevent costly repairs by addressing issues early with regular maintenance'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Extended Roof Life',
    description: 'Proper maintenance can extend your roof life by 5-10 years'
  },
  {
    icon: ClockIcon,
    title: 'Minimal Disruption',
    description: 'Regular maintenance prevents major issues that disrupt business operations'
  },
  {
    icon: ExclamationTriangleIcon,
    title: 'Emergency Coverage',
    description: '24/7 emergency response ensures rapid resolution of urgent issues'
  }
];

const inspectionChecklist = [
  'Membrane condition and integrity',
  'Drainage system functionality',
  'Flashing and sealant condition',
  'Gutters and downspouts',
  'Ventilation systems',
  'Insulation condition',
  'Structural components',
  'Safety equipment and access'
];

export default function CommercialMaintenancePage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Commercial Roof Maintenance
            </h1>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              Protect your investment with our comprehensive maintenance programs. 
              Preventive care, regular inspections, and emergency response across Arizona.
            </p>
          </div>
        </div>
      </div>

      {/* Maintenance Services */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Complete Maintenance Services
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our comprehensive maintenance programs keep your roof in optimal condition year-round.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
              {maintenanceServices.map((service) => (
                <div key={service.name} className="flex flex-col justify-between rounded-2xl bg-gray-50 p-8">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold text-gray-900">{service.name}</h3>
                      <span className="text-sm font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                        {service.frequency}
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

      {/* Maintenance Programs */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Maintenance Program Options
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Choose the maintenance program that best fits your building's needs and budget.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
              {maintenancePrograms.map((program) => (
                <div key={program.name} className="flex flex-col justify-between rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{program.name}</h3>
                    <div className="text-2xl font-bold text-blue-600 mb-4">{program.price}</div>
                    <p className="text-gray-600 mb-6">{program.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 mb-3">Program Includes:</h4>
                      <ul className="space-y-2">
                        {program.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                            <CheckCircleIcon className="h-4 w-4 text-green-500 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-blue-50 rounded-lg p-4">
                      <p className="text-sm text-blue-800">
                        <span className="font-semibold">Best for:</span> {program.bestFor}
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <Link
                      href="/contact"
                      className="block w-full rounded-md bg-blue-600 px-4 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors"
                    >
                      Get Quote
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why Regular Maintenance Matters
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Professional maintenance programs provide significant benefits for your commercial property.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    <benefit.icon className="h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                    {benefit.title}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{benefit.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Inspection Checklist */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Comprehensive Inspection Checklist
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our detailed inspections cover every aspect of your roof system to ensure optimal performance.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {inspectionChecklist.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-900">{item}</span>
                  </div>
                ))}
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
              Start Your Maintenance Program Today
            </h2>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              Protect your commercial roof investment with our professional maintenance programs. Get a customized quote for your building.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="rounded-md bg-white px-6 py-3 text-lg font-semibold text-blue-600 shadow-sm hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors"
              >
                Get Maintenance Quote
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
