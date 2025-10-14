import Link from 'next/link';
import { PhoneIcon, EnvelopeIcon, ClockIcon } from '@heroicons/react/24/outline';

export default function CTA() {
  return (
    <div className="bg-blue-600">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Protect Your Commercial Property?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
            Get a free inspection and quote for your commercial flat roofing needs. Our experts are standing by to help you make the right decision for your property.
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
              Call Now
            </Link>
          </div>
          
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-center justify-center gap-2 text-blue-100">
              <PhoneIcon className="h-5 w-5" />
              <span className="text-sm font-medium">(602) 555-0123</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-blue-100">
              <EnvelopeIcon className="h-5 w-5" />
              <span className="text-sm font-medium">info@arizonaflatroof.com</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-blue-100">
              <ClockIcon className="h-5 w-5" />
              <span className="text-sm font-medium">24/7 Emergency Service</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
