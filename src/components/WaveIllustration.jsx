// Conceptual illustration, not a simulation or experimental result.
export default function WaveIllustration() {
  const cells = Array.from({length: 56}, (_, i) => ({ r: Math.floor(i / 8), c: i % 8 }));
  return <svg viewBox="0 0 740 510" role="img" aria-labelledby="waveTitle waveDesc" className="wave-art">
    <title id="waveTitle">Programmable phononic metamaterial and wave manipulation</title>
    <desc id="waveDesc">Conceptual isometric lattice with blue incident waves and warm transmitted waves. Decorative illustration, not simulation data.</desc>
    <defs>
      <linearGradient id="cellTop" x2="1" y2="1"><stop stopColor="#ecf8ff"/><stop offset=".48" stopColor="#86c5ee"/><stop offset="1" stopColor="#3e81bd"/></linearGradient>
      <linearGradient id="cellFront" x2="0" y2="1"><stop stopColor="#8bbde5"/><stop offset="1" stopColor="#285082"/></linearGradient>
      <linearGradient id="waveColor"><stop stopColor="#2398ff"/><stop offset=".5" stopColor="#7d7bfa"/><stop offset=".82" stopColor="#f3b479"/><stop offset="1" stopColor="#f6a768"/></linearGradient>
      <radialGradient id="glow"><stop stopColor="#a8d9ff" stopOpacity=".7"/><stop offset="1" stopColor="#d9edff" stopOpacity="0"/></radialGradient>
      <filter id="blur"><feGaussianBlur stdDeviation="6"/></filter>
    </defs>
    <ellipse cx="388" cy="270" rx="325" ry="230" fill="url(#glow)"/>
    <g stroke="#b6d4ee" strokeWidth=".6" opacity=".55">{Array.from({length: 15},(_,i)=><path key={i} d={`M${10+i*44} 390 l270 -180 M${30+i*44} 170 l260 220`}/>)}</g>
    <ellipse cx="402" cy="370" rx="215" ry="46" fill="#749bc0" opacity=".17" filter="url(#blur)"/>
    <g>{cells.map(({r,c},i)=> {const x=325+c*33-r*25,y=125+c*13+r*20,h=50+Math.sin(c*.7+r*.5)*18; return <g key={i}>
      <path d={`M${x} ${y} l24 10 v${h} l-24 -10z`} fill="url(#cellFront)" stroke="#a9cfeb" strokeWidth=".7"/>
      <path d={`M${x+24} ${y+10} l19 -13 v${h} l-19 13z`} fill={c>5?'#8f9eac':'#3b6da0'} stroke="#9bc3df" strokeWidth=".7"/>
      <path d={`M${x} ${y} l19 -13 24 10 -19 13z`} fill="url(#cellTop)" stroke="#d4ecfc"/>
      <ellipse cx={x+21} cy={y-1} rx="8" ry="4.2" fill="#24496e" transform={`rotate(-3 ${x+21} ${y-1})`}/>
      <path d={`M${x+14} ${y-2} q8 -5 15 0`} fill="none" stroke="#bce4ff" strokeWidth="1.2"/>
    </g>})}</g>
    <g fill="none" stroke="url(#waveColor)">{Array.from({length:7},(_,k)=>{let d='';for(let x=12;x<730;x+=3){const amp=24+23*Math.exp(-(((x-230)/130)**2)); const y=279+k*10+Math.sin(x*.043+k*.62)*amp;d+=`${x===12?'M':'L'}${x},${y} `}return <path key={k} d={d} strokeWidth={k===3?2.5:1.2} opacity={.9-k*.07}/>})}</g>
    <g stroke="#7398bb" opacity=".8" fill="#c5e6ff">{Array.from({length:22},(_,i)=>{const x=330+(i%6)*27+Math.floor(i/6)*8,y=45+Math.floor(i/6)*21+(i%2)*8;return <g key={i}><path d={`M${x} ${y} l27 ${i%2?-8:8} m-27 ${i%2?8:-8} l8 21`} fill="none"/><circle cx={x} cy={y} r="3"/></g>})}</g>
    <g fill="#4a7398" fontSize="10" fontFamily="monospace" letterSpacing="1.7"><text x="26" y="399">INCIDENT WAVE</text><text x="544" y="410">TUNABLE RESPONSE</text><text x="480" y="88">PROGRAMMABLE LATTICE</text></g>
    <g stroke="#7099bb" fill="none" opacity=".5"><path d="M110 385v-35h60M608 395v-46h-45M502 96l-23 25"/><circle cx="170" cy="350" r="3"/><circle cx="563" cy="349" r="3"/></g>
  </svg>;
}

