import { Metadata } from 'next';
import Link from 'next/link';
import { 
  PaintBrushIcon, 
  CheckCircleIcon, 
  StarIcon,
  ClockIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Roof Coating Systems | Arizona Flat Roof Specialists',
  description: 'Professional roof coating systems in Arizona. Acrylic, silicone, and polyurethane coatings for energy savings, UV protection, and extended roof life.',
  keywords: 'roof coating Arizona, acrylic roof coating, silicone roof coating, polyurethane coating, energy efficient roofing, cool roof technology',
};

const coatingTypes = [
  {
    name: 'Acrylic Coatings',
    description: 'Water-based acrylic coatings offer excellent UV protection and energy efficiency at an affordable price point.',
    features: ['UV Protection', 'Energy Efficient', 'Easy Application', 'Cost Effective'],
    bestFor: 'Commercial buildings seeking energy savings and UV protection'
  },
  {
    name: 'Silicone Coatings',
    description: 'High-performance silicone coatings provide superior weather resistance and long-lasting protection.',
    features: ['Weather Resistant', 'Long Lasting', 'Low Maintenance', 'Durable'],
    bestFor: 'Buildings in harsh weather conditions requiring maximum durability'
  },
  {
    name: 'Polyurethane Coatings',
    description: 'Advanced polyurethane systems offer exceptional flexibility and chemical resistance for demanding applications.',
    features: ['Chemical Resistant', 'Highly Flexible', 'Professional Grade', 'Advanced Technology'],
    bestFor: 'Industrial facilities and buildings requiring chemical resistance'
  }
];

const benefits = [
  {
    icon: CurrencyDollarIcon,
    title: 'Energy Cost Savings',
    description: 'Reduce cooling costs by up to 30% with reflective roof coating systems'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Extended Roof Life',
    description: 'Protect your existing roof membrane and extend its lifespan by 10-15 years'
  },
  {
    icon: ClockIcon,
    title: 'Quick Installation',
    description: 'Minimal disruption to your business with fast, efficient coating application'
  },
  {
    icon: StarIcon,
    title: 'Professional Results',
    description: 'Expert application by certified technicians with comprehensive warranties'
  }
];

const process = [
  {
    step: 1,
    title: 'Roof Inspection',
    description: 'Thorough assessment of roof condition and preparation requirements'
  },
  {
    step: 2,
    title: 'Surface Preparation',
    description: 'Cleaning, repairs, and priming to ensure optimal coating adhesion'
  },
  {
    step: 3,
    title: 'Coating Application',
    description: 'Professional application using industry-standard equipment and techniques'
  },
  {
    step: 4,
    title: 'Quality Inspection',
    description: 'Final inspection and warranty documentation for your peace of mind'
  }
];

export default function RoofCoatingsPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Roof Coating Systems
            </h1>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              Protect and enhance your commercial roof with our professional coating systems. 
              Reduce energy costs, extend roof life, and improve building efficiency across Arizona.
            </p>
          </div>
        </div>
      </div>

      {/* Coating Types */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Professional Roof Coating Solutions
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We offer a complete range of roof coating systems designed to meet your specific needs and budget requirements.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
              {coatingTypes.map((coating) => (
                <div key={coating.name} className="flex flex-col justify-between rounded-2xl bg-gray-50 p-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{coating.name}</h3>
                    <p className="text-gray-600 mb-6">{coating.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {coating.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                            <CheckCircleIcon className="h-4 w-4 text-green-500 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-blue-50 rounded-lg p-4">
                      <p className="text-sm text-blue-800">
                        <span className="font-semibold">Best for:</span> {coating.bestFor}
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
              Why Choose Our Roof Coating Systems?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our professional roof coating services deliver measurable benefits for your commercial property.
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

      {/* Process Section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Coating Process
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We follow a systematic approach to ensure optimal results and minimal disruption to your business operations.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-4">
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
              Ready to Protect Your Roof?
            </h2>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              Get a free inspection and quote for your roof coating project. Our experts will recommend the best coating system for your specific needs.
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
