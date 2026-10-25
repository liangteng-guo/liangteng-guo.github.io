import Header from './components/Header';
import Hero from './components/Hero';
import Impact, { ImpactStrip } from './components/Impact';
import Research from './components/Research';
import Publications from './components/Publications';
import Experience from './components/Experience';
import Contact from './components/Contact';
export default function App(){return <>
 <a className="skip-link" href="#main">Skip to content</a><Header/>
 <main id="main"><Hero/><ImpactStrip/><Research/><Publications/><Impact/><Experience/><Contact/></main>
 <footer className="container footer"><a className="wordmark" href="#home">Liangteng Guo</a><span>Programmable materials. Intelligent wave control.</span><a href="#home">Back to top ↑</a><span>© {new Date().getFullYear()} Liangteng Guo</span></footer>
 </>;}
