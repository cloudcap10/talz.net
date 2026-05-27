'use client';

import { type Block } from '@/lib/cheatsheet-content';

function Bold({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith('**') && part.endsWith('**')
          ? <strong key={i} className="font-semibold text-foreground">{part.slice(2, -2)}</strong>
          : <span key={i}>{part}</span>
      )}
    </>
  );
}

export default function CheatsheetRenderer({ blocks }: { blocks: Block[] }) {
  return (
    <div className="flex flex-col gap-8">
      {blocks.map((block, i) => {
        switch (block.type) {
          case 'h2':
            return (
              <h2 key={i} className="font-bold text-xl mt-4 mb-1">
                {block.text}
              </h2>
            );
          case 'h3':
            return (
              <h3 key={i} className="font-bold text-base mt-2 mb-1 text-foreground/80">
                {block.text}
              </h3>
            );
          case 'p':
            return (
              <div key={i} className="brutal-border bg-white p-5 brutal-shadow-sm">
                <p className="text-sm leading-relaxed text-foreground/80">
                  <Bold text={block.text} />
                </p>
              </div>
            );
          case 'list':
            return (
              <div key={i} className="brutal-border bg-white p-5 brutal-shadow-sm">
                <ul className="text-sm leading-relaxed space-y-1.5 text-foreground/80">
                  {block.items.map((item, j) => (
                    <li key={j} className="flex gap-2">
                      <span className="text-brutal-blue font-bold shrink-0">•</span>
                      <span><Bold text={item} /></span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          case 'table':
            return (
              <div key={i} className="brutal-border bg-white brutal-shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-foreground text-white">
                        {block.headers.map((h, j) => (
                          <th key={j} className="text-left px-4 py-2.5 font-semibold">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {block.rows.map((row, j) => (
                        <tr key={j} className="border-b-2 border-foreground/10 last:border-0">
                          {row.map((cell, k) => (
                            <td key={k} className={`px-4 py-2.5 ${k === 0 ? 'font-mono font-semibold text-foreground' : 'text-foreground/70'}`}>
                              <Bold text={cell} />
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            );
          case 'code':
            return (
              <div key={i} className="brutal-border bg-foreground brutal-shadow-sm">
                {block.label && (
                  <div className="px-4 py-2 border-b-2 border-white/10">
                    <span className="font-mono text-xs font-bold text-main">{block.label}</span>
                  </div>
                )}
                <pre className="p-4 text-xs leading-relaxed font-mono text-gray-300 overflow-x-auto whitespace-pre">
                  {block.text}
                </pre>
              </div>
            );
          case 'callout':
            return (
              <div key={i} className="brutal-border bg-main/20 p-4 brutal-shadow-sm">
                <p className="text-xs font-bold uppercase tracking-wide mb-1 text-foreground">{block.label}</p>
                <p className="text-sm text-foreground/80"><Bold text={block.text} /></p>
              </div>
            );
          case 'grid':
            return (
              <div key={i} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {block.items.map((item, j) => (
                  <div key={j} className="brutal-border bg-white p-4 brutal-shadow-sm">
                    <p className="text-xs font-bold uppercase tracking-wide mb-1 text-brutal-blue">{item.label}</p>
                    <p className="text-sm text-foreground/70"><Bold text={item.text} /></p>
                  </div>
                ))}
              </div>
            );
        }
      })}
    </div>
  );
}
