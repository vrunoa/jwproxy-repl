# jwproxy-repl
A JWProxy server REPL to play with webdriver requests

# Install
```
npm install -g jwproxy-repl
```

# Quick usage
```
# Starting the jwproxy-repl
jwproxy-repl --opts='{"server":"<SAUCE_USERNAME>:<SAUCE_ACCESS_KEY>8@ondemand.saucelabs.com", "base":"/wd/hub"}'

# Starting a session
jwproxy.command('/session', 'POST', caps.firefox)

# Taking a full page screenshot on firefox
jwproxy.command('/moz/screenshot/full', 'GET)

# Deleting the session
jwproxy.command('', 'DELETE')
```
