export const onRequest: PagesFunction = async () => {
  const body = {
    issuer: 'https://talz.net',
    authorization_endpoint: 'https://github.com/login/oauth/authorize',
    token_endpoint: 'https://github.com/login/oauth/access_token',
    jwks_uri: 'https://talz.net/.well-known/jwks.json',
    response_types_supported: ['code'],
    response_modes_supported: ['query', 'form_post'],
    grant_types_supported: ['authorization_code'],
    subject_types_supported: ['public'],
    id_token_signing_alg_values_supported: ['RS256'],
    scopes_supported: ['openid', 'profile', 'email'],
    claims_supported: ['sub', 'iss', 'name', 'email'],
    token_endpoint_auth_methods_supported: ['client_secret_basic'],
  };

  return new Response(JSON.stringify(body, null, 2), {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  });
};
