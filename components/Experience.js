import { site } from "@/data/site";
import Section from "./Section";

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="relative ml-3 border-l-2 border-dashed border-accent/60">
        {site.experience.map((job) => (
          <li
            key={`${job.company}-${job.period}`}
            className="relative pb-10 pl-8 last:pb-0"
          >
            {/* Timeline marker */}
            <span
              aria-hidden="true"
              className="absolute top-2 -left-[9px] h-4 w-4 border-2 border-foreground bg-accent"
            />

            <div className="border-2 border-foreground bg-background shadow-[4px_4px_0_0_var(--accent)]">
              {/* Title bar: dates */}
              <div className="border-b-2 border-foreground bg-accent px-3 py-1 text-background">
                <span className="font-mono text-lg leading-none">
                  ♥ {job.period}
                </span>
              </div>

              {/* Body */}
              <div className="p-4 sm:p-5">
                <h3 className="font-display text-xl font-semibold">
                  {job.role}
                </h3>
                <p className="mt-1 font-mono text-xl text-muted">
                  {job.company}
                </p>

                {job.points && (
                  <ul className="mt-4 space-y-1.5 text-muted">
                    {job.points.map((point) => (
                      <li key={point} className="flex gap-2">
                        <span aria-hidden="true" className="text-accent">
                          ♥
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {job.tags && (
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {job.tags.map((tag) => (
                      <li
                        key={tag}
                        className="border-2 border-foreground bg-accent/10 px-2 py-0.5 font-mono text-lg leading-none"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}