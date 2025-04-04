import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export function Footer() {
    return (
        <footer className="bg-background w-full border-t">
            <div className="container mx-auto flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
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

                <nav className="flex gap-4 md:gap-6">
                    <Link
                        href="#"
                        className="hover:text-primary text-sm font-medium"
                    >
                        Privacy
                    </Link>
                    <Link
                        href="#"
                        className="hover:text-primary text-sm font-medium"
                    >
                        Terms
                    </Link>
                    <Link
                        href="#"
                        className="hover:text-primary text-sm font-medium"
                    >
                        Contact
                    </Link>
                </nav>

                <div className="flex items-center gap-4">
                    <Link
                        href="#"
                        className="text-muted-foreground hover:text-primary"
                    >
                        <Twitter className="h-5 w-5" />
                        <span className="sr-only">Twitter</span>
                    </Link>
                    <Link
                        href="#"
                        className="text-muted-foreground hover:text-primary"
                    >
                        <Facebook className="h-5 w-5" />
                        <span className="sr-only">Facebook</span>
                    </Link>
                    <Link
                        href="#"
                        className="text-muted-foreground hover:text-primary"
                    >
                        <Instagram className="h-5 w-5" />
                        <span className="sr-only">Instagram</span>
                    </Link>
                    <Link
                        href="#"
                        className="text-muted-foreground hover:text-primary"
                    >
                        <Linkedin className="h-5 w-5" />
                        <span className="sr-only">LinkedIn</span>
                    </Link>
                </div>

                <p className="text-muted-foreground text-xs md:hidden">
                    &copy; {new Date().getFullYear()} StreamLine. All rights
                    reserved.
                </p>

                <p className="text-muted-foreground hidden text-xs md:block">
                    &copy; {new Date().getFullYear()} StreamLine. All rights
                    reserved.
                </p>
            </div>
        </footer>
    )
}
