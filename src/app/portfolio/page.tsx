import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Portfolio | Arizona Flat Roof Specialists - Commercial Roofing Projects',
  description: 'View our portfolio of successful commercial flat roofing projects across Arizona. TPO, EPDM, roof coatings, and more.',
  keywords: 'commercial roofing portfolio, Arizona roofing projects, flat roof examples, TPO roofing projects',
};

const projects = [
  {
    id: 1,
    name: 'Phoenix Office Complex',
    description: 'Complete TPO roofing system installation for 50,000 sq ft office building with enhanced energy efficiency features.',
    category: 'TPO Installation',
    location: 'Phoenix, AZ',
    year: '2024',
    size: '50,000 sq ft',
    duration: '3 weeks',
    image: '/images/portfolio/phoenix-office-complex.jpg',
    alt: 'Phoenix office complex with new TPO roofing system',
    features: ['Energy-efficient TPO membrane', 'Enhanced insulation', 'Improved drainage system', '20-year warranty'],
    testimonial: {
      text: 'Exceptional work from start to finish. The team was professional and completed the project ahead of schedule.',
      author: 'Sarah Johnson, Property Manager'
    }
  },
  {
    id: 2,
    name: 'Tucson Retail Center',
    description: 'Roof coating system application with energy-saving benefits and improved weather resistance.',
    category: 'Roof Coating',
    location: 'Tucson, AZ',
    year: '2024',
    size: '35,000 sq ft',
    duration: '1 week',
    image: '/images/portfolio/tucson-retail-center.jpg',
    alt: 'Tucson retail center with new roof coating system',
    features: ['Acrylic coating system', 'Cool roof technology', 'UV protection', 'Energy cost reduction'],
    testimonial: {
      text: 'Our energy bills decreased by 25% after the coating application. Highly recommend their services.',
      author: 'Michael Rodriguez, Facility Manager'
    }
  },
  {
    id: 3,
    name: 'Mesa Manufacturing Facility',
    description: 'Emergency roof repair and membrane replacement following storm damage.',
    category: 'Roof Repair',
    location: 'Mesa, AZ',
    year: '2023',
    size: '75,000 sq ft',
    duration: '2 weeks',
    image: '/images/portfolio/mesa-manufacturing.jpg',
    alt: 'Mesa manufacturing facility with repaired roofing system',
    features: ['Emergency response', 'Membrane replacement', 'Structural reinforcement', 'Improved drainage'],
    testimonial: {
      text: 'They responded within hours to our emergency. The repair work was excellent and prevented further damage.',
      author: 'Jennifer Chen, Operations Director'
    }
  },
  {
    id: 4,
    name: 'Chandler Medical Center',
    description: 'EPDM roofing system with specialized medical facility requirements and enhanced durability.',
    category: 'EPDM Installation',
    location: 'Chandler, AZ',
    year: '2023',
    size: '40,000 sq ft',
    duration: '4 weeks',
    image: '/images/portfolio/chandler-medical.jpg',
    alt: 'Chandler medical center with EPDM roofing system',
    features: ['Medical-grade EPDM', 'Enhanced durability', 'Specialized installation', 'Compliance certification'],
    testimonial: {
      text: 'Perfect installation that met all our medical facility requirements. Professional and reliable team.',
      author: 'David Thompson, Facilities Director'
    }
  },
  {
    id: 5,
    name: 'Scottsdale Shopping Center',
    description: 'Comprehensive roof resurfacing and maintenance program with modern materials.',
    category: 'Roof Resurfacing',
    location: 'Scottsdale, AZ',
    year: '2023',
    size: '60,000 sq ft',
    duration: '5 weeks',
    image: '/images/portfolio/scottsdale-shopping.jpg',
    alt: 'Scottsdale shopping center with resurfaced roof',
    features: ['Complete resurfacing', 'Modern materials', 'Enhanced drainage', 'Long-term warranty'],
    testimonial: {
      text: 'The resurfacing project exceeded our expectations. The roof looks great and performs even better.',
      author: 'Lisa Martinez, Property Owner'
    }
  },
  {
    id: 6,
    name: 'Glendale Warehouse',
    description: 'Large-scale commercial roof coating with industrial-grade materials and enhanced protection.',
    category: 'Commercial Coating',
    location: 'Glendale, AZ',
    year: '2023',
    size: '100,000 sq ft',
    duration: '2 weeks',
    image: '/images/portfolio/glendale-warehouse.jpg',
    alt: 'Glendale warehouse with commercial roof coating',
    features: ['Industrial-grade coating', 'Large-scale application', 'Enhanced protection', 'Cost-effective solution'],
    testimonial: {
      text: 'Outstanding work on our large warehouse. The coating system provides excellent protection and value.',
      author: 'Robert Kim, Warehouse Manager'
    }
  }
];

