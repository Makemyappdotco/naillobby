import type { Metadata, Viewport } from 'next';
import '@fontsource/playfair-display/600.css';
import '@fontsource/playfair-display/700.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import 'remixicon/fonts/remixicon.css';
import './globals.css';
import WhatsAppButton from '../components/WhatsAppButton';
import Reveal from '../components/Reveal';
import {
  SITE_URL,
  PHONE_TEL,
  ADDRESS,
  INSTAGRAM_URL,
  WA_NUMBER,
  allServices,
} from '../lib/site';

const OG_IMAGE = `${SITE_URL}/media/og.jpg`;

export const metadata: Metadata = {
  title: {
    default: 'The Nail Lobby | Nail Salon in Raj Nagar Extension, Ghaziabad',
    template: '%s | The Nail Lobby',
  },
  description:
    "The Nail Lobby is Raj Nagar Extension's nail studio in Ghaziabad. Gel and acrylic extensions, gellicure, Russian manicure, nail art and bridal nails. Open daily 11 AM to 8:30 PM. Book on WhatsApp: +91 99993 45615.",
  keywords: [
    'nail salon Raj Nagar Extension',
    'nail studio Ghaziabad',
    'nail extensions Ghaziabad',
    'gel nails Rajnagar',
    'nail art Ghaziabad',
    'bridal nails Ghaziabad',
    'The Nail Lobby',
  ],
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    siteName: 'The Nail Lobby',
    title: 'The Nail Lobby | Nail Salon in Raj Nagar Extension, Ghaziabad',
    description:
      'Gel and acrylic extensions, gellicure, nail art and bridal nails in Raj Nagar Extension, Ghaziabad. Book on WhatsApp.',
    images: [{ url: OG_IMAGE, width: 900, height: 900, alt: 'The Nail Lobby, nail salon in Ghaziabad' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Nail Lobby | Nail Salon in Raj Nagar Extension, Ghaziabad',
    description: 'Gel and acrylic extensions, gellicure, nail art and bridal nails. Book on WhatsApp: +91 99993 45615.',
    images: [OG_IMAGE],
  },
  icons: { icon: '/media/logo-icon.png', apple: '/media/logo-icon.png' },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#ffffff',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'NailSalon',
      '@id': `${SITE_URL}/#nailsalon`,
      name: 'The Nail Lobby',
      url: SITE_URL,
      logo: `${SITE_URL}/media/logo.png`,
      image: OG_IMAGE,
      description:
        'Nail studio in Raj Nagar Extension, Ghaziabad offering nail extensions, gellicure, Russian manicure, nail art, bridal nails and a nail academy.',
      telephone: PHONE_TEL,
      address: {
        '@type': 'PostalAddress',
        streetAddress: `${ADDRESS.line1}, Raj Nagar Extension`,
        addressLocality: 'Ghaziabad',
        addressRegion: ADDRESS.region,
        postalCode: ADDRESS.postalCode,
        addressCountry: 'IN',
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '11:00',
          closes: '20:30',
        },
      ],
      priceRange: '₹₹',
      currenciesAccepted: 'INR',
      paymentAccepted: 'Cash, UPI, Credit Card, Debit Card',
      sameAs: [INSTAGRAM_URL, `https://wa.me/${WA_NUMBER}`],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Nail Services',
        itemListElement: allServices.map((s) => ({
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: s.name,
            description: `${s.benefit}${s.duration !== 'Custom' ? ` (${s.duration})` : ''}`,
          },
          price: String(s.price),
          priceCurrency: 'INR',
        })),
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'The Nail Lobby',
      publisher: { '@id': `${SITE_URL}/#nailsalon` },
      inLanguage: 'en-IN',
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" suppressHydrationWarning>
      <head>
        {/* Marks JS as available before first paint so scroll reveal doesn't flash */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
        <WhatsAppButton />
        <Reveal />
      </body>
    </html>
  );
}
