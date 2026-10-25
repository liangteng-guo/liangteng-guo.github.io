import { useId, useState } from 'react';
import { impact } from '../data/profile';
export function MiniCitationChart() {
  const id=useId();
  return <svg className="mini-chart" viewBox="0 0 190 84" role="img" aria-labelledby={id}>
    <title id={id}>Annual citations, 2020 to 2026: 2, 3, 4, 11, 31, 47, 115. 2026 year to date.</title>
    <path d="M2 61H188" stroke="#bfd3eb"/>
    {impact.annual.map((d,i)=><rect key={d.year} x={5+i*26} y={61-d.count/120*56} width="16" height={d.count/120*56} rx="1" fill={i===6?'#0869eb':'#82b7f7'}><title>{d.year}: {d.count} citations</title></rect>)}
    <g fill="#536b87" fontFamily="Arial,sans-serif" fontSize="10"><text x="2" y="79">2020</text><text x="81" y="79">2023</text><text x="162" y="79">2026</text></g>
  </svg>;
}
export default function CitationChart() {
  const [selected,setSelected]=useState(null);
  const maximum=Math.ceil(Math.max(...impact.annual.map(d=>d.count))/30)*30;
  return <figure className="citation-chart">
    <figcaption><h3>Annual citations</h3><span>{impact.annual[0].year}–{impact.annual.at(-1).year}</span></figcaption>
    <div className="chart-layout">
      <div className="chart-axis" aria-hidden="true">{[1,.75,.5,.25,0].map(n=><span key={n}>{maximum*n}</span>)}</div>
      <div className="chart-plot">
        <div className="chart-grid" aria-hidden="true">{[0,1,2,3,4].map(n=><i key={n}/>)}</div>
        <div className="chart-bars">{impact.annual.map((d,i)=><div className="chart-column" key={d.year}>
          <button className={'chart-bar '+(i===impact.annual.length-1?'latest':'')} style={{height:(d.count/maximum*100)+'%'}} aria-label={d.year+': '+d.count+' citations'+(i===6?' (year to date)':'')} onMouseEnter={()=>setSelected(d)} onMouseLeave={()=>setSelected(null)} onFocus={()=>setSelected(d)} onBlur={()=>setSelected(null)} onClick={()=>setSelected(d)}>
            <span className="bar-value">{d.count}</span>
          </button><span className="bar-year">{d.year}</span>
        </div>)}</div>
      </div>
    </div>
    <p className="chart-readout" aria-live="polite">{selected?selected.year+': '+selected.count+' citations'+(selected.year===2026?' · Year to date':''):'Explore a bar to see the annual count. 2026 is year to date.'}</p>
    <details className="chart-table"><summary>View data table</summary><table><caption>Google Scholar annual citation counts supplied by the researcher</caption><thead><tr><th scope="col">Year</th><th scope="col">Citations</th></tr></thead><tbody>{impact.annual.map(d=><tr key={d.year}><th scope="row">{d.year}{d.year===2026?' (YTD)':''}</th><td>{d.count}</td></tr>)}</tbody></table></details>
  </figure>;
}
