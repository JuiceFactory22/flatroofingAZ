import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const projects = [
  {
    id: 1,
    name: 'Phoenix Office Complex',
    description: 'Complete TPO roofing system installation for 50,000 sq ft office building',
    category: 'TPO Installation',
    location: 'Phoenix, AZ',
    year: '2024',
    image: '/images/portfolio/phoenix-office-complex.jpg',
    alt: 'Phoenix office complex with new TPO roofing system'
  },
  {
    id: 2,
    name: 'Tucson Retail Center',
    description: 'Roof coating system application with energy-saving benefits',
    category: 'Roof Coating',
    location: 'Tucson, AZ',
    year: '2024',
    image: '/images/portfolio/tucson-retail-center.jpg',
    alt: 'Tucson retail center with new roof coating system'
  },
  {
    id: 3,
    name: 'Mesa Manufacturing Facility',
    description: 'Emergency roof repair and membrane replacement',
    category: 'Roof Repair',
    location: 'Mesa, AZ',
    year: '2023',
    image: '/images/portfolio/mesa-manufacturing.jpg',
    alt: 'Mesa manufacturing facility with repaired roofing system'
  },
  {
    id: 4,
    name: 'Chandler Medical Center',
    description: 'EPDM roofing system with specialized medical facility requirements',
    category: 'EPDM Installation',
    location: 'Chandler, AZ',
    year: '2023',
    image: '/images/portfolio/chandler-medical.jpg',
    alt: 'Chandler medical center with EPDM roofing system'
  },
  {
    id: 5,
    name: 'Scottsdale Shopping Center',
    description: 'Comprehensive roof resurfacing and maintenance program',
    category: 'Roof Resurfacing',
    location: 'Scottsdale, AZ',
    year: '2023',
    image: '/images/portfolio/scottsdale-shopping.jpg',
    alt: 'Scottsdale shopping center with resurfaced roof'
  },
  {
    id: 6,
    name: 'Glendale Warehouse',
    description: 'Large-scale commercial roof coating with industrial-grade materials',
    category: 'Commercial Coating',
    location: 'Glendale, AZ',
    year: '2023',
    image: '/images/portfolio/glendale-warehouse.jpg',
    alt: 'Glendale warehouse with commercial roof coating'
  }
];

export default function Portfolio() {
  return (
    <div className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Recent Projects
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Take a look at some of our recent commercial flat roofing projects across Arizona. Each project showcases our expertise and commitment to quality.
          </p>
        </div>
        
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {projects.map((project) => (
            <div key={project.id} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
              <div className="flex-shrink-0">
                <div className="h-48 w-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">🏢</div>
                    <p className="text-sm text-blue-800 font-medium">{project.category}</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                      {project.category}
                    </span>
                    <span className="text-sm text-gray-500">{project.year}</span>
                  </div>
                  <div className="mt-2">
                    <h3 className="text-lg font-semibold text-gray-900">{project.name}</h3>
                    <p className="mt-1 text-sm text-gray-600">{project.location}</p>
                  </div>
                  <p className="mt-3 text-base text-gray-500">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            View Full Portfolio
            <ArrowRightIcon className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
