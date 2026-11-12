"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { site } from "@/data/site";
import Section from "./Section";
import RetroWindow from "./RetroWindow";

export default function Projects() {
  const projects = site.projects;
  const [index, setIndex] = useState(0);
  const [flicker, setFlicker] = useState(false);
  const tabs = useRef([]);
  const timer = useRef(null);

  useEffect(() => () => clearTimeout(timer.current), []);

  if (!projects || projects.length === 0) return null;

  const project = projects[index];

  function select(i) {
    if (i === index) return;
    setIndex(i);
    setFlicker(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setFlicker(false), 120);
  }

  // Arrow keys move through the menu, like a game console.
  function onKeyDown(e) {
    const step = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 }[
      e.key
    ];
    if (!step) return;
    e.preventDefault();
    const next = (index + step + projects.length) % projects.length;
    select(next);
    tabs.current[next]?.focus();
  }

  return (
    <Section id="projects" title="Projects">
      <div className="lg:-mx-12 xl:-mx-24">
        <RetroWindow
          title="select_game.exe"
          footer={
            <>
              <span>
                {projects.length} game{projects.length === 1 ? "" : "s"}
              </span>
              <span>↑ ↓ to choose ♥</span>
            </>
          }
        >
          <div className="grid grid-cols-[minmax(0,1fr)] md:grid-cols-[16rem_minmax(0,1fr)]">
            {/* Menu */}
            <div className="min-w-0 border-b-2 border-foreground bg-accent/10 p-3 md:border-r-2 md:border-b-0">
              <p className="mb-2 hidden font-mono text-xl text-muted md:block">
                <span className="text-accent">&gt;</span> choose your game
              </p>

              <div
                role="tablist"
                aria-label="Projects"
                onKeyDown={onKeyDown}
                className="flex gap-2 overflow-x-auto pb-1 md:flex-col md:overflow-visible md:pb-0"
              >
                {projects.map((p, i) => {
                  const selected = i === index;
                  return (
                    <button
                      key={p.title}
                      ref={(el) => (tabs.current[i] = el)}
                      type="button"
                      role="tab"
                      id={`project-tab-${i}`}
                      aria-selected={selected}
                      aria-controls="project-panel"
                      tabIndex={selected ? 0 : -1}
                      onClick={() => select(i)}
                      className={`flex shrink-0 cursor-pointer! items-center gap-2 px-3 py-2 text-left font-mono text-xl leading-tight whitespace-nowrap md:w-full md:whitespace-normal ${
                        selected
                          ? "bg-accent text-background"
                          : "hover:bg-accent/20"
                      }`}
                    >
                      <span
                        aria-hidden="true"
                        className={
                          selected ? "motion-safe:animate-blink" : "opacity-0"
                        }
                      >
                        ▶
                      </span>
                      {p.title}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Preview */}
            <div
              role="tabpanel"
              id="project-panel"
              aria-labelledby={`project-tab-${index}`}
              className="min-w-0 p-4 sm:p-6"
            >
              {/* Screen */}
              <div className="relative aspect-[16/10] overflow-hidden border-2 border-foreground bg-accent/20">
                {project.image ? (
                  <Image
                    key={project.image}
                    src={project.image}
                    alt={`Screenshot of ${project.title}`}
                    fill
                    sizes="(min-width: 768px) 560px, 92vw"
                    className={`object-cover transition-opacity duration-100 ${
                      flicker ? "opacity-0" : "opacity-100"
                    }`}
                  />
                ) : (
                  <p className="grid h-full place-items-center font-mono text-2xl text-muted">
                    no signal ♥
                  </p>
                )}

                {/* Scanlines */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(0deg, rgba(0,0,0,0.08) 0 1px, transparent 1px 3px)",
                  }}
                />
              </div>

              <h3 className="mt-5 font-display text-2xl font-semibold">
                {project.title}
              </h3>

              {project.description && (
                <p className="mt-2 leading-relaxed text-muted">
                  {project.description}
                </p>
              )}

              {project.tags?.length > 0 && (
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="border-2 border-foreground bg-accent/10 px-2 py-0.5 font-mono text-lg leading-none"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              )}

              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-block cursor-pointer! border-2 border-foreground bg-accent px-5 py-2 font-mono text-xl text-background shadow-[3px_3px_0_0_var(--foreground)] transition-transform hover:-translate-y-0.5 active:translate-x-[3px] active:translate-y-[3px] active:shadow-none"
                >
                  ▶ press start
                  <span className="sr-only">
                    {" "}
                    {project.title} (opens in a new tab)
                  </span>
                </a>
              ) : (
                <p className="mt-5 font-mono text-xl text-muted">
                  coming soon ♥
                </p>
              )}
            </div>
          </div>
        </RetroWindow>
      </div>
    </Section>
  );
}