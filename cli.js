#!/usr/bin/env node
'use strict';

var resolve = require('path').resolve;
var execSync = require('child_process').execSync;
var fuzzysearch = require('fuzzysearch');

function select() {
  var cwd = resolve(process.argv[2]);
  var needle = process.argv[3];
  var haystacks = execSync('ls -1td */', { cwd: cwd }).toString().split('\n');

  for (var i = 0; i < haystacks.length; i++) {
    var haystack = haystacks[i];
    if (haystack && fuzzysearch(needle, haystack)) {
      return resolve(cwd, haystack);
    }
  }
  throw new Error('No match for "' + needle + '" in ' + cwd);
}

process.stdout.write(select());
