export const site = {
  name: 'Grando Solar',
  legalName: 'Grando Solar Energy',
  parent: 'Om Shanti Machineries Exim',
  tagline: 'Power. Performance. Profit.',
  motto: 'Powering Tomorrow with Clean Energy Today',
  url: 'https://www.grandosolar.com',
  email: 'grandosolar@gmail.com',
  phone: '+91 99240 92009',
  phoneHref: 'tel:+919924092009',
  whatsapp: '919924092009',
  whatsappHref: 'https://wa.me/919924092009?text=Hi%20Grando%20Solar%2C%20I%20want%20a%20free%20site%20visit%20for%20rooftop%20solar.',
  instagram: 'https://www.instagram.com/grandosolar/',
  facebook: 'https://www.facebook.com/grandosolarenergy',
  region: 'Gujarat, India',
  foundedNote: 'A brand of Om Shanti Machineries Exim',
};

export const locations = [
  {
    slug: 'surat',
    city: 'Surat',
    label: 'Head Office',
    address: '18, Navjivan Ind. Co-op Service Society, Udhna Magdalla Road, Khatodara, Surat, Gujarat – 395002',
    phone: '+91 99240 92009',
    phoneHref: 'tel:+919924092009',
    map: 'https://www.google.com/maps/search/?api=1&query=Navjivan+Industrial+Co-op+Service+Society+Udhna+Magdalla+Road+Khatodara+Surat+395002',
    discom: 'DGVCL / Torrent Power',
    blurb: 'Our head office and largest team. Serving homes, societies, textile units and industrial estates across Surat, Udhna, Sachin, Pandesara, Hazira and Navsari.',
    areas: ['Udhna', 'Vesu', 'Adajan', 'Pal', 'Sachin', 'Pandesara', 'Hazira', 'Navsari', 'Bardoli'],
  },
  {
    slug: 'vadodara',
    city: 'Vadodara',
    label: 'Branch Office',
    address: '1103, K P Platina, Race Course Road, Opp. Vanijya Bhavan, Vadodara, Gujarat – 390023',
    phone: '+91 82004 17874',
    phoneHref: 'tel:+918200417874',
    map: 'https://www.google.com/maps/search/?api=1&query=K+P+Platina+Race+Course+Road+Vadodara+390023',
    discom: 'MGVCL',
    blurb: 'Rooftop solar for bungalows, societies and factories in Vadodara, Makarpura GIDC, Halol, Savli and Anand.',
    areas: ['Alkapuri', 'Gotri', 'Manjalpur', 'Makarpura GIDC', 'Halol', 'Savli', 'Anand'],
  },
  {
    slug: 'vapi',
    city: 'Vapi',
    label: 'Branch Office',
    address: '608, Capital Business Center (CBC), Station Road, Opp. PWD Circuit House, Kanchan Nagar, Vapi East, Vapi, Gujarat – 396191',
    phone: '+91 92130 06110',
    phoneHref: 'tel:+919213006110',
    map: 'https://www.google.com/maps/search/?api=1&query=Capital+Business+Center+Station+Road+Vapi+East+396191',
    discom: 'DGVCL',
    blurb: 'Industrial and commercial solar for the Vapi, Sarigam, Umbergaon and Valsad belt, plus residential rooftops.',
    areas: ['Vapi GIDC', 'Sarigam', 'Umbergaon', 'Valsad', 'Daman', 'Silvassa'],
  },
  {
    slug: 'bharuch',
    city: 'Bharuch',
    label: 'Branch Office',
    address: '403, Shilpi Square, 4th Floor, Bypass Road, Nr. Shravan Chokdi, Bharuch, Gujarat – 393010',
    phone: '+91 92130 14748',
    phoneHref: 'tel:+919213014748',
    map: 'https://www.google.com/maps/search/?api=1&query=Shilpi+Square+Bypass+Road+Bharuch+393010',
    discom: 'DGVCL',
    blurb: 'Serving Bharuch, Ankleshwar GIDC, Dahej and Jhagadia with rooftop and ground-mounted solar plants.',
    areas: ['Ankleshwar', 'Dahej', 'Jhagadia', 'Panoli', 'Zadeshwar'],
  },
  {
    slug: 'ahmedabad',
    city: 'Ahmedabad',
    label: 'Branch Office',
    address: '706, Akshar Square, Sandesh Press Road, Bodakdev, Ahmedabad, Gujarat – 380054',
    phone: '+91 98248 68078',
    phoneHref: 'tel:+919824868078',
    map: 'https://www.google.com/maps/search/?api=1&query=Akshar+Square+Sandesh+Press+Road+Bodakdev+Ahmedabad+380054',
    discom: 'Torrent Power / UGVCL',
    blurb: 'Residential, society and commercial solar across Ahmedabad, Gandhinagar, Sanand and Changodar.',
    areas: ['Bodakdev', 'Satellite', 'Bopal', 'Gandhinagar', 'Sanand', 'Changodar', 'Naroda'],
  },
];

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about-us' },
  {
    label: 'Solutions',
    href: '/solutions',
    children: [
      { label: 'Residential Rooftop Solar', href: '/solutions/residential-rooftop-solar' },
      { label: 'Housing Society Solar', href: '/solutions/housing-society-solar' },
      { label: 'Commercial Solar', href: '/solutions/commercial-solar' },
      { label: 'Industrial Solar', href: '/solutions/industrial-solar' },
      { label: 'Ground-Mounted Solar', href: '/solutions/ground-mounted-solar' },
      { label: 'Solar Carport / Parking Shade', href: '/solutions/solar-carport-parking-shade' },
    ],
  },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Site Survey & 3D Design', href: '/services/site-survey-3d-design' },
      { label: 'Solar EPC Installation', href: '/services/solar-epc-installation' },
      { label: 'Subsidy & Loan Assistance', href: '/services/subsidy-loan-assistance' },
      { label: 'Maintenance, AMC & Monitoring', href: '/services/maintenance-amc-monitoring' },
    ],
  },
  { label: 'Technology', href: '/storm-safe-structure' },
  { label: 'Subsidy', href: '/pm-surya-ghar-subsidy' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact-us' },
];

