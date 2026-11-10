import Image from "next/image";
import { site } from "@/data/site";

export default function Hero() {
  return (
    <section className="pt-12 pb-20 sm:pt-20">
      <div className="border-2 border-foreground bg-background shadow-[6px_6px_0_0_var(--accent)]">
        {/* Title bar */}
        <div className="flex items-center justify-between border-b-2 border-foreground bg-accent px-3 py-1.5 text-background">
          <span className="font-mono text-xl leading-none">♥ portfolio.exe</span>
          <span aria-hidden="true" className="flex gap-1.5">
            {["_", "□", "×"].map((symbol) => (
              <span
                key={symbol}
                className="grid h-5 w-5 place-items-center border-2 border-background font-mono text-sm leading-none"
              >
                {symbol}
              </span>
            ))}
          </span>
        </div>

        {/* Window body */}
        <div className="grid gap-8 p-6 sm:grid-cols-[auto_1fr] sm:items-center sm:p-8">
          {/* Photo viewer */}
          <div className="relative mx-auto sm:mx-0">
            <div className="border-2 border-foreground bg-accent/20 p-2">
              <Image
                src={site.photo}
                alt={`Photo of ${site.name}`}
                width={224}
                height={224}
                priority
                className="h-48 w-48 border-2 border-foreground object-cover sm:h-56 sm:w-56"
              />
            </div>
            <span
              aria-hidden="true"
              className="absolute -top-4 -right-4 text-3xl text-accent motion-safe:animate-float"
            >
              ★
            </span>
            <span
              aria-hidden="true"
              className="absolute -bottom-4 -left-4 text-2xl text-accent motion-safe:animate-float [animation-delay:1.5s]"
            >
              ♥
            </span>
          </div>

          {/* Text */}
          <div className="text-center sm:text-left">
            <p className="font-mono text-xl text-accent">&gt; hello, world!</p>

            <h1 className="mt-2 font-display text-4xl font-semibold text-balance sm:text-6xl">
              {site.name}
            </h1>

            <p className="mt-2 font-mono text-2xl text-muted">
              {site.role}
              <span
                aria-hidden="true"
                className="ml-1 inline-block h-5 w-2.5 translate-y-0.5 bg-accent motion-safe:animate-blink"
              />
            </p>

            <p className="mt-5 max-w-md text-lg leading-relaxed text-muted">
              {site.intro}
            </p>

            <div className="mt-7 flex flex-wrap justify-center gap-4 sm:justify-start">
              <a
                href="#projects"
                className="border-2 border-foreground bg-accent px-5 py-2 font-mono text-xl text-background shadow-[3px_3px_0_0_var(--foreground)] transition-transform hover:-translate-y-0.5 active:translate-x-[3px] active:translate-y-[3px] active:shadow-none"
              >
                See my projects
              </a>
              <a
                href={`mailto:${site.email}`}
                className="border-2 border-foreground bg-background px-5 py-2 font-mono text-xl text-foreground shadow-[3px_3px_0_0_var(--foreground)] transition-transform hover:-translate-y-0.5 active:translate-x-[3px] active:translate-y-[3px] active:shadow-none"
              >
                Say hi
              </a>
            </div>
          </div>
        </div>

        {/* Status bar */}
        <div className="flex flex-wrap justify-between gap-x-4 border-t-2 border-foreground bg-accent/10 px-3 py-1 font-mono text-lg text-muted">
          <span>♥ Fresh Graduate</span>
        </div>

      </div>
    </section>
  );
}

