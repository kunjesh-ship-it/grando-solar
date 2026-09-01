import { whatWeGive } from '@/data/site';
import SectionHeader from '@/components/ui/SectionHeader';
import Icon from '@/components/ui/Icon';
import './sections.css';

const icons = ['sun', 'bolt', 'shield', 'layers', 'tools', 'shield', 'bolt', 'monitor', 'file', 'phone'];

export default function WhatWeGive({ theme = 'theme-navy' }) {
  return (
    <section className={`section ${theme} bg-grid`}>
      <div className="container">
        <div className="row align-items-end g-4 mb-5">
          <div className="col-lg-7">
            <SectionHeader tag="What every Grando plant includes" title="Built with components we would put on our own roof." accent={['own', 'roof.']} />
          </div>
          <div className="col-lg-5">
            <p className="sec-lead reveal mb-0">No hidden downgrades. Every quotation lists the exact panel, inverter, structure and protection you receive.</p>
          </div>
        </div>
        <div className="give-grid" data-stagger>
          {whatWeGive.map((g, i) => (
            <div className="give-item reveal" key={g.title}>
              <span className="give-ico"><Icon name={icons[i % icons.length]} size={22} /></span>
              <div>
                <h3 className="h4 mb-1">{g.title}</h3>
                <p className="mb-0">{g.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
