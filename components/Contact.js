import { site } from "@/data/site";
import Section from "./Section";

export default function Contact() {
  return (
    <Section id="contact" title="Contact">
      <p className="max-w-xl leading-relaxed text-muted">
        I&apos;m open to new projects and opportunities. The best way to reach
        me is by email.
      </p>
      <a
        href={`mailto:${site.email}`}
        className="mt-4 inline-block text-lg font-medium text-accent hover:underline"
      >
        {site.email}
      </a>

      <ul className="mt-6 flex gap-5 text-sm">
        {site.links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
