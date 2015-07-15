# lips

> local image placeholder service

## Getting Started
This plugin requires Grunt.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install lips --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('lips');
```

## The "lips" task

### Overview
In your project's Gruntfile, add a section named `lips` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  lips: {
    options: {
      // Task-specific options go here.
    }
  },
})
```

### Options

#### options.namespace
Type: `String`
Default value: `"lips"`

A string value for the namespace e.g. http://localhost/lips/350x150 

#### options.port
Type: `Integer`
Default value: `3000`

set the default port 

#### options.imageType
Type: `String`
Default value: `png`

#### options.fgColor
Type: `String`
Default value: `"181818"`

#### options.bgColor
Type: `String`
Default value: `e1e1e1`

#### options.maxAge
Type: `Integer`
Default value: `3153600`

#### options.expiryDate
Type: `Object`
Default value: `new Date(0)`

### Usage Examples

#### Default Options
In this example, the default options are used. 

```js
grunt.initConfig({
  lips: {
    options: {}
  },
})
```

#### Custom Options
In this example, custom options are used. 

```js
grunt.initConfig({
  lips: {
    options: {
      namespace: "generate",
      port: 1337,
      imageType: "jpg",
      fgColor: "000000",
      bgColor: "bada55",
      maxAge: 3153600,
      expiryDate: new Date(0)
    }
  },
})
```

## Release History
_(Nothing yet)_

## License
Copyright (c) 2015 Ingo Fahrentholz. Licensed under the MIT license.
