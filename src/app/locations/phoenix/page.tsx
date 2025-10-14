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
  SunIcon
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Commercial Roofing Phoenix AZ | Arizona Flat Roof Specialists',
  description: 'Professional commercial roofing services in Phoenix, Arizona. Roof coatings, TPO installation, emergency repairs, and maintenance programs for Phoenix businesses.',
  keywords: 'Phoenix roofing, commercial roofing Phoenix AZ, roof coatings Phoenix, TPO roofing Phoenix, emergency roof repair Phoenix, Phoenix flat roofing',
};

const phoenixServices = [
  {
    name: 'Roof Coating Systems',
    description: 'Energy-efficient roof coatings perfect for Phoenix\'s sunny climate',
    benefits: ['30% Energy Savings', 'UV Protection', 'Cool Roof Technology'],
    popularFor: 'Office buildings and retail centers seeking energy efficiency'
  },
  {
    name: 'TPO Roofing Installation',
    description: 'Durable TPO systems ideal for Phoenix commercial buildings',
    benefits: ['Heat Resistant', 'Energy Efficient', 'Long Lasting'],
    popularFor: 'Large commercial buildings and warehouses'
  },
  {
    name: 'Emergency Roof Repairs',
    description: '24/7 emergency response for urgent Phoenix roofing issues',
    benefits: ['2-4 Hour Response', 'Storm Damage Repair', 'Leak Prevention'],
    popularFor: 'Businesses needing immediate roof protection'
  },
  {
    name: 'Commercial Maintenance',
    description: 'Comprehensive maintenance programs for Phoenix properties',
    benefits: ['Preventive Care', 'Regular Inspections', 'Cost Savings'],
    popularFor: 'Property managers and building owners'
  }
];

const phoenixAreas = [
  'Downtown Phoenix',
  'Biltmore',
  'Camelback East',
  'North Phoenix',
  'South Phoenix',
  'West Phoenix',
  'Airport Area',
  'Desert Ridge',
  'Arrowhead',
  'Ahwatukee'
];

const phoenixProjects = [
  {
    type: 'Office Complex',
    location: 'Downtown Phoenix',
    service: 'TPO Roofing Installation',
    size: '45,000 sq ft',
    description: 'Complete TPO installation for downtown office building'
  },
  {
    type: 'Retail Center',
    location: 'Biltmore Area',
    service: 'Roof Coating System',
    size: '25,000 sq ft',
    description: 'Energy-efficient coating system for retail center'
  },
  {
    type: 'Warehouse',
    location: 'Airport Area',
    service: 'Emergency Repair',
    size: '60,000 sq ft',
    description: 'Storm damage repair and membrane replacement'
  }
];

const phoenixBenefits = [
  {
    icon: SunIcon,
    title: 'Phoenix Climate Expertise',
    description: 'Deep understanding of Phoenix\'s extreme heat and UV exposure requirements'
  },
  {
    icon: ClockIcon,
    title: 'Local Response Team',
    description: 'Phoenix-based team for faster response times and local knowledge'
  },
  {
    icon: BuildingOffice2Icon,
    title: 'Downtown Experience',
    description: 'Extensive experience with downtown Phoenix high-rise and commercial buildings'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Storm Damage Specialists',
    description: 'Expert response to Phoenix monsoon season and storm damage'
  }
];

export default function PhoenixPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <MapPinIcon className="h-12 w-12 text-white" />
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Commercial Roofing Phoenix, AZ
              </h1>
            </div>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              Professional commercial flat roofing services for Phoenix businesses. 
              Specialized solutions for Phoenix\'s unique climate and commercial building needs.
            </p>
          </div>
        </div>
      </div>

      {/* Phoenix Services */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Phoenix Commercial Roofing Services
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We specialize in commercial roofing solutions designed for Phoenix\'s unique climate and business requirements.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
              {phoenixServices.map((service) => (
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

      {/* Phoenix Areas */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Phoenix Areas We Serve
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We provide commercial roofing services throughout Phoenix and surrounding areas.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {phoenixAreas.map((area) => (
                  <div key={area} className="text-center p-4 rounded-lg bg-gray-50">
                    <span className="text-sm font-medium text-gray-900">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Phoenix Projects */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Recent Phoenix Projects
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Take a look at some of our recent commercial roofing projects in Phoenix.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
              {phoenixProjects.map((project, index) => (
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

      {/* Phoenix Benefits */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why Choose Our Phoenix Roofing Services?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our local Phoenix expertise provides unique advantages for your commercial roofing needs.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
              {phoenixBenefits.map((benefit) => (
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

      {/* Climate Considerations */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 px-8 py-16">
            <div className="mx-auto max-w-2xl text-center">
              <SunIcon className="mx-auto h-12 w-12 text-white mb-6" />
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Phoenix Climate Considerations
              </h2>
              <p className="mt-6 text-lg leading-8 text-orange-100">
                Phoenix\'s extreme heat, intense UV exposure, and monsoon season require specialized roofing solutions. 
                Our expertise in Phoenix climate ensures your roof performs optimally year-round.
              </p>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">110°F+</div>
                  <div className="text-sm text-orange-100">Summer Temperatures</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">300+</div>
                  <div className="text-sm text-orange-100">Sunny Days/Year</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">Monsoon</div>
                  <div className="text-sm text-orange-100">Season Preparation</div>
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
              Ready for Phoenix Roofing Services?
            </h2>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              Get a free consultation and quote for your Phoenix commercial roofing project. 
              Our local experts understand Phoenix\'s unique requirements.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="rounded-md bg-white px-6 py-3 text-lg font-semibold text-blue-600 shadow-sm hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors"
              >
                Get Phoenix Quote
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
