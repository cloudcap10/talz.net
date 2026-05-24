export async function onRequest() {
  const body = {
    resource: 'https://talz.net',
    authorization_servers: ['https://github.com/login/oauth'],
    scopes_supported: [
      'openid',
      'profile',
      'email',
      'repo',
      'read:user',
    ],
    bearer_methods_supported: ['Authorization header'],
    resource_documentation: 'https://docs.github.com/en/rest',
  };

  return new Response(JSON.stringify(body, null, 2), {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  });
};
