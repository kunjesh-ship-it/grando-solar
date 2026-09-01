/**
 * Wraps each word in overflow-hidden spans so GSAP can slide them up.
 * Server-safe (no hooks). Accepts a string; use <Accent> markers via `accent` prop words.
 */
export default function SplitText({ text, as: Tag = 'h2', className = '', accent = [] }) {
  const words = text.split(' ');
  return (
    <Tag className={className} data-split>
      {words.map((w, i) => {
        const clean = w.replace(/[^\w₹%]/g, '').toLowerCase();
        const isAccent = accent.some((a) => a.replace(/[^\w₹%]/g, '').toLowerCase() === clean);
        return (
          <span className="split-word" key={i}>
            <span className={isAccent ? 'accent' : undefined}>{w}</span>
            {i < words.length - 1 ? ' ' : ''}
          </span>
        );
      })}
    </Tag>
  );
}
