import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-3xl px-6 py-8 text-sm text-muted">
        © {new Date().getFullYear()} {site.name}
      </div>
    </footer>
  );
}
