/*
 * grunt-mustache-combine
 *
 * Copyright (c) 2016 VI Company
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

  grunt.registerMultiTask('mustache_combine', 'Combine Mustache templates', function () {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      format: 'ES6',
      extension: '.mustache'
    });

    // Iterate over all specified file groups.
    this.files.forEach(function (file) {
      var src = file.src
        .filter(function (filepath) {
          if (!grunt.file.exists(filepath)) {
            grunt.log.warn('Template file "' + filepath + '" not found.');
            return false;
          }
          return true;
        })
        .reduce(function (data, filepath) {
          var source = grunt.file.read(filepath);
          var name = filepath
            .replace('./Views/', '')
            .replace(options.extension, '')
            .toLowerCase();

          data[name] = source;

          return data;
        }, {});

      // Create output format
      switch (options.format.toLowerCase()) {
        case 'es6':
        case 'es2015':
          src = ['export default ', JSON.stringify(src), ';'];
          break;
        case 'commonjs':
          src = ['module.exports = ', JSON.stringify(src), ';'];
          break;
        case 'amd':
          src = ['define(', JSON.stringify(src), ');'];
          break;
        case 'es5':
        case 'iife':
        default:
          src = ['(function(){ return ', JSON.stringify(src), '; })();'];
      }

      src = src.join('');

      // Write the destination file.
      grunt.file.write(file.dest, src);

      // Print a success message.
      grunt.log.writeln('File "' + file.dest + '" created.');
    });
  });

};
