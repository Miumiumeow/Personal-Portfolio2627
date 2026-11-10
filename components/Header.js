import Image from "next/image";
import { site } from "@/data/site";

const nav = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  return (
    <header className="sticky top-3 z-10 px-4 pt-3">
      <div className="mx-auto flex max-w-3xl items-center justify-between border-2 border-foreground bg-background px-4 py-1.5 shadow-[4px_4px_0_0_var(--accent)]">
        <a href="#" aria-label={`${site.name}, back to top`}>
          <Image
            src="/logo.png"
            alt=""
            width={56}
            height={56}
            priority
            className="h-14 w-14 object-contain transition-transform motion-safe:hover:rotate-6 motion-safe:hover:scale-110"
          />
        </a>

        <nav aria-label="Main">
          <ul className="flex gap-1 font-mono text-xl sm:gap-3 sm:text-2xl">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="px-2 py-0.5 transition-colors hover:bg-accent hover:text-background focus-visible:bg-accent focus-visible:text-background sm:before:mr-1 sm:before:opacity-0 sm:before:content-['♥'] sm:hover:before:opacity-100"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}