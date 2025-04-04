import Link from "next/link";
import { NavLinks } from "./nav-links";

export function SideNav() {
  return (
    <div className="flex h-full  flex-col px-3 py-4 md:px-2">
      <Link href="/" className="flex h-20 p-4 md:h-40 items-end justify-start">
        <div className="w-32 md:w-40">Hehe</div>
      </Link>
      <NavLinks />
    </div>
  );
}
