import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function CTA() {
    return (
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                            Ready to Transform Your Workflow?
                        </h2>
                        <p className="text-muted-foreground max-w-[700px] md:text-xl">
                            Join thousands of satisfied customers who have
                            streamlined their operations with our platform.
                        </p>
                    </div>
                    <div className="flex flex-col gap-2 min-[400px]:flex-row">
                        <Button size="lg" className="gap-1">
                            Start Your Free Trial{' '}
                            <ArrowRight className="h-4 w-4" />
                        </Button>
                        <Button size="lg" variant="outline">
                            Schedule a Demo
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
