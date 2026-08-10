import Link from "next/link";
import Image from "next/image";
import { insights } from "@/data/content";

const capabilities = [
  ["01", "Engineering delivery systems", "Release governance, cross-team execution, dependency management, and executive decision forums."],
  ["02", "AI-enabled operating models", "Evidence-grounded automation, responsible AI controls, and decision support for complex programs."],
  ["03", "Secure digital platforms", "Payment modernization, cyber-risk integration, control readiness, and resilient production entry."],
  ["04", "Portfolio transformation", "Roadmap design, investment alignment, delivery health, and operating-model modernization at scale."],
];

const projects = [
  { title: "Release Intelligence", state: "Live reference implementation", tone: "live", summary: "Explainable readiness, risk, dependency, and decision intelligence for critical software releases.", href: "/work/release-intelligence", code: "RI / 01" },
  { title: "Dependency Intelligence", state: "Design phase", tone: "design", summary: "Cross-team commitments, critical-path visibility, and earlier intervention across engineering portfolios.", href: "#contact", code: "DI / 02" },
  { title: "Engineering Control Tower", state: "Roadmap", tone: "roadmap", summary: "An executive operating view of delivery health, systemic constraints, and portfolio-level decision needs.", href: "#contact", code: "CT / 03" },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <Link className="identity" href="/" aria-label="Utham Kumar home"><span>UK</span><b>Utham Kumar</b></Link>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a><a href="#experience">Experience</a><a href="#insights">Insights</a><a href="#contact">Contact</a>
        </nav>
        <a className="header-link" href="https://www.linkedin.com/in/kumar1612/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
      </header>

      <section className="hero section-shell">
        <div className="hero-copy">
          <span className="kicker">Technology program & product leadership</span>
          <h1>I build operating systems for <em>engineering organizations.</em></h1>
          <p>Two decades leading enterprise software delivery, AI-enabled platforms, secure digital payments, and large-scale cloud programs—connecting strategy to measurable execution.</p>
          <div className="hero-actions"><a className="button primary" href="#work">Explore selected work</a><a className="button secondary" href="mailto:info@uthamkumar.info">Start a conversation</a></div>
          <div className="hero-proof"><span><b>20+</b><small>Years across technology delivery</small></span><span><b>Global</b><small>Distributed teams & stakeholders</small></span><span><b>Atlanta</b><small>Based in Georgia, USA</small></span></div>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <div className="visual-grid" />
          <Image src="/portfolio-geometry.png" alt="" width={456} height={763} priority />
          <div className="visual-label label-one"><small>OPERATING FOCUS</small><b>Strategy → execution</b></div>
          <div className="visual-label label-two"><small>DECISION MODEL</small><b>Evidence → action</b></div>
          <span className="visual-index">01—26</span>
        </div>
      </section>

      <section className="principle-band">
        <div className="section-shell"><span>Release intelligence</span><i /><span>Delivery governance</span><i /><span>Enterprise AI</span><i /><span>Secure platforms</span><i /><span>Engineering health</span></div>
      </section>

      <section className="statement section-shell">
        <span className="section-number">01 / LEADERSHIP THESIS</span>
        <div><h2>Technology leadership is the design of a system in which good decisions become repeatable.</h2><p>I work at the intersection of engineering execution, product outcomes, governance, and organizational change—building the mechanisms that help teams see risk sooner, make tradeoffs explicitly, and deliver with confidence.</p></div>
      </section>

      <section className="capabilities section-shell" id="expertise">
        <div className="section-heading"><span className="section-number">02 / OPERATING CAPABILITIES</span><h2>From fragmented status<br />to decision-ready execution.</h2></div>
        <div className="capability-grid">{capabilities.map(([number, title, text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="work-section" id="work">
        <div className="section-shell">
          <div className="section-heading light"><span className="section-number">03 / SELECTED WORK</span><h2>Engineering Intelligence Lab</h2><p>Public reference implementations that turn technology-program leadership into tangible operating systems. All data is synthetic.</p></div>
          <div className="project-feature">
            <div className="project-image"><Image src="/release-intelligence.jpg" alt="Release Intelligence dashboard preview" width={1731} height={909} /></div>
            <div className="project-feature-copy"><span className="project-code">FLAGSHIP / RI-001</span><h3>Release Intelligence</h3><p>A decision system for release confidence: weighted readiness, evidence quality, safety gates, risks, dependencies, trends, and an executive AI brief.</p><ul><li>Explainable confidence methodology</li><li>Portfolio Control Tower</li><li>No-key AI fallback mode</li><li>Dual-target Next.js architecture</li></ul><Link className="project-link" href="/work/release-intelligence">Read the case study <span>↗</span></Link></div>
          </div>
          <div className="project-grid">{projects.slice(1).map((project) => <article key={project.title}><div><span className="project-code">{project.code}</span><span className={`project-state ${project.tone}`}>{project.state}</span></div><h3>{project.title}</h3><p>{project.summary}</p><a href={project.href}>Follow the work →</a></article>)}<article className="lab-card"><span className="lab-monogram">EIL</span><h3>A coherent portfolio, built in public.</h3><p>Each project evolves independently while contributing to one technology-leadership thesis.</p></article></div>
        </div>
      </section>

      <section className="experience section-shell" id="experience">
        <div className="section-heading"><span className="section-number">04 / EXPERIENCE</span><h2>Career foundation</h2><p>A sustained focus on translating complex technology into controlled, cross-functional delivery.</p></div>
        <div className="experience-list">
          <article><span className="experience-era">Enterprise leadership</span><div><h3>Technology Program & Product Management Leader</h3><span>FinTech · Atlanta, GA</span><p>Led large-scale programs across enterprise software, AI-enabled platforms, secure digital systems, cloud modernization, and delivery governance. Aligned engineering, product, security, operations, and business stakeholders around measurable outcomes and risk-informed execution.</p></div></article>
          <article><span className="experience-era">Platform delivery</span><div><h3>Senior Technical Program Manager</h3><span>Telecommunications</span><p>Managed complex platform initiatives focused on system reliability, performance, structured delivery, and multi-team coordination. Helped standardize development and release practices across distributed enterprise environments.</p></div></article>
        </div>
        <div className="education"><span className="section-number">EDUCATION</span><div><b>Master&apos;s in Communication Engineering</b><small>Nanyang Technological University · Singapore</small></div><div><b>Bachelor of Engineering</b><small>University of Madras · India</small></div></div>
      </section>

      <section className="insights section-shell" id="insights">
        <div className="section-heading"><span className="section-number">05 / PERSPECTIVES</span><h2>Writing on systems, risk, and transformation.</h2><a href="https://medium.com/@asuk1915" target="_blank" rel="noreferrer">Medium profile ↗</a></div>
        <div className="insight-grid">{insights.map((insight, index) => <Link href={`/insights/${insight.slug}`} className="insight-card" key={insight.slug}><span className="insight-index">0{index + 1}</span><span className="insight-category">{insight.category}</span><h3>{insight.title}</h3><p>{insight.dek}</p><span className="read-link">Read perspective →</span></Link>)}</div>
      </section>

      <section className="contact" id="contact">
        <div className="section-shell"><span className="section-number">06 / CONTACT</span><h2>Let&apos;s make complex delivery<br />easier to see—and lead.</h2><p>For technology leadership, program transformation, industry conversations, and speaking inquiries.</p><div className="contact-links"><a href="mailto:info@uthamkumar.info">info@uthamkumar.info ↗</a><a href="https://www.linkedin.com/in/kumar1612/" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://medium.com/@asuk1915" target="_blank" rel="noreferrer">Medium ↗</a></div></div>
      </section>

      <footer><div className="section-shell"><span>© 2026 Utham Kumar Anugula Sethupathy</span><span>Technology program & product leadership</span><a href="#top">Back to top ↑</a></div></footer>
    </main>
  );
}
