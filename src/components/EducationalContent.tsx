import { ExclamationTriangleIcon, LightBulbIcon, ShieldCheckIcon, ChartBarIcon } from '@heroicons/react/24/outline';

export default function EducationalContent() {
  const commonProblems = [
    {
      icon: ExclamationTriangleIcon,
      title: "Membrane Cracking & Splitting",
      problem: "UV exposure and thermal expansion cause membrane failure",
      cost: "$25,000+ repair costs",
      solution: "Professional coating application extends membrane life 5-8 years"
    },
    {
      icon: ExclamationTriangleIcon,
      title: "Ponding Water Issues",
      problem: "Poor drainage leads to standing water and structural damage",
      cost: "$40,000+ structural repairs",
      solution: "Drainage system design and installation prevents water damage"
    },
    {
      icon: ExclamationTriangleIcon,
      title: "Energy Loss Through Roof",
      problem: "Poor insulation and air leaks increase cooling costs",
      cost: "$8,000+ annual energy waste",
      solution: "Energy-efficient roof systems reduce costs by 20-30%"
    },
    {
      icon: ExclamationTriangleIcon,
      title: "Flashing & Seam Failures",
      problem: "Weather exposure causes critical joint failures",
      cost: "$15,000+ water damage repairs",
      solution: "Expert flashing installation prevents leaks at vulnerable points"
    }
  ];

  const solutions = [
    {
      icon: ShieldCheckIcon,
      title: "Preventive Maintenance Programs",
      description: "Regular inspections and maintenance prevent 90% of major roof problems",
      benefits: ["Extend roof life 2-3x", "Reduce emergency repairs", "Lower insurance premiums", "Energy savings"]
    },
    {
      icon: LightBulbIcon,
      title: "Energy-Efficient Roof Coatings",
      description: "Reflective coatings reduce building temperature and energy consumption",
      benefits: ["15-25% energy savings", "Improved comfort", "Reduced HVAC wear", "Environmental benefits"]
    },
    {
      icon: ChartBarIcon,
      title: "Roof Asset Management",
      description: "Data-driven approach to maximize roof performance and minimize costs",
      benefits: ["Predictive maintenance", "Cost optimization", "Extended warranties", "ROI tracking"]
    }
  ];

  return (
    <div className="py-24 sm:py-32 bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Why Commercial Roofs Fail
            <span className="block text-blue-600">And How to Prevent It</span>
          </h2>
          <p className="mt-6 text-xl text-slate-600 max-w-3xl mx-auto">
            Understanding common roofing problems is the first step to protecting your investment. 
            Learn from our 15+ years of experience helping Arizona businesses avoid costly roof failures.
          </p>
        </div>

        {/* Common Problems Section */}
        <div className="mb-24">
          <h3 className="text-3xl font-bold text-center text-slate-900 mb-12">
            The 4 Most Expensive Roof Problems We See
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {commonProblems.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg border border-slate-200 p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-red-600" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-slate-900 mb-3">{item.title}</h4>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm font-medium text-red-700 mb-1">The Problem:</p>
                        <p className="text-slate-600">{item.problem}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-red-700 mb-1">Typical Cost:</p>
                        <p className="text-lg font-semibold text-red-600">{item.cost}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-green-700 mb-1">Our Solution:</p>
                        <p className="text-slate-600">{item.solution}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Solutions Section */}
        <div>
          <h3 className="text-3xl font-bold text-center text-slate-900 mb-12">
            Proven Solutions That Save You Money
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {solutions.map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-200">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-slate-900 mb-3">{item.title}</h4>
                  <p className="text-slate-600">{item.description}</p>
                </div>
                <div className="space-y-2">
                  {item.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-slate-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Don't Wait for a Roof Emergency</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Most roof problems can be prevented with proper maintenance. Get a free inspection 
              and learn how to protect your property investment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 text-lg font-semibold text-blue-600 bg-white rounded-lg hover:bg-gray-50 transition-colors"
              >
                Schedule Free Inspection
              </a>
              <a
                href="tel:6025550123"
                className="inline-flex items-center justify-center px-8 py-3 text-lg font-semibold text-white border-2 border-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                Call (602) 555-0123
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
