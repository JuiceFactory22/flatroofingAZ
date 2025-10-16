import Link from 'next/link';
import Image from 'next/image';
import { PhoneIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Background Image with Professional Tint */}
      <div className="absolute inset-0">
        <Image
          src="/commercial-roofing-hero-aerial-view-arizona.png"
          alt="Professional commercial roofing installations across Arizona - Expert flat roof specialists"
          fill
          priority
          className="object-cover opacity-20"
          sizes="100vw"
        />
      </div>
      
      {/* Professional Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-blue-900/80 to-slate-800/90"></div>
      
      <div className="relative mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Trust Badge */}
          <div className="mb-8 inline-flex items-center rounded-full bg-blue-600/20 px-4 py-2 text-sm font-medium text-blue-100 ring-1 ring-blue-500/30">
            <CheckCircleIcon className="mr-2 h-4 w-4 text-blue-400" />
            Licensed, Bonded & Insured • Serving Arizona Since 2008
          </div>
          
          <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl">
            Stop Losing Money on
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Roof Problems
            </span>
          </h1>
          
          <p className="mt-8 text-xl leading-8 text-slate-200 max-w-3xl mx-auto">
            <strong className="text-white">Protect your commercial property</strong> with Arizona's most trusted flat roof experts. 
            We've saved businesses over $50M in preventable roof damage through our proven maintenance programs and expert installations.
          </p>
          
          {/* Problem/Solution Framework */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto">
            <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-red-300 mb-3">❌ Without Proper Roof Care:</h3>
              <ul className="space-y-2 text-red-200 text-sm">
                <li>• $15,000+ emergency repairs</li>
                <li>• Business interruption costs</li>
                <li>• Insurance claim complications</li>
                <li>• Equipment damage from leaks</li>
              </ul>
            </div>
            <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-300 mb-3">✅ With Our Expert Care:</h3>
              <ul className="space-y-2 text-green-200 text-sm">
                <li>• Prevent problems before they start</li>
                <li>• Extend roof life 2-3x longer</li>
                <li>• Reduce energy costs 15-25%</li>
                <li>• Peace of mind & protection</li>
              </ul>
            </div>
          </div>
          
          {/* Primary CTAs */}
          <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg shadow-lg hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 transform hover:scale-105"
            >
              <span className="mr-2">Get FREE Roof Inspection</span>
              <span className="text-blue-200 group-hover:text-white transition-colors">→</span>
            </Link>
            <Link
              href="tel:6025550123"
              className="flex items-center justify-center gap-3 rounded-lg border-2 border-white/30 bg-white/10 backdrop-blur-sm px-8 py-4 text-lg font-semibold text-white hover:bg-white hover:text-slate-900 transition-all duration-200"
            >
              <PhoneIcon className="h-5 w-5" />
              Call (602) 555-0123
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-white">500+</div>
              <div className="text-sm text-slate-300">Projects Completed</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-white">15+</div>
              <div className="text-sm text-slate-300">Years Experience</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-white">$50M+</div>
              <div className="text-sm text-slate-300">Property Value Protected</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-white">24/7</div>
              <div className="text-sm text-slate-300">Emergency Service</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Professional Service Areas */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
        <div className="bg-white/95 backdrop-blur-sm rounded-full px-8 py-4 shadow-xl border border-slate-200">
          <p className="text-sm font-semibold text-slate-800">
            🏢 Serving Arizona's Business Districts • Phoenix • Tucson • Mesa • Chandler • Scottsdale • Glendale
          </p>
        </div>
      </div>
    </div>
  );
}
