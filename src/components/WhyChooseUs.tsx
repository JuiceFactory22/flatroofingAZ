import { 
  StarIcon, 
  ClockIcon, 
  ShieldCheckIcon, 
  CurrencyDollarIcon,
  UserGroupIcon,
  MapPinIcon
} from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Licensed & Insured',
    description: 'Fully licensed contractors with comprehensive insurance coverage for your peace of mind.',
    icon: ShieldCheckIcon,
  },
  {
    name: '15+ Years Experience',
    description: 'Over a decade of expertise in commercial flat roofing across Arizona.',
    icon: StarIcon,
  },
  {
    name: '24/7 Emergency Service',
    description: 'Round-the-clock availability for urgent roofing emergencies and repairs.',
    icon: ClockIcon,
  },
  {
    name: 'Competitive Pricing',
    description: 'Fair, transparent pricing with no hidden fees or surprise charges.',
    icon: CurrencyDollarIcon,
  },
  {
    name: 'Local Expertise',
    description: 'Deep knowledge of Arizona weather conditions and building requirements.',
    icon: MapPinIcon,
  },
  {
    name: 'Satisfaction Guaranteed',
    description: '100% satisfaction guarantee on all our work with comprehensive warranties.',
    icon: UserGroupIcon,
  },
];

export default function WhyChooseUs() {
  return (
    <div className="py-24 sm:py-32 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Why Choose Us</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Arizona's Trusted Flat Roofing Experts
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            With over 15 years of experience serving commercial properties across Arizona, we've built our reputation on quality workmanship, reliable service, and customer satisfaction.
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon className="h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Stats Section */}
        <div className="mt-24">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600">500+</div>
              <div className="mt-2 text-sm font-medium text-gray-900">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600">15+</div>
              <div className="mt-2 text-sm font-medium text-gray-900">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600">24/7</div>
              <div className="mt-2 text-sm font-medium text-gray-900">Emergency Service</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600">100%</div>
              <div className="mt-2 text-sm font-medium text-gray-900">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
