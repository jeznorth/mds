// environment config variables for test/dev/prod
export const DEFAULT_ENVIRONMENT = {
  apiUrl: "http://localhost:5000",
  mapPortalId: "e926583cd0114cd19ebc591f344e30dc",
  keycloak_resource: "mines-application-local",
  keycloak_clientId: "mines-application-local",
  keycloak_idpHint: "test",
  keycloak_url: "https://sso-test.pathfinder.gov.bc.ca/auth",
  keycloak_role_admin: "mds-mine-admin",
  keycloak_role_create: "mds-mine-create",
  keycloak_role_view: "mds-mine-view",
};

export const ENVIRONMENT = {
  apiUrl: "<API_URL>",
  mapPortalId: "<ARCGIS_PORTAL_MAP_ID>",
};

export const KEYCLOAK = {
  realm: "mds",
  url: "<URL>",
  idpHint: "idir",
  "ssl-required": "external",
  resource: "<RESOURCE>",
  "public-client": true,
  "confidential-port": 0,
  clientId: "<CLIENT_ID>",
};

export const USER_ROLES = {
  role_admin: "mds-mine-admin",
  role_create: "mds-mine-create",
  role_view: "mds-mine-view",
};

export const RETURN_PAGE_TYPE = {
  SITEMINDER_LOGOUT: "smlogout",
  LOGOUT: "logout",
};

export const SSO_BASE_URL = "https://sso-test.pathfinder.gov.bc.ca";
export const SSO_REALM_NAME = "mds";
export const SSO_CLIENT_ID = "mines-application-local";
export const SSO_BASE_AUTH_ENDPOINT = `${SSO_BASE_URL}/auth/realms/idir/protocol/openid-connect`;

export const SSO_LOGOUT_REDIRECT_URI = `${window.location.origin}/return-page?type=${
  RETURN_PAGE_TYPE.LOGOUT
}`;
export const SSO_LOGOUT_ENDPOINT = `${SSO_BASE_AUTH_ENDPOINT}/logout?redirect_uri=${SSO_LOGOUT_REDIRECT_URI}`;

export const SITEMINDER_BASE_URL = "https://logontest.gov.bc.ca";
export const SITEMINDER_LOGOUT_REDIRECT_URI = `${window.location.origin}/return-page?type=${
  RETURN_PAGE_TYPE.SITEMINDER_LOGOUT
}`;
export const SITEMINDER_LOGOUT_ENDPOINT = `${SITEMINDER_BASE_URL}/clp-cgi/logoff.cgi?returl=${SITEMINDER_LOGOUT_REDIRECT_URI}&retnow=1`;
