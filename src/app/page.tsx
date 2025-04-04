import { CTA } from '@/components/home/cta'
import { Features } from '@/components/home/features'
import { Footer } from '@/components/home/footer'
import { Header } from '@/components/home/header'
import { Hero } from '@/components/home/hero'
import { Pricing } from '@/components/home/pricing'
import { Testimonials } from '@/components/home/testimonials'

export default function Page() {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />

            <main className="flex-1">
                <Hero />

                <Features />

                <Testimonials />

                <Pricing />

                <CTA />
            </main>

            <Footer />
        </div>
    )
}
