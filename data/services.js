export const services = [
  {
    slug: 'site-survey-3d-design',
    title: 'Free Site Survey & 3D Design',
    short: 'Shadow analysis, roof measurement and a 3D layout before you commit a rupee.',
    icon: 'ruler',
    image: '/images/team-carport.jpg',
    intro:
      'Every Grando Solar project starts with a free visit. Our engineer measures the roof, checks structure and wiring, runs a shadow analysis and prepares a 3D layout with a generation estimate — so you see exactly what you are buying.',
    steps: [
      'Book a free site visit by call, WhatsApp or the website form.',
      'Engineer visits, measures the usable area and inspects the roof and electrical panel.',
      'Shadow analysis identifies obstructions and the best orientation.',
      '3D layout and generation estimate are shared with a transparent quotation.',
    ],
    benefits: ['No cost, no obligation', 'Up to 20% more generation from proper shadow analysis', 'Certified engineer-approved design', 'Clear, itemised quotation'],
  },
  {
    slug: 'solar-epc-installation',
    title: 'Solar EPC Installation',
    short: 'Engineering, procurement and construction under one licensed roof.',
    icon: 'tools',
    image: '/images/structure-wide.jpg',
    intro:
      'Grando Solar is an electrical-contractor-licensed EPC company. We engineer the structure, procure Tier-1 components, install with our own trained team and commission the plant with DISCOM — one accountable partner from start to finish.',
    steps: [
      'Structure engineered and pre-fabricated off-site in HDGI virgin steel.',
      'Panels, inverter, L&T MCB, SS304 fasteners and cabling procured from approved brands.',
      'Installation by Grando’s in-house team — no on-site cutting or welding.',
      'Testing, net-meter installation and commissioning with the DISCOM.',
    ],
    benefits: ['Electrical contractor licence approved', 'Waaree Energies authorised channel partner', 'Storm-safe, rust-proof structure', '5-year plant warranty'],
  },
  {
    slug: 'subsidy-loan-assistance',
    title: 'Subsidy & Loan Assistance',
    short: 'PM Surya Ghar subsidy filing, DISCOM approvals and loan facilitation — handled for you.',
    icon: 'rupee',
    image: '/images/home-roof.jpg',
    intro:
      'Subsidy paperwork is the number-one reason families delay solar. As a government-approved channel partner with Gujarat DISCOMs, Grando Solar registers your application, coordinates inspection and net metering, and helps you access loan facilities so the plant pays for itself from month one.',
    steps: [
      'Registration on the National Portal for Rooftop Solar (PM Surya Ghar).',
      'Feasibility approval from your DISCOM (DGVCL, MGVCL, PGVCL, UGVCL or Torrent).',
      'Installation, inspection and net-meter commissioning.',
      'Subsidy credited directly to your bank account.',
    ],
    benefits: ['₹78,000 residential subsidy (3 kW+)', '₹18,000/kW for housing societies', '100% loan facility assistance', 'Direct bank-account subsidy credit'],
  },
  {
    slug: 'maintenance-amc-monitoring',
    title: 'Maintenance, AMC & Monitoring',
    short: 'Keep generation high for 25 years with monitoring, cleaning and service support.',
    icon: 'monitor',
    image: '/images/rooftop-panels.jpg',
    intro:
      'A solar plant is a 25-year asset. Grando Solar provides real-time monitoring, scheduled cleaning, preventive checks and a dedicated after-sales team across Surat, Vadodara, Vapi, Bharuch and Ahmedabad, so your plant keeps performing as designed.',
    steps: [
      'Real-time generation monitoring on your phone.',
      'Scheduled panel cleaning and connection checks under AMC.',
      'Fast response service across five Gujarat cities.',
      'Warranty coordination with panel and inverter manufacturers.',
    ],
    benefits: ['Real-time monitoring system', 'Solar insurance provided', 'Maintenance & after-sales service', 'Local teams in 5 cities'],
  },
];

export const getService = (slug) => services.find((s) => s.slug === slug);

export const process = [
  { step: '01', title: 'Free Site Visit', text: 'Roof measurement, wiring check and shadow analysis by our engineer.' },
  { step: '02', title: '3D Design & Quote', text: 'Layout, generation estimate and transparent pricing before you decide.' },
  { step: '03', title: 'Subsidy & Loan', text: 'Portal registration, DISCOM approval and finance assistance handled for you.' },
  { step: '04', title: 'Installation', text: 'Pre-fabricated HDGI structure and Tier-1 components installed by our own team.' },
  { step: '05', title: 'Net Metering', text: 'Inspection, meter installation and commissioning with your DISCOM.' },
  { step: '06', title: 'Monitor & Maintain', text: 'Real-time app monitoring, AMC and after-sales support for 25 years.' },
];
