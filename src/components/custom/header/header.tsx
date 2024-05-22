"use client";
import cat from "/public/cat.gif";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";
import { ModeToggle } from "../themes-toggle";

const links = [
  { name: "Posts", href: "/posts" },
  {
    name: "Tags",
    href: "/tags",
  },
  { name: "About", href: "/about" },
];

export function Header() {
  const pathname = usePathname();
  
  return (
    <div className="mx-auto flex max-w-3xl flex-col items-center justify-between sm:flex-row">
      <div className="relative flex w-full items-start justify-between p-4 sm:items-center sm:py-8">
        <a
          href="/"
          className="absolute block py-1 text-xl font-semibold sm:static sm:text-2xl whitespace-nowrap"
        >
          <Image src={cat} alt={""} width={50} height={50} />
        </a>
        <nav className="space-x-10 flex items-center ">
          {links.map((link) => (
            <Link key={link.name} href={link.href}  className={clsx({
              "underline decoration-wavy decoration-2 underline-offset-8": pathname === link.href
            })}>
              {link.name}
            </Link>
          ))}
          <ModeToggle />
        </nav>
      </div>
    </div>
  );
}
