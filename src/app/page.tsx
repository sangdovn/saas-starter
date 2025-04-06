import { Header } from '@/components/home/header';
import { Hero } from '@/components/home/hero';

export default function Page() {
  return (
    <div
      className="font-bricolage-grotesque flex min-h-screen w-full flex-col"
      style={{
        backgroundColor: 'rgb(33, 33, 33)',
        color: 'rgb(207, 207, 207)',
      }}
    >
      <Header />

      <main className="flex-1">
        <Hero />
      </main>

      {/* <main className="flex-1">
        <Hero />

        <Features />

        <Testimonials />

        <Pricing />

        <CTA />
      </main>

      <Footer /> */}
    </div>
  );
}
