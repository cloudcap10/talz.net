export async function onRequest() {
  const body = {
    issuer: 'https://talz.net',
    authorization_endpoint: 'https://github.com/login/oauth/authorize',
    token_endpoint: 'https://github.com/login/oauth/access_token',
    jwks_uri: 'https://talz.net/.well-known/jwks.json',
    response_types_supported: ['code'],
    grant_types_supported: ['authorization_code'],
    token_endpoint_auth_methods_supported: ['client_secret_basic'],
    scopes_supported: ['openid', 'profile', 'email', 'repo'],
  };

  return new Response(JSON.stringify(body, null, 2), {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  });
};
