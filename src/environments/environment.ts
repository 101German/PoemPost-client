// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { AuthConfig } from "angular-oauth2-oidc";

export const authConfig: AuthConfig = {
  issuer: "https://localhost:44310",
  redirectUri: window.location.origin,
  clientId: "PoemPostClient",
  scope: 'PoemPost_api openid profile email roles',
  postLogoutRedirectUri: window.location.origin,
  requireHttps: false,
  loginUrl: "https://localhost:44310/Account/Login"
}
export const environment = {
  production:false,
  urlApi: "https://localhost:5001",
  authentication: authConfig,
  name: "LOCAL",
  issuer: "http://localhost:5000",
  clientPortalApiConfig: {
    host: "http://localhost:5001",
    baseUrl: "api"
  }
}
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
