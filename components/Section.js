// Shared wrapper so every section has the same spacing and heading style.
export default function Section({ id, title, children }) {
  return (
    <section
      id={id}
      className="scroll-mt-28 border-t border-border py-16"
      aria-labelledby={`${id}-title`}
    >
      <h2 id={`${id}-title`} className="text-2xl font-semibold tracking-tight">
        {title}
      </h2>
      <div className="mt-6">{children}</div>
    </section>
  );
}
