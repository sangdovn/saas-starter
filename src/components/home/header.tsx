import { Menu } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { ModeToggle } from '../theme-provider'
import { Button } from '../ui/button'

const links = [
    { name: 'Feature', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Login', href: '/login' },
]

export function Header() {
    return (
        <header className="bg-background sticky top-0 z-40 w-full border-b">
            <div className="container mx-auto flex h-16 items-center justify-between py-4">
                <div className="flex items-center gap-2">
                    <Image
                        src="/placeholder.svg?height=32&width=32"
                        alt="StreamLine Logo"
                        width={32}
                        height={32}
                        className="rounded"
                    />
                    <span className="text-xl font-bold">StreamLine</span>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden gap-6 md:flex">
                    <Link
                        href="#features"
                        className="hover:text-primary text-sm font-medium"
                    >
                        Features
                    </Link>
                    <Link
                        href="#testimonials"
                        className="hover:text-primary text-sm font-medium"
                    >
                        Testimonials
                    </Link>
                    <Link
                        href="#pricing"
                        className="hover:text-primary text-sm font-medium"
                    >
                        Pricing
                    </Link>
                    <Link
                        href="#contact"
                        className="hover:text-primary text-sm font-medium"
                    >
                        Contact
                    </Link>
                </nav>

                {/* Mobile Navigation Toggle */}
                <div className="md:hidden">
                    <Button variant="ghost" size="icon" className="md:hidden">
                        <Menu className="h-5 w-5" />
                        <span className="sr-only">Toggle menu</span>
                    </Button>
                </div>

                <div className="hidden items-center gap-1 md:flex">
                    <Button>Get Started</Button>
                    <ModeToggle />
                </div>
            </div>
        </header>
    )
}
