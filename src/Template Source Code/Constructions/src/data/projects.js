export const projectsData = [
  {
    id: 'metro-transit-hub',
    title: 'Metro Transit Hub',
    category: 'Infrastructure',
    shortDesc: 'A multi-modal transport terminal connecting light rail, regional buses, and commercial pathways.',
    longDesc: 'This complex public infrastructure project involved the excavation and construction of a three-level transit terminal in a high-density urban corridor, complete with pedestrian walkways, light rail platforms, and administrative offices.',
    image: 'project-infrastructure-01.jpg',
    detailImages: ['project-infrastructure-01.jpg', 'project-infrastructure-02.jpg'],
    metrics: {
      location: 'Metro City East',
      value: '$85,000,000',
      duration: '32 Months',
      size: '45,000 sq. m.'
    },
    challenges: 'Executing deep-earth excavation adjacent to active high-density railway lines without disrupting daily train operations or risking structural shifts in surrounding foundations.',
    solutions: 'Implemented continuous seismic monitoring and temporary structural shoring. Executed major concrete pours during non-peak night windows between 1 AM and 5 AM.',
    timeline: [
      { date: 'Month 1-6', label: 'Excavation & Shoring' },
      { date: 'Month 7-18', label: 'Core Structural Pouring' },
      { date: 'Month 19-28', label: 'Mechanical & Platform Laying' },
      { date: 'Month 29-32', label: 'Commissioning & Commissioning' }
    ],
    outcome: 'Completed 2 weeks ahead of schedule with zero safety incidents, serving over 120,000 commuters daily.'
  },
  {
    id: 'eco-office-tower',
    title: 'Eco Office Tower',
    category: 'Commercial',
    shortDesc: 'A 24-story commercial corporate tower featuring a double-glazed facade and integrated solar technology.',
    longDesc: 'Designed to achieve the highest green building certificates, this commercial skyscraper combines smart building controls, rainwater harvesting, and local low-carbon concrete structures.',
    image: 'project-commercial-01.jpg',
    detailImages: ['project-commercial-01.jpg', 'project-commercial-02.jpg'],
    metrics: {
      location: 'Business District North',
      value: '$110,000,000',
      duration: '28 Months',
      size: '62,000 sq. m.'
    },
    challenges: 'Integrating high-efficiency photovoltaic glass panels across the southern facade while maintaining transparency requirements for indoor work environments.',
    solutions: 'Collaborated with advanced manufacturers to supply custom micro-perforated solar glass that filters solar heat gain while generating up to 18% of the building’s power needs.',
    timeline: [
      { date: 'Month 1-4', label: 'Piling & Foundation' },
      { date: 'Month 5-16', label: 'Superstructure Framing' },
      { date: 'Month 17-24', label: 'Façade & Solar Cladding' },
      { date: 'Month 25-28', label: 'Interior Fit-Out & Smart Commissioning' }
    ],
    outcome: 'Recognized as the greenest building in the region, reducing annual energy costs by over 35% compared to baseline towers.'
  },
  {
    id: 'automated-logistics-center',
    title: 'Automated Logistics Center',
    category: 'Industrial',
    shortDesc: 'A distribution depot with reinforced flooring and specialized high-rack storage bays.',
    longDesc: 'This massive logistics hub was engineered specifically for automated sorting lines. The design prioritized expansive column spacing and flat laser-leveled floors.',
    image: 'project-industrial-01.jpg',
    detailImages: ['project-industrial-01.jpg', 'project-industrial-02.jpg'],
    metrics: {
      location: 'Industrial Zone West',
      value: '$42,000,000',
      duration: '14 Months',
      size: '120,000 sq. m.'
    },
    challenges: 'Achieving super-flat floor tolerances (FM1 specifications) across a 120,000 square meter layout to prevent high-mast automated cranes from tipping.',
    solutions: 'Utilized laser-guided screed concrete machinery and executed continuous 24-hour pour schedules to minimize cold joints.',
    timeline: [
      { date: 'Month 1-2', label: 'Civil Earthworks' },
      { date: 'Month 3-6', label: 'Super-Flat Floor Slab Pouring' },
      { date: 'Month 7-11', label: 'Steel Truss & Cladding Erection' },
      { date: 'Month 12-14', label: 'HVAC, Fire Systems & Handover' }
    ],
    outcome: 'Successfully certified FM1 flat floor rating across all bays, allowing immediate deployment of automated high-speed logistics.'
  },
  {
    id: 'urban-heights-residences',
    title: 'Urban Heights Residences',
    category: 'Residential',
    shortDesc: 'A multi-block luxury condominium complex featuring private parklands and underground parking.',
    longDesc: 'This high-rise residential project features three blocks of apartments surrounding a central landscaped sky-park, providing modern housing solutions in a crowded urban center.',
    image: 'project-residential-01.jpg',
    detailImages: ['project-residential-01.jpg', 'project-residential-02.jpg'],
    metrics: {
      location: 'Residential Quarter South',
      value: '$75,000,000',
      duration: '24 Months',
      size: '54,000 sq. m.'
    },
    challenges: 'Constructing a multi-level underground parking basement with a high local water table near a flowing river canal.',
    solutions: 'Installed an advanced perimeter bentonite slurry wall and continuous dewatering wells to create a dry, secure excavation basin.',
    timeline: [
      { date: 'Month 1-5', label: 'Slurry Wall & Dewatering' },
      { date: 'Month 6-12', label: 'Basement Pours & Substructure' },
      { date: 'Month 13-20', label: 'Superstructure Framing' },
      { date: 'Month 21-24', label: 'Finishing & Handover' }
    ],
    outcome: 'Delivered fully watertight parking structures and high-end residential spaces, currently 98% occupied.'
  },
  {
    id: 'regional-medical-complex',
    title: 'Regional Medical Complex',
    category: 'Healthcare',
    shortDesc: 'A modern surgical wing addition featuring positive pressure air filtration systems.',
    longDesc: 'This specialized healthcare addition includes 12 operating rooms, an ICU ward, and high-capacity sterile supply departments complying with international surgical standards.',
    image: 'project-commercial-02.jpg',
    detailImages: ['project-commercial-02.jpg', 'project-industrial-01.jpg'],
    metrics: {
      location: 'City Hospital Campus',
      value: '$55,000,000',
      duration: '18 Months',
      size: '22,000 sq. m.'
    },
    challenges: 'Constructing directly adjacent to the active main hospital emergency wing while ensuring zero dust or vibration entered the existing operating theatres.',
    solutions: 'Erected pressurized plastic containment barriers with HEPA air scrubbers. Scheduled high-vibration drilling during predetermined off-peak hospital hours.',
    timeline: [
      { date: 'Month 1-3', label: 'Site Containment & Piling' },
      { date: 'Month 4-9', label: 'Concrete Core Structure' },
      { date: 'Month 10-15', label: 'HVAC & Surgical Ducting' },
      { date: 'Month 16-18', label: 'Cleanroom Testing & Calibration' }
    ],
    outcome: 'Passed all cleanroom air particulate certifications on first inspection, integrating the new wing without a single disruption to hospital services.'
  },
  {
    id: 'innovation-university-hall',
    title: 'Innovation University Hall',
    category: 'Education',
    shortDesc: 'A state-of-the-art academic building containing lecture halls, laboratories, and study lounges.',
    longDesc: 'Designed to host advanced research and interactive student forums, this building features high-ceiling lecture auditoriums and chemical safety ventilation lines.',
    image: 'project-industrial-02.jpg',
    detailImages: ['project-industrial-02.jpg', 'project-commercial-01.jpg'],
    metrics: {
      location: 'University District Central',
      value: '$38,000,000',
      duration: '16 Months',
      size: '18,500 sq. m.'
    },
    challenges: 'Installing complex exhaust venting systems for 15 chemistry and biology research labs within a multi-story concrete structure.',
    solutions: 'Utilized BIM software to coordinate duct routes with structural steel trusses before casting the concrete floors, saving weeks of post-pour drilling.',
    timeline: [
      { date: 'Month 1-3', label: 'Geotechnical & Foundations' },
      { date: 'Month 4-8', label: 'Structural Steel Erecting' },
      { date: 'Month 9-13', label: 'M&E Ducting & Lab Setups' },
      { date: 'Month 14-16', label: 'Acoustic Treatments & Handover' }
    ],
    outcome: 'Achieved an eco-friendly campus structure that accommodates both high-safety research labs and collaborative study spaces.'
  }
];
