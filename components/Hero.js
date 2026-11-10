import { site } from "@/data/site";

export default function Hero() {
  return (
    <section className="pt-24 pb-20 sm:pt-32">
      <p className="text-sm text-muted">{site.location}</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
        {site.name}, {site.role.toLowerCase()}.
      </h1>
      <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
        {site.intro}
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href="#projects"
          className="rounded-md bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-85"
        >
          View projects
        </a>
        <a
          href={`mailto:${site.email}`}
          className="rounded-md border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-border/50"
        >
          Email me
        </a>
      </div>
    </section>
  );
}
