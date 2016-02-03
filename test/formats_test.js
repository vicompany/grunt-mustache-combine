'use strict';

var grunt = require('grunt');
var requirejs = require('requirejs');

requirejs.config({
  baseUrl: __dirname
});

exports.formats = {
  es5: function (test) {
    var actual = grunt.file.read('tmp/es5.js');
    var expected = grunt.file.read('test/expected/es5.js');

    test.equal(actual, expected, 'should output an ES5 IIFE file');
    test.done();
  },
  amd: function (test) {
    var key = 'test/fixtures/hello';

    test.expect(1);

    requirejs(['../tmp/amd', './expected/amd'], function (actual, expected) {
      actual = actual[key];
      expected = expected[key];

      test.equal(actual, expected, 'should output an AMD file');
      test.done();
    });
  },
  commonjs: function (test) {
    var key = 'test/fixtures/hello';
    var actual = require('../tmp/common');
    var expected = require('./expected/common');

    actual = actual[key];
    expected = expected[key];

    test.equal(actual, expected, 'should output an Commonjs file');
    test.done();
  }
};
