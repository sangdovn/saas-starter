import Image from 'next/image'

export function Testimonials() {
    return (
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <div className="bg-primary text-primary-foreground inline-block rounded-lg px-3 py-1 text-sm">
                            Testimonials
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                            What Our Customers Say
                        </h2>
                        <p className="text-muted-foreground max-w-[700px] md:text-xl">
                            Don't just take our word for it. Here's what our
                            customers have to say about StreamLine.
                        </p>
                    </div>
                </div>

                <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
                    {/* Testimonial 1 */}
                    <div className="flex flex-col justify-between rounded-lg border p-6 shadow-sm">
                        <div className="space-y-4">
                            <p className="text-muted-foreground">
                                "StreamLine has completely transformed how our
                                team works. We've seen a 40% increase in
                                productivity since implementing their platform."
                            </p>
                        </div>
                        <div className="flex items-center space-x-4 pt-4">
                            <Image
                                src="/placeholder.svg?height=40&width=40"
                                alt="Sarah Johnson"
                                width={40}
                                height={40}
                                className="rounded-full"
                            />
                            <div>
                                <p className="text-sm font-medium">
                                    Sarah Johnson
                                </p>
                                <p className="text-muted-foreground text-sm">
                                    CTO, TechCorp
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Testimonial 2 */}
                    <div className="flex flex-col justify-between rounded-lg border p-6 shadow-sm">
                        <div className="space-y-4">
                            <p className="text-muted-foreground">
                                "The analytics features alone are worth the
                                investment. We now have insights we never
                                thought possible, driving our strategic
                                decisions."
                            </p>
                        </div>
                        <div className="flex items-center space-x-4 pt-4">
                            <Image
                                src="/placeholder.svg?height=40&width=40"
                                alt="Michael Chen"
                                width={40}
                                height={40}
                                className="rounded-full"
                            />
                            <div>
                                <p className="text-sm font-medium">
                                    Michael Chen
                                </p>
                                <p className="text-muted-foreground text-sm">
                                    Director, DataDrive
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Testimonial 3 */}
                    <div className="flex flex-col justify-between rounded-lg border p-6 shadow-sm">
                        <div className="space-y-4">
                            <p className="text-muted-foreground">
                                "Customer support is exceptional. Any time we've
                                had questions, the team has been responsive and
                                helpful. A truly great experience."
                            </p>
                        </div>
                        <div className="flex items-center space-x-4 pt-4">
                            <Image
                                src="/placeholder.svg?height=40&width=40"
                                alt="Emily Rodriguez"
                                width={40}
                                height={40}
                                className="rounded-full"
                            />
                            <div>
                                <p className="text-sm font-medium">
                                    Emily Rodriguez
                                </p>
                                <p className="text-muted-foreground text-sm">
                                    Operations Manager, GrowthCo
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
