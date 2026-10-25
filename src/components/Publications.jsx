import { useState } from 'react';
import { ArrowUpRight, Search, ChevronDown, BookOpen } from 'lucide-react';
import { publications, profile } from '../data/profile';
export function paperUrl(p) { return p.doi?'https://doi.org/'+p.doi:'https://scholar.google.com/scholar?q='+encodeURIComponent('"'+p.title+'"'); }
function Authors({text}) {return <>{text.split(/(L\. Guo)/g).map((part,i)=>part==='L. Guo'?<strong key={i}>{part}</strong>:part)}</>;}
function PaperLink({paper}) {return <a className="text-link" href={paperUrl(paper)} target="_blank" rel="noreferrer">{paper.doi?'DOI / Publisher':'Find on Scholar'}<ArrowUpRight size={14}/></a>;}
export default function Publications() {
 const [query,setQuery]=useState(''),[year,setYear]=useState('all'),[type,setType]=useState('all'),[expanded,setExpanded]=useState(false);
 const featured=publications.filter(p=>['10.1016/j.ijmecsci.2022.107956','10.1016/j.engstruct.2025.121995','10.1016/j.engappai.2024.109755'].includes(p.doi));
 const years=[...new Set(publications.map(p=>p.year))].sort((a,b)=>b-a);
 const filtered=publications.filter(p=>(year==='all'||p.year===Number(year))&&(type==='all'||p.type===type)&&[p.title,p.authors,p.journal].join(' ').toLowerCase().includes(query.toLowerCase())).sort((a,b)=>b.year-a.year||a.title.localeCompare(b.title));
 const searching=query||year!=='all'||type!=='all';
 const visible=expanded||searching?filtered:filtered.slice(0,6);
 return <section id="publications" className="section container">
  <div className="section-heading"><div><span className="section-kicker">Publications</span><h2>Ideas developed. Findings shared.</h2></div><a className="text-link" href={profile.links.scholar} target="_blank" rel="noreferrer">Full Scholar profile <ArrowUpRight size={16}/></a></div>
  <div className="featured-grid">{featured.map(p=><article className="featured-paper" key={p.title}>
    {p.cover&&<a className="journal-cover" href={paperUrl(p)} target="_blank" rel="noreferrer" aria-label={'Open publication in '+p.journal}><img src={import.meta.env.BASE_URL+p.cover} alt={p.journal+' journal cover (representative issue)'} loading="lazy" width="576" height="768"/></a>}
    <div className="featured-copy"><span className="paper-feature-label"><BookOpen size={15}/>Selected publication · {p.year}</span><h3><a href={paperUrl(p)} target="_blank" rel="noreferrer">{p.title}</a></h3><p className="paper-authors"><Authors text={p.authors}/></p><p className="paper-journal">{p.journal}</p><PaperLink paper={p}/></div>
  </article>)}</div>
  <p className="cover-note">Publisher-supplied journal covers; representative issues, not necessarily the issue containing the paper.</p>
  <div className="publication-list-heading"><h3>Publication list</h3><p>{publications.filter(p=>p.type==='journal-article').length} journal articles · 1 conference paper · 1 thesis</p></div>
  <div className="publication-controls">
    <label className="search-control"><Search size={18}/><span className="sr-only">Search publications</span><input type="search" placeholder="Search title, author or journal…" value={query} onChange={e=>setQuery(e.target.value)}/></label>
    <label><span className="sr-only">Filter by year</span><select aria-label="Filter by year" value={year} onChange={e=>setYear(e.target.value)}><option value="all">All years</option>{years.map(y=><option key={y} value={y}>{y}</option>)}</select></label>
    <label><span className="sr-only">Filter by publication type</span><select aria-label="Filter by publication type" value={type} onChange={e=>setType(e.target.value)}><option value="all">All types</option><option value="journal-article">Journal articles</option><option value="proceedings-article">Conference papers</option><option value="dissertation">Thesis</option></select></label>
  </div>
  <p className="results-count" role="status">{filtered.length} {filtered.length===1?'record':'records'}{visible.length<filtered.length?' · Showing '+visible.length:''}</p>
  <div id="publication-results" className="publication-list">{visible.map(p=><article key={p.title}><span className="paper-year">{p.year}</span><div><span className="paper-type">{p.type==='dissertation'?'Thesis':p.type==='proceedings-article'?'Conference paper':'Journal article'}</span><h4><a href={paperUrl(p)} target="_blank" rel="noreferrer">{p.title}</a></h4><p className="paper-authors"><Authors text={p.authors}/></p><p className="paper-journal">{[p.journal,p.volume,p.pages].filter(Boolean).join(', ')}</p>{p.yearNote&&<p className="paper-note">{p.yearNote}</p>}<PaperLink paper={p}/></div></article>)}</div>
  {!filtered.length&&<div className="empty-state"><h4>No matching publications</h4><p>Try another title, author, year or publication type.</p><button className="button secondary" onClick={()=>{setQuery('');setYear('all');setType('all');}}>Clear filters</button></div>}
  {!searching&&filtered.length>6&&<button className="button secondary show-publications" aria-expanded={expanded} aria-controls="publication-results" onClick={()=>setExpanded(!expanded)}>{expanded?'Show fewer publications':'Show all '+publications.length+' publications'}<ChevronDown size={16} style={{transform:expanded?'rotate(180deg)':undefined}}/></button>}
  <p className="publication-source">Based on the supplied Google Scholar publication list. Dates follow that record; online and issue dates may differ. DOI links are used where verified; other entries link to a clearly labelled Scholar search.</p>
 </section>;
}
