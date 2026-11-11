"use client";

import { useEffect, useState } from "react";

// Pixel art icons: "#" is a filled square.
const SUN = [
    "....#....",
    ".#.....#.",
    "..#####..",
    "..#####..",
    "#.#####.#",
    "..#####..",
    "..#####..",
    ".#.....#.",
    "....#....",
];

const MOON = [
    "...####..",
    "..###..#.",
    ".###.....",
    ".###.....",
    ".###....#",
    ".###.....",
    "..###....",
    "...####..",
    ".........",
];

function PixelIcon({ rows }) {
    return (
        <svg
            viewBox="0 0 9 9"
            width="20"
            height="20"
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

export default function ThemeToggle() {
    const [theme, setTheme] = useState(null);

    // Read the theme the init script already set.
    useEffect(() => {
        setTheme(document.documentElement.dataset.theme || "light");
    }, []);

    function toggle() {
        const next = theme === "dark" ? "light" : "dark";
        document.documentElement.dataset.theme = next;
        try {
            localStorage.setItem("theme", next);
        } catch { }
        setTheme(next);
    }

    const isDark = theme === "dark";

    return (
        <button
            type="button"
            onClick={toggle}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className="cursor-pointer fixed right-3 bottom-5 z-20 grid h-12 w-12 place-items-center border-2 border-foreground bg-accent text-background shadow-[3px_3px_0_0_var(--foreground)] transition-transform hover:scale-110 active:translate-x-[2px] active:shadow-none sm:right-5"
        >
            {theme && <PixelIcon rows={isDark ? SUN : MOON} />}
        </button>
    );
}