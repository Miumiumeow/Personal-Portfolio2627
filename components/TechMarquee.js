"use client";

import { useState } from "react";

function Icon({ src, name }) {
  const [failed, setFailed] = useState(false);

  return (
    <span
      aria-hidden="true"
      className="grid h-8 w-8 shrink-0 place-items-center border-2 border-foreground bg-white"
    >
      {src && !failed ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt=""
          width={20}
          height={20}
          loading="lazy"
          onError={() => setFailed(true)}
          className="h-5 w-5 object-contain"
        />
      ) : (
        <span className="font-mono text-xl leading-none text-neutral-800">
          {name[0]}
        </span>
      )}
    </span>
  );
}

function Row({ items, hidden }) {
  return (
    <ul
      aria-hidden={hidden || undefined}
      className={`flex shrink-0 gap-4 pr-4 motion-reduce:shrink motion-reduce:flex-wrap motion-reduce:justify-center ${
        hidden ? "motion-reduce:hidden" : ""
      }`}
    >
      {items.map((item, i) => (
        <li
          key={item.name}
          className={`flex shrink-0 items-center gap-3 border-2 border-foreground px-4 py-2 font-mono text-xl leading-none whitespace-nowrap shadow-[3px_3px_0_0_var(--accent)] ${
            i % 3 === 0
              ? "bg-accent text-background"
              : "bg-background text-foreground"
          }`}
        >
          <Icon src={item.icon} name={item.name} />
          {item.name}
        </li>
      ))}
    </ul>
  );
}

export default function TechMarquee({ items }) {
  return (
    <div className="overflow-hidden py-3 [mask-image:linear-gradient(90deg,transparent,#000_6%,#000_94%,transparent)]">
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused] motion-reduce:w-full motion-reduce:animate-none motion-reduce:justify-center">
        <Row items={items} />
        <Row items={items} hidden />
      </div>
    </div>
  );
}