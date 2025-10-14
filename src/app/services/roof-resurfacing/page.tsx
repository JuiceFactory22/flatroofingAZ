import { Metadata } from 'next';
import Link from 'next/link';
import { 
  BuildingOffice2Icon, 
  CheckCircleIcon, 
  WrenchScrewdriverIcon,
  ClockIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Roof Resurfacing Services | Arizona Flat Roof Specialists',
  description: 'Complete roof resurfacing services for commercial buildings in Arizona. Membrane replacement, structural repairs, and modern roofing systems.',
  keywords: 'roof resurfacing Arizona, commercial roof replacement, membrane replacement, structural roof repair, complete roof restoration',
};

const resurfacingTypes = [
  {
    name: 'Complete Membrane Replacement',
    description: 'Full replacement of existing roofing membrane with modern, high-performance materials.',
    features: ['Full Membrane Removal', 'New Installation', 'Enhanced Performance', 'Extended Warranty'],
    bestFor: 'Roofs with extensive damage or outdated materials'
  },
  {
    name: 'Structural Repair & Resurfacing',
    description: 'Address underlying structural issues while installing new roofing materials.',
    features: ['Structural Assessment', 'Repair Work', 'New Membrane', 'Reinforcement'],
    bestFor: 'Buildings with structural concerns or drainage issues'
  },
  {
    name: 'Insulation Upgrade & Resurfacing',
    description: 'Improve energy efficiency by upgrading insulation while resurfacing the roof.',
    features: ['Insulation Upgrade', 'Energy Efficiency', 'Modern Materials', 'Cost Savings'],
    bestFor: 'Buildings seeking improved energy performance'
  }
];

const benefits = [
  {
    icon: CurrencyDollarIcon,
    title: 'Cost Effective Solution',
    description: 'Extend roof life without the expense of complete roof replacement'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Enhanced Protection',
    description: 'Modern materials provide superior weather resistance and durability'
  },
  {
    icon: ClockIcon,
    title: 'Minimal Downtime',
    description: 'Efficient process designed to minimize disruption to your business'
  },
  {
    icon: WrenchScrewdriverIcon,
    title: 'Structural Improvements',
    description: 'Address underlying issues while installing new roofing materials'
  }
];

const process = [
  {
    step: 1,
    title: 'Comprehensive Assessment',
    description: 'Detailed inspection of roof condition, structure, and drainage systems'
  },
  {
    step: 2,
    title: 'Planning & Preparation',
    description: 'Custom resurfacing plan and preparation of work area'
  },
  {
    step: 3,
    title: 'Removal & Repair',
    description: 'Careful removal of old materials and necessary structural repairs'
  },
  {
    step: 4,
    title: 'New Installation',
    description: 'Installation of modern roofing materials using best practices'
  },
  {
    step: 5,
    title: 'Final Inspection',
    description: 'Quality assurance and warranty documentation'
  }
];

const signs = [
  'Multiple leaks or recurring water damage',
  'Visible membrane deterioration or cracking',
  'Pooling water or poor drainage',
  'High energy bills due to poor insulation',
  'Structural concerns or sagging',
  'Outdated roofing materials (over 15 years old)'
];

export default function RoofResurfacingPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Roof Resurfacing Services
            </h1>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              Complete roof restoration for commercial buildings across Arizona. 
              Transform your existing roof with modern materials and improved performance.
            </p>
          </div>
        </div>
      </div>

      {/* Resurfacing Types */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Professional Resurfacing Solutions
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We offer comprehensive resurfacing services tailored to your building's specific needs and condition.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
              {resurfacingTypes.map((type) => (
                <div key={type.name} className="flex flex-col justify-between rounded-2xl bg-gray-50 p-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{type.name}</h3>
                    <p className="text-gray-600 mb-6">{type.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 mb-3">Includes:</h4>
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
                        <span className="font-semibold">Ideal for:</span> {type.bestFor}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Benefits of Roof Resurfacing
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Resurfacing your commercial roof provides numerous advantages over complete replacement.
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

      {/* Warning Signs Section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Signs You Need Roof Resurfacing
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Don't wait for major problems. Watch for these warning signs that indicate your roof needs resurfacing.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="rounded-2xl bg-red-50 p-8">
              <div className="flex items-center mb-6">
                <ExclamationTriangleIcon className="h-8 w-8 text-red-600 mr-3" />
                <h3 className="text-xl font-semibold text-red-900">Warning Signs to Watch For</h3>
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {signs.map((sign, index) => (
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

      {/* Process Section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Resurfacing Process
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We follow a systematic approach to ensure quality results and minimal disruption to your business.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-5">
              {process.map((step) => (
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
              Ready to Resurface Your Roof?
            </h2>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              Get a comprehensive assessment and quote for your roof resurfacing project. Our experts will recommend the best solution for your building.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="rounded-md bg-white px-6 py-3 text-lg font-semibold text-blue-600 shadow-sm hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors"
              >
                Get Free Assessment
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
