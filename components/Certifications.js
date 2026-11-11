"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { site } from "@/data/site";
import Section from "./Section";
import RetroWindow from "./RetroWindow";

export default function Certifications() {
  const dialogRef = useRef(null);
  const [selected, setSelected] = useState(null);

  const certs = site.certifications;
  if (!certs || certs.length === 0) return null;

  const cert = selected !== null ? certs[selected] : null;

  function open(i) {
    setSelected(i);
    dialogRef.current?.showModal();
  }

  function close() {
    dialogRef.current?.close();
  }

  return (
    <Section id="certifications" title="Certifications">
      <RetroWindow
        title="certificates"
        footer={
          <>
            <span>
              {certs.length} object{certs.length === 1 ? "" : "s"}
            </span>
          </>
        }
      >
        {/* Address bar */}
        <div className="border-b-2 border-foreground bg-accent/10 px-3 py-1.5 font-mono text-xl text-muted">
          <span className="text-accent">&gt;</span> C:\portfolio\certificates\
        </div>

        {/* Icons */}
        <ul className="grid grid-cols-2 gap-2 p-4 sm:grid-cols-3 sm:p-6 lg:grid-cols-4">
          {certs.map((c, i) => (
            <li key={c.title}>
              <button
                type="button"
                onClick={() => open(i)}
                aria-label={`${c.title}, ${c.issuer}. Open certificate`}
                className="group flex w-full cursor-pointer! flex-col items-center gap-2 p-2 text-center"
              >
                <Image
                  src={c.image}
                  alt=""
                  width={96}
                  height={96}
                  className="h-24 w-24 object-contain transition-transform motion-safe:group-hover:-translate-y-1 motion-safe:group-active:translate-y-0"
                />
                <span className="line-clamp-2 px-1 font-mono text-xl leading-tight group-hover:bg-accent group-hover:text-background group-focus-visible:bg-accent group-focus-visible:text-background">
                  {c.title}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </RetroWindow>

      {/* Certificate viewer */}
      <dialog
        ref={dialogRef}
        onClose={() => setSelected(null)}
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
        aria-label={cert ? `${cert.title} certificate` : "Certificate"}
        className="m-auto max-h-[90vh] w-[min(92vw,44rem)] overflow-y-auto border-2 border-foreground bg-background p-0 text-foreground shadow-[6px_6px_0_0_var(--accent)] backdrop:bg-foreground/50"
      >
        {cert && (
          <div>
            <div className="sticky top-0 flex items-center justify-between border-b-2 border-foreground bg-accent px-3 py-1.5 text-background">
              <span className="font-mono text-xl leading-none">
                ♥ cert_{String(selected + 1).padStart(2, "0")}.png
              </span>
              <button
                type="button"
                onClick={close}
                aria-label="Close"
                className="grid h-7 w-7 cursor-pointer! place-items-center border-2 border-background font-mono text-base leading-none hover:bg-background hover:text-accent"
              >
                X
              </button>
            </div>

            <div className="p-4 sm:p-5">
              <Image
                src={cert.certificate ?? cert.image}
                alt={`${cert.title} certificate from ${cert.issuer}`}
                width={1000}
                height={750}
                sizes="(min-width: 768px) 672px, 92vw"
                className="h-auto w-full border-2 border-foreground"
              />

              <div className="mt-4 flex flex-wrap items-baseline justify-between gap-x-4">
                <p className="font-mono text-xl text-accent">{cert.issuer}</p>
                <p className="font-mono text-xl text-muted">{cert.date}</p>
              </div>
            </div>
          </div>
        )}
      </dialog>
    </Section>
  );
}