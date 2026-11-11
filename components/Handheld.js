"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const FRAME = { src: "/handheld1.png", width: 800, height: 1000 };

const SCREEN = { x: 220, y: 315, w: 360, h: 350 };
const BUTTONS = {
    prev: { x: 222, y: 790, w: 90, h: 90 },
    heart: { x: 352, y: 822, w: 90, h: 90 },
    next: { x: 485, y: 790, w: 90, h: 90 },
};

function place({ x, y, w, h }) {
    return {
        left: `${(x / FRAME.width) * 100}%`,
        top: `${(y / FRAME.height) * 100}%`,
        width: `${(w / FRAME.width) * 100}%`,
        height: `${(h / FRAME.height) * 100}%`,
    };
}

const hotspot =
    "absolute z-20 cursor-pointer! rounded-full bg-white/10 shadow-[0_4px_0_0_rgba(59,22,36,0.35)] transition-all hover:bg-white/30 hover:shadow-[0_6px_0_0_rgba(59,22,36,0.35)] motion-safe:hover:-translate-y-0.5 active:shadow-none motion-safe:active:translate-y-1";
export default function Handheld({ photos }) {
    const [index, setIndex] = useState(0);
    const [flicker, setFlicker] = useState(false);
    const [hearts, setHearts] = useState(0);
    const timer = useRef(null);

    useEffect(() => () => clearTimeout(timer.current), []);

    if (!photos || photos.length === 0) return null;

    const photo = photos[index];

    function go(step) {
        if (photos.length < 2) return;
        setFlicker(true);
        clearTimeout(timer.current);
        timer.current = setTimeout(() => {
            setIndex((i) => (i + step + photos.length) % photos.length);
            setFlicker(false);
        }, 140);
    }

    return (
        <div className="mx-auto w-full max-w-xl">
            <div
                className="relative isolate"
                style={{ aspectRatio: `${FRAME.width} / ${FRAME.height}` }}
            >
                <Image
                    src={FRAME.src}
                    alt=""
                    width={FRAME.width}
                    height={FRAME.height}
                    priority
                    className="pointer-events-none absolute inset-0 h-full w-full"
                />

                <div
                    className="absolute z-10 overflow-hidden rounded-sm"
                    style={place(SCREEN)}
                >
                    <Image
                        key={photo.src}
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        sizes="(min-width: 768px) 220px, 45vw"
                        className={`object-cover transition-opacity duration-100 ${flicker ? "opacity-0" : "opacity-100"
                            }`}
                    />

                    <span
                        aria-hidden="true"
                        className="absolute top-0.5 right-0.5 bg-background px-1 font-mono text-base leading-none text-foreground"
                    >
                        {index + 1}/{photos.length}
                    </span>

                    {hearts > 0 && (
                        <span
                            key={hearts}
                            aria-hidden="true"
                            className="pointer-events-none absolute bottom-4 left-1/2 -ml-3 text-3xl text-accent motion-safe:animate-pop motion-reduce:hidden"
                        >
                            ♥
                        </span>
                    )}
                </div>

                <button
                    type="button"
                    onClick={() => go(-1)}
                    aria-label="Previous photo"
                    className={hotspot}
                    style={place(BUTTONS.prev)}
                />
                <button
                    type="button"
                    onClick={() => setHearts((h) => h + 1)}
                    aria-label="Send a heart"
                    className={hotspot}
                    style={place(BUTTONS.heart)}
                />
                <button
                    type="button"
                    onClick={() => go(1)}
                    aria-label="Next photo"
                    className={hotspot}
                    style={place(BUTTONS.next)}
                />
            </div>

            <p aria-live="polite" className="sr-only">
                {photo.alt}
            </p>
        </div>
    );
}