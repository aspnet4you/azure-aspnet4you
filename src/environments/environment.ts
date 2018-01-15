// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  apiDomain: "http://api-local.aspnet4you.com",
  returnUrl: "http://localhost:4200/oauth",
  wordPressBaseUrl : "https://blogs.aspnet4you.com",
  cookieDomain: "localhost",
  secureCookie: false,
  stockQuoteUrl: "https://afa-aspnet4you.azurewebsites.net/api/GetStockQuote/{symbol}?code=WIm7zQgs0brF6vfLphGeaO/xEAhZ8rkZYyLGDOhH3MN7ynRyKPd1EQ==",
  stockSymbolsUrl:"https://afa-aspnet4you.azurewebsites.net/api/GetStockSymbols/?code=qticWQLtrAgiEGZjku/VTv1Qj/lspKqm6oM147XkkPS6mvB49paXww=="
};
