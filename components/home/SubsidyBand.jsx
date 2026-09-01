import Link from 'next/link';
import { subsidy } from '@/data/site';
import SplitText from '@/components/ui/SplitText';
import Icon from '@/components/ui/Icon';
import './home.css';

export default function SubsidyBand() {
  return (
    <section className="section-sm subsidy-band">
      <div className="container position-relative">
        <div className="row g-4 align-items-center">
          <div className="col-lg-6">
            <span className="sec-tag reveal" style={{ background: 'rgba(11,42,91,0.12)', color: 'var(--gs-navy-900)' }}>PM Surya Ghar: Muft Bijli Yojana</span>
            <SplitText text="Your subsidy, credited directly to your account. The paperwork is ours." accent={['directly']} />
            <p className="reveal mb-4" style={{ color: 'rgba(7,28,61,0.8)', maxWidth: 520 }}>
              As a government-approved channel partner, Grando Solar registers, files and follows up your subsidy application end to end. You just receive the credit.
            </p>
            <Link href="/pm-surya-ghar-subsidy" className="btn-gs navy reveal">Check My Eligibility <span className="ico"><Icon name="arrow" size={18} /></span></Link>
          </div>
          <div className="col-lg-6">
            <div className="row g-3" data-stagger>
              <div className="col-sm-6">
                <div className="subsidy-amt reveal"><strong>{subsidy.residential.amount}</strong><span>{subsidy.residential.note}</span></div>
              </div>
              <div className="col-sm-6">
                <div className="subsidy-amt reveal"><strong>{subsidy.society.amount}</strong><span>{subsidy.society.note}</span></div>
              </div>
            </div>
            <p className="small mt-3 mb-0 reveal" style={{ color: 'rgba(7,28,61,0.65)' }}>{subsidy.disclaimer}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
