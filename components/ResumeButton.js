"use client";

import { useEffect, useRef, useState } from "react";

// Pixel floppy disk: "#" is a filled square.
const FLOPPY = [
  "#########.",
  "#.####..##",
  "#.####..##",
  "#.####..##",
  "#........#",
  "#........#",
  "#.######.#",
  "#.######.#",
  "#.######.#",
  "##########",
];

function PixelIcon({ rows }) {
  return (
    <svg
      viewBox="0 0 10 10"
      width="24"
      height="24"
      shapeRendering="crispEdges"
      fill="currentColor"
      aria-hidden="true"
    >
      {rows.flatMap((row, y) =>
        [...row].map((cell, x) =>
          cell === "#" ? (
            <rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" />
          ) : null
        )
      )}
    </svg>
  );
}

export default function ResumeButton({ href, fileName }) {
  const [status, setStatus] = useState("idle"); // idle | saving | saved
  const [progress, setProgress] = useState(0);
  const interval = useRef(null);
  const timeout = useRef(null);

  // Clean up timers if the visitor leaves the page mid-animation.
  useEffect(() => {
    return () => {
      clearInterval(interval.current);
      clearTimeout(timeout.current);
    };
  }, []);

  function download() {
    const a = document.createElement("a");
    a.href = href;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    a.remove();
  }

  function showSaved() {
    setStatus("saved");
    timeout.current = setTimeout(() => setStatus("idle"), 2500);
  }

  function handleClick(e) {
    e.preventDefault();
    if (status !== "idle") return;

    // Skip the animation for visitors who prefer reduced motion.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      download();
      showSaved();
      return;
    }

    setStatus("saving");
    setProgress(0);
    interval.current = setInterval(() => {
      setProgress((p) => Math.min(p + 10, 100));
    }, 110);
  }

  // When the bar fills up, download the file.
  useEffect(() => {
    if (status !== "saving" || progress < 100) return;
    clearInterval(interval.current);
    download();
    showSaved();
  }, [status, progress]);

  const label =
    status === "saving"
      ? `saving... ${progress}%`
      : status === "saved"
        ? "saved ♥"
        : "save resume";

  return (
    <>
      <a
        href={href}
        download={fileName}
        onClick={handleClick}
        className="relative inline-flex min-w-52 items-center justify-center overflow-hidden border-2 border-foreground bg-background px-4 py-2 font-mono text-xl text-foreground shadow-[3px_3px_0_0_var(--foreground)] transition-transform hover:-translate-y-0.5 active:translate-x-[3px] active:translate-y-[3px] active:shadow-none"
      >
        {/* Progress fill */}
        <span
          aria-hidden="true"
          className="absolute inset-y-0 left-0 bg-accent/40"
          style={{ width: status === "saving" ? `${progress}%` : "0%" }}
        />
        <span className="relative inline-flex items-center gap-2">
          <PixelIcon rows={FLOPPY} />
          {label}
        </span>
      </a>

      <span role="status" className="sr-only">
        {status === "saved" ? "Resume downloaded" : ""}
      </span>
    </>
  );
}