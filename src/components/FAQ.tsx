'use client';

import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How often should I have my commercial roof inspected?",
      answer: "We recommend quarterly inspections for most commercial properties, with additional checks after severe weather events. Our preventive maintenance programs include regular inspections that help identify potential issues before they become costly problems."
    },
    {
      question: "What's the difference between roof repair and roof replacement?",
      answer: "Roof repair addresses specific localized issues, while replacement involves removing the entire roof system. We always evaluate the roof's condition, age, and repair history to recommend the most cost-effective solution. Often, targeted repairs with proper maintenance can extend roof life significantly."
    },
    {
      question: "How long do commercial flat roofs typically last?",
      answer: "With proper maintenance, commercial flat roofs can last 20-30 years. EPDM membranes typically last 20-25 years, TPO 15-20 years, and modified bitumen 15-20 years. Regular maintenance and prompt repairs are key to maximizing roof life."
    },
    {
      question: "Can roof coatings extend the life of my existing roof?",
      answer: "Yes! High-quality roof coatings can extend roof life by 5-10 years while providing energy savings. We use premium reflective coatings that reduce building temperature, lower energy costs, and protect the underlying membrane from UV damage."
    },
    {
      question: "What should I do if I have a roof leak emergency?",
      answer: "Call us immediately at (602) 555-0123 for 24/7 emergency service. We'll dispatch a team to assess the situation and provide temporary protection to prevent further damage. Our emergency response team can typically arrive within 2 hours."
    },
    {
      question: "Do you provide warranties on your work?",
      answer: "Yes, we provide comprehensive warranties on all our work. Installation warranties range from 10-20 years depending on the system, and we also offer maintenance warranties for our service programs. All warranties are fully transferable and backed by manufacturer guarantees."
    },
    {
      question: "How do I know if my roof needs repair or replacement?",
      answer: "Signs include water stains, ponding water, membrane blistering, and increased energy bills. Our free inspection will evaluate your roof's condition and provide a detailed assessment with photos and recommendations. We'll always recommend the most cost-effective solution."
    },
    {
      question: "What roofing materials work best in Arizona's climate?",
      answer: "Arizona's extreme heat and UV exposure require materials designed for harsh climates. TPO and EPDM membranes work well, as do reflective coatings. We consider your building's specific needs, usage, and budget to recommend the best system for Arizona conditions."
    },
    {
      question: "Can you work around my business operations?",
      answer: "Absolutely! We understand that business operations must continue during roof work. We coordinate with your schedule, work during off-hours when possible, and implement safety measures to minimize disruption. Most maintenance work can be completed without business interruption."
    },
    {
      question: "Do you handle insurance claims for roof damage?",
      answer: "Yes, we work directly with insurance companies and can help document damage, provide estimates, and coordinate repairs. Our team understands insurance processes and can help ensure you receive fair compensation for covered damage."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-24 sm:py-32 bg-slate-50">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-6 text-xl text-slate-600">
            Get answers to common questions about commercial roofing from Arizona's trusted experts
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-slate-200">
              <button
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-slate-50 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-semibold text-slate-900 pr-4">
                  {faq.question}
                </h3>
                <ChevronDownIcon
                  className={`w-5 h-5 text-slate-500 transform transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-slate-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              Our roofing experts are here to help. Get personalized answers about your specific 
              roofing needs and learn how we can protect your commercial property.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Ask Our Experts
              </a>
              <a
                href="tel:6025550123"
                className="inline-flex items-center justify-center px-8 py-3 text-lg font-semibold text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
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
