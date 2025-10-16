'use client';

import { useState } from 'react';
import { PhoneIcon, EnvelopeIcon, UserIcon, BuildingOffice2Icon } from '@heroicons/react/24/outline';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    serviceType: '',
    propertyType: '',
    roofSize: '',
    urgency: '',
    message: '',
    address: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        serviceType: '',
        propertyType: '',
        roofSize: '',
        urgency: '',
        message: '',
        address: ''
      });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <div className="rounded-lg bg-gradient-to-br from-green-50 to-emerald-50 p-8 text-center border border-green-200">
        <div className="text-green-600 text-6xl mb-4">✓</div>
        <h3 className="text-2xl font-bold text-green-900 mb-2">Success! Your Free Inspection is Scheduled</h3>
        <p className="text-green-700 mb-4">
          Thank you for choosing Arizona Flat Roof Specialists! Our expert will contact you within 2 hours to schedule your complimentary roof inspection.
        </p>
        <div className="bg-white rounded-lg p-4 border border-green-200">
          <h4 className="font-semibold text-green-900 mb-2">What happens next?</h4>
          <ul className="text-sm text-green-700 space-y-1">
            <li>• Our expert will call you within 2 hours</li>
            <li>• We'll schedule a convenient inspection time</li>
            <li>• Receive a detailed roof assessment report</li>
            <li>• Get your free quote with no obligations</li>
          </ul>
        </div>
        <p className="text-sm text-green-600 mt-4">
          Questions? Call us at <strong>(602) 555-0123</strong>
        </p>
      </div>
    );
  }

  return (
    <div>
      {/* Value Proposition Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-6 text-white mb-8">
        <h3 className="text-2xl font-bold mb-2">Get Your FREE Roof Inspection</h3>
        <p className="text-blue-100 mb-4">
          Don't wait for expensive repairs. Our certified experts will assess your roof and provide a detailed report with no obligation.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-green-400">✓</span>
            <span>Free Inspection</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-400">✓</span>
            <span>No Obligations</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-400">✓</span>
            <span>Expert Analysis</span>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
      {/* Personal Information */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium leading-6 text-gray-900">
            First Name *
          </label>
          <div className="mt-2">
            <div className="relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <UserIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                name="firstName"
                id="firstName"
                required
                value={formData.firstName}
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                placeholder="John"
              />
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="lastName" className="block text-sm font-medium leading-6 text-gray-900">
            Last Name *
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="lastName"
              id="lastName"
              required
              value={formData.lastName}
              onChange={handleChange}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              placeholder="Doe"
            />
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
            Email Address *
          </label>
          <div className="mt-2">
            <div className="relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <EnvelopeIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="email"
                name="email"
                id="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                placeholder="john@company.com"
              />
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">
            Phone Number *
          </label>
          <div className="mt-2">
            <div className="relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <PhoneIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="tel"
                name="phone"
                id="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                placeholder="(602) 555-0123"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Company Information */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="company" className="block text-sm font-medium leading-6 text-gray-900">
            Company Name
          </label>
          <div className="mt-2">
            <div className="relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <BuildingOffice2Icon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                name="company"
                id="company"
                value={formData.company}
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                placeholder="Your Company"
              />
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="address" className="block text-sm font-medium leading-6 text-gray-900">
            Property Address
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="address"
              id="address"
              value={formData.address}
              onChange={handleChange}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              placeholder="123 Main St, Phoenix, AZ"
            />
          </div>
        </div>
      </div>

      {/* Service Information */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="serviceType" className="block text-sm font-medium leading-6 text-gray-900">
            Service Needed *
          </label>
          <div className="mt-2">
            <select
              id="serviceType"
              name="serviceType"
              required
              value={formData.serviceType}
              onChange={handleChange}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
            >
              <option value="">Select a service</option>
              <option value="roof-coating">Roof Coating</option>
              <option value="roof-resurfacing">Roof Resurfacing</option>
              <option value="roof-repair">Roof Repair</option>
              <option value="roof-maintenance">Roof Maintenance</option>
              <option value="tpo-installation">TPO Installation</option>
              <option value="epdm-installation">EPDM Installation</option>
              <option value="emergency-repair">Emergency Repair</option>
              <option value="inspection">Roof Inspection</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="propertyType" className="block text-sm font-medium leading-6 text-gray-900">
            Property Type *
          </label>
          <div className="mt-2">
            <select
              id="propertyType"
              name="propertyType"
              required
              value={formData.propertyType}
              onChange={handleChange}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
            >
              <option value="">Select property type</option>
              <option value="office-building">Office Building</option>
              <option value="retail-center">Retail Center</option>
              <option value="warehouse">Warehouse</option>
              <option value="manufacturing">Manufacturing Facility</option>
              <option value="medical">Medical Facility</option>
              <option value="school">School/Educational</option>
              <option value="apartment">Apartment Complex</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="roofSize" className="block text-sm font-medium leading-6 text-gray-900">
            Approximate Roof Size
          </label>
          <div className="mt-2">
            <select
              id="roofSize"
              name="roofSize"
              value={formData.roofSize}
              onChange={handleChange}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
            >
              <option value="">Select roof size</option>
              <option value="under-5000">Under 5,000 sq ft</option>
              <option value="5000-10000">5,000 - 10,000 sq ft</option>
              <option value="10000-25000">10,000 - 25,000 sq ft</option>
              <option value="25000-50000">25,000 - 50,000 sq ft</option>
              <option value="over-50000">Over 50,000 sq ft</option>
              <option value="unknown">Not sure</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="urgency" className="block text-sm font-medium leading-6 text-gray-900">
            Urgency
          </label>
          <div className="mt-2">
            <select
              id="urgency"
              name="urgency"
              value={formData.urgency}
              onChange={handleChange}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
            >
              <option value="">Select urgency</option>
              <option value="emergency">Emergency - Need help now</option>
              <option value="urgent">Urgent - Within a week</option>
              <option value="normal">Normal - Within a month</option>
              <option value="planning">Planning - Future project</option>
            </select>
          </div>
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium leading-6 text-gray-900">
          Additional Details
        </label>
        <div className="mt-2">
          <textarea
            rows={4}
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
            placeholder="Please provide any additional details about your roofing needs, current issues, or questions you may have..."
          />
        </div>
      </div>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="flex w-full justify-center rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4 text-lg font-semibold text-white shadow-lg hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105"
        >
          {isSubmitting ? (
            <span className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Submitting...
            </span>
          ) : (
            <span className="flex items-center gap-2">
              Get My FREE Roof Inspection
              <span className="text-blue-200">→</span>
            </span>
          )}
        </button>
        <div className="mt-4 text-center">
          <p className="text-sm text-slate-600">
            * Required fields. We'll contact you within 2 hours.
          </p>
          <p className="text-xs text-slate-500 mt-1">
            🔒 Your information is secure and will never be shared.
          </p>
        </div>
      </div>
      </form>
    </div>
  );
}
