import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ServicesMarquee from '../components/ServicesMarquee';
import WhyChooseUs from '../components/WhyChooseUs';
import ServicesPreview from '../components/ServicesPreview';
import AcademyPromo from '../components/AcademyPromo';
import InstagramReels from '../components/InstagramReels';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import Process from '../components/Process';
import FAQ from '../components/FAQ';
import CTABanner from '../components/CTABanner';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import IntroCelebration from '../components/IntroCelebration';
import { SITE_URL, faqs } from '../lib/site';

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': `${SITE_URL}/#faq`,
  mainEntity: faqs.flatMap((c) =>
    c.items.map((i) => ({
      '@type': 'Question',
      name: i.q,
      acceptedAnswer: { '@type': 'Answer', text: i.a },
    }))
  ),
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Navbar />
      <main>
        <Hero />
        <ServicesMarquee />
        <ServicesPreview />
        <WhyChooseUs />
        <Gallery />
        <InstagramReels />
        <Testimonials />
        <AcademyPromo />
        <Process />
        <FAQ />
        <CTABanner />
        <Contact />
      </main>
      <Footer />
      <IntroCelebration />
    </>
  );
}
