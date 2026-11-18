import AcademyHero from './AcademyHero';
import AcademyIntro from './AcademyIntro';
import AcademyCourses from './AcademyCourses';
import AcademyReviews from './AcademyReviews';
import AcademyFAQ from './AcademyFAQ';
import AcademyCTA from './AcademyCTA';
import ServicesMarquee from '../../components/ServicesMarquee';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

const skills = [
  'Acrylic Extensions',
  'Gel Extensions',
  'Polygel',
  'Cat Eye Nails',
  'Russian Manicure',
  'Chrome Finish',
  'No Tip Extensions',
  'Nail Art',
  'One-on-One Training',
  'Hands-On Practice',
  'Certificate Course',
];

export default function AcademyPage() {
  return (
    <>
      <Navbar />
      <main>
        <AcademyHero />
        <ServicesMarquee items={skills} />
        <AcademyIntro />
        <AcademyCourses />
        <AcademyReviews />
        <AcademyFAQ />
        <AcademyCTA />
      </main>
      <Footer />
    </>
  );
}
