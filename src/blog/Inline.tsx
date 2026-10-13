import { Fragment } from "react";

// Renders **bold** and [text](url) inside a plain string.
export function Inline({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g);
  return (
    <>
      {parts.map((part, i) => {
        const bold = part.match(/^\*\*(.+)\*\*$/);
        if (bold) return <strong key={i} className="font-semibold text-ink">{bold[1]}</strong>;
        const link = part.match(/^\[(.+)\]\((.+)\)$/);
        if (link) {
          // Links to other websites open in a new tab.
          const external = /^https?:\/\//.test(link[2]);
          return (
            <a
              key={i}
              href={link[2]}
              {...(external ? { target: "_blank", rel: "noopener" } : {})}
              className="font-medium text-brand underline decoration-mint-strong decoration-2 underline-offset-4 hover:text-brand-dark"
            >
              {link[1]}
            </a>
          );
        }
        return <Fragment key={i}>{part}</Fragment>;
      })}
    </>
  );
}
