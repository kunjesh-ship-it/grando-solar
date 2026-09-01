import Link from 'next/link';
import Image from 'next/image';
import SectionHeader from '@/components/ui/SectionHeader';
import Icon from '@/components/ui/Icon';
import '@/components/sections/sections.css';

export default function AboutIntro() {
  return (
    <section className="section">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6">
            <div className="feature-img reveal-img">
              <Image src="/images/team-carport.jpg" alt="Grando Solar engineer at an elevated carport solar installation" fill sizes="(max-width: 991px) 100vw, 50vw" />
              <div className="float-badge">
                <span className="icon-badge"><Icon name="shield" /></span>
                <div><strong>Licensed</strong><span>Electrical contractor · EPC</span></div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <SectionHeader tag="About Grando Solar" title="Your solar growth partner in Gujarat." accent={['growth', 'partner']} />
            <p className="reveal">
              Grando Solar Energy is a solar EPC brand of Om Shanti Machineries Exim, headquartered in Surat with offices in Vadodara, Vapi, Bharuch and Ahmedabad. We design, install and maintain rooftop, society, industrial, ground-mounted and carport solar plants — with our own engineering team, our own installation crews and our own storm-safe structures.
            </p>
            <p className="reveal">
              We are an authorised channel and franchise partner of Waaree Energies and a government-approved channel partner with Gujarat’s DISCOMs, which means subsidy, approvals and net metering are handled in-house.
            </p>
            <div className="tick-grid cols-2 mt-4 mb-4" data-stagger>
              <div className="tick-card reveal"><span className="icon-badge"><Icon name="ruler" /></span><h3>Free 3D design</h3><p>Site visit, shadow analysis and layout before you pay.</p></div>
              <div className="tick-card reveal"><span className="icon-badge"><Icon name="wind" /></span><h3>Storm-safe build</h3><p>HDGI virgin steel, SS304, Hilti — no site welding.</p></div>
              <div className="tick-card reveal"><span className="icon-badge"><Icon name="rupee" /></span><h3>Subsidy + loan</h3><p>100% loan assistance and direct subsidy credit.</p></div>
              <div className="tick-card reveal"><span className="icon-badge"><Icon name="monitor" /></span><h3>Lifetime support</h3><p>Monitoring, AMC and service teams in 5 cities.</p></div>
            </div>
            <Link href="/about-us" className="link-arrow reveal">More about us <span className="circle"><Icon name="arrow" size={18} /></span></Link>
          </div>
        </div>
      </div>
    </section>
  );
}
