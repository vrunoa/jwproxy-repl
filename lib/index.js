const JWProxy = require('appium-base-driver').JWProxy;
const repl = require('repl');
const promirepl = require('promirepl').promirepl;
const homedir = require('os').homedir();
const path = require('path');
const jwproxyDefaultCapsPath = path.join(homedir, '.jwproxy-repl.js');
const caps = require(jwproxyDefaultCapsPath).capabilities;

const DEFAULT_SERVER = 'localhost';
const DEFAULT_PORT = 4444;
const DEFAULT_BASE = '';

const proxy = async function(opts = undefined) {
  opts = opts === undefined ? {} : JSON.parse(opts);
  console.log('Available caps', caps);
  console.log('JWProxy config', opts);
  var jwproxy = new JWProxy({
    server: opts.server || DEFAULT_SERVER, 
    port: opts.port || DEFAULT_PORT, 
    base: opts.base || DEFAULT_BASE, 
    keepAlive: true
  });
  const saywot = repl.start({
    prompt: "JWProxy: "
  });
  saywot.context.jwproxy = jwproxy;
  saywot.context.caps = caps;
  promirepl(saywot);
  return saywot;
}

module.exports.default = proxy;