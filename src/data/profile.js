import records from './publications.json';

// Edit content here; asset paths are relative to public/, without a leading slash.
export const profile = {
  name: 'Liangteng Guo', degree: 'PhD',
  role: 'Researcher | Advanced Materials & Metamaterials',
  mission: {
    title: 'My mission',
    statement: 'To advance programmable materials from scientific discovery toward practical engineering solutions.',
    detail: 'I aim to build an independent research career connecting smart materials, novel structures and computational intelligence to enable adaptive wave control.'
  },
  portrait: 'assets/images/liangteng-guo-portrait.png',
  heroImage: 'assets/images/metamaterial-hero.png',
  focus: 'Programmable metamaterials for wave manipulation, enabled by smart materials, novel structures and computational intelligence.',
  statement: 'My research focuses on programmable metamaterials and phononic crystals enabled by smart materials and novel structures, bringing together computational mechanics and machine learning for wave manipulation.',
  interests: ['Phononic crystals & wave manipulation', 'Phase-change materials & shape-memory alloys', 'Graphene-reinforced composites', 'Machine learning & PINNs / XPINNs', 'Novel structures & computational mechanics'],
  affiliations: [
    { name: 'The University of Queensland', detail: 'Doctor of Philosophy · Australia', logo: 'assets/logos/uq-official.svg', kind: 'uq' },
    { name: 'RMIT University', detail: 'Researcher · Australia', logo: 'assets/logos/rmit-official.png', kind: 'rmit' }
  ],
  links: {
    scholar: 'https://scholar.google.com.au/citations?user=1Y0Y4_UAAAAJ&hl=en',
    orcid: 'https://orcid.org/0000-0001-9023-7172',
    linkedin: 'https://www.linkedin.com/in/liangteng-guo-2902982aa/',
    email: null
  },
  cv: null,
};
export const researchAreas = [
  { id: 'phononic', title: 'Phononic metamaterials', image: 'assets/images/phononic.svg', description: 'Phononic crystals and architected materials for acoustic and elastic wave propagation, bandgaps and waveguides.', papers: ['10.1016/j.ijmecsci.2022.107956', '10.1016/j.euromechsol.2023.105185'] },
  { id: 'smart', title: 'Smart & tunable materials', image: 'assets/images/smart.svg', description: 'Phase-change materials, shape-memory alloys and graphene-reinforced composites for programmable material response.', papers: ['10.1016/j.ymssp.2024.111406', '10.1016/j.ymssp.2025.113556'] },
  { id: 'computational', title: 'Computational intelligence', image: 'assets/images/computational.svg', description: 'Machine learning and physics-informed methods, including PINNs and XPINNs, for computational mechanics and wave modelling.', papers: ['10.1016/j.engappai.2024.109755', '10.1016/j.ultras.2023.107220'] },
  { id: 'structures', title: 'Novel structures', image: 'assets/images/structures.svg', description: 'Novel structural geometries and functionally graded materials that connect material behaviour with mechanical and wave response.', papers: ['10.1016/j.engstruct.2025.121995'] }
];
export const publications = records;
export const impact = {
  citations: 213, hIndex: 8, i10Index: 8,
  source: 'Google Scholar', sourceUrl: profile.links.scholar,
  snapshotDate: null,
  latestYearIsPartial: true,
  annual: [{year:2020,count:2},{year:2021,count:3},{year:2022,count:4},{year:2023,count:11},{year:2024,count:31},{year:2025,count:47},{year:2026,count:115}],
};
export const experience = [
  { type: 'Education', title: 'Doctor of Philosophy', institution: 'The University of Queensland, Australia', dates: null, url: 'https://www.uq.edu.au/' },
  { type: 'Appointment', title: 'Casual Researcher', institution: 'RMIT University, Australia', dates: null, url: 'https://www.rmit.edu.au/' }
];
