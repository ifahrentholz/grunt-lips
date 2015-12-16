# lips v1.0.0

> local image placeholder service

## Install dependencies
The LIPS service was rewritten and depends now on [Cairo](http://cairographics.org/)

| OS | Command |
| ----- | ----- |
| OS X | `brew install pkg-config cairo libpng jpeg giflib` |
| Ubuntu | `sudo apt-get install libcairo2-dev libjpeg8-dev libpango1.0-dev libgif-dev build-essential g++` |
| Fedora | `sudo yum install cairo cairo-devel cairomm-devel libjpeg-turbo-devel pango pango-devel pangomm pangomm-devel giflib-devel` |
| Solaris | `pkgin install cairo pkg-config xproto renderproto kbproto xextproto` |
| Windows | [Instructions on this wiki](https://github.com/Automattic/node-canvas/wiki/Installation---Windows) |

**El Capitan users:** If you have recently updated to El Capitan and are experiencing trouble when compiling, run the following command: `xcode-select --install`. Read more about the problem [on Stack Overflow](http://stackoverflow.com/a/32929012/148072).

**OSX: no ldconfig error:** 

    sudo echo > /usr/local/bin/ldconfig
    sudo chmod +x /usr/local/bin/ldconfig
    npm install
    sudo rm -f /usr/local/bin/ldconfig

## Getting Started
This plugin requires Grunt.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-lips --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-lips');
```

## The "lips" task

#### Configure the LIPS via URL parameters:

| setting | default | type | parameter
| --------| ------- | ---- | ----------|
| delay | 0 | Integer | &delay=5000 |
| contentType | "png" | String | .png |
| maxAge | 3153600 | Integer | &maxAge=0 |
| expiryDate| new Date() | DateTime | &expiryDate=[DATETIME] |
| font | Arial | String | &font=Arial |
| fontSize | 24px | String | &fontSize=12px |
| fontColor | 000000 | HEX | &fontColor=fff000 |
| text | true | Boolean | &text=false |
| fill | 09F | HEX | &fill=bada55 |

> example: http://localhost:3000/lips/200x133.png?delay=1000&maxAge=0&font=Arial&fontSize=23px&fontColor=000000&text=true&fill=bada55

#### Configure the LIPS via Grunt options:

```js
grunt.initConfig({
  lips: {
    options: {
      image: {
        font: "Arial",
        fontSize: "24px",
        fontColor: "ffffff",
        text: true,
        fill: "09F"
      },
      network: {
        port: process.env.PORT || 3000,
        delay: 0,
        contentType: "png",
        maxAge: 3153600,
        expiryDate: new Date()
      }
    }
  },
})
```


### PLEASE NOTE:
> To run this service alongside with your watch task I highly recommend using the [grunt-concurrent plugin](https://github.com/sindresorhus/grunt-concurrent)


### License
Copyright (c) 2015 Ingo Fahrentholz. Licensed under the MIT license.
