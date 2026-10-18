export function CircuitBackdrop() {
  return (
    <div aria-hidden="true" className="circuit-backdrop pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="circuit-grid absolute inset-0 opacity-50" />
      <svg className="absolute inset-0 h-full w-full opacity-70" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" fill="none">
        <g stroke="white" strokeOpacity=".16" strokeWidth="1">
          <path d="M-30 170H180V240H310V190H460" />
          <path d="M1470 270H1280V340H1180V300H1040" />
          <path d="M-20 650H130V580H260V620H350" />
          <path d="M1460 690H1320V610H1210V660H1100" />
          <path d="M610 -20V95H680V155H760" />
          <path d="M820 920V790H900V740H980" />
          <path d="M0 430H90V390H160" />
          <path d="M1440 470H1350V510H1270" />
        </g>
        <g fill="white" fillOpacity=".45">
          <circle cx="180" cy="240" r="2.5" /><circle cx="310" cy="190" r="2.5" />
          <circle cx="1280" cy="340" r="2.5" /><circle cx="1180" cy="300" r="2.5" />
          <circle cx="130" cy="580" r="2.5" /><circle cx="260" cy="620" r="2.5" />
          <circle cx="1320" cy="610" r="2.5" /><circle cx="1210" cy="660" r="2.5" />
          <circle cx="680" cy="155" r="2.5" /><circle cx="900" cy="740" r="2.5" />
        </g>
        <g stroke="white" strokeWidth="2" strokeLinecap="round" className="circuit-pulse">
          <path d="M-30 170H180V240H310V190H460" />
          <path d="M1470 270H1280V340H1180V300H1040" />
          <path d="M-20 650H130V580H260V620H350" />
          <path d="M1460 690H1320V610H1210V660H1100" />
        </g>
      </svg>
      <div className="circuit-glow circuit-glow-one absolute" />
      <div className="circuit-glow circuit-glow-two absolute" />
    </div>
  );
}


