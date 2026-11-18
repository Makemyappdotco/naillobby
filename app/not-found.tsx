import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = { title: 'Page not found' };

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 pt-36 pb-16 bg-[var(--surface)]">
        <p className="text-sm font-semibold tracking-[0.18em] uppercase text-[var(--accent-strong)] mb-3">Error 404</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">This page doesn&apos;t exist</h1>
        <p className="text-[var(--text-muted)] max-w-md mb-8">The link may be old or mistyped. Here are the main places to go.</p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/" className="btn-gold px-7 py-3.5">Go to home</Link>
          <Link href="/#services" className="btn-outline px-7 py-3.5">Services &amp; prices</Link>
          <Link href="/academy" className="btn-outline px-7 py-3.5">Academy</Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
