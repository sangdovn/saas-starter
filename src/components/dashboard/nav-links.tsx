"use client";

import clsx from "clsx";
import { Home, Receipt, Users } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", href: "/dashboard", icon: Home },
  {
    name: "Invoices",
    href: "/dashboard/invoices",
    icon: Receipt,
  },
  { name: "Customers", href: "/dashboard/customers", icon: Users },
];

export function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className={clsx(
            "rounded-md flex flex-row items-center justify-start text-sm font-medium px-3 py-4 md:px-2 gap-2 hover:bg-zinc-300",
            pathname === link.href && "bg-zinc-400"
          )}
        >
          <link.icon />
          <p className="hidden md:block">{link.name}</p>
        </Link>
      ))}
    </>
  );
}
