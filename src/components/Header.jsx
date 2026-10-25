import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
const items = [['home','Home'],['research','Research'],['publications','Publications'],['impact','Research Impact'],['experience','Experience'],['cv','CV'],['contact','Contact']];
export default function Header() {
  const [open,setOpen] = useState(false);
  const [active,setActive] = useState('home');
  useEffect(()=>{
    const observer = new IntersectionObserver(entries=>{
      const visible = entries.filter(entry=>entry.isIntersecting).sort((a,b)=>a.boundingClientRect.top-b.boundingClientRect.top);
      if(visible[0]) setActive(visible[0].target.id);
    },{rootMargin:'-90px 0px -55% 0px', threshold:0});
    items.forEach(([id])=>{const el=document.getElementById(id);if(el)observer.observe(el);});
    const onKey=e=>{if(e.key==='Escape')setOpen(false);};
    document.addEventListener('keydown',onKey);
    return ()=>{observer.disconnect();document.removeEventListener('keydown',onKey);};
  },[]);
  return <header className="header"><div className="container nav-wrap">
    <a className="wordmark" href="#home" onClick={()=>setOpen(false)}>Liangteng Guo</a>
    <button className="menu-toggle" aria-label={open?'Close navigation':'Open navigation'} aria-expanded={open} aria-controls="main-nav" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
    <nav id="main-nav" className={open?'nav open':'nav'} aria-label="Main navigation">{items.map(([id,label])=><a key={id} href={'#'+id} aria-current={active===id?'location':undefined} onClick={()=>{setActive(id);setOpen(false);}}>{label}</a>)}</nav>
  </div></header>;
}
