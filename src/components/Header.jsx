import { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
const items = [['home','Home'],['research','Research'],['publications','Publications'],['impact','Research Impact'],['experience','Experience'],['cv','CV'],['contact','Contact']];
export default function Header(){
 const [open,setOpen]=useState(false);
 return <header className="header"><div className="container nav-wrap"><a className="wordmark" href="#home" onClick={()=>setOpen(false)}>Liangteng Guo<span className="brand-dot">.</span></a><button className="menu-toggle" aria-label={open?'Close navigation':'Open navigation'} aria-expanded={open} aria-controls="main-nav" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button><nav id="main-nav" className={open?'nav open':'nav'} aria-label="Main navigation">{items.map(([id,label])=><a key={id} href={`#${id}`} onClick={()=>setOpen(false)}>{label}{id==='contact'&&<ArrowUpRight size={14}/>}</a>)}</nav></div></header>
}
