import { Metadata } from 'next';
import Link from 'next/link';
import { 
  MapPinIcon, 
  CheckCircleIcon, 
  StarIcon,
  ClockIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon,
  PhoneIcon
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Service Areas | Arizona Flat Roof Specialists - Serving All Arizona',
  description: 'Arizona Flat Roof Specialists serve all major cities across Arizona. Professional commercial roofing services in Phoenix, Tucson, Mesa, Chandler, Scottsdale, and more.',
  keywords: 'Arizona roofing services, Phoenix roofing, Tucson roofing, Mesa roofing, Chandler roofing, Scottsdale roofing, commercial roofing Arizona',
};

const majorCities = [
  {
    name: 'Phoenix',
    population: '1.6M',
    description: 'Arizona\'s capital and largest city with extensive commercial roofing needs',
    services: ['Roof Coatings', 'TPO Installation', 'Emergency Repairs', 'Maintenance Programs']
  },
  {
    name: 'Tucson',
    population: '548K',
    description: 'Southern Arizona\'s commercial hub with diverse roofing requirements',
    services: ['Roof Resurfacing', 'EPDM Systems', 'Storm Damage Repair', 'Energy Efficiency']
  },
  {
    name: 'Mesa',
    population: '504K',
    description: 'East Valley commercial center with growing business district',
    services: ['Commercial Maintenance', 'Roof Coatings', 'TPO Roofing', 'Emergency Response']
  },
  {
    name: 'Chandler',
    population: '275K',
    description: 'Technology hub with modern commercial buildings and facilities',
    services: ['TPO Installation', 'Roof Coatings', 'Maintenance Programs', 'Energy Solutions']
  },
  {
    name: 'Scottsdale',
    population: '241K',
    description: 'Upscale commercial district with premium roofing requirements',
    services: ['Premium Coatings', 'TPO Systems', 'Maintenance Programs', 'Emergency Services']
  },
  {
    name: 'Glendale',
    population: '248K',
    description: 'West Valley commercial center with diverse business needs',
    services: ['Roof Repairs', 'EPDM Systems', 'Commercial Maintenance', 'Storm Response']
  }
];

const additionalCities = [
  'Gilbert', 'Tempe', 'Peoria', 'Surprise', 'Yuma', 'Avondale', 
  'Goodyear', 'Flagstaff', 'Buckeye', 'Lake Havasu City', 'Casa Grande', 
  'Sierra Vista', 'Maricopa', 'Prescott', 'Apache Junction', 'El Mirage',
  'Oro Valley', 'Marana', 'Catalina Foothills', 'Sun City'
];

const serviceAreas = [
  {
    region: 'Phoenix Metro Area',
    cities: ['Phoenix', 'Mesa', 'Chandler', 'Scottsdale', 'Glendale', 'Gilbert', 'Tempe', 'Peoria', 'Surprise', 'Avondale', 'Goodyear', 'Buckeye', 'El Mirage', 'Sun City'],
    description: 'Complete coverage of the Phoenix metropolitan area'
  },
  {
    region: 'Tucson Metro Area',
    cities: ['Tucson', 'Oro Valley', 'Marana', 'Catalina Foothills'],
    description: 'Full service coverage for the Tucson metropolitan area'
  },
  {
    region: 'Northern Arizona',
    cities: ['Flagstaff', 'Prescott', 'Lake Havasu City', 'Apache Junction'],
    description: 'Commercial roofing services throughout Northern Arizona'
  },
  {
    region: 'Southern Arizona',
    cities: ['Yuma', 'Casa Grande', 'Sierra Vista', 'Maricopa'],
    description: 'Professional roofing services across Southern Arizona'
  }
];

const locationBenefits = [
  {
    icon: MapPinIcon,
    title: 'Statewide Coverage',
    description: 'Serving all major cities and towns across Arizona with local expertise'
  },
  {
    icon: ClockIcon,
    title: 'Local Response',
    description: 'Faster response times with local teams in major metropolitan areas'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Local Knowledge',
    description: 'Understanding of local building codes, weather patterns, and requirements'
  },
  {
    icon: CurrencyDollarIcon,
    title: 'Competitive Pricing',
    description: 'Local market knowledge ensures competitive pricing across all service areas'
  }
];

export default function LocationsPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Service Areas Across Arizona
            </h1>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              Professional commercial flat roofing services throughout Arizona. 
              Local expertise, fast response times, and quality workmanship in every city we serve.
            </p>
          </div>
        </div>
      </div>

      {/* Major Cities */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Major Service Areas
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We provide comprehensive commercial roofing services in Arizona's largest cities and metropolitan areas.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
              {majorCities.map((city) => (
                <div key={city.name} className="flex flex-col justify-between rounded-2xl bg-gray-50 p-8">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold text-gray-900">{city.name}</h3>
                      <span className="text-sm font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                        {city.population}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-6">{city.description}</p>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 mb-3">Popular Services:</h4>
                      <ul className="space-y-2">
                        {city.services.map((service) => (
                          <li key={service} className="flex items-center gap-2 text-sm text-gray-600">
                            <CheckCircleIcon className="h-4 w-4 text-green-500 flex-shrink-0" />
                            {service}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <Link
                      href={`/locations/${city.name.toLowerCase()}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold leading-6 text-blue-600 hover:text-blue-500"
                    >
                      View {city.name} Services
                      <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Regional Coverage */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Regional Coverage
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We organize our service areas by region to ensure efficient coverage and local expertise.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
              {serviceAreas.map((area) => (
                <div key={area.region} className="flex flex-col rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{area.region}</h3>
                  <p className="text-gray-600 mb-6">{area.description}</p>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Cities Served:</h4>
                    <div className="flex flex-wrap gap-2">
                      {area.cities.map((city) => (
                        <Link
                          key={city}
                          href={`/locations/${city.toLowerCase().replace(/\s+/g, '-')}`}
                          className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 hover:bg-blue-100"
                        >
                          {city}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Additional Cities */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Additional Cities We Serve
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We provide commercial roofing services in cities and towns throughout Arizona.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200">
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {additionalCities.map((city) => (
                  <Link
                    key={city}
                    href={`/locations/${city.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-center p-3 rounded-lg bg-gray-50 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                  >
                    <span className="text-sm font-medium">{city}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why Choose Local Arizona Roofing Experts?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our statewide coverage provides unique advantages for Arizona businesses.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
              {locationBenefits.map((benefit) => (
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

      {/* CTA Section */}
      <div className="bg-blue-600 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Get Started?
            </h2>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              No matter where you are in Arizona, we're ready to provide professional commercial roofing services for your business.
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
