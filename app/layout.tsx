import type { Metadata } from 'next'
import { Inter, Pacifico } from 'next/font/google'
import { Geist, Geist_Mono } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import GoldStyles from '../components/GoldStyles'
import WhatsAppButton from '../components/WhatsAppButton'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-pacifico',
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com';

export const metadata: Metadata = {
  title: {
    default: 'The Nail Lobby | Luxury Nail Salon in Rajnagar Extension, Ghaziabad',
    template: '%s | The Nail Lobby',
  },
  description:
    'The Nail Lobby is Rajnagar\'s premium luxury nail salon in Ghaziabad. Book manicures, gel extensions, nail art, pedicures & bridal packages. Walk-ins welcome. Call +91 99993 45615.',
  keywords: [
    'nail salon Rajnagar Extension',
    'nail studio Ghaziabad',
    'manicure Ghaziabad',
    'gel nails Rajnagar',
    'nail art Ghaziabad',
    'pedicure Rajnagar Extension',
    'bridal nails Ghaziabad',
    'The Nail Lobby',
    'luxury nail salon',
    'nail extensions Ghaziabad',
  ],
  authors: [{ name: 'The Nail Lobby' }],
  creator: 'The Nail Lobby',
  publisher: 'The Nail Lobby',
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteUrl,
    siteName: 'The Nail Lobby',
    title: 'The Nail Lobby | Luxury Nail Salon in Rajnagar Extension, Ghaziabad',
    description:
      'Experience luxury nail care at The Nail Lobby, Rajnagar\'s best nail studio. Manicures, gel extensions, nail art, pedicures & bridal packages. Book now on WhatsApp!',
    images: [
      {
        url: 'https://static.readdy.ai/image/a63ec0b6f34fb9b66d50256c348ce6a2/a9944a172bb43d11037b1a5285677ec0.png',
        width: 1200,
        height: 630,
        alt: 'The Nail Lobby – Luxury Nail Salon Rajnagar Ghaziabad',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Nail Lobby | Luxury Nail Salon in Rajnagar Extension, Ghaziabad',
    description:
      "Rajnagar's premium nail studio. Manicures, gel extensions, nail art & bridal packages. Book on WhatsApp: +91 99993 45615.",
    images: [
      'https://static.readdy.ai/image/a63ec0b6f34fb9b66d50256c348ce6a2/a9944a172bb43d11037b1a5285677ec0.png',
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'NailSalon',
      '@id': `${siteUrl}/#nailsalon`,
      name: 'The Nail Lobby',
      url: siteUrl,
      logo: 'https://static.readdy.ai/image/a63ec0b6f34fb9b66d50256c348ce6a2/15fc10fb8ab5e40af1f8296f96cfb897.png',
      image: 'https://static.readdy.ai/image/a63ec0b6f34fb9b66d50256c348ce6a2/a9944a172bb43d11037b1a5285677ec0.png',
      description:
        "Rajnagar's premium luxury nail salon offering manicures, gel extensions, nail art, pedicures, and bridal packages in Ghaziabad, Uttar Pradesh.",
      telephone: '+919999345615',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Shop No. 15, Ground Floor, Rajnagar Extension',
        addressLocality: 'Ghaziabad',
        addressRegion: 'Uttar Pradesh',
        postalCode: '201017',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 28.625293,
        longitude: 77.431546,
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '10:00',
          closes: '20:00',
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Sunday'],
          opens: '11:00',
          closes: '18:00',
        },
      ],
      priceRange: '₹₹',
      currenciesAccepted: 'INR',
      paymentAccepted: 'Cash, UPI, Credit Card, Debit Card',
      sameAs: [
        'https://instagram.com/thenaillobbyofficial',
        'https://wa.me/919999345615',
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Nail Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: 'Acrylic Nail Extension', description: 'Acrylic nail extension – 75 minutes' },
            price: '899', priceCurrency: 'INR',
          },
          {
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: 'Gel Extension', description: 'Gel nail extension – 90 minutes' },
            price: '1099', priceCurrency: 'INR',
          },
          {
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: 'Polygel', description: 'Polygel nail extension – 100 minutes' },
            price: '1299', priceCurrency: 'INR',
          },
          {
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: 'Overlay (Gel/Acrylic)', description: 'Gel or acrylic overlay over natural nails for strength & growth – 90 minutes' },
            price: '799', priceCurrency: 'INR',
          },
          {
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: 'Refill', description: 'Nail refill service – 60 minutes' },
            price: '599', priceCurrency: 'INR',
          },
          {
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: 'Gellicure', description: 'Long-lasting gel nail polish over natural nails with top coat – 30 minutes' },
            price: '499', priceCurrency: 'INR',
          },
          {
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: 'Russian Manicure', description: 'Russian manicure – 45 minutes' },
            price: '599', priceCurrency: 'INR',
          },
          {
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: 'No Tip Extension', description: 'No tip nail extension – 100 minutes' },
            price: '1299', priceCurrency: 'INR',
          },
          {
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: 'No Glue Extension', description: 'No glue nail extension – 75 minutes' },
            price: '1299', priceCurrency: 'INR',
          },
          {
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: 'Soft Gel Extension', description: 'Soft gel nail extension – 75 minutes' },
            price: '1299', priceCurrency: 'INR',
          },
          {
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: 'Temporary Nail Extension', description: 'Temporary nail extension – 90 minutes' },
            price: '499', priceCurrency: 'INR',
          },
          {
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: 'Custom Press Ons', description: 'Custom press-on nails' },
            price: '499', priceCurrency: 'INR',
          },
          {
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: 'Bridal Nails', description: 'Bridal nail package – 100 minutes' },
            price: '999', priceCurrency: 'INR',
          },
          {
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: 'Toe Nail Extension', description: 'Toe nail extension – 60 minutes' },
            price: '799', priceCurrency: 'INR',
          },
          {
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: 'Toe Overlay', description: 'Toe overlay – 45 minutes' },
            price: '599', priceCurrency: 'INR',
          },
          {
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: 'Toe Gel Nail Paint', description: 'Toe gel nail paint – 30 minutes' },
            price: '499', priceCurrency: 'INR',
          },
        ],
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: 'The Nail Lobby',
      description: "Rajnagar's best nail studio – luxury nail care in Ghaziabad",
      publisher: { '@id': `${siteUrl}/#nailsalon` },
      inLanguage: 'en-IN',
    },
    {
      '@type': 'WebPage',
      '@id': `${siteUrl}/#webpage`,
      url: siteUrl,
      name: 'The Nail Lobby | Luxury Nail Salon in Rajnagar Extension, Ghaziabad',
      isPartOf: { '@id': `${siteUrl}/#website` },
      about: { '@id': `${siteUrl}/#nailsalon` },
      description:
        "Book manicures, gel extensions, nail art, pedicures & bridal packages at The Nail Lobby – Rajnagar's premium nail salon in Ghaziabad.",
      inLanguage: 'en-IN',
      dateModified: '2026-04-17',
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <Script
          id="schema-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <GoldStyles />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  )
}
