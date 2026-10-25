import { GraduationCap, BriefcaseBusiness, ArrowUpRight } from 'lucide-react';
import { experience } from '../data/profile';
export default function Experience() {return <section id="experience" className="section container">
 <div className="section-heading"><div><span className="section-kicker">Education & experience</span><h2>An academic journey in materials.</h2></div></div>
 <div className="experience-grid">{experience.map(e=><article key={e.title}><div className="experience-icon">{e.type==='Education'?<GraduationCap size={25}/>:<BriefcaseBusiness size={24}/>}</div><div><span className="paper-type">{e.type}</span><h3>{e.title}</h3><a href={e.url} target="_blank" rel="noreferrer">{e.institution}<ArrowUpRight size={14}/></a>{e.dates&&<p>{e.dates}</p>}</div></article>)}</div>
 </section>;}
