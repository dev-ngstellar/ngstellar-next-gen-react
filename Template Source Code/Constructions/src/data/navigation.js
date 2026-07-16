export const navigationLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  {
    label: 'Services',
    path: '/services',
    megaMenu: [
      { label: 'Commercial Construction', path: '/services#commercial', desc: 'State-of-the-art office blocks and retail spaces' },
      { label: 'Residential Development', path: '/services#residential', desc: 'High-rise apartments and mixed-use properties' },
      { label: 'Industrial Construction', path: '/services#industrial', desc: 'Heavy factories, warehouses, and energy facilities' },
      { label: 'Infrastructure Projects', path: '/services#infrastructure', desc: 'Bridges, roads, and municipal pipelines' },
      { label: 'Civil Engineering', path: '/services#civil', desc: 'Structural calculations and geotechnical design' },
      { label: 'Project Management', path: '/services#management', desc: 'Cost analysis, timelines, and procurement' }
    ]
  },
  { label: 'Projects', path: '/projects' },
  { label: 'Team', path: '/team' },
  { label: 'Careers', path: '/careers' },
  { label: 'Contact', path: '/contact' }
];
