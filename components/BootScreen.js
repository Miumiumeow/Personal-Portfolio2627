"use client";

import { useEffect, useState } from "react";

const lines = [
  "PinkOS v1.0",
  "checking cuteness levels... ok",
  "loading sparkles... ok",
  "starting portfolio.exe...",
];

export default function BootScreen() {
  const [done, setDone] = useState(false);
  const [progress, setProgress] = useState(0);

  function finish() {
    try {
      sessionStorage.setItem("booted", "1");
    } catch {}
    document.documentElement.dataset.booted = "1";
    document.body.style.overflow = "";
    setDone(true);
  }

  useEffect(() => {
    if (document.documentElement.dataset.booted) {
      setDone(true);
      return;
    }
    document.body.style.overflow = "hidden";
    const timer = setInterval(() => {
      setProgress((p) => Math.min(p + 5, 100));
    }, 90);
    return () => {
      clearInterval(timer);
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (progress < 100) return;
    const timer = setTimeout(finish, 450);
    return () => clearTimeout(timer);
  }, [progress]);

  if (done) return null;

  return (
    <div
      data-boot
      role="dialog"
      aria-modal="true"
      aria-label="Loading portfolio"
      className="fixed inset-0 z-50 grid place-items-center bg-background p-6"
    >
      <div className="w-full max-w-md border-2 border-foreground bg-background shadow-[6px_6px_0_0_var(--accent)]">
        <div className="border-b-2 border-foreground bg-accent px-3 py-1.5 font-mono text-xl leading-none text-background">
          ♥ booting...
        </div>

        <div className="p-5">
          <div className="min-h-28 space-y-1 font-mono text-xl">
            {lines.map(
              (line, i) =>
                progress >= i * 25 && (
                  <p key={line}>
                    <span className="text-accent">&gt;</span> {line}
                  </p>
                )
            )}
          </div>

          <div
            role="progressbar"
            aria-label="Loading"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={progress}
            className="mt-4 border-2 border-foreground p-1"
          >
            <div className="h-5 overflow-hidden">
              <div
                className="h-full"
                style={{
                  width: `${progress}%`,
                  backgroundImage:
                    "repeating-linear-gradient(90deg, var(--accent) 0 12px, transparent 12px 16px)",
                }}
              />
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between font-mono text-xl text-muted">
            <span>{progress}%</span>
            <button
              type="button"
              onClick={finish}
              autoFocus
              className="underline hover:text-accent"
            >
              skip
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}