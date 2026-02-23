export function GlobalStyles() {
  return (
    <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=IBM+Plex+Mono:wght@300;400;500&family=Epilogue:ital,wght@0,300;0,400;0,500;1,300&display=swap');

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    html { scroll-behavior: smooth; }

    .recall-root {
      background: #1C1E26;
      color: #E2E4EE;
      font-family: 'Epilogue', sans-serif;
      font-size: 15px;
      line-height: 1.6;
      -webkit-font-smoothing: antialiased;
      position: relative;
      overflow-x: hidden;
    }

    .recall-root::before {
      content: '';
      position: fixed;
      inset: 0;
      background-image:
        linear-gradient(#2E3140 1px, transparent 1px),
        linear-gradient(90deg, #2E3140 1px, transparent 1px);
      background-size: 52px 52px;
      opacity: 0.3;
      pointer-events: none;
      z-index: 0;
    }

    .recall-root > * { position: relative; z-index: 1; }

    .syne { font-family: 'Syne', sans-serif; }
    .mono { font-family: 'IBM Plex Mono', monospace; }

    @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
    .blink { animation: blink 1s steps(1) infinite; }

    @keyframes fadeUp {
      from { opacity:0; transform:translateY(18px); }
      to   { opacity:1; transform:translateY(0); }
    }
    .fade-up-0 { animation: fadeUp 0.65s ease both; }
    .fade-up-1 { animation: fadeUp 0.65s 0.12s ease both; }
    .fade-up-2 { animation: fadeUp 0.65s 0.24s ease both; }
    .fade-up-3 { animation: fadeUp 0.65s 0.38s ease both; }
    .fade-up-4 { animation: fadeUp 0.65s 0.52s ease both; }

    @keyframes barFill { from { width: 0 } }
    .bar-animate { animation: barFill 0.9s 0.3s ease both; }

    @media (hover: hover) {
      .hover-row:hover { background: #22252F; }
      .metric-cell:hover { background: #22252F; }
      .nav-link:hover { color:#E2E4EE; }
      .cta-primary:hover { opacity:0.88; transform:translateY(-1px); }
      .cta-ghost:hover { border-color:#9CA3BA; color:#E2E4EE; }
    }

    .section-hr { height:1px; background:#2E3140; }

    .nav-link { color:#9CA3BA; font-family:'IBM Plex Mono',monospace; font-size:12px; letter-spacing:0.05em; text-decoration:none; transition:color 0.15s; }

    .cta-primary {
      display:inline-flex; align-items:center; justify-content:center; gap:8px;
      font-family:'IBM Plex Mono',monospace; font-size:13px; font-weight:500;
      letter-spacing:0.05em; background:#E8FF47; color:#1C1E26;
      border:none; padding:12px 26px; cursor:pointer;
      transition:opacity 0.15s, transform 0.1s;
    }
    .cta-primary:disabled { opacity:0.5; cursor:not-allowed; }

    .cta-ghost {
      display:inline-flex; align-items:center; justify-content:center; gap:8px;
      font-family:'IBM Plex Mono',monospace; font-size:12px;
      letter-spacing:0.05em; background:transparent; color:#9CA3BA;
      border:1px solid #3A3D4F; padding:11px 22px; cursor:pointer;
      transition:border-color 0.15s, color 0.15s;
    }

    .work-input {
      width:100%; background:#22252F; border:1px solid #3A3D4F;
      color:#E2E4EE; font-family:'IBM Plex Mono',monospace; font-size:13px;
      line-height:1.75; padding:14px 16px; resize:none; outline:none;
      transition:border-color 0.15s; min-height:120px;
    }
    .work-input:focus { border-color:#5BA4FF; }
    .work-input::placeholder { color:#5A5F75; }

    .reveal { opacity:0; transform:translateY(16px); transition: opacity 0.6s ease, transform 0.6s ease; }
    .reveal.visible { opacity:1; transform:translateY(0); }

    @media (prefers-reduced-motion: reduce) {
      *, *::before, *::after { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; transition-duration: 0.01ms !important; }
      html { scroll-behavior: auto; }
    }
  `}</style>
  );
}
