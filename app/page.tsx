import Image from "next/image";
import Link from "next/link";
import { insights } from "@/data/content";

const plannedWork: Array<{ number: string; title: string; status: string; summary: string }> = [];

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

const research = [
  {
    type: "Conference talk",
    title: "Scaling Financial Inclusion: SRE Practices for High-Performance Payment Systems in Emerging Markets",
    venue: "Conf42 SRE · 2025",
    href: "https://www.conf42.com/Site_Reliability_Engineering_SRE_2025_Utham_Kumar_scaling_financial_inclusion",
  },
  {
    type: "Invited keynote",
    title: "Responsible Autonomy in SDLC: Safe, Compliant, and Zero-Touch for Payments-Grade Systems",
    venue: "CISCom · 2025",
    href: "https://2025.ciscom.org/author/aiccons/",
  },
  {
    type: "Conference paper",
    title: "Zero-Touch GenAI Coach: Self-healing SDLC Pipelines for FinTech Micro-services",
    venue: "Springer CCIS · 2026",
    href: "https://link.springer.com/chapter/10.1007/978-981-95-7289-2_14",
  },
  {
    type: "Research article",
    title: "GenAI-Powered Program Management: Enhancing Decision-Making with Copilot Agents in Agile Environments",
    venue: "Journal of Advanced Computing Systems · 2026",
    href: "https://doi.org/10.69987/JACS.2026.60301",
  },
  {
    type: "Proceedings paper",
    title: "AI-Powered Cybersecurity Mesh for Financial Transactions",
    venue: "MDPI · CISCom proceedings · 2025",
    href: "https://www.mdpi.com/2813-0324/12/1/10",
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
          <a href="#research">Research</a>
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
          <p className="hero-positioning">Technology program and product leadership across AI-driven secure computing systems, cloud architecture, engineering delivery, and digital payments.</p>
          <p>I bring more than two decades of experience turning complex product, platform, and transformation objectives into executable operating systems.</p>
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

          <article className="featured-work featured-work-next">
            <Link className="featured-image" href="/work/dependency-intelligence" aria-label="Read the Dependency Intelligence case study">
              <Image src="/dependency-intelligence.png" alt="Dependency Intelligence critical-path visualization" width={1730} height={909} />
            </Link>
            <div className="featured-copy">
              <div className="featured-meta"><span>Case study 02</span><span>Live reference implementation</span></div>
              <h3>Dependency Intelligence</h3>
              <p className="featured-lede">An explainable operating system for cross-team delivery commitments—revealing critical path, provider concentration, blast radius, and the intervention most likely to protect the outcome.</p>
              <dl>
                <div><dt>Context</dt><dd>Dependency logs describe work but rarely show which cross-team commitment threatens an outcome or where leadership action has the highest value.</dd></div>
                <div><dt>My role</dt><dd>Operating-model designer, decision-system architect, and technology program leadership practitioner.</dd></div>
                <div><dt>Approach</dt><dd>Model dependencies as explicit commitments, rank exposure transparently, trace propagation, and attach every intervention to an owner and date.</dd></div>
                <div><dt>Outcome</dt><dd>A working public reference implementation for running executive dependency reviews from evidence rather than status narrative.</dd></div>
              </dl>
              <div className="featured-links">
                <Link href="/work/dependency-intelligence">Read the case study →</Link>
                <a href="https://dependency-intelligence.uthamkumar.info" target="_blank" rel="noreferrer">Open the live application ↗</a>
              </div>
            </div>
          </article>

          <article className="featured-work featured-work-next">
            <Link className="featured-image" href="/work/engineering-control-tower" aria-label="Read the Engineering Control Tower case study">
              <Image src="/engineering-control-tower.png" alt="Engineering Control Tower executive portfolio intelligence view" width={1536} height={1024} />
            </Link>
            <div className="featured-copy">
              <div className="featured-meta"><span>Case study 03</span><span>Live reference implementation</span></div>
              <h3>Engineering Control Tower</h3>
              <p className="featured-lede">An executive operating system for engineering portfolios—connecting outcome confidence, delivery health, shared constraints, and accountable interventions.</p>
              <dl>
                <div><dt>Context</dt><dd>Portfolio reviews often aggregate team status without revealing which system constraint is limiting outcomes or where executive intervention will change performance.</dd></div>
                <div><dt>My role</dt><dd>Portfolio operating-model designer, decision-system architect, and engineering delivery leadership practitioner.</dd></div>
                <div><dt>Approach</dt><dd>Combine six explainable health dimensions with hard governance rules, constraint analysis, team drill-down, and an explicit decision queue.</dd></div>
                <div><dt>Outcome</dt><dd>A working public reference implementation that turns engineering evidence into a repeatable executive intervention cadence.</dd></div>
              </dl>
              <div className="featured-links">
                <Link href="/work/engineering-control-tower">Read the case study →</Link>
                <a href="https://engineering-control-tower.uthamkumar.info" target="_blank" rel="noreferrer">Open the live application ↗</a>
              </div>
            </div>
          </article>

          <article className="featured-work featured-work-next">
            <Link className="featured-image" href="/work/ai-sdlc-governance" aria-label="Read the AI SDLC Governance case study">
              <Image src="/ai-sdlc-governance.png" alt="AI SDLC Governance executive governance posture view" width={1536} height={1024} />
            </Link>
            <div className="featured-copy">
              <div className="featured-meta"><span>Case study 04</span><span>Reference implementation ready</span></div>
              <h3>AI SDLC Governance</h3>
              <p className="featured-lede">An explainable governance operating system for enterprise AI—connecting use-case risk, lifecycle controls, evidence, exceptions, and accountable production decisions.</p>
              <dl>
                <div><dt>Context</dt><dd>AI adoption can scale faster than the evidence, ownership, and controls leaders need to approve responsible production use.</dd></div>
                <div><dt>My role</dt><dd>AI governance operating-system architect, decision-system designer, and technology program leadership practitioner.</dd></div>
                <div><dt>Approach</dt><dd>Register and tier use cases, make lifecycle controls explicit, explain readiness and hard rules, and connect every exception to a decision.</dd></div>
                <div><dt>Outcome</dt><dd>A GitHub-ready public reference implementation built entirely with synthetic data and a no-key executive brief.</dd></div>
              </dl>
              <div className="featured-links">
                <Link href="/work/ai-sdlc-governance">Read the case study →</Link>
                <a href="https://ai-sdlc-governance.uthamkumar.info" target="_blank" rel="noreferrer">Open the live application ↗</a>
              </div>
            </div>
          </article>

          <article className="featured-work featured-work-next">
            <Link className="featured-image" href="/work/cyber-risk-command-center" aria-label="Read the Cyber Risk Command Center case study">
              <Image src="/cyber-risk-command-center.png" alt="Cyber Risk Command Center enterprise cyber risk posture view" width={1536} height={1024} />
            </Link>
            <div className="featured-copy">
              <div className="featured-meta"><span>Case study 05</span><span>Live reference implementation</span></div>
              <h3>Cyber Risk Command Center</h3>
              <p className="featured-lede">An explainable executive operating system for material cyber risk—connecting crown-jewel exposure, control evidence, remediation velocity, exceptions, and accountable decisions.</p>
              <dl>
                <div><dt>Context</dt><dd>Cyber leadership reviews often contain too much telemetry and too little decision clarity about which risks require executive intervention.</dd></div>
                <div><dt>My role</dt><dd>Cyber risk operating-model designer, executive decision-system architect, and technology program leadership practitioner.</dd></div>
                <div><dt>Approach</dt><dd>Score cyber confidence across exposure, controls, remediation, identity, third party, and resilience, then apply hard rules for material-risk conditions.</dd></div>
                <div><dt>Outcome</dt><dd>A working public reference implementation that turns synthetic cyber risk evidence into leadership posture, closure actions, and an executive brief.</dd></div>
              </dl>
              <div className="featured-links">
                <Link href="/work/cyber-risk-command-center">Read the case study →</Link>
                <a href="https://cyber-risk-command-center.uthamkumar.info" target="_blank" rel="noreferrer">Open the live application ↗</a>
              </div>
            </div>
          </article>

          {plannedWork.length > 0 && <div className="work-in-progress">
            <p className="work-in-progress-label">Work in progress</p>
            {plannedWork.map((project) => (
              <article key={project.title}>
                <span>{project.number}</span>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <small>{project.status}</small>
              </article>
            ))}
          </div>}
        </div>
      </section>

      <section className="experience section-shell" id="experience">
        <div className="section-label"><span>03</span><p>Experience</p></div>
        <div className="experience-heading">
          <h2>A career built around consequential technology delivery.</h2>
          <p>Selected experience across financial technology, telecommunications, connected vehicles, enterprise software, and global product engineering.</p>
        </div>
        <div className="experience-list">
          <article>
            <span className="experience-era">Enterprise payments</span>
            <div className="experience-role">
              <h3>Visa</h3>
              <span>Lead, Technology Program Management · Atlanta, Georgia</span>
              <p>Owned cross-portfolio execution and operating-model transformation across commercial-payment programs, aligning Product, Engineering, Architecture, Cybersecurity, Infrastructure, and Operations around roadmap, risk, resilience, and release decisions.</p>
              <ul><li>20+ engineering squads</li><li>AI-enabled delivery intelligence</li><li>Secure SDLC and production readiness</li></ul>
              <small>Enterprise ecosystem: Jira Align · Jira · GitHub Enterprise · CI/CD and DevSecOps toolchains · Cloud and observability platforms</small>
            </div>
          </article>
          <article>
            <span className="experience-era">Digital platforms</span>
            <div className="experience-role">
              <h3>T-Mobile</h3>
              <span>Technology delivery and engineering program leadership</span>
              <p>Directed a global engineering portfolio across the United States, Mexico, and India, spanning microservices modernization, release governance, real-time inventory, reliability, and decision visibility.</p>
              <ul><li>64-person global organization</li><li>30% reduction in downtime</li><li>25% fewer release issues</li><li>50% fewer inventory errors</li></ul>
              <small>Delivery ecosystem: Jira · Power BI · Microservices · Automated release governance · Cloud platforms</small>
            </div>
          </article>
          <article>
            <span className="experience-era">Connected mobility</span>
            <div className="experience-role">
              <h3>Verizon</h3>
              <span>Technical program and platform delivery leadership</span>
              <p>Led cross-functional delivery across connected-vehicle platforms including Mercedes-Benz mbrace, Volkswagen Car-Net, and Verizon Hum, coordinating complex mobile, web, middleware, telematics, CRM, billing, and production ecosystems.</p>
              <ul><li>1M+ subscribers</li><li>Multimillion-dollar portfolio</li><li>Global automotive launches</li><li>40% faster emergency-response workflows</li></ul>
            </div>
          </article>
          <article className="experience-earlier">
            <span className="experience-era">Earlier leadership</span>
            <div className="experience-role">
              <h3>Meritech · Lenovo</h3>
              <span>Product strategy, global delivery, and quality engineering</span>
              <p>Owned mobile-network diagnostics product strategy and lifecycle delivery at Meritech, and led a 55-person onsite/offshore quality-engineering organization supporting Lenovo ThinkPad products.</p>
            </div>
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

      <section className="research section-shell" id="research">
        <div className="section-label"><span>05</span><p>Speaking &amp; research</p></div>
        <div className="research-heading">
          <h2>Ideas tested in public.</h2>
          <div><p>Selected talks and published work across secure AI systems, software delivery, platform resilience, and digital payments.</p><a href="https://scholar.google.com/citations?user=J74tCuwAAAAJ&amp;hl=en" target="_blank" rel="noreferrer">Google Scholar ↗</a></div>
        </div>
        <div className="research-list">
          {research.map((item) => (
            <a href={item.href} target="_blank" rel="noreferrer" key={item.title}>
              <span>{item.type}</span><h3>{item.title}</h3><small>{item.venue}</small><b aria-hidden="true">↗</b>
            </a>
          ))}
        </div>
      </section>

      <section className="writing section-shell" id="writing">
        <div className="section-label"><span>06</span><p>Writing</p></div>
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
          <p>Open to senior and principal technology program, engineering delivery, portfolio transformation, and AI-enabled platform leadership opportunities—as well as industry and speaking conversations.</p>
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
