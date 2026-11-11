import Image from "next/image";
import { site } from "@/data/site";
import RetroWindow from "./RetroWindow";
import Typewriter from "./Typewriter";
import ResumeButton from "./ResumeButton";

// Pixel medal. o = outline, r = ribbon, g = gold, d = dark gold.
const MEDAL = [
  "...oo..oo...",
  "..oooooooo..",
  "..orroorro..",
  "..orroorro..",
  "...orrrro...",
  "....orro....",
  "...oooooo...",
  "..oggggggo..",
  ".oggggggggo.",
  ".ogggddgggo.",
  ".ogggddgggo.",
  ".oggggggggo.",
  "..oggggggo..",
  "...oooooo...",
];

const MEDAL_COLORS = {
  o: "var(--foreground)",
  r: "var(--accent)",
  g: "#fcd34d",
  d: "#f59e0b",
};

function Medal() {
  return (
    <svg
      viewBox="0 0 12 14"
      width="56"
      height="65"
      shapeRendering="crispEdges"
      aria-hidden="true"
    >
      {MEDAL.flatMap((row, y) =>
        [...row].map((cell, x) =>
          MEDAL_COLORS[cell] ? (
            <rect
              key={`${x}-${y}`}
              x={x}
              y={y}
              width="1"
              height="1"
              fill={MEDAL_COLORS[cell]}
            />
          ) : null
        )
      )}
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="pt-6 pb-20 sm:pt-8">
      <RetroWindow
        title="portfolio.exe"
        footer={
          <>
            <span>♥ Fresh Graduate</span>
            <span>{site.location}</span>
          </>
        }
      >
        <div className="grid gap-8 p-6 sm:grid-cols-[auto_1fr] sm:items-center sm:gap-12 sm:p-10">
          {/* Photo */}
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

            {/* Medal */}
            <div
              role="img"
              aria-label="Cum laude"
              className="group absolute -right-5 -bottom-6 motion-safe:animate-float [animation-delay:0.8s]"
            >
              <Medal />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute top-1/2 right-full mr-2 -translate-y-1/2 border-2 border-foreground bg-accent px-2 py-0.5 font-mono text-lg leading-none whitespace-nowrap text-background opacity-0 shadow-[3px_3px_0_0_var(--foreground)] transition-opacity group-hover:opacity-100"
              >
                cum laude
              </span>
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
              I&apos;m {site.name}
            </h1>

            <p className="mt-2 min-h-8 font-mono text-2xl text-muted">
              <Typewriter words={site.roles} />
              <span
                aria-hidden="true"
                className="ml-1 inline-block h-5 w-2.5 translate-y-0.5 bg-accent motion-safe:animate-blink"
              />
            </p>

            <p className="mt-5 max-w-md text-lg leading-relaxed text-muted">
              {site.intro}
            </p>

            <div className="mt-7 flex flex-wrap justify-center gap-3 sm:flex-nowrap sm:justify-start">
              <a
                href="#projects"
                className="border-2 border-foreground bg-accent px-5 py-2 font-mono text-xl whitespace-nowrap text-background shadow-[3px_3px_0_0_var(--foreground)] transition-transform hover:-translate-y-0.5 active:translate-x-[3px] active:translate-y-[3px] active:shadow-none"
              >
                See my projects
              </a>
              <ResumeButton
                href={site.resume}
                fileName={`${site.name} - Resume.pdf`}
              />
            </div>
          </div>
        </div>
      </RetroWindow>
    </section>
  );
}