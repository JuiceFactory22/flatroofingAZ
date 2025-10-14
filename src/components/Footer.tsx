import Link from 'next/link';
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <div className="h-10 w-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">AR</span>
              </div>
              <div className="ml-3">
                <h3 className="text-xl font-bold text-white">Arizona Flat Roof</h3>
                <p className="text-sm text-gray-400">Specialists</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Expert commercial flat roofing services across Arizona. Specializing in roof coatings, resurfacing, maintenance, and repairs.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-gray-400 text-sm">
                <PhoneIcon className="h-4 w-4 mr-2" />
                <span>(602) 555-0123</span>
              </div>
              <div className="flex items-center text-gray-400 text-sm">
                <EnvelopeIcon className="h-4 w-4 mr-2" />
                <span>info@arizonaflatroof.com</span>
              </div>
              <div className="flex items-center text-gray-400 text-sm">
                <MapPinIcon className="h-4 w-4 mr-2" />
                <span>Serving All of Arizona</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services/roof-coatings" className="text-gray-400 hover:text-white text-sm transition-colors">Roof Coatings</Link></li>
              <li><Link href="/services/roof-resurfacing" className="text-gray-400 hover:text-white text-sm transition-colors">Roof Resurfacing</Link></li>
              <li><Link href="/services/commercial-maintenance" className="text-gray-400 hover:text-white text-sm transition-colors">Commercial Maintenance</Link></li>
              <li><Link href="/services/roof-repairs" className="text-gray-400 hover:text-white text-sm transition-colors">Roof Repairs</Link></li>
              <li><Link href="/services/tpo-roofing" className="text-gray-400 hover:text-white text-sm transition-colors">TPO Roofing</Link></li>
              <li><Link href="/services/epdm-roofing" className="text-gray-400 hover:text-white text-sm transition-colors">EPDM Roofing</Link></li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-white font-semibold mb-4">Service Areas</h3>
            <ul className="space-y-2">
              <li><Link href="/locations/phoenix" className="text-gray-400 hover:text-white text-sm transition-colors">Phoenix</Link></li>
              <li><Link href="/locations/tucson" className="text-gray-400 hover:text-white text-sm transition-colors">Tucson</Link></li>
              <li><Link href="/locations/mesa" className="text-gray-400 hover:text-white text-sm transition-colors">Mesa</Link></li>
              <li><Link href="/locations/chandler" className="text-gray-400 hover:text-white text-sm transition-colors">Chandler</Link></li>
              <li><Link href="/locations/scottsdale" className="text-gray-400 hover:text-white text-sm transition-colors">Scottsdale</Link></li>
              <li><Link href="/locations/glendale" className="text-gray-400 hover:text-white text-sm transition-colors">Glendale</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-white text-sm transition-colors">About Us</Link></li>
              <li><Link href="/portfolio" className="text-gray-400 hover:text-white text-sm transition-colors">Portfolio</Link></li>
              <li><Link href="/reviews" className="text-gray-400 hover:text-white text-sm transition-colors">Reviews</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white text-sm transition-colors">Contact</Link></li>
              <li><Link href="/quote" className="text-gray-400 hover:text-white text-sm transition-colors">Free Quote</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-white text-sm transition-colors">Blog</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © {currentYear} Arizona Flat Roof Specialists. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-white text-sm transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
