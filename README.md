# grunt-mustache-combine

> Combine Mustache templates into one file.

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
Possible values: `'commonjs', 'amd', es5`

The format to output.

### options.extension
Type: `String`  
Default: `'.mustache'`

The extension to remove from the key.

### options.removeFromKey
Type: `String`  
Default: `''`

Paart of the path to remove from the key.

### options.useLowerCaseKey
Type: `Boolean`  
Default: `true`

Generate lower case keys. Set to `false` to ignore casing.

### options.formatKey
Type: `Function`  
Default: `null`

Function to generate a custom key. It receives the file path as a parameter and overrules the `removeFromKey` and `useLowerCaseKey` options.

```js
grunt.initConfig({
	mustache_combine: {
    options: {
      formatKey: function(filepath) {
        return filepath
          .replace('templates/sub/', 'tpl-')
          .toUpperCase();
      }
    },
    all: {
      files: 'js/template.js': ['path/to/templates/**/*.mustache']
    }
  }
});
```

## License

MIT © VI Company](http://vicompany.nl)