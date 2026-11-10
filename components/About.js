import { site } from "@/data/site";
import Section from "./Section";

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="max-w-xl space-y-4 leading-relaxed text-muted">
        {site.about.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <h3 className="mt-10 text-sm font-medium">Skills</h3>
      <ul className="mt-3 flex flex-wrap gap-2">
        {site.skills.map((skill) => (
          <li
            key={skill}
            className="rounded-full border border-border px-3 py-1 text-sm text-muted"
          >
            {skill}
          </li>
        ))}
      </ul>
    </Section>
  );
}
