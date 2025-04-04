import { BarChart, Shield, Smile, Zap } from 'lucide-react'

const features = [
    {
        icon: Smile,
        name: 'Accessible',
        description: 'All components strictly follow WAI-ARIA standards.',
    },
    {
        icon: Smile,
        name: 'Accessible',
        description: 'All components strictly follow WAI-ARIA standards.',
    },
    {
        icon: Smile,
        name: 'Accessible',
        description: 'All components strictly follow WAI-ARIA standards.',
    },
    {
        icon: Smile,
        name: 'Accessible',
        description: 'All components strictly follow WAI-ARIA standards.',
    },
]

export function Features() {
    return (
        <section
            id="features"
            className="bg-muted w-full py-12 md:py-24 lg:py-32"
        >
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <div className="bg-primary text-primary-foreground inline-block rounded-lg px-3 py-1 text-sm">
                            Features
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                            Everything You Need in One Place
                        </h2>
                        <p className="text-muted-foreground max-w-[700px] md:text-xl">
                            Our platform offers a comprehensive suite of tools
                            designed to optimize your workflow.
                        </p>
                    </div>
                </div>

                <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
                    {/* Feature 1 */}
                    <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                        <div className="bg-primary/10 rounded-full p-3">
                            <BarChart className="text-primary h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-bold">
                            Advanced Analytics
                        </h3>
                        <p className="text-muted-foreground text-center">
                            Gain valuable insights with our powerful analytics
                            dashboard. Track performance and make data-driven
                            decisions.
                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                        <div className="bg-primary/10 rounded-full p-3">
                            <Zap className="text-primary h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-bold">Lightning Fast</h3>
                        <p className="text-muted-foreground text-center">
                            Experience unparalleled speed and performance. Our
                            platform is optimized for efficiency at every level.
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                        <div className="bg-primary/10 rounded-full p-3">
                            <Shield className="text-primary h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-bold">
                            Enterprise Security
                        </h3>
                        <p className="text-muted-foreground text-center">
                            Rest easy knowing your data is protected with
                            bank-level encryption and advanced security
                            protocols.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
