const JWProxy = require('appium-base-driver').JWProxy;
const repl = require('repl');
const promirepl = require('promirepl').promirepl;

const caps = require('../caps.js').capabilities;

const DEFAULT_SERVER = 'localhost';
const DEFAULT_PORT = 4444;
const DEFAULT_BASE = '/wd/hub';

const proxy = async function(opts = {}) {
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