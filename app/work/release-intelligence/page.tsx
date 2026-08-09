import Link from "next/link";
import Image from "next/image";

export const metadata = { title: "Release Intelligence Case Study | Utham Kumar" };

export default function ReleaseIntelligenceCaseStudy() {
  return <main className="case-page">
    <header className="case-nav"><Link href="/">← Utham Kumar</Link><span>Engineering Intelligence Lab / RI-001</span></header>
    <section className="case-hero"><span className="kicker">Enterprise reference implementation</span><h1>Release Intelligence</h1><p>Turning fragmented delivery evidence into an explainable release decision.</p><div><span><small>Role demonstrated</small><b>Operating-model designer</b></span><span><small>Release</small><b>v0.2.0</b></span><span><small>Data policy</small><b>100% synthetic</b></span></div></section>
    <section className="case-image"><Image src="/release-intelligence.jpg" alt="Release Intelligence executive dashboard" width={1731} height={909} priority /></section>
    <section className="case-content"><aside><span className="section-number">THE CHALLENGE</span></aside><div><h2>Release status is visible. Decision confidence often is not.</h2><p>Critical releases are governed through disconnected trackers, test reports, security findings, dependency updates, and presentation narratives. Leaders can see activity, but not always the evidence behind a recommendation—or the fastest action to improve it.</p></div></section>
    <section className="case-system"><span className="section-number">THE OPERATING SYSTEM</span><div className="case-grid"><article><b>01</b><h3>Normalize readiness</h3><p>Requirements, development, testing, security, dependencies, and operations share one evidence model.</p></article><article><b>02</b><h3>Explain confidence</h3><p>Weights, evidence penalties, safety caps, and top drivers make every score reconstructable.</p></article><article><b>03</b><h3>Focus intervention</h3><p>Risks and commitments are paired with accountable owners, dates, exposure, and recommended actions.</p></article><article><b>04</b><h3>Brief the decision</h3><p>A deterministic AI fallback creates an executive narrative without credentials or opaque claims.</p></article></div></section>
    <section className="case-content"><aside><span className="section-number">LEADERSHIP SIGNAL</span></aside><div><h2>This is a program-leadership artifact implemented as a product.</h2><p>The application demonstrates how a principal TPM or engineering delivery leader designs governance: choose the evidence, define the gates, make uncertainty visible, and create a repeatable path from signal to decision.</p><div className="case-actions"><a href="https://release-intelligence.asuk1915.chatgpt.site" target="_blank" rel="noreferrer">Open live reference implementation ↗</a><Link href="/#work">Return to selected work</Link></div></div></section>
    <footer className="case-footer"><span>Release Intelligence · Engineering Intelligence Lab</span><Link href="/">uthamkumar.com →</Link></footer>
  </main>;
}
