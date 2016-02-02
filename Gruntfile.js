/*
 * grunt-mustache-combine
 *
 *
 * Copyright (c) 2016 VI Company
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

  // load all npm grunt tasks
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

    // Configuration to be run (and then tested).
    mustache_combine: {
      defaults: {
        options: {},
        files: {
          'tmp/defaults.js': ['test/fixtures/hello.mustache', 'test/fixtures/nested/foo.mustache', 'test/fixtures/nested/PascalCase.mustache']
        }
      },
      es5: {
        options: {
          format: 'ES5'
        },
        files: {
          'tmp/es5.js': ['test/fixtures/hello.mustache']
        }
      },
      amd: {
        options: {
          format: 'AMD'
        },
        files: {
          'tmp/amd.js': ['test/fixtures/hello.mustache']
        }
      },
      commonjs: {
        options: {
          format: 'commonjs'
        },
        files: {
          'tmp/common.js': ['test/fixtures/hello.mustache']
        }
      },
      casing: {
        options: {
          useLowerCaseKey: false,
          removeFromKey: 'test/fixtures/'
        },
        files: {
          'tmp/casing.js': ['test/fixtures/nested/foo.mustache', 'test/fixtures/nested/PascalCase.mustache']
        }
      },
      formatKey: {
        options: {
          formatKey: function (name) {
            return name
              .replace('test/fixtures/nested', '_prefix')
              .toUpperCase();
          }
        },
        files: {
          'tmp/formatKey.js': ['test/fixtures/nested/foo.mustache', 'test/fixtures/nested/PascalCase.mustache']
        }
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'mustache_combine', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
