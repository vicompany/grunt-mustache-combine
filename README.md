# grunt-mustache-combine [![Build Status](https://travis-ci.org/vicompany/grunt-mustache-combine.svg?branch=master)](https://travis-ci.org/vicompany/grunt-mustache-combine)

> Combine Mustache templates into one file.

## Getting Started

This plugin will combine all your Mustache templates into one file (`object`) and use the path of the file as the key. It won't pre-parse the file, because Mustache will [do that on the first render](https://github.com/janl/mustache.js#pre-parsing-and-caching-templates).

## Install

```
$ npm install --save-dev grunt-mustache-combine
```

## Usage

```js
require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks

grunt.initConfig({
  mustache_combine: {
    all: {
      files: 'js/templates.js': ['templates/**/*.mustache']
    }
  }
});

grunt.registerTask('default', ['mustache_combine']);
```

## Examples

### Custom config and rules

```js
grunt.initConfig({
  mustache_combine: {
    options: {
      format: 'amd',
      extension: '.html',
      removeFromKey: 'path/to/'
    },
    all: {
      files: 'dist/templates.js': ['path/to/templates/**/*.html']
    }
  }
});
```

## Options

### options.format
Type: `String`  
Default: `'es6'`  
Other possible values: `'commonjs', 'amd', 'es5'`

The format to output.

### options.extension
Type: `String`  
Default: `'.mustache'`

The extension to remove from the key.

### options.removeFromKey
Type: `String`  
Default: `''`

Part of the file path to remove from the key.

### options.useLowerCaseKey
Type: `Boolean`  
Default: `true`

Generate lower case keys. Set to `false` to ignore casing.

### options.formatKey
Type: `Function`  
Default: `null`

Function to generate a custom key. It overrules the `removeFromKey` and `useLowerCaseKey` options and receives the file path as a parameter.

```js
grunt.initConfig({
  mustache_combine: {
    options: {
      formatKey: function(filepath) {
        return filepath
          .replace('path/to/templates/', 'tpl-')
          .toUpperCase();
      }
    },
    all: {
      files: 'js/template.js': ['path/to/templates/**/*.mustache']
    }
  }
});
```

## Output example and usage

```js
// Contents of the generated templates file (default ES6 format)
export default {"my/template": "<h1>hello {{name}}</h1>"};

// In your module.js
import Mustache from 'mustache';
import templates from './templates';

const tpl = templates['my/template'];

Mustache.render(tpl, {name: 'World'});
```

## License

MIT © [VI Company](http://vicompany.nl)