import Section from "./Section";
import Handheld from "./Handheld";
import { site } from "@/data/site";
import TechMarquee from "./TechMarquee";

export default function About() {
  const photos = site.photos ?? [];

  return (
    <Section id="about" title={site.outside?.title ?? "Outside of coding"}>
      {site.outside && (
        <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:items-start md:gap-12">
          <div>
            <p className="leading-relaxed text-muted">{site.outside.text}</p>

            {site.outside.likes?.length > 0 && (
              <ul className="mt-5 space-y-1 font-mono text-xl">
                {site.outside.likes.map((like) => (
                  <li key={like}>
                    <span aria-hidden="true" className="text-accent">
                      ♥
                    </span>{" "}
                    {like}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {photos.length > 0 && <Handheld photos={photos} />}
        </div>
      )}

      <h3 className="mt-16 text-center font-display text-2xl font-semibold">
        Technologies I work with
      </h3>

      <div className="mt-6">
        <TechMarquee items={site.skills} />
      </div>
    </Section>
  );
}