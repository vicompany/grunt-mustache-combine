'use strict';

var grunt = require('grunt');

exports.keys = {
  casing: function (test) {
    var actual = grunt.file.read('tmp/casing.js');
    var expected = grunt.file.read('test/expected/casing.js');

    test.equal(actual, expected, 'should output keys with mixed casing and without the "test/fixtures/" part');
    test.done();
  },
  formatKey: function (test) {
    var actual = grunt.file.read('tmp/formatKey.js');
    var expected = grunt.file.read('test/expected/formatKey.js');

    test.equal(actual, expected, 'should use the output from the formatKey() function');
    test.done();
  }
};
