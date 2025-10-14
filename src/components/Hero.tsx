import Link from 'next/link';
import { PhoneIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Arizona's Premier
            <span className="block text-blue-300">Flat Roof Specialists</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-blue-100">
            Expert commercial flat roofing services across Arizona. Specializing in roof coatings, resurfacing, maintenance, and repairs with over 15 years of experience.
          </p>
          
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="rounded-md bg-white px-6 py-3 text-lg font-semibold text-blue-900 shadow-sm hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors"
            >
              Get Free Quote
            </Link>
            <Link
              href="tel:6025550123"
              className="flex items-center justify-center gap-2 rounded-md border border-white px-6 py-3 text-lg font-semibold text-white hover:bg-white hover:text-blue-900 transition-colors"
            >
              <PhoneIcon className="h-5 w-5" />
              Call (602) 555-0123
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-center justify-center gap-2 text-white">
              <CheckCircleIcon className="h-5 w-5 text-green-400" />
              <span className="text-sm font-medium">Licensed & Insured</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-white">
              <CheckCircleIcon className="h-5 w-5 text-green-400" />
              <span className="text-sm font-medium">15+ Years Experience</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-white">
              <CheckCircleIcon className="h-5 w-5 text-green-400" />
              <span className="text-sm font-medium">Free Inspections</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Service Areas Badge */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
        <div className="bg-white rounded-full px-6 py-3 shadow-lg">
          <p className="text-sm font-semibold text-gray-900">
            Serving All of Arizona • Phoenix • Tucson • Mesa • Chandler • Scottsdale
          </p>
        </div>
      </div>
    </div>
  );
}
