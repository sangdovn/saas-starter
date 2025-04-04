import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { Button } from '../ui/button'

export function Hero() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                    <div className="flex flex-col justify-center space-y-4">
                        <div className="space-y-2">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                                Streamline Your Workflow Like Never Before
                            </h1>
                            <p className="text-muted-foreground max-w-[600px] md:text-xl">
                                Boost productivity, reduce overhead, and focus
                                on what matters most with our all-in-one
                                platform.
                            </p>
                        </div>
                        <div className="flex flex-col gap-2 min-[400px]:flex-row">
                            <Button size="lg" className="gap-1">
                                Start Free Trial{' '}
                                <ArrowRight className="h-4 w-4" />
                            </Button>
                            <Button size="lg" variant="outline">
                                Schedule Demo
                            </Button>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <Image
                            src="/placeholder.svg?height=550&width=550"
                            alt="Hero Image"
                            width={550}
                            height={550}
                            className="rounded-xl object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
