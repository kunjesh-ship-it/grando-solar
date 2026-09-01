import SplitText from './SplitText';

export default function SectionHeader({ tag, title, accent = [], lead, align = 'left', className = '' }) {
  const center = align === 'center';
  return (
    <div className={`sec-head ${center ? 'text-center mx-auto' : ''} ${className}`} style={center ? { maxWidth: 760 } : undefined}>
      {tag && <span className="sec-tag reveal">{tag}</span>}
      <SplitText text={title} accent={accent} className="sec-title" />
      {lead && <p className={`sec-lead reveal ${center ? 'mx-auto' : ''}`}>{lead}</p>}
    </div>
  );
}
