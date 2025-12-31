export type AffiliateLink = {
  vendor: 'amazon' | 'shelly' | 'aqara' | 'tuya' |'sonoff'
  url: string
}

export type Product = {
  name: string
  brand?: string
  description: string
  affiliateLinks: AffiliateLink[]
}

export const lightingProducts:Product[] =  [
  {
    name: 'Adaptive LED Light Strip',
    brand: 'Aqara',
    description:
      'Flexible lighting designed to adapt to mood, time, and activity with seamless automation.',
    affiliateLinks: [
      {
        vendor: 'amazon',
        url: 'https://www.amazon.com/your-affiliate-link',
      },
    ],
  },
  {
    name: 'Smart Wall Switch',
    brand: 'Shelly',
    description:
      'Reliable wall control that integrates into advanced lighting scenes and schedules.',
    affiliateLinks: [
      {
        vendor: 'shelly',
        url: 'https://www.shelly.com/affiliate-link',
      },
      {
        vendor: 'amazon',
        url: 'https://www.amazon.com/alternate-link',
      },
    ],
  },
]


export const securityProducts:Product[] = [
  {
    name: 'Indoor Security Camera',
    brand: 'Aqara',
    description:
      'Discreet monitoring with strong privacy controls and system-wide integration.',
       affiliateLinks: [
      {
        vendor: 'shelly',
        url: 'https://www.shelly.com/affiliate-link',
      },
    ],
  },
]
