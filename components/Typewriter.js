"use client";

import { useEffect, useState } from "react";

export default function Typewriter({ words }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index];
    let delay = deleting ? 45 : 90;
    if (!deleting && text === word) delay = 1400; // pause when fully typed
    if (deleting && text === "") delay = 400; // pause before the next word

    const timer = setTimeout(() => {
      if (!deleting && text === word) {
        setDeleting(true);
      } else if (deleting && text === "") {
        setDeleting(false);
        setIndex((index + 1) % words.length);
      } else {
        setText(
          deleting
            ? word.slice(0, text.length - 1)
            : word.slice(0, text.length + 1)
        );
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text, deleting, index, words]);

  return (
    <>
      <span className="sr-only">{words.join(" and ")}</span>
      <span aria-hidden="true" className="motion-reduce:hidden">
        {text}
      </span>
      <span aria-hidden="true" className="hidden motion-reduce:inline">
        {words.join(" | ")}
      </span>
    </>
  );
}