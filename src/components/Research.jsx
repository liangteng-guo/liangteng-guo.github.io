import { ArrowUpRight } from 'lucide-react';
import { researchAreas, publications } from '../data/profile';
export default function Research() {
 return <section id="research" className="section container">
  <div className="section-heading"><div><span className="section-kicker">Research</span><h2>Materials, structures & wave control.</h2></div><p className="section-aside">Four connected areas of research.</p></div>
  <div className="research-grid">{researchAreas.map(r=><article className="research-card" key={r.id}>
   <img src={import.meta.env.BASE_URL+r.image} alt={'Conceptual illustration of '+r.title.toLowerCase()} loading="lazy"/>
   <div className="research-copy"><h3>{r.title}</h3><p>{r.description}</p>
   <details><summary>Related publications</summary><ul>{r.papers.map(doi=>{const paper=publications.find(p=>p.doi===doi);return <li key={doi}><a href={'https://doi.org/'+doi} target="_blank" rel="noreferrer">{paper?.title??'Read paper'} <ArrowUpRight size={12}/></a></li>;})}</ul></details></div>
  </article>)}</div>
 </section>;
}
