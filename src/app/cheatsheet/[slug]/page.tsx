import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CHEATSHEETS } from '@/lib/cheatsheets';
import { CONTENT } from '@/lib/cheatsheet-content';
import CheatsheetRenderer from '@/components/CheatsheetRenderer';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return CHEATSHEETS.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cs = CHEATSHEETS.find((c) => c.slug === slug);
  if (!cs) return { title: 'Not Found' };
  return {
    title: `${cs.title} Cheatsheet — Joven Talasan`,
    description: cs.description,
  };
}

export default async function CheatsheetPage({ params }: Props) {
  const { slug } = await params;
  const cs = CHEATSHEETS.find((c) => c.slug === slug);
  const blocks = CONTENT[slug];

  if (!cs || !blocks) notFound();

  const sections = blocks.filter((b) => b.type === 'h2').map((b) => b.text);

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <Link href="/cheatsheet" className="brutal-border bg-white inline-block px-4 py-2 font-bold text-sm brutal-shadow-sm brutal-hover mb-8">
        ← all cheatsheets
      </Link>

      <div className="mb-2 flex items-center gap-3">
        <span className={`brutal-border ${cs.color} px-3 py-1 text-xs font-bold uppercase`}>{cs.title}</span>
      </div>

      <h1 className="text-3xl md:text-4xl font-bold mb-2">{cs.title}</h1>
      <p className="text-sm mb-6 text-foreground/60">{cs.subtitle}</p>

      <div className="flex flex-wrap gap-2 mb-10">
        {sections.map((s) => (
          <span key={s} className="brutal-border-thin bg-white px-3 py-1 text-xs font-mono font-semibold">
            {s}
          </span>
        ))}
      </div>

      <CheatsheetRenderer blocks={blocks} />

      <div className="mt-12 text-center">
        <Link href="/cheatsheet" className="brutal-border bg-main text-main-foreground px-6 py-3 font-bold brutal-shadow brutal-hover inline-block">
          ← all cheatsheets
        </Link>
      </div>
    </section>
  );
}
