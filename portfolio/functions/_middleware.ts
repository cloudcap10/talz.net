export const onRequest: PagesFunction = async ({ request, next }) => {
  const accept = request.headers.get('Accept') || '';

  if (accept.includes('text/markdown')) {
    const response = await next();
    const html = await response.text();
    const markdown = htmlToMarkdown(html);
    const tokenCount = markdown.split(/\s+/).filter(Boolean).length;
    return new Response(markdown, {
      headers: {
        'Content-Type': 'text/markdown',
        'X-Markdown-Tokens': String(tokenCount),
      },
    });
  }

  const response = await next();
  const headers = new Headers(response.headers);
  headers.append('Link', '</.well-known/api-catalog>; rel="api-catalog"');
  headers.append('Link', '</.well-known/openid-configuration>; rel="openid-configuration"');
  headers.append('Link', '</.well-known/oauth-authorization-server>; rel="oauth-authorization-server"');
  headers.append('Link', '</.well-known/oauth-protected-resource>; rel="oauth-protected-resource"');
  headers.append('Link', '</.well-known/agent-skills/index.json>; rel="agent-skills"');
  headers.append('Link', '</.well-known/mcp/server-card.json>; rel="mcp-server"');
  headers.append('Link', '</sitemap-index.xml>; rel="sitemap"');
  return new Response(response.body, { status: response.status, headers });
};

function htmlToMarkdown(html: string): string {
  let md = html;
  md = md.replace(/<head[\s\S]*?<\/head>/gi, '');
  md = md.replace(/<script[\s\S]*?<\/script>/gi, '');
  md = md.replace(/<style[\s\S]*?<\/style>/gi, '');
  md = md.replace(/<nav[\s\S]*?<\/nav>/gi, '');
  md = md.replace(/<footer[\s\S]*?<\/footer>/gi, '');
  md = md.replace(/<h1[^>]*>/gi, '# ');
  md = md.replace(/<h2[^>]*>/gi, '## ');
  md = md.replace(/<h3[^>]*>/gi, '### ');
  md = md.replace(/<\/h[1-3]>/gi, '\n\n');
  md = md.replace(/<p[^>]*>/gi, '');
  md = md.replace(/<\/p>/gi, '\n\n');
  md = md.replace(/<li[^>]*>/gi, '- ');
  md = md.replace(/<\/li>/gi, '\n');
  md = md.replace(/<br\s*\/?>/gi, '\n');
  md = md.replace(/<strong[^>]*>/gi, '**');
  md = md.replace(/<\/strong>/gi, '**');
  md = md.replace(/<code[^>]*>/gi, '`');
  md = md.replace(/<\/code>/gi, '`');
  md = md.replace(/<a[^>]*href="([^"]*)"[^>]*>/gi, '[$1](');
  md = md.replace(/<\/a>/gi, ')');
  md = md.replace(/<[^>]+>/g, '');
  md = md.replace(/&amp;/g, '&');
  md = md.replace(/&lt;/g, '<');
  md = md.replace(/&gt;/g, '>');
  md = md.replace(/&quot;/g, '"');
  md = md.replace(/&#(\d+);/g, (_, d) => String.fromCharCode(Number(d)));
  md = md.replace(/\n{3,}/g, '\n\n');
  md = md.trim();
  return md;
}
