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
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    }
  }
});

grunt.registerTask('default', ['mustach_combine']);
```

## Examples

### Custom config and rules

```js
grunt.initConfig({
  mustache_combine: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    }
  }
});
```

## Options

### options.format
Type: `String`
Default: `'es6'`
Other values: `'commonjs', 'amd', es5`

The format to output.

### options.extension
Type: `String`
Default: `'.mustache'`

The extension to remove.

## Usage Examples

#### Default Options
In this example, the default options are used to combine the templates.



## License

MIT © VI Company](http://vicompany.nl)