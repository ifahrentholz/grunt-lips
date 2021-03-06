[![Travis](https://img.shields.io/travis/ifahrentholz/grunt-lips.svg?style=flat-square)]()
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square)](http://commitizen.github.io/cz-cli/)

[![npm](https://img.shields.io/npm/l/grunt-lips.svg?style=flat-square)]()
[![node](https://img.shields.io/node/v/grunt-lips.svg?style=flat-square)]()
[![npm](https://img.shields.io/npm/dt/grunt-lips.svg?style=flat-square)]()

# LIPS

> local image placeholder service

## Install dependencies

The LIPS service was rewritten and depends now on:

- [GraphicsMagick](http://www.graphicsmagick.org/)
- [Ghostscript](http://www.ghostscript.com/)

#### OSX

    brew install graphicsmagick
    brew install ghostscript

#### Ubuntu

    sudo add-apt-repository ppa:dhor/myway
    sudo apt-get update
    sudo apt-get install graphicsmagick
    sudo apt-get install ghostscript

#### Windows (binary downloads)

    ftp://ftp.graphicsmagick.org/pub/GraphicsMagick/windows/
    http://www.ghostscript.com/download/gsdnld.html

## Getting Started

This plugin requires Grunt.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-lips --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks("grunt-lips");
```

## The "lips" task

#### Configure the LIPS via URL parameters:

> Settings

| setting     | default          | type     | parameter              |
| ----------- | ---------------- | -------- | ---------------------- |
| namespace   | lips             | String   | [grunt-options]        |
| port        | 3000             | Integer  | [grunt-options]        |
| fontFamily  |  Arial           |  String  |  [grunt-options]       |
| delay       | 0                | Integer  | &delay=5000            |
| contentType | png              | String   | .png                   |
| maxAge      | 3153600          | Integer  | &maxAge=0              |
| expiryDate  | new Date()       | DateTime | &expiryDate=[DATETIME] |
| txtsize     | 24px             | String   | &txtsize=12px          |
| txtclr      | 000000           | HEX      | &txtclr=fff000         |
| txt         | [width]x[height] | String   | &txt=hello             |
| bg          | 09F              | HEX      | &bg=bada55             |

> example: http://localhost:3000/lips/200x133.png?delay=1000&maxAge=0&txtsize=23px&txtclr=000000&txt=CText&bg=bada55

#### Configure the LIPS via Grunt options:

```js
grunt.initConfig({
  lips: {
    options: {
      namespace: "lips",
      fontFamily: "Impact.ttf",
      txtsize: "24px",
      txtclr: "000000",
      txt: "GruntLIPS",
      bg: "bada55",
      port: process.env.PORT || 1337,
      delay: 0,
      contentType: "png",
      maxAge: 3153600,
      expiryDate: new Date()
    }
  }
});
```

### PLEASE NOTE:

> To run this service alongside with your watch task I highly recommend using the [grunt-concurrent plugin](https://github.com/sindresorhus/grunt-concurrent)

## License

The MIT License (MIT)

Copyright (c) 2019 Ingo Fahrentholz

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
