import { Button } from '@/components/ui/button'
import { CheckCircle } from 'lucide-react'

export function Pricing() {
    return (
        <section
            id="pricing"
            className="bg-muted w-full py-12 md:py-24 lg:py-32"
        >
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <div className="bg-primary text-primary-foreground inline-block rounded-lg px-3 py-1 text-sm">
                            Pricing
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                            Simple, Transparent Pricing
                        </h2>
                        <p className="text-muted-foreground max-w-[700px] md:text-xl">
                            Choose the plan that's right for your business. All
                            plans include a 14-day free trial.
                        </p>
                    </div>
                </div>

                <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
                    {/* Starter Plan */}
                    <div className="bg-background flex flex-col rounded-lg border p-6 shadow-sm">
                        <div className="space-y-2">
                            <h3 className="text-2xl font-bold">Starter</h3>
                            <p className="text-muted-foreground">
                                Perfect for small teams just getting started
                            </p>
                        </div>
                        <div className="mt-4 flex items-baseline text-3xl font-bold">
                            $29
                            <span className="text-muted-foreground text-sm font-normal">
                                /month
                            </span>
                        </div>
                        <ul className="mt-6 space-y-3">
                            <li className="flex items-center">
                                <CheckCircle className="text-primary mr-2 h-4 w-4" />
                                <span>Up to 5 team members</span>
                            </li>
                            <li className="flex items-center">
                                <CheckCircle className="text-primary mr-2 h-4 w-4" />
                                <span>Basic analytics</span>
                            </li>
                            <li className="flex items-center">
                                <CheckCircle className="text-primary mr-2 h-4 w-4" />
                                <span>5GB storage</span>
                            </li>
                            <li className="flex items-center">
                                <CheckCircle className="text-primary mr-2 h-4 w-4" />
                                <span>Email support</span>
                            </li>
                        </ul>
                        <Button className="mt-8">Get Started</Button>
                    </div>

                    {/* Pro Plan */}
                    <div className="bg-background relative flex flex-col rounded-lg border p-6 shadow-sm">
                        <div className="bg-primary text-primary-foreground absolute -top-4 right-0 left-0 mx-auto w-fit rounded-full px-3 py-1 text-xs font-medium">
                            Most Popular
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-2xl font-bold">Pro</h3>
                            <p className="text-muted-foreground">
                                Ideal for growing businesses
                            </p>
                        </div>
                        <div className="mt-4 flex items-baseline text-3xl font-bold">
                            $79
                            <span className="text-muted-foreground text-sm font-normal">
                                /month
                            </span>
                        </div>
                        <ul className="mt-6 space-y-3">
                            <li className="flex items-center">
                                <CheckCircle className="text-primary mr-2 h-4 w-4" />
                                <span>Up to 20 team members</span>
                            </li>
                            <li className="flex items-center">
                                <CheckCircle className="text-primary mr-2 h-4 w-4" />
                                <span>Advanced analytics</span>
                            </li>
                            <li className="flex items-center">
                                <CheckCircle className="text-primary mr-2 h-4 w-4" />
                                <span>20GB storage</span>
                            </li>
                            <li className="flex items-center">
                                <CheckCircle className="text-primary mr-2 h-4 w-4" />
                                <span>Priority support</span>
                            </li>
                            <li className="flex items-center">
                                <CheckCircle className="text-primary mr-2 h-4 w-4" />
                                <span>Custom integrations</span>
                            </li>
                        </ul>
                        <Button className="mt-8">Get Started</Button>
                    </div>

                    {/* Enterprise Plan */}
                    <div className="bg-background flex flex-col rounded-lg border p-6 shadow-sm">
                        <div className="space-y-2">
                            <h3 className="text-2xl font-bold">Enterprise</h3>
                            <p className="text-muted-foreground">
                                For large organizations with specific needs
                            </p>
                        </div>
                        <div className="mt-4 flex items-baseline text-3xl font-bold">
                            $199
                            <span className="text-muted-foreground text-sm font-normal">
                                /month
                            </span>
                        </div>
                        <ul className="mt-6 space-y-3">
                            <li className="flex items-center">
                                <CheckCircle className="text-primary mr-2 h-4 w-4" />
                                <span>Unlimited team members</span>
                            </li>
                            <li className="flex items-center">
                                <CheckCircle className="text-primary mr-2 h-4 w-4" />
                                <span>Enterprise analytics</span>
                            </li>
                            <li className="flex items-center">
                                <CheckCircle className="text-primary mr-2 h-4 w-4" />
                                <span>Unlimited storage</span>
                            </li>
                            <li className="flex items-center">
                                <CheckCircle className="text-primary mr-2 h-4 w-4" />
                                <span>24/7 dedicated support</span>
                            </li>
                            <li className="flex items-center">
                                <CheckCircle className="text-primary mr-2 h-4 w-4" />
                                <span>Custom development</span>
                            </li>
                            <li className="flex items-center">
                                <CheckCircle className="text-primary mr-2 h-4 w-4" />
                                <span>SLA guarantees</span>
                            </li>
                        </ul>
                        <Button className="mt-8">Contact Sales</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
