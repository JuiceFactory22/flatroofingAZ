import { Metadata } from 'next';
import Link from 'next/link';
import { StarIcon } from '@heroicons/react/24/solid';
import { StarIcon as StarOutlineIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Customer Reviews | Arizona Flat Roof Specialists',
  description: 'Read reviews from satisfied customers across Arizona. See why businesses trust us with their commercial flat roofing needs.',
  keywords: 'Arizona flat roofing reviews, commercial roofing testimonials, customer feedback',
};

const reviews = [
  {
    id: 1,
    name: 'Sarah Johnson',
    company: 'Johnson Properties',
    location: 'Phoenix, AZ',
    rating: 5,
    date: '2024-01-15',
    content: 'Exceptional service from start to finish. The team was professional, punctual, and completed our roof coating project ahead of schedule. The quality of work is outstanding and our energy bills have decreased significantly since the installation.',
    project: 'Office Building Roof Coating',
    verified: true
  },
  {
    id: 2,
    name: 'Michael Rodriguez',
    company: 'Rodriguez Manufacturing',
    location: 'Tucson, AZ',
    rating: 5,
    date: '2024-01-10',
    content: 'We had an emergency roof leak and they responded within hours. The repair was done quickly and professionally. Their expertise in commercial roofing is unmatched. Highly recommend for any commercial roofing needs.',
    project: 'Emergency Roof Repair',
    verified: true
  },
  {
    id: 3,
    name: 'Jennifer Chen',
    company: 'Chen Retail Group',
    location: 'Mesa, AZ',
    rating: 5,
    date: '2024-01-08',
    content: 'The TPO installation on our retail center exceeded our expectations. The team was knowledgeable, clean, and respectful of our business operations. The roof looks great and we have peace of mind knowing it\'s properly installed.',
    project: 'TPO Roofing Installation',
    verified: true
  },
  {
    id: 4,
    name: 'David Thompson',
    company: 'Thompson Medical Center',
    location: 'Chandler, AZ',
    rating: 5,
    date: '2024-01-05',
    content: 'Working with Arizona Flat Roof Specialists was a pleasure. They understood our medical facility requirements and delivered a solution that met all our needs. Professional, reliable, and cost-effective.',
    project: 'Medical Center EPDM Installation',
    verified: true
  },
  {
    id: 5,
    name: 'Lisa Martinez',
    company: 'Martinez Shopping Center',
    location: 'Scottsdale, AZ',
    rating: 5,
    date: '2024-01-02',
    content: 'The roof resurfacing project was completed on time and within budget. Their attention to detail and quality craftsmanship is impressive. We will definitely use them for future projects.',
    project: 'Shopping Center Roof Resurfacing',
    verified: true
  },
  {
    id: 6,
    name: 'Robert Kim',
    company: 'Kim Industrial',
    location: 'Glendale, AZ',
    rating: 5,
    date: '2023-12-28',
    content: 'Outstanding commercial roofing contractor. They handled our large warehouse coating project with expertise and professionalism. The results speak for themselves - excellent workmanship.',
    project: 'Industrial Warehouse Coating',
    verified: true
  },
  {
    id: 7,
    name: 'Amanda Wilson',
    company: 'Wilson Office Complex',
    location: 'Gilbert, AZ',
    rating: 5,
    date: '2023-12-20',
    content: 'Professional team that delivered exactly what they promised. The roof maintenance program they set up has saved us thousands in potential repairs. Great communication throughout the process.',
    project: 'Commercial Roof Maintenance',
    verified: true
  },
  {
    id: 8,
    name: 'James Brown',
    company: 'Brown Manufacturing',
    location: 'Tempe, AZ',
    rating: 5,
    date: '2023-12-15',
    content: 'Fast response to our emergency repair needs. The team worked efficiently and got us back in business quickly. Their emergency service is truly 24/7 as advertised.',
    project: 'Emergency Roof Repair',
    verified: true
  },
  {
    id: 9,
    name: 'Maria Garcia',
    company: 'Garcia Properties',
    location: 'Peoria, AZ',
    rating: 5,
    date: '2023-12-10',
    content: 'Excellent work on our apartment complex roofing project. They managed to complete the work without disrupting our tenants. Clean, professional, and reasonably priced.',
    project: 'Apartment Complex Roofing',
    verified: true
  }
];

const stats = {
  totalReviews: 150,
  averageRating: 4.9,
  fiveStarPercentage: 98,
  responseTime: '2 hours'
};

export default function ReviewsPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Customer Reviews
            </h1>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              See what our satisfied customers have to say about our commercial flat roofing services across Arizona.
            </p>
          </div>
        </div>
      </div>

      {/* Overall Rating Section */}
      <div className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center items-center gap-4 mb-6">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="h-12 w-12 text-yellow-400" />
                ))}
              </div>
              <div className="text-4xl font-bold text-gray-900">{stats.averageRating}/5</div>
            </div>
            <p className="text-xl text-gray-600 mb-8">Based on {stats.totalReviews}+ customer reviews</p>
            
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">{stats.fiveStarPercentage}%</div>
                <div className="text-lg font-semibold text-gray-900">Five Star Reviews</div>
                <div className="text-sm text-gray-600">Customer satisfaction rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">{stats.responseTime}</div>
                <div className="text-lg font-semibold text-gray-900">Response Time</div>
                <div className="text-sm text-gray-600">Average response to inquiries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">{stats.totalReviews}+</div>
                <div className="text-lg font-semibold text-gray-900">Happy Customers</div>
                <div className="text-sm text-gray-600">Across Arizona</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews Grid */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              What Our Customers Say
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Real reviews from real customers who trust us with their commercial roofing needs.
            </p>
          </div>
          
          <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
            <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
              {reviews.map((review) => (
                <div key={review.id} className="pt-8 sm:inline-block sm:w-full sm:px-4">
                  <figure className="rounded-2xl bg-white p-8 text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
                    <div className="flex items-center gap-x-4 mb-4">
                      <div className="flex items-center">
                        {[...Array(review.rating)].map((_, i) => (
                          <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
                        ))}
                      </div>
                      {review.verified && (
                        <div className="text-xs text-green-600 font-medium">✓ Verified Customer</div>
                      )}
                    </div>
                    <blockquote className="text-gray-900 mb-4">
                      <p>"{review.content}"</p>
                    </blockquote>
                    <figcaption className="flex items-center gap-x-4">
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900">{review.name}</div>
                        <div className="text-gray-500 text-xs">{review.company} • {review.location}</div>
                        <div className="text-gray-500 text-xs mt-1">{review.project}</div>
                      </div>
                      <div className="text-xs text-gray-400">
                        {new Date(review.date).toLocaleDateString()}
                      </div>
                    </figcaption>
                  </figure>
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
              Join Our Satisfied Customers
            </h2>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              Experience the same quality service that earned us these outstanding reviews. 
              Get your free quote today.
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
