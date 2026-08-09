import Link from "next/link";
import { notFound } from "next/navigation";
import { getInsight, insights } from "@/data/content";

export function generateStaticParams() { return insights.map((insight) => ({ slug: insight.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const insight = getInsight((await params).slug);
  return insight ? { title: `${insight.title} | Utham Kumar`, description: insight.dek } : {};
}

export default async function InsightPage({ params }: { params: Promise<{ slug: string }> }) {
  const insight = getInsight((await params).slug);
  if (!insight) notFound();
  return <main className="article-page">
    <header className="case-nav"><Link href="/">← Utham Kumar</Link><span>Perspectives / {insight.category}</span></header>
    <article>
      <header className="article-header"><span className="kicker">{insight.category} · {insight.readTime}</span><h1>{insight.title}</h1><p>{insight.dek}</p></header>
      <div className="article-body">{insight.sections.map((section) => <section key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{section.bullets && <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}</section>)}</div>
      <footer className="article-end"><span>Written by Utham Kumar Anugula Sethupathy</span><Link href="/#insights">More perspectives →</Link></footer>
    </article>
  </main>;
}
