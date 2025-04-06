'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

const links = [
  { name: 'Demo', href: '/#demo' },
  { name: 'Pricing', href: '/#pricing' },
  { name: 'Wall of love', href: '/#wall-of-love' },
];

export function Header() {
  return (
    <header className="mx-auto flex w-full max-w-7xl items-center justify-between gap-12 px-8 py-6 md:justify-start md:gap-24">
      <Image src="/logo.png" alt="Logo" width={120} height={24} unoptimized />

      <div className="flex items-center gap-4 md:gap-12">
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={cn(
              'hover:underline',
              link.name === 'Demo' && 'hidden md:block'
            )}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </header>
  );
}
