'use strict';

var assert = require('assert');
var Autoprefixer = require('../lib/autoprefixer');

function errorHandler(err){
    process.nextTick(function rethrow() { throw err; });
}

(new Autoprefixer).run(
    [{contents: '.foo { -webkit-box-sizing: border-box; box-sizing: border-box;}', path: 'foo.css'}], // inputs
    {}, // options
    console // logger
).then(function(inputs){
    assert.equal(inputs.toString(), '.foo { -webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box;}')
}).catch(errorHandler);

(new Autoprefixer).run(
    [{contents: '.foo { \n -webkit-box-sizing: border-box; \n box-sizing: border-box;}', path: 'foo.css'}], // inputs
    {
        cascade: true
    }, // options
    console // logger
).then(function(inputs){
        assert.equal(inputs.toString(), '.foo { \n -webkit-box-sizing: border-box; \n    -moz-box-sizing: border-box; \n         box-sizing: border-box;}')
    }).catch(errorHandler)