// Approvals / partner logos — text-only badges (no logo files supplied yet)
export const partners = [
  { name: 'Waaree Energies', note: 'Authorized Channel & Franchise Partner' },
  { name: 'MNRE', note: 'Ministry of New & Renewable Energy' },
  { name: 'GEDA', note: 'Gujarat Energy Development Agency' },
  { name: 'DGVCL', note: 'Approved Channel Partner' },
  { name: 'PGVCL', note: 'Approved Channel Partner' },
  { name: 'MGVCL', note: 'Approved Channel Partner' },
  { name: 'GETCO', note: 'Approved Channel Partner' },
  { name: 'GUVNL', note: 'Approved Channel Partner' },
  { name: 'Torrent Power', note: 'Approved Channel Partner' },
];

// What every Grando plant includes — from the 2026 brochure
export const whatWeGive = [
  { title: '30-year panel life', text: 'Tier-1 modules with long-term performance warranty.' },
  { title: '10-year inverter warranty', text: 'Reliable DC-to-AC conversion, covered for a decade.' },
  { title: '5-year plant warranty', text: 'Free repair and replacement on the complete plant.' },
  { title: 'HDGI storm-safe structure', text: 'Hot-dip galvanised, pre-fabricated, no on-site welding.' },
  { title: 'SS304 J-bolts & ties', text: 'Stainless fasteners that never rust.' },
  { title: 'Hilti RE10 anchoring', text: 'Chemical anchoring with airtight, waterproof seal.' },
  { title: 'L&T MCB protection', text: 'Branded switchgear on every installation.' },
  { title: 'Real-time monitoring', text: 'Track generation from your phone.' },
  { title: 'Solar insurance', text: 'Plant insurance provided with your system.' },
  { title: 'Maintenance & after-sales', text: 'Dedicated service team across 5 cities.' },
];

export const siteTypes = [
  'Residential Building', 'Housing Society', 'Industry & Factory', 'Commercial Complex', 'School & College',
  'Hospital', 'Hotel', 'Warehouse', 'Cold Storage', 'Dairy Farm', 'Mall', 'IT / Software Office',
  'NGO & Trust', 'Amusement Park', 'Parking Shade', 'Ground Mount',
];

export const subsidy = {
  residential: { amount: '₹78,000', note: 'Central subsidy for 3 kW and above under PM Surya Ghar: Muft Bijli Yojana' },
  society: { amount: '₹18,000 / kW', note: 'For common-meter (society / RWA) installations' },
  disclaimer: 'Subsidy amounts are as per the PM Surya Ghar: Muft Bijli Yojana at the time of publishing and are credited directly to the beneficiary account. Eligibility and amounts are decided by MNRE / DISCOM.',
};
