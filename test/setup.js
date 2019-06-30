const { expect } = require('chai')
const supertest = require('supertest')

global.expect = expect
global.supertest = supertest

// note: to run tests in watcher mode, use
// npm test -- --watch
// the -- is needed to separate the params passed to npm from the ones 
// passed to the script, in this case --watch is passed to test
// npm run <command> [-- <args>]