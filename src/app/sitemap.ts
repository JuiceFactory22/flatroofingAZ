import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.arizonaflatroof.com';
  
  // Arizona cities for location pages
  const arizonaCities = [
    'phoenix',
    'tucson', 
    'mesa',
    'chandler',
    'scottsdale',
    'glendale',
    'gilbert',
    'tempe',
    'peoria',
    'surprise',
    'yuma',
    'avondale',
    'goodyear',
    'flagstaff',
    'buckeye',
    'lake-havasu-city',
    'casa-grande',
    'sierra-vista',
    'maricopa',
    'prescott'
  ];

  // Services pages
  const services = [
    'roof-coatings',
    'roof-resurfacing', 
    'commercial-maintenance',
    'roof-repairs',
    'tpo-roofing',
    'epdm-roofing',
    'emergency-services'
  ];

  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/reviews`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/quote`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    }
  ];

  // Service pages
  const servicePages = services.map(service => ({
    url: `${baseUrl}/services/${service}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Location pages
  const locationPages = arizonaCities.map(city => ({
    url: `${baseUrl}/locations/${city}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...servicePages, ...locationPages];
}
