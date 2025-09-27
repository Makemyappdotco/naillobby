
import type { Metadata } from 'next'
import { Inter, Pacifico } from 'next/font/google'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import GoldStyles from '../components/GoldStyles'
import Nail from "./nail.png"
import Head from 'next/head'

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

export const metadata: Metadata = {
  title: "The Nail Lobby",
  description: "Luxury care, flawless finish, designs that turn heads. Experience the ultimate in nail artistry and pampering.",
  openGraph: {
    title: "The Nail Lobby",
    description:
      "Luxury care, flawless finish, designs that turn heads. Experience the ultimate in nail artistry and pampering",
    url: "https://www.thenaillobby.com/",
    siteName: "The Nail Lobby",
    images: [
      {
        url: Nail.src,
        width: Nail.width,
        height: Nail.height,
        alt: "",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Nail Lobby",
    description:
      "Luxury care, flawless finish, designs that turn heads. Experience the ultimate in nail artistry and pampering",
    images: [
      {
        url: Nail.src,
        width: Nail.width,
        height: Nail.height,
        alt: "The Nail Lobby",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet" />
      </Head>
      <body className={inter.className}>
        <GoldStyles />
        {children}
        <a href="https://wa.me/919999345615?text=Hi%20The%20Nail%20Lobby" className="wa-float">Book Now</a>
      </body>
    </html>
  )
}
