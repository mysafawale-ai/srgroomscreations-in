import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://safawalamumbai.com'
  const currentDate = new Date().toISOString()
  
  // High-priority main service pages
  const mainPages = [
    'safa-in-mumbai',
    'turban-in-mumbai',
    'wedding-safa-in-mumbai',
    'groom-safa-in-mumbai',
    'dulha-safa-in-mumbai',
    'rajasthani-safa-in-mumbai',
    'pagdi-in-mumbai',
  ]

  // Location-based service pages (high local SEO value)
  const locationPages = [
    'andheri-safa-service',
    'bandra-safa-service',
    'borivali-safa-service',
    'chembur-safa-service',
    'dadar-safa-service',
    'ghatkopar-safa-service',
    'goregaon-safa-service',
    'juhu-safa-service',
    'kalyan-dombivli-safa-service',
    'kandivali-safa-service',
    'khar-safa-service',
    'kharghar-safa-service',
    'kurla-safa-service',
    'malad-safa-service',
    'mulund-safa-service',
    'navi-mumbai-safa-service',
    'nerul-safa-service',
    'panvel-safa-service',
    'parel-safa-service',
    'powai-safa-service',
    'santacruz-safa-service',
    'south-mumbai-safa-service',
    'thane-safa-service',
    'vashi-safa-service',
    'vile-parle-safa-service',
    'worli-safa-service',
  ]

  // Color-based safa pages
  const colorPages = [
    'red-safa-in-mumbai',
    'blue-safa-in-mumbai',
    'golden-safa-in-mumbai',
    'white-safa-in-mumbai',
    'pink-safa-in-mumbai',
    'green-safa-in-mumbai',
    'maroon-safa-in-mumbai',
    'cream-safa-in-mumbai',
    'silver-safa-in-mumbai',
    'purple-safa-in-mumbai',
    'orange-safa-in-mumbai',
    'peach-safa-in-mumbai',
    'black-safa-in-mumbai',
  ]

  // Fabric/Style-based pages
  const fabricStylePages = [
    'silk-safa-in-mumbai',
    'velvet-safa-in-mumbai',
    'cotton-safa-in-mumbai',
    'satin-safa-in-mumbai',
    'brocade-safa-in-mumbai',
    'bandhej-safa-in-mumbai',
    'leheriya-safa-in-mumbai',
    'gota-patti-safa-in-mumbai',
    'embroidered-safa-in-mumbai',
    'designer-safa-in-mumbai',
    'traditional-safa-in-mumbai',
    'modern-safa-in-mumbai',
    'royal-wedding-turban-in-mumbai',
  ]

  // Regional style pages
  const regionalPages = [
    'marwari-safa-in-mumbai',
    'jodhpuri-safa-in-mumbai',
    'gujarati-safa-in-mumbai',
    'punjabi-safa-in-mumbai',
    'sindhi-safa-in-mumbai',
    'marathi-pheta-in-mumbai',
    'sikh-turban-in-mumbai',
  ]

  // Ceremony/Function pages
  const ceremonyPages = [
    'engagement-safa-in-mumbai',
    'haldi-safa-in-mumbai',
    'mehendi-safa-in-mumbai',
    'mehndi-function-safa-in-mumbai',
    'sangeet-safa-in-mumbai',
    'reception-safa-in-mumbai',
    'tilak-ceremony-safa-in-mumbai',
    'phera-ceremony-turban-in-mumbai',
    'vidai-turban-service-in-mumbai',
    'mundan-ceremony-turban-in-mumbai',
  ]

  // Festival pages
  const festivalPages = [
    'festival-safa-in-mumbai',
    'diwali-turban-in-mumbai',
    'holi-turban-in-mumbai',
    'navratri-turban-in-mumbai',
  ]

  // Family member pages
  const familyPages = [
    'barati-safa-in-mumbai',
    'baarat-safa-in-mumbai',
    'ladkewale-safa-in-mumbai',
    'ladkiwale-safa-in-mumbai',
    'father-of-groom-turban-in-mumbai',
    'brother-of-groom-safa-in-mumbai',
    'uncle-turban-in-mumbai',
    'guest-turban-service-in-mumbai',
    'family-safa-service-in-mumbai',
    'group-safa-service-in-mumbai',
  ]

  // International/NRI/Destination wedding pages
  const internationalPages = [
    'destination-wedding-safa-in-mumbai',
    'destination-wedding-turban',
    'nri-wedding-safa-in-mumbai',
    'foreigner-turban-experience-in-mumbai',
    'barati-safa-tying-for-international-wedding',
    'custom-wedding-turban-for-overseas-weddings',
    'hand-tied-turban-for-international-wedding',
    'premium-wedding-safa-for-international-groom',
    'royal-groom-turban-for-destination-wedding',
    'wedding-pagdi-for-destination-wedding',
    'traditional-indian-wedding-turban-for-groom',
    'luxury-wedding-turban-for-groom',
    'designer-wedding-turban',
    'beach-wedding-safa-in-mumbai',
  ]

  // Service-related pages
  const servicePages = [
    'safa-tying-service-in-mumbai',
    'turban-tying-service-in-mumbai',
    'wedding-safa-tying-in-mumbai',
    'same-day-safa-service-in-mumbai',
    'mumbai-airport-turban-service',
    'safa-on-rent-in-mumbai',
    'turban-rental-near-me-in-mumbai',
    'pagdi-rental-in-mumbai',
    'buy-safa-in-mumbai',
    'safa-shop-in-mumbai',
    'safa-shop-near-me-in-mumbai',
    'safa-price-in-mumbai',
    'photo-shoot-safa-in-mumbai',
    'corporate-event-safa-in-mumbai',
    'corporate-event-turban-in-mumbai',
  ]

  // Matching/Coordination pages
  const matchingPages = [
    'sherwani-matching-safa-in-mumbai',
    'jodhpuri-matching-safa-in-mumbai',
    'kurta-matching-safa-in-mumbai',
    'sehra-safa-in-mumbai',
    'sehra-in-mumbai',
  ]

  // Alternative keyword pages (pagdi, pagri, feta variations)
  const alternativePages = [
    'pagdi-for-groom-in-mumbai',
    'pagdi-for-wedding-in-mumbai',
    'pagdi-bandhai-in-mumbai',
    'pagdi-wala-in-mumbai',
    'pagadi-in-mumbai',
    'paghdi-in-mumbai',
    'pagri-in-mumbai',
    'safa-pagdi-in-mumbai',
    'safa-bandhai-in-mumbai',
    'safa-wala-in-mumbai',
    'safa-for-groom-in-mumbai',
    'groom-turban-in-mumbai',
    'turban-for-groom-in-mumbai',
    'wedding-pagdi-in-mumbai',
    'feta-in-mumbai',
    'pheta-tying-in-mumbai',
  ]

  // Homepage - highest priority
  const homepage: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
  ]

  // Main pages - very high priority (0.95)
  const mainPagesSitemap: MetadataRoute.Sitemap = mainPages.map((page) => ({
    url: `${baseUrl}/${page}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.95,
  }))

  // Location pages - high priority (0.9) - great for local SEO
  const locationPagesSitemap: MetadataRoute.Sitemap = locationPages.map((page) => ({
    url: `${baseUrl}/${page}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  // Color pages - high priority (0.85)
  const colorPagesSitemap: MetadataRoute.Sitemap = colorPages.map((page) => ({
    url: `${baseUrl}/${page}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }))

  // Fabric/Style pages - good priority (0.8)
  const fabricStylePagesSitemap: MetadataRoute.Sitemap = fabricStylePages.map((page) => ({
    url: `${baseUrl}/${page}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Regional pages - good priority (0.8)
  const regionalPagesSitemap: MetadataRoute.Sitemap = regionalPages.map((page) => ({
    url: `${baseUrl}/${page}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Ceremony pages - good priority (0.8)
  const ceremonyPagesSitemap: MetadataRoute.Sitemap = ceremonyPages.map((page) => ({
    url: `${baseUrl}/${page}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Festival pages - seasonal priority (0.75)
  const festivalPagesSitemap: MetadataRoute.Sitemap = festivalPages.map((page) => ({
    url: `${baseUrl}/${page}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }))

  // Family pages - good priority (0.8)
  const familyPagesSitemap: MetadataRoute.Sitemap = familyPages.map((page) => ({
    url: `${baseUrl}/${page}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // International pages - good priority (0.8)
  const internationalPagesSitemap: MetadataRoute.Sitemap = internationalPages.map((page) => ({
    url: `${baseUrl}/${page}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Service pages - good priority (0.8)
  const servicePagesSitemap: MetadataRoute.Sitemap = servicePages.map((page) => ({
    url: `${baseUrl}/${page}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // Matching pages - medium priority (0.75)
  const matchingPagesSitemap: MetadataRoute.Sitemap = matchingPages.map((page) => ({
    url: `${baseUrl}/${page}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }))

  // Alternative keyword pages - medium priority (0.7)
  const alternativePagesSitemap: MetadataRoute.Sitemap = alternativePages.map((page) => ({
    url: `${baseUrl}/${page}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [
    ...homepage,
    ...mainPagesSitemap,
    ...locationPagesSitemap,
    ...colorPagesSitemap,
    ...fabricStylePagesSitemap,
    ...regionalPagesSitemap,
    ...ceremonyPagesSitemap,
    ...festivalPagesSitemap,
    ...familyPagesSitemap,
    ...internationalPagesSitemap,
    ...servicePagesSitemap,
    ...matchingPagesSitemap,
    ...alternativePagesSitemap,
  ]
}
