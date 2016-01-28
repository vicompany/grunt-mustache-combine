# grunt-mustache-combine

> The best grunt plugin ever.

## Getting Started
_If you haven't used [grunt][] before, be sure to check out the [Getting Started][] guide._

From the same directory as your project's [Gruntfile][Getting Started] and [package.json][], install this plugin with the following command:

```bash
npm install grunt-mustache-combine --save-dev
```

Once that's done, add this line to your project's Gruntfile:

```js
grunt.loadNpmTasks('grunt-mustache-combine');
```

If the plugin has been installed correctly, running `grunt --help` at the command line should list the newly-installed plugin's task or tasks. In addition, the plugin should be listed in package.json as a `devDependency`, which ensures that it will be installed whenever the `npm install` command is run.

[grunt]: http://gruntjs.com/
[Getting Started]: https://github.com/gruntjs/grunt/blob/devel/docs/getting_started.md
[package.json]: https://npmjs.org/doc/json.html

## The "mustache_combine" task

### Overview
In your project's Gruntfile, add a section named `mustache_combine` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  mustache_combine: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

### Options

#### options.format
Type: `String`
Default value: `'es6'`
Other: `'commonjs', 'amd', false`

Which format to output

#### options.extension
Type: `String`
Default value: `'.mustache'`

The extension to remove.

### Usage Examples

#### Default Options
In this example, the default options are used to combine the templates.

```js
grunt.initConfig({
  mustache_combine: {
    options: {},
    files: {
      'dest/templates.js': ['templates/**/*.mustache],
    },
  },
})
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt][].

## Release History
_(Nothing yet)_