const categories = ['All', 'TPO Installation', 'Roof Coating', 'Roof Repair', 'EPDM Installation', 'Roof Resurfacing', 'Commercial Coating'];

export default function PortfolioPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Our Portfolio
            </h1>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              Explore our successful commercial flat roofing projects across Arizona. 
              Each project demonstrates our expertise and commitment to quality craftsmanship.
            </p>
          </div>
        </div>
      </div>

      {/* Portfolio Grid */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Recent Projects
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              From small repairs to large-scale installations, we've successfully completed hundreds of commercial roofing projects throughout Arizona.
            </p>
          </div>
          
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {projects.map((project) => (
              <div key={project.id} className="flex flex-col overflow-hidden rounded-2xl shadow-lg ring-1 ring-gray-200">
                <div className="flex-shrink-0">
                  <div className="h-64 w-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl mb-4">🏢</div>
                      <p className="text-lg text-blue-800 font-semibold">{project.category}</p>
                      <p className="text-sm text-blue-600">{project.size}</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col justify-between bg-white p-8">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                        {project.category}
                      </span>
                      <span className="text-sm text-gray-500">{project.year}</span>
                    </div>
                    
                    <div className="mb-4">
                      <h3 className="text-xl font-semibold text-gray-900">{project.name}</h3>
                      <p className="mt-1 text-sm text-gray-600">{project.location} • {project.duration}</p>
                    </div>
                    
                    <p className="text-base text-gray-600 mb-4">{project.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {project.features.map((feature, index) => (
                          <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                            <div className="h-1.5 w-1.5 bg-blue-600 rounded-full flex-shrink-0"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-sm text-gray-700 italic mb-2">"{project.testimonial.text}"</p>
                      <p className="text-xs text-gray-500">- {project.testimonial.author}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Project Statistics
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our track record speaks for itself. Here's what we've accomplished across Arizona.
            </p>
          </div>
          
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600">500+</div>
              <div className="mt-2 text-lg font-semibold text-gray-900">Projects Completed</div>
              <div className="mt-1 text-sm text-gray-600">Across Arizona</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600">2M+</div>
              <div className="mt-2 text-lg font-semibold text-gray-900">Square Feet</div>
              <div className="mt-1 text-sm text-gray-600">Roofing installed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600">15+</div>
              <div className="mt-2 text-lg font-semibold text-gray-900">Years Experience</div>
              <div className="mt-1 text-sm text-gray-600">In commercial roofing</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600">100%</div>
              <div className="mt-2 text-lg font-semibold text-gray-900">Success Rate</div>
              <div className="mt-1 text-sm text-gray-600">Project completion</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Start Your Project?
            </h2>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              Join the hundreds of satisfied customers who trust us with their commercial roofing needs. 
              Get a free quote for your next project.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-white px-6 py-3 text-lg font-semibold text-blue-600 shadow-sm hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors"
              >
                Get Free Quote
                <ArrowRightIcon className="h-5 w-5" />
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
