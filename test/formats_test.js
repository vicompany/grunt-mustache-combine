'use strict';

var grunt = require('grunt');

exports.formats = {
  es5: function(test) {
    var actual = grunt.file.read('tmp/es5.js');
    var expected = grunt.file.read('test/expected/es5.js');

    test.equal(actual, expected, 'should output an ES5 IIFE file');
    test.done();
  },
  amd: function(test) {
    var actual = grunt.file.read('tmp/amd.js');
    var expected = grunt.file.read('test/expected/amd.js');

    test.equal(actual, expected, 'should output an AMD file');
    test.done();
  },
  commonjs: function(test) {
    var actual = grunt.file.read('tmp/common.js');
    var expected = grunt.file.read('test/expected/common.js');

    test.equal(actual, expected, 'should output an Commonjs file');
    test.done();
  }
};
