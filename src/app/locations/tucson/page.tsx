import { Metadata } from 'next';
import Link from 'next/link';
import { 
  MapPinIcon, 
  CheckCircleIcon, 
  StarIcon,
  ClockIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon,
  PhoneIcon,
  BuildingOffice2Icon,
  MountainIcon
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Commercial Roofing Tucson AZ | Arizona Flat Roof Specialists',
  description: 'Professional commercial roofing services in Tucson, Arizona. Roof coatings, EPDM installation, emergency repairs, and maintenance programs for Tucson businesses.',
  keywords: 'Tucson roofing, commercial roofing Tucson AZ, roof coatings Tucson, EPDM roofing Tucson, emergency roof repair Tucson, Tucson flat roofing',
};

const tucsonServices = [
  {
    name: 'Roof Resurfacing',
    description: 'Complete roof restoration perfect for Tucson\'s diverse building stock',
    benefits: ['Full Restoration', 'Energy Efficiency', 'Extended Lifespan'],
    popularFor: 'Older buildings and historic properties in downtown Tucson'
  },
  {
    name: 'EPDM Roofing Systems',
    description: 'Durable EPDM systems ideal for Tucson\'s climate variations',
    benefits: ['Weather Resistant', 'Flexible', 'Cost Effective'],
    popularFor: 'Educational buildings and medical facilities'
  },
  {
    name: 'Storm Damage Repair',
    description: 'Expert response to Tucson\'s monsoon season and storm damage',
    benefits: ['Monsoon Preparedness', 'Quick Response', 'Damage Prevention'],
    popularFor: 'Businesses affected by seasonal weather'
  },
  {
    name: 'Energy Efficiency Solutions',
    description: 'Cool roof technologies for Tucson\'s hot climate',
    benefits: ['Cool Roof Technology', 'Energy Savings', 'UV Protection'],
    popularFor: 'Buildings seeking energy cost reduction'
  }
];

const tucsonAreas = [
  'Downtown Tucson',
  'University Area',
  'Foothills',
  'Eastside',
  'South Tucson',
  'Westside',
  'Oro Valley',
  'Marana',
  'Catalina Foothills',
  'Tucson Mountains'
];

const tucsonProjects = [
  {
    type: 'University Building',
    location: 'University of Arizona',
    service: 'EPDM Roofing Installation',
    size: '35,000 sq ft',
    description: 'Complete EPDM installation for educational facility'
  },
  {
    type: 'Medical Center',
    location: 'Tucson Medical District',
    service: 'Roof Resurfacing',
    size: '28,000 sq ft',
    description: 'Full roof restoration for medical facility'
  },
  {
    type: 'Retail Center',
    location: 'Foothills Mall Area',
    service: 'Energy Efficiency Upgrade',
    size: '40,000 sq ft',
    description: 'Cool roof coating system installation'
  }
];

const tucsonBenefits = [
  {
    icon: MountainIcon,
    title: 'Desert Climate Expertise',
    description: 'Understanding of Tucson\'s unique desert climate and elevation considerations'
  },
  {
    icon: ClockIcon,
    title: 'Local Response Team',
    description: 'Tucson-based team for faster response times and local knowledge'
  },
  {
    icon: BuildingOffice2Icon,
    title: 'University Experience',
    description: 'Extensive experience with University of Arizona and educational facilities'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Monsoon Specialists',
    description: 'Expert preparation and response for Tucson\'s monsoon season'
  }
];

export default function TucsonPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <MapPinIcon className="h-12 w-12 text-white" />
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Commercial Roofing Tucson, AZ
              </h1>
            </div>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              Professional commercial flat roofing services for Tucson businesses. 
              Specialized solutions for Tucson\'s unique desert climate and commercial building needs.
            </p>
          </div>
        </div>
      </div>

      {/* Tucson Services */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Tucson Commercial Roofing Services
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We specialize in commercial roofing solutions designed for Tucson\'s desert climate and diverse building requirements.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
              {tucsonServices.map((service) => (
                <div key={service.name} className="flex flex-col justify-between rounded-2xl bg-gray-50 p-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.name}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Benefits:</h4>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit) => (
                          <li key={benefit} className="flex items-center gap-2 text-sm text-gray-600">
                            <CheckCircleIcon className="h-4 w-4 text-green-500 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-blue-50 rounded-lg p-4">
                      <p className="text-sm text-blue-800">
                        <span className="font-semibold">Popular for:</span> {service.popularFor}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Tucson Areas */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Tucson Areas We Serve
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We provide commercial roofing services throughout Tucson and surrounding areas.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {tucsonAreas.map((area) => (
                  <div key={area} className="text-center p-4 rounded-lg bg-gray-50">
                    <span className="text-sm font-medium text-gray-900">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tucson Projects */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Recent Tucson Projects
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Take a look at some of our recent commercial roofing projects in Tucson.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
              {tucsonProjects.map((project, index) => (
                <div key={index} className="flex flex-col rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                      {project.service}
                    </span>
                    <span className="text-sm text-gray-500">{project.size}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{project.type}</h3>
                  <p className="text-sm text-gray-600 mb-4">{project.location}</p>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Tucson Benefits */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why Choose Our Tucson Roofing Services?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our local Tucson expertise provides unique advantages for your commercial roofing needs.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
              {tucsonBenefits.map((benefit) => (
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

      {/* Desert Climate Considerations */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 px-8 py-16">
            <div className="mx-auto max-w-2xl text-center">
              <MountainIcon className="mx-auto h-12 w-12 text-white mb-6" />
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Tucson Desert Climate
              </h2>
              <p className="mt-6 text-lg leading-8 text-amber-100">
                Tucson\'s high desert climate with elevation changes, intense sun, and monsoon season requires specialized roofing solutions. 
                Our expertise ensures optimal performance in all Tucson weather conditions.
              </p>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">2,400\'</div>
                  <div className="text-sm text-amber-100">Elevation</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">350+</div>
                  <div className="text-sm text-amber-100">Sunny Days/Year</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">Monsoon</div>
                  <div className="text-sm text-amber-100">Season Ready</div>
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
              Ready for Tucson Roofing Services?
            </h2>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              Get a free consultation and quote for your Tucson commercial roofing project. 
              Our local experts understand Tucson\'s unique desert climate requirements.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="rounded-md bg-white px-6 py-3 text-lg font-semibold text-blue-600 shadow-sm hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors"
              >
                Get Tucson Quote
              </Link>
              <Link
                href="tel:6025550123"
                className="flex items-center justify-center gap-2 rounded-md border border-white px-6 py-3 text-lg font-semibold text-white hover:bg-blue-500 transition-colors"
              >
                <PhoneIcon className="h-5 w-5" />
                Call (602) 555-0123
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
