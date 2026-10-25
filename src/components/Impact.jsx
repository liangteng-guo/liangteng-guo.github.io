import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { impact, publications } from '../data/profile';
import CitationChart, { MiniCitationChart } from './CitationChart';
const latest=impact.annual.at(-1), previous=impact.annual.at(-2);
export const citationGrowth=((latest.count/previous.count-1)*100).toFixed(0);
export function SnapshotNote() {
  return <p className="snapshot-note"><a href={impact.sourceUrl} target="_blank" rel="noreferrer">Google Scholar <ArrowUpRight size={12}/></a> · Researcher-supplied snapshot{impact.snapshotDate?' · '+impact.snapshotDate:''} · {latest.year} year to date</p>;
}
export function ImpactStrip() {
  const count=publications.filter(p=>p.type==='journal-article').length;
  return <section className="container impact-strip" aria-labelledby="impact-overview-title">
    <div className="strip-heading"><h2 id="impact-overview-title">Growing research impact</h2><a href="#impact">Explore the evidence <ArrowDownRight size={15}/></a></div>
    <div className="metrics">
      <a className="metric" href="#publications"><span className="metric-label">Publications</span><strong>{count}</strong><span className="metric-note">Journal articles in supplied list</span></a>
      <a className="metric citation-metric" href="#impact"><div><span className="metric-label">Citations</span><strong>{impact.citations}</strong><span className="metric-note">Google Scholar</span></div><MiniCitationChart/></a>
      <a className="metric" href="#impact"><span className="metric-label">h-index</span><strong>{impact.hIndex}</strong><span className="metric-note">Google Scholar</span></a>
      <a className="metric growth-metric" href="#impact"><span className="metric-label">Citation growth</span><strong>+{citationGrowth}%</strong><span className="metric-note">{latest.year} YTD vs {previous.year}</span><span className="growth-ratio">{(latest.count/previous.count).toFixed(2)}× the {previous.year} annual count</span></a>
    </div><SnapshotNote/>
  </section>;
}
export default function Impact() {
 return <section id="impact" className="section section-tint"><div className="container">
   <div className="section-heading"><div><span className="section-kicker">Research impact</span><h2>Growing research visibility.</h2><p>Annual citations have risen from {impact.annual[0].count} in {impact.annual[0].year} to {latest.count} in {latest.year} to date.</p></div><a className="text-link" href={impact.sourceUrl} target="_blank" rel="noreferrer">View Google Scholar <ArrowUpRight size={16}/></a></div>
   <div className="impact-chart-grid"><CitationChart/><aside className="growth-panel">
     <span className="metric-label">A growing body of cited work</span><strong>+{citationGrowth}%</strong><p>{latest.year} year-to-date citations compared with the full {previous.year} calendar year.</p>
     <div className="impact-secondary"><div><b>{impact.hIndex}</b><span>h-index</span></div><div><b>{impact.i10Index}</b><span>i10-index</span></div></div>
     <p className="source-explanation">Citation counts describe research visibility. The publications below provide the context and substance behind the numbers.</p>
   </aside></div><SnapshotNote/>
   <div className="contributions"><h3>Research contributions</h3><div className="contribution-grid">
     <article><h4>Programmable wave control</h4><p>Investigating bandgap tuning and adaptive waveguides through phase changes in graphene-reinforced phononic crystals.</p><a href="https://doi.org/10.1016/j.ymssp.2025.113556" target="_blank" rel="noreferrer">Waveguide study <ArrowUpRight size={14}/></a></article>
     <article><h4>Physics-informed computation</h4><p>Exploring input-optimized physics-informed neural networks for wave propagation in laminated structures.</p><a href="https://doi.org/10.1016/j.engappai.2024.109755" target="_blank" rel="noreferrer">XPINN framework <ArrowUpRight size={14}/></a></article>
     <article><h4>Machine learning for material design</h4><p>Combining computational formulations and machine learning for the analysis and design of graphene-based phononic crystal lenses.</p><a href="https://doi.org/10.1016/j.ultras.2023.107220" target="_blank" rel="noreferrer">Lens design study <ArrowUpRight size={14}/></a></article>
   </div></div>
 </div></section>;
}
