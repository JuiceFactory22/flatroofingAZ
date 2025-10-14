import { StarIcon } from '@heroicons/react/24/solid';

const reviews = [
  {
    id: 1,
    name: 'Sarah Johnson',
    company: 'Johnson Properties',
    location: 'Phoenix, AZ',
    rating: 5,
    content: 'Exceptional service from start to finish. The team was professional, punctual, and completed our roof coating project ahead of schedule. The quality of work is outstanding and our energy bills have decreased significantly.',
    project: 'Office Building Roof Coating'
  },
  {
    id: 2,
    name: 'Michael Rodriguez',
    company: 'Rodriguez Manufacturing',
    location: 'Tucson, AZ',
    rating: 5,
    content: 'We had an emergency roof leak and they responded within hours. The repair was done quickly and professionally. Their expertise in commercial roofing is unmatched. Highly recommend for any commercial roofing needs.',
    project: 'Emergency Roof Repair'
  },
  {
    id: 3,
    name: 'Jennifer Chen',
    company: 'Chen Retail Group',
    location: 'Mesa, AZ',
    rating: 5,
    content: 'The TPO installation on our retail center exceeded our expectations. The team was knowledgeable, clean, and respectful of our business operations. The roof looks great and we have peace of mind.',
    project: 'TPO Roofing Installation'
  },
  {
    id: 4,
    name: 'David Thompson',
    company: 'Thompson Medical Center',
    location: 'Chandler, AZ',
    rating: 5,
    content: 'Working with Arizona Flat Roof Specialists was a pleasure. They understood our medical facility requirements and delivered a solution that met all our needs. Professional, reliable, and cost-effective.',
    project: 'Medical Center EPDM Installation'
  },
  {
    id: 5,
    name: 'Lisa Martinez',
    company: 'Martinez Shopping Center',
    location: 'Scottsdale, AZ',
    rating: 5,
    content: 'The roof resurfacing project was completed on time and within budget. Their attention to detail and quality craftsmanship is impressive. We will definitely use them for future projects.',
    project: 'Shopping Center Roof Resurfacing'
  },
  {
    id: 6,
    name: 'Robert Kim',
    company: 'Kim Industrial',
    location: 'Glendale, AZ',
    rating: 5,
    content: 'Outstanding commercial roofing contractor. They handled our large warehouse coating project with expertise and professionalism. The results speak for themselves - excellent workmanship.',
    project: 'Industrial Warehouse Coating'
  }
];

export default function Reviews() {
  return (
    <div className="py-24 sm:py-32 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            What Our Customers Say
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Don't just take our word for it. Here's what our satisfied customers have to say about our commercial flat roofing services.
          </p>
        </div>
        
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
            {reviews.map((review) => (
              <div key={review.id} className="pt-8 sm:inline-block sm:w-full sm:px-4">
                <figure className="rounded-2xl bg-white p-8 text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
                  <div className="flex items-center gap-x-4">
                    <div className="flex items-center">
                      {[...Array(review.rating)].map((_, i) => (
                        <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
                      ))}
                    </div>
                    <div className="text-gray-500">
                      <span className="font-semibold text-gray-900">{review.name}</span>
                      <span className="text-gray-500"> • </span>
                      <span className="text-gray-500">{review.location}</span>
                    </div>
                  </div>
                  <blockquote className="mt-6 text-gray-900">
                    <p>"{review.content}"</p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-x-4">
                    <div className="text-gray-900 font-semibold">{review.company}</div>
                    <div className="text-gray-500 text-xs">{review.project}</div>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>

        {/* Overall Rating */}
        <div className="mt-16 text-center">
          <div className="flex justify-center items-center gap-4 mb-4">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="h-8 w-8 text-yellow-400" />
              ))}
            </div>
            <div className="text-2xl font-bold text-gray-900">4.9/5</div>
          </div>
          <p className="text-gray-600">Based on 150+ customer reviews</p>
        </div>
      </div>
    </div>
  );
}
