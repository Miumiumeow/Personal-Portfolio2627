"use client";

import { useState } from "react";

const controlStyle =
  "grid h-7 w-7 place-items-center border-2 border-background font-mono text-base leading-none enabled:cursor-pointer! enabled:hover:bg-background enabled:hover:text-accent disabled:opacity-40";

export default function RetroWindow({ title, footer, children }) {
  const [mode, setMode] = useState("open"); // "open" | "minimized"
  const isOpen = mode === "open";

  return (
    <div className="border-2 border-foreground bg-background shadow-[6px_6px_0_0_var(--accent)]">
      {/* Title bar */}
      <div
        className={`flex items-center justify-between bg-accent px-3 py-1.5 text-background ${
          isOpen ? "border-b-2 border-foreground" : ""
        }`}
      >
        <span className="font-mono text-xl leading-none">♥ {title}</span>

        <div className="flex gap-1.5">
          <button
            type="button"
            aria-label="Minimize window"
            onClick={() => setMode("minimized")}
            disabled={!isOpen}
            className={controlStyle}
          >
            _
          </button>
          <button
            type="button"
            aria-label="Restore window"
            onClick={() => setMode("open")}
            disabled={isOpen}
            className={controlStyle}
          >
            □
          </button>

          {/* Decorative only: looks like a close button but does nothing */}
          <span
            aria-hidden="true"
            className="grid h-7 w-7 place-items-center border-2 border-background font-mono text-base leading-none"
          >
            X
          </span>
        </div>
      </div>

      {isOpen && (
        <>
          {children}
          {footer && (
            <div className="flex flex-wrap justify-between gap-x-4 border-t-2 border-foreground bg-accent/10 px-3 py-1 font-mono text-lg text-muted">
              {footer}
            </div>
          )}
        </>
      )}
    </div>
  );
}