import { site } from "@/data/site";
import Section from "./Section";

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <ul className="divide-y divide-border">
        {site.projects.map((project) => (
          <li key={project.title} className="py-6 first:pt-0">
            <h3 className="text-lg font-medium">{project.title}</h3>
            <p className="mt-2 max-w-xl leading-relaxed text-muted">
              {project.description}
            </p>

            <ul className="mt-3 flex flex-wrap gap-2 text-sm text-muted">
              {project.tags.map((tag) => (
                <li key={tag} className="rounded bg-border/60 px-2 py-0.5">
                  {tag}
                </li>
              ))}
            </ul>

            <div className="mt-4 flex gap-5 text-sm font-medium">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  Live site
                </a>
              )}
              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  Source code
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
