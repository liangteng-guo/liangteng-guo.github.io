// All academic content lives here. Null means not yet supplied/verified.
// Asset paths are relative to public/; use files in public/assets/.
export const profile = {
  name: 'Liangteng Guo', degree: 'PhD', role: 'Researcher in advanced materials & metamaterials',
  portrait: null, // e.g. 'assets/images/portrait.jpg'
  heroImage: 'assets/images/metamaterial-hero.png',
  focus: 'Programmable Metamaterials for Wave Manipulation Enabled by Smart Materials and Novel Structures',
  statement: 'I explore how smart materials and novel structures can program the way waves travel. My research brings together metamaterials, computational mechanics and machine learning to investigate new possibilities for wave manipulation.',
  affiliations: [
    { short: 'UQ', name: 'The University of Queensland', detail: 'Doctor of Philosophy · Australia', kind: 'uq', logo: 'assets/logos/uq-official.svg' },
    { short: 'RMIT', name: 'RMIT University', detail: 'Casual Researcher · Australia', kind: 'rmit', logo: 'assets/logos/rmit-official.png' }
  ],
  links: { scholar: null, orcid: null, linkedin: null, email: null },
  cv: null, // e.g. 'assets/documents/liangteng-guo-cv.pdf'
  keywords: ['Phononic crystals', 'Smart materials', 'Phase-change materials', 'Shape-memory alloys', 'Graphene-reinforced composites', 'Machine learning', 'PINNs / XPINNs', 'Computational mechanics'],
};
export const researchAreas = [
  { id: 'phononic', title: 'Phononic crystals & metamaterials', label: 'ENGINEERING WAVE PROPAGATION', description: 'Exploring periodic structures and phononic materials for the manipulation of acoustic and elastic waves.', image: 'assets/images/phononic.svg', tags: ['Phononic crystals', 'Wave manipulation'] },
  { id: 'smart', title: 'Smart materials & tunable structures', label: 'PROGRAMMABLE MATERIAL RESPONSE', description: 'Investigating phase-change materials, shape-memory alloys and graphene-reinforced composites.', image: 'assets/images/smart.svg', tags: ['Phase-change materials', 'Shape-memory alloys'] },
  { id: 'computational', title: 'Computational mechanics & machine learning', label: 'PHYSICS MEETS INTELLIGENCE', description: 'Connecting computational modelling with machine learning, including physics-informed neural networks and XPINNs.', image: 'assets/images/computational.svg', tags: ['Machine learning', 'PINNs / XPINNs'] },
  { id: 'structures', title: 'Novel structures & applications', label: 'GEOMETRY AS A DESIGN TOOL', description: 'Exploring how novel structural designs enable programmable metamaterials and wave manipulation.', image: 'assets/images/structures.svg', tags: ['Novel structures', 'Computational mechanics'] }
];
// Add verified records: { title, authors, journal, year, doi, url, featured: true }.
export const publications = [];
export const metrics = [
  { label: 'Journal publications', value: null, note: 'Verified list to be added', icon: 'papers' },
  { label: 'Research citations', value: null, note: 'Source & date to be added', icon: 'quote' },
  { label: 'h-index', value: null, note: 'Source & date to be added', icon: 'chart' },
  { label: 'Research focus', value: 'Wave manipulation', note: 'Programmable metamaterials', icon: 'waves' }
];
export const experience = [
  { type: 'Education', title: 'Doctor of Philosophy', institution: 'The University of Queensland, Australia', dates: null },
  { type: 'Appointment', title: 'Casual Researcher', institution: 'RMIT University, Australia', dates: null }
];
