import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: 'Nail Courses in Ghaziabad | The Nail Lobby Academy' },
  description:
    'One-on-one nail art courses in Raj Nagar Extension, Ghaziabad. Basic Nail Mastery (₹18,000) and Advanced Nail Mastery (₹21,000). 2 hours a day, hands-on practice on live models, certificate on completion.',
  alternates: { canonical: '/academy' },
  openGraph: {
    title: 'Nail Courses in Ghaziabad | The Nail Lobby Academy',
    description: 'One-on-one nail courses with hands-on practice, premium products and a certificate. 2 hours a day, flexible timing.',
    url: '/academy',
  },
};

export default function AcademyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
