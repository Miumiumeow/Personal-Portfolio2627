"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { site } from "@/data/site";
import Section from "./Section";

function Bubble({ from, children }) {
  const isMe = from === "me";
  return (
    <div className={`flex ${isMe ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[85%] px-3.5 py-2 font-mono text-xl leading-snug ${
          isMe
            ? "rounded-2xl rounded-br-sm bg-accent text-background"
            : "rounded-2xl rounded-bl-sm bg-accent/15 text-foreground"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

function Typing() {
  return (
    <div className="flex justify-start">
      <p
        aria-label="typing"
        className="flex gap-1.5 rounded-2xl rounded-bl-sm bg-accent/15 px-4 py-3.5"
      >
        {[0, 1, 2].map((n) => (
          <span
            key={n}
            aria-hidden="true"
            className="h-2.5 w-2.5 rounded-full bg-accent motion-safe:animate-blink"
            style={{ animationDelay: `${n * 0.25}s` }}
          />
        ))}
      </p>
    </div>
  );
}

const chip =
  "cursor-pointer! rounded-full border-2 border-foreground bg-background px-4 py-1.5 font-mono text-xl leading-none shadow-[2px_2px_0_0_var(--foreground)] transition-transform hover:-translate-y-0.5 hover:bg-accent hover:text-background active:translate-x-[2px] active:translate-y-[2px] active:shadow-none";

export default function Contact() {
  const { messages, replies } = site.contact;
  const sectionRef = useRef(null);
  const listRef = useRef(null);
  const copyTimer = useRef(null);
  const [started, setStarted] = useState(false);
  const [visible, setVisible] = useState(0);
  const [typing, setTyping] = useState(false);
  const [exchange, setExchange] = useState(null);
  const [copied, setCopied] = useState(false);

  // Start the chat when the section scrolls into view.
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Play the messages one at a time (once).
  useEffect(() => {
    if (!started) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(messages.length);
      return;
    }

    const timers = [];
    messages.forEach((_, i) => {
      timers.push(setTimeout(() => setTyping(true), i * 1500 + 300));
      timers.push(
        setTimeout(() => {
          setTyping(false);
          setVisible(i + 1);
        }, i * 1500 + 1300)
      );
    });
    return () => timers.forEach(clearTimeout);
  }, [started, messages]);

  // Keep the newest message in view inside the phone (not the page).
  useEffect(() => {
    const el = listRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [visible, typing, exchange, copied]);

  useEffect(() => () => clearTimeout(copyTimer.current), []);

  const done = visible === messages.length;

  // Each tap replaces the last exchange, so they never stack up.
  function handleReply(reply) {
    setCopied(false);
    setExchange({
      me: reply.label,
      bot: reply.response,
      reveal: reply.reveal,
    });
  }

  async function copy(text) {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      clearTimeout(copyTimer.current);
      copyTimer.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      // If copying isn't allowed, the address is still selectable.
    }
  }

  return (
    <Section id="contact" title="Contact">
      <div ref={sectionRef} className="mx-auto w-full max-w-sm">
        {/* Phone body */}
        <div className="relative rounded-[2.75rem] border-2 border-foreground bg-accent px-3 pt-4 pb-5 shadow-[6px_6px_0_0_var(--foreground)]">
          {/* Side buttons (decoration) */}
          <span
            aria-hidden="true"
            className="absolute top-24 -right-[7px] h-12 w-1.5 border-2 border-foreground bg-accent"
          />
          <span
            aria-hidden="true"
            className="absolute top-20 -left-[7px] h-8 w-1.5 border-2 border-foreground bg-accent"
          />

          {/* Speaker */}
          <span
            aria-hidden="true"
            className="mx-auto mb-3 block h-2 w-20 rounded-full bg-foreground/80"
          />

          {/* Screen */}
          <div className="overflow-hidden rounded-[1.75rem] border-2 border-foreground bg-background">
            {/* Chat header */}
            <div className="flex items-center gap-3 border-b-2 border-foreground bg-accent/10 px-4 py-3">
              <Image
                src={site.photo}
                alt=""
                width={40}
                height={40}
                className="h-10 w-10 rounded-full border-2 border-foreground object-cover"
              />
              <div className="leading-none">
                <p className="font-display text-lg font-semibold">
                  {site.name}
                </p>
                <p className="mt-1 font-mono text-lg text-accent">● online</p>
              </div>
            </div>

            {/* Messages */}
            <div
              ref={listRef}
              role="log"
              aria-live="polite"
              className="h-[26rem] space-y-3 overflow-y-auto px-4 py-4"
            >
              {messages.slice(0, visible).map((text) => (
                <Bubble key={text} from="bot">
                  {text}
                </Bubble>
              ))}

              {typing && <Typing />}

              {exchange && (
                <>
                  <Bubble from="me">{exchange.me}</Bubble>
                  <Bubble from="bot">
                    <p>{exchange.bot}</p>
                    {exchange.reveal && (
                      <>
                        <p className="mt-2 break-all text-accent select-text">
                          {exchange.reveal}
                        </p>
                        <button
                          type="button"
                          onClick={() => copy(exchange.reveal)}
                          className="mt-3 cursor-pointer! rounded-full border-2 border-foreground bg-background px-3 py-1 text-xl leading-none text-foreground shadow-[2px_2px_0_0_var(--foreground)] hover:bg-accent hover:text-background active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
                        >
                          {copied ? "copied ♥" : "copy"}
                        </button>
                      </>
                    )}
                  </Bubble>
                  <div className="flex justify-center">
                    <button
                      type="button"
                      onClick={() => setExchange(null)}
                      className="cursor-pointer! font-mono text-xl text-muted underline hover:text-accent"
                    >
                      ↻ clear
                    </button>
                  </div>
                </>
              )}
            </div>

            {/* Reply tray */}
            <div className="border-t-2 border-foreground bg-accent/10 px-4 py-3">
              {done ? (
                <div className="flex flex-wrap justify-center gap-2">
                  {replies.map((reply) =>
                    reply.href ? (
                      <a
                        key={reply.label}
                        href={reply.href}
                        target={
                          reply.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          reply.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        onClick={() => handleReply(reply)}
                        className={chip}
                      >
                        {reply.label}
                      </a>
                    ) : (
                      <button
                        key={reply.label}
                        type="button"
                        onClick={() => handleReply(reply)}
                        className={chip}
                      >
                        {reply.label}
                      </button>
                    )
                  )}
                </div>
              ) : (
                <p className="py-1.5 text-center font-mono text-xl text-muted">
                  ...
                </p>
              )}

              {/* Home bar */}
              <span
                aria-hidden="true"
                className="mx-auto mt-3 block h-1.5 w-24 rounded-full bg-foreground/60"
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}