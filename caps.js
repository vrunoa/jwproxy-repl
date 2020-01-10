module.exports.capabilities = {
  "firefox": {
    "alwaysMatch": {
      "browserName": "firefox",
      "moz:firefoxOptions": {
        "prefs": {
          "browser.firstrun-content.dismissed": true,
          "browser.startup.page": 0,
          "startup.homepage_welcome_url.additional": "",
          "startup.homepage_welcome_url": "about:blank",
          "browser.startup.homepage_override.mstone": "ignore"
        },
        "log": {
          "level": "debug"
        }
      }
    }
  }
}