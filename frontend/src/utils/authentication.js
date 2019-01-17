import * as ENV from "@/constants/environment";
// This file is anticipated to have multiple exports
// eslint-disable-next-line import/prefer-default-export
export const signOutFromSSO = () => {
  // open a new tab for signing out from SiteMinder which is Gov's auth platform
  // once it returns back, it will sign out from SSO which will happen in ReturnPage.js
  window.open(ENV.SITEMINDER_LOGOUT_ENDPOINT, "_blank");
};
