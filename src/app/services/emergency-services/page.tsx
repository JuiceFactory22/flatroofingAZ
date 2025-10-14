import { Metadata } from 'next';
import Link from 'next/link';
import { 
  ExclamationTriangleIcon, 
  CheckCircleIcon, 
  ClockIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon,
  BoltIcon,
  PhoneIcon,
  HomeIcon
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Emergency Roof Repair Services | Arizona Flat Roof Specialists',
  description: '24/7 emergency roof repair services in Arizona. Rapid response for leaks, storm damage, and urgent roofing issues. Call now for immediate assistance.',
  keywords: 'emergency roof repair Arizona, 24/7 roof repair, storm damage repair, urgent roof leaks, emergency roofing services',
};

const emergencyServices = [
  {
    name: 'Storm Damage Response',
    description: 'Immediate response to storm damage including wind, hail, and water damage',
    responseTime: '2-4 hours',
    features: ['Wind Damage Assessment', 'Hail Damage Repair', 'Water Intrusion Control', 'Temporary Protection']
  },
  {
    name: 'Active Leak Repairs',
    description: 'Emergency leak repair to prevent water damage and business disruption',
    responseTime: '2-6 hours',
    features: ['Leak Detection', 'Water Damage Prevention', 'Temporary Patching', 'Permanent Repair Planning']
  },
  {
    name: 'Structural Damage',
    description: 'Urgent response to structural roof damage and safety hazards',
    responseTime: '1-3 hours',
    features: ['Safety Assessment', 'Structural Stabilization', 'Hazard Mitigation', 'Emergency Repairs']
  },
  {
    name: 'Fire Damage Response',
    description: 'Immediate response to fire damage and smoke damage to roofing systems',
    responseTime: '2-4 hours',
    features: ['Damage Assessment', 'Smoke Damage Cleanup', 'Structural Evaluation', 'Restoration Planning']
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
  'Recent severe weather damage',
  'Fire or smoke damage',
  'Structural concerns or safety hazards'
];

const responseProcess = [
  {
    step: 1,
    title: 'Emergency Call',
    description: 'Call our 24/7 emergency line for immediate response'
  },
  {
    step: 2,
    title: 'Rapid Assessment',
    description: 'On-site evaluation within 2-4 hours of your call'
  },
  {
    step: 3,
    title: 'Temporary Protection',
    description: 'Immediate temporary repairs to prevent further damage'
  },
  {
    step: 4,
    title: 'Damage Documentation',
    description: 'Comprehensive documentation for insurance claims'
  },
  {
    step: 5,
    title: 'Permanent Repair Plan',
    description: 'Detailed plan for permanent repairs and restoration'
  }
];

const emergencyBenefits = [
  {
    icon: ClockIcon,
    title: '24/7 Availability',
    description: 'Round-the-clock emergency response - we never close'
  },
  {
    icon: BoltIcon,
    title: 'Rapid Response',
    description: 'Average response time of 2-4 hours across Arizona'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Insurance Coordination',
    description: 'Expert assistance with insurance claims and documentation'
  },
  {
    icon: CurrencyDollarIcon,
    title: 'Cost Prevention',
    description: 'Quick response prevents costly secondary damage'
  }
];

const emergencyTypes = [
  {
    name: 'Critical Emergency',
    description: 'Immediate safety hazards requiring same-day response',
    examples: ['Structural damage', 'Fire damage', 'Safety hazards'],
    responseTime: '1-2 hours'
  },
  {
    name: 'High Priority',
    description: 'Active leaks or damage requiring urgent attention',
    examples: ['Active leaks', 'Storm damage', 'Wind damage'],
    responseTime: '2-4 hours'
  },
  {
    name: 'Standard Emergency',
    description: 'Issues requiring prompt attention but not immediate danger',
    examples: ['Minor leaks', 'Cosmetic damage', 'Maintenance issues'],
    responseTime: '4-8 hours'
  }
];

export default function EmergencyServicesPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-red-900 via-red-800 to-red-700 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <ExclamationTriangleIcon className="h-12 w-12 text-white" />
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Emergency Roof Repair
              </h1>
            </div>
            <p className="mt-6 text-lg leading-8 text-red-100">
              24/7 emergency roof repair services across Arizona. 
              Rapid response for leaks, storm damage, and urgent roofing issues.
            </p>
          </div>
        </div>
      </div>

      {/* Emergency CTA */}
      <div className="bg-red-600 py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <PhoneIcon className="h-8 w-8 text-white" />
              <h2 className="text-2xl font-bold text-white">Need Emergency Roof Repair?</h2>
            </div>
            <p className="text-red-100 mb-6">24/7 Emergency Response - Call Now!</p>
            <Link
              href="tel:6025550123"
              className="inline-flex items-center gap-2 rounded-md bg-white px-8 py-4 text-xl font-semibold text-red-600 shadow-sm hover:bg-red-50 transition-colors"
            >
              <BoltIcon className="h-6 w-6" />
              Emergency Line: (602) 555-0123
            </Link>
          </div>
        </div>
      </div>

      {/* Emergency Services */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Emergency Services
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We provide comprehensive emergency response for all types of urgent roofing issues.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
              {emergencyServices.map((service) => (
                <div key={service.name} className="flex flex-col justify-between rounded-2xl bg-gray-50 p-8">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold text-gray-900">{service.name}</h3>
                      <span className="text-sm font-medium text-red-700 bg-red-100 px-2 py-1 rounded-full">
                        {service.responseTime}
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
              When to Call for Emergency Service
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Don't wait for small issues to become major problems. Call immediately if you notice any of these signs.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="rounded-2xl bg-red-50 p-8">
              <div className="flex items-center mb-6">
                <ExclamationTriangleIcon className="h-8 w-8 text-red-600 mr-3" />
                <h3 className="text-xl font-semibold text-red-900">Call for Emergency Service If You See:</h3>
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

      {/* Emergency Types */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Emergency Response Levels
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We prioritize emergencies based on severity and safety concerns to ensure the most critical issues receive immediate attention.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
              {emergencyTypes.map((type) => (
                <div key={type.name} className="flex flex-col justify-between rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{type.name}</h3>
                    <div className="text-lg font-bold text-red-600 mb-4">{type.responseTime}</div>
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

      {/* Benefits Section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why Choose Our Emergency Services?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our emergency response team is equipped and trained to handle any roofing emergency quickly and effectively.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
              {emergencyBenefits.map((benefit) => (
                <div key={benefit.title} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    <benefit.icon className="h-5 w-5 flex-none text-red-600" aria-hidden="true" />
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

      {/* Response Process */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Emergency Response Process
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We follow a systematic approach to ensure rapid response and effective resolution of emergency situations.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-5">
              {responseProcess.map((step) => (
                <div key={step.step} className="flex flex-col items-center text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-600 text-white font-bold text-lg">
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

      {/* Final CTA Section */}
      <div className="bg-red-600 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Don't Wait - Call Now!
            </h2>
            <p className="mt-6 text-lg leading-8 text-red-100">
              Every minute counts in an emergency. Our 24/7 emergency response team is standing by to help protect your property.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="tel:6025550123"
                className="inline-flex items-center gap-2 rounded-md bg-white px-8 py-4 text-xl font-semibold text-red-600 shadow-sm hover:bg-red-50 transition-colors"
              >
                <PhoneIcon className="h-6 w-6" />
                Emergency: (602) 555-0123
              </Link>
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 rounded-md border border-white px-6 py-3 text-lg font-semibold text-white hover:bg-red-500 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
