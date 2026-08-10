import Image from "next/image";
import Link from "next/link";
import { insights } from "@/data/content";

const plannedWork = [
  {
    number: "02",
    title: "Dependency Intelligence",
    status: "In design",
    summary: "A practical operating view of cross-team commitments, critical paths, and early intervention points.",
  },
  {
    number: "03",
    title: "Engineering Control Tower",
    status: "On the roadmap",
    summary: "An executive view of delivery health, systemic constraints, and portfolio-level decisions.",
  },
];

const principles = [
  {
    title: "Make the work legible.",
    text: "Complex programs become more manageable when teams share a clear view of outcomes, evidence, ownership, and risk.",
  },
  {
    title: "Govern through decisions.",
    text: "Useful governance clarifies tradeoffs and accelerates accountable action; it does not simply collect status.",
  },
  {
    title: "Build trust into delivery.",
    text: "Security, resilience, and operational readiness belong in the delivery system from the beginning—not at the final gate.",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <Link className="identity" href="/" aria-label="Utham Kumar home">
          <span>Utham Kumar</span>
          <small>Technology leadership</small>
        </Link>
        <nav aria-label="Primary navigation">
          <a href="#work">Selected work</a>
          <a href="#experience">Experience</a>
          <a href="#writing">Writing</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-link" href="https://www.linkedin.com/in/kumar1612/" target="_blank" rel="noreferrer">
          LinkedIn ↗
        </a>
      </header>

      <section className="hero section-shell" aria-labelledby="intro-title">
        <div className="hero-main">
          <span className="eyebrow">Utham Kumar · Atlanta, Georgia</span>
          <h1 id="intro-title">I help engineering organizations turn complexity into <em>confident execution.</em></h1>
        </div>
        <div className="hero-intro">
          <p>I&apos;m a technology program and product leader with more than two decades of experience across enterprise software delivery, secure digital platforms, AI-enabled systems, and cloud transformation.</p>
          <p>My work connects strategy, engineering, risk, and operations—so leaders can see what matters, teams can make better decisions, and complex programs can move forward with clarity.</p>
          <div className="hero-links">
            <a href="#work">View selected work ↓</a>
            <a href="mailto:info@uthamkumar.info">info@uthamkumar.info ↗</a>
          </div>
        </div>
      </section>

      <section className="perspective" aria-label="Leadership perspective">
        <div className="section-shell perspective-inner">
          <p>My focus is not status reporting. It is designing the operating mechanisms that help engineering organizations make good decisions repeatedly.</p>
          <span>Technology program leadership · Product thinking · Engineering delivery</span>
        </div>
      </section>

      <section className="about section-shell" id="about">
        <div className="section-label"><span>01</span><p>How I work</p></div>
        <div className="about-copy">
          <h2>Leadership at the intersection of delivery, product, and risk.</h2>
          <div className="about-columns">
            <p>I work with engineering, product, security, operations, and business leaders to translate ambitious objectives into an executable system: clear outcomes, explicit decisions, visible dependencies, and evidence-based governance.</p>
            <p>The thread across my career has been consistent—bringing structure to work that crosses organizational boundaries, and creating the conditions for teams to deliver at scale without losing sight of trust, resilience, or customer value.</p>
          </div>
        </div>
      </section>

      <section className="work-section" id="work">
        <div className="section-shell">
          <div className="section-label light"><span>02</span><p>Selected work</p></div>
          <div className="work-intro">
            <h2>Ideas made tangible.</h2>
            <p>The Engineering Intelligence Lab is a collection of public reference implementations based on operating patterns I have developed and used in enterprise programs. All data is synthetic; all company details are fictional.</p>
          </div>

          <article className="featured-work">
            <Link className="featured-image" href="/work/release-intelligence" aria-label="Read the Release Intelligence case study">
              <Image src="/release-intelligence.jpg" alt="Release Intelligence executive dashboard" width={1731} height={909} priority />
            </Link>
            <div className="featured-copy">
              <div className="featured-meta"><span>Case study 01</span><span>Live reference implementation</span></div>
              <h3>Release Intelligence</h3>
              <p className="featured-lede">An explainable decision system for critical software releases—turning fragmented readiness evidence into a shared view of confidence, risk, and action.</p>
              <dl>
                <div><dt>Context</dt><dd>Release decisions depend on evidence scattered across delivery, testing, security, dependencies, and operations.</dd></div>
                <div><dt>My role</dt><dd>Operating-model designer, product strategist, and program leadership practitioner.</dd></div>
                <div><dt>Approach</dt><dd>Define the decision, normalize evidence, explain the confidence model, and connect every risk to accountable action.</dd></div>
                <div><dt>Outcome</dt><dd>A working public reference implementation that demonstrates the complete leadership system.</dd></div>
              </dl>
              <div className="featured-links">
                <Link href="/work/release-intelligence">Read the case study →</Link>
                <a href="https://release-intelligence.uthamkumar.info" target="_blank" rel="noreferrer">Open the live application ↗</a>
              </div>
            </div>
          </article>

          <div className="work-in-progress">
            <p className="work-in-progress-label">Work in progress</p>
            {plannedWork.map((project) => (
              <article key={project.title}>
                <span>{project.number}</span>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <small>{project.status}</small>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="experience section-shell" id="experience">
        <div className="section-label"><span>03</span><p>Experience</p></div>
        <div className="experience-heading">
          <h2>A career built around consequential technology delivery.</h2>
          <p>More than 20 years helping distributed teams deliver complex platforms in highly connected enterprise environments.</p>
        </div>
        <div className="experience-list">
          <article>
            <span className="experience-era">Enterprise leadership</span>
            <div><h3>Technology Program &amp; Product Management Leader</h3><span>FinTech · Atlanta, Georgia</span><p>Leadership across enterprise software, AI-enabled platforms, secure digital systems, cloud modernization, and delivery governance. Alignment of engineering, product, security, operations, and business stakeholders around measurable outcomes and risk-informed execution.</p></div>
          </article>
          <article>
            <span className="experience-era">Platform delivery</span>
            <div><h3>Senior Technical Program Manager</h3><span>Telecommunications</span><p>Complex platform initiatives spanning reliability, performance, structured delivery, and multi-team coordination across distributed enterprise environments.</p></div>
          </article>
        </div>
        <div className="education">
          <p>Education</p>
          <div><b>Master&apos;s in Communication Engineering</b><small>Nanyang Technological University · Singapore</small></div>
          <div><b>Bachelor of Engineering</b><small>University of Madras · India</small></div>
        </div>
      </section>

      <section className="principles section-shell" aria-labelledby="principles-title">
        <div className="section-label"><span>04</span><p>Leadership principles</p></div>
        <h2 id="principles-title">The standards behind the work.</h2>
        <div className="principle-list">
          {principles.map((principle, index) => (
            <article key={principle.title}><span>0{index + 1}</span><h3>{principle.title}</h3><p>{principle.text}</p></article>
          ))}
        </div>
      </section>

      <section className="writing section-shell" id="writing">
        <div className="section-label"><span>05</span><p>Writing</p></div>
        <div className="writing-heading">
          <h2>Notes on technology leadership.</h2>
          <a href="https://medium.com/@asuk1915" target="_blank" rel="noreferrer">Medium profile ↗</a>
        </div>
        <div className="writing-list">
          {insights.map((insight) => (
            <Link href={`/insights/${insight.slug}`} key={insight.slug}>
              <span>{insight.category}</span><h3>{insight.title}</h3><small>{insight.readTime} · Read →</small>
            </Link>
          ))}
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="section-shell contact-inner">
          <span className="eyebrow">Get in touch</span>
          <h2>Let&apos;s make complex delivery easier to see—and lead.</h2>
          <p>For technology leadership, program transformation, industry conversations, and speaking inquiries.</p>
          <div className="contact-links">
            <a href="mailto:info@uthamkumar.info">info@uthamkumar.info ↗</a>
            <a href="https://www.linkedin.com/in/kumar1612/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a href="https://medium.com/@asuk1915" target="_blank" rel="noreferrer">Medium ↗</a>
          </div>
        </div>
      </section>

      <footer>
        <div className="section-shell"><span>© 2026 Utham Kumar Anugula Sethupathy</span><span>Atlanta, Georgia</span><a href="#top">Back to top ↑</a></div>
      </footer>
    </main>
  );
}
