export const posts = [
  {
    slug: 'grando-solars-easy-installation-process',
    title: 'Grando Solar’s Easy Installation Process',
    excerpt: 'From the free site visit to net metering — what actually happens when you go solar with Grando, step by step.',
    date: '2025-07-08',
    image: '/images/team-carport.jpg',
    category: 'Process',
    body: [
      'Going solar feels complicated only because most companies never explain the process. At Grando Solar, every project follows the same six steps, and you always know which step you are on.',
      'Step 1 — Free site visit. Our engineer visits your home, society or factory, measures the usable roof, inspects the structure and electrical panel, and runs a shadow analysis. Nothing is quoted from a satellite image.',
      'Step 2 — 3D design and quotation. You receive a 3D layout of the panels on your actual roof, the expected monthly generation and a transparent, itemised quotation.',
      'Step 3 — Subsidy and loan. We register your application on the PM Surya Ghar portal, obtain DISCOM feasibility approval and help you arrange finance if you want to pay through EMI.',
      'Step 4 — Installation. The storm-safe HDGI structure is pre-fabricated off-site, so installation is quick and there is no cutting or welding on your roof. Panels, inverter, L&T MCB and cabling are installed by our own trained team.',
      'Step 5 — Net metering. After testing, the DISCOM inspects the plant and installs the bi-directional meter. Your plant is now live and exporting.',
      'Step 6 — Monitor and maintain. You track generation on your phone, and our after-sales team in Surat, Vadodara, Vapi, Bharuch and Ahmedabad is a call away for cleaning, AMC and service.',
    ],
  },
  {
    slug: 'how-solar-energy-saves-you-money-every-month',
    title: 'How Solar Energy Saves You Money Every Month',
    excerpt: 'Net metering, subsidy and EMI explained simply — why a solar EMI is usually lower than the bill it replaces.',
    date: '2025-07-08',
    image: '/images/home-roof.jpg',
    category: 'Savings',
    body: [
      'A rooftop solar plant saves money in three ways: it replaces the units you buy from the grid, it exports surplus units that are credited to your bill, and the government pays a large part of the cost upfront through subsidy.',
      'Net metering is the key. Suppose your plant generates 120 units in a month and your home uses 100. The extra 20 are exported and credited. Next month, if the plant generates 70 and you use 100, you import only 30 — and the earlier credit offsets that. Your bill is on the net units, not the gross consumption.',
      'Subsidy reduces the investment. Residential systems of 3 kW and above get ₹78,000 under PM Surya Ghar, credited directly to your bank account after commissioning.',
      'EMI versus bill. If you finance the balance, the monthly EMI on a typical home system is often lower than the electricity bill it replaces — and the EMI ends in a few years while the panels keep producing for 25 or more.',
      'The best way to know your exact number is a free site visit. Our engineer sizes the plant to your consumption, not to a brochure.',
    ],
  },
  {
    slug: 'is-your-business-ready-for-solar-heres-why-it-should-be',
    title: 'Is Your Business Ready for Solar? Here’s Why It Should Be',
    excerpt: 'Commercial tariffs, daytime loads and unused roofs make Gujarat businesses ideal candidates for rooftop solar.',
    date: '2025-07-08',
    image: '/images/panel-array.jpg',
    category: 'Commercial',
    body: [
      'Commercial and industrial consumers pay some of the highest tariffs in Gujarat, and most of that consumption happens during daylight hours — exactly when a solar plant produces the most.',
      'Unused roof is unused capital. A factory shed or office terrace in Surat, Vapi, Ankleshwar or Vadodara can host a plant that offsets a large share of daytime load for 25 years.',
      'Beyond the bill, businesses benefit from accelerated depreciation, protection from future tariff increases and a sustainability story that buyers increasingly ask for.',
      'What to check before you start: roof structure and load capacity, sanctioned load and consumption pattern, shading from neighbouring buildings, and DISCOM metering options. Grando Solar covers all four in a free roof assessment and gives you a site-specific projection rather than a generic payback number.',
    ],
  },
];

export const getPost = (slug) => posts.find((p) => p.slug === slug);
