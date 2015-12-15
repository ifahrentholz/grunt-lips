/*
 * lips
 * https://github.com/ifahrentholz/grunt-lips
 *
 * Copyright (c) 2015 Ingo Fahrentholz
 * Licensed under the MIT license.
 */

'use strict';

var extend = require("node.extend");
var lips = require('node-img-placeholder');

module.exports = function (grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerTask("lips", "local image placeholder service", function () {

    var done = this.async();

    // Merge task-specific and/or target-specific options with these defaults.
    var gruntOptions = this.options();
    var appImageOptions = App.settings.image;
    var appNetworkOptions = App.settings.network;

    var mergeNetwork = extend({}, appNetworkOptions, gruntOptions.network);
    var mergeImage = extend({}, appImageOptions, gruntOptions.image);

    var options = {};
    options.network = mergeNetwork;
    options.image = mergeImage;

    App.settings = extend({}, App.settings, options);

    // Start the service
    lips(options);

  });

};
