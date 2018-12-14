#!/usr/bin/env node

var program = require('commander');
var config = require('../package.json');
var choose = require('../lib/choose.js');

program
  .version(config.version, "-v, --verison")
  .parse(process.argv);

choose()
