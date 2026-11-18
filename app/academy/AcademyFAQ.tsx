import { FAQItem } from '../../components/FAQ';

const faqs = [
  {
    q: 'I am a complete beginner. Can I join?',
    a: 'Absolutely! The Basic Nail Mastery course is designed for complete beginners. We start from nail anatomy and hygiene, and guide you step-by-step until you are confident and skilled.'
  },
  {
    q: 'How many students are in a batch?',
    a: 'We focus on one-on-one individual attention, so seats are strictly limited. You get personal guidance at every step, no crowded batches, no rushing.'
  },
  {
    q: 'How many hours per day are the classes?',
    a: 'Classes are 2 hours per day with flexible timing slots, so you can easily balance the course with college or work.'
  },
  {
    q: 'Do we get to practice on real models?',
    a: 'Yes! You practice on real hands and live models throughout the course. This builds real confidence and helps you learn how to handle actual clients.'
  },
  {
    q: 'Will I get a certificate after the course?',
    a: 'Yes, you receive a certificate on successful completion of the course, along with guidance on starting your own nail business or joining a salon.'
  },
  {
    q: 'Do you provide lifetime support after the course?',
    a: 'Of course. Even after you finish, you can reach out to us on WhatsApp anytime for doubts, advice, or support while you grow your own practice.'
  }
];

export default function AcademyFAQ() {
  return (
    <section className="section bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 fade-up">
          <h2 className="section-title">
            Frequently asked <span className="text-gold">questions</span>
          </h2>
          <p className="section-sub">Everything you need to know before joining the academy.</p>
        </div>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <FAQItem key={f.q} id={`afaq-${i}`} q={f.q} a={f.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
