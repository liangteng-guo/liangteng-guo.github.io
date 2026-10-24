import Header from './components/Header';
import Hero from './components/Hero';
import { ImpactStrip, Research, Publications, Details } from './components/Sections';
export default function App(){return <><a className="skip-link" href="#main">Skip to content</a><Header/><main id="main"><Hero/><ImpactStrip/><Research/><Publications/><Details/></main><footer className="container footer"><a className="wordmark" href="#home">Liangteng Guo<span className="brand-dot">.</span></a><span>Programmable materials. New possibilities.</span><span>© {new Date().getFullYear()} Liangteng Guo</span></footer></>}
