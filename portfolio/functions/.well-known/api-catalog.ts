export const onRequest: PagesFunction = async () => {
  const body = {
    linkset: [
      {
        anchor: 'https://talz.net',
        link: [
          { href: 'https://api.github.com/repos/cloudcap10/talz.net', rel: 'service-desc', type: 'application/vnd.oai.openapi+json' },
          { href: 'https://github.com/cloudcap10/talz.net', rel: 'service-doc', type: 'text/html' },
          { href: 'https://github.com/cloudcap10', rel: 'status', type: 'text/html' },
        ],
      },
    ],
  };

  return new Response(JSON.stringify(body, null, 2), {
    headers: {
      'Content-Type': 'application/linkset+json',
      'Access-Control-Allow-Origin': '*',
    },
  });
};
