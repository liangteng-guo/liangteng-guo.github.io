import { ArrowUpRight, GraduationCap, Fingerprint, Linkedin, FileText } from 'lucide-react';
import { profile } from '../data/profile';
export function AcademicLink({href,icon:Icon,children}) {
  return href ? <a className="academic-link" href={href} target="_blank" rel="noreferrer"><Icon size={18}/>{children}<ArrowUpRight size={13}/></a> : null;
}
export default function Hero() {
  return <section id="home" className="hero">
    <img className="hero-background" src={import.meta.env.BASE_URL+profile.heroImage} alt="" fetchPriority="high" aria-hidden="true"/>
    <div className="container hero-inner">
      <div className="hero-profile">
        <div className="identity">
          <div className="portrait">{profile.portrait?<img src={import.meta.env.BASE_URL+profile.portrait} alt={profile.name+' professional portrait'}/>:<div className="portrait-placeholder"><span>LG</span><small>Portrait to be added</small></div>}</div>
          <div className="identity-copy">
            <h1>{profile.name}, <span>{profile.degree}</span></h1>
            <p className="role">{profile.role}</p>
            <div className="affiliations">{profile.affiliations.map(a=><div className="affiliation" key={a.kind}>
              <img className={'university-logo '+a.kind} src={import.meta.env.BASE_URL+a.logo} alt={a.name}/>
              <p>{a.detail}</p>
            </div>)}</div>
            <p className="hero-statement">{profile.statement}</p>
          </div>
        </div>
        <div className="academic-links">
          <AcademicLink href={profile.links.scholar} icon={GraduationCap}>Google Scholar</AcademicLink>
          <AcademicLink href={profile.links.orcid} icon={Fingerprint}>ORCID</AcademicLink>
          <AcademicLink href={profile.links.linkedin} icon={Linkedin}>LinkedIn</AcademicLink>
          <a className="academic-link" href={profile.cv?import.meta.env.BASE_URL+profile.cv:'#cv'}><FileText size={18}/>CV{!profile.cv&&<span className="sr-only"> — availability</span>}</a>
        </div>
      </div>
      <div className="hero-research">
        <h2>Research focus</h2><p>{profile.focus}</p>
        <h3>Research interests</h3>
        <ul>{profile.interests.map(interest=><li key={interest}>{interest}</li>)}</ul>
      </div>
    </div>
    <div className="container mission" aria-labelledby="mission-title">
      <div className="mission-lead"><h2 id="mission-title">{profile.mission.title}</h2><p className="mission-statement">{profile.mission.statement}</p></div>
      <p className="mission-detail">{profile.mission.detail}</p>
    </div>
  </section>;
}
