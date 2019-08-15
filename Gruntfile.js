/*
 * lips
 * https://github.com/ifahrentholz/grunt-lips
 *
 * Copyright (c) 2015 Ingo Fahrentholz
 * Licensed under the MIT license.
 */

"use strict";

module.exports = function(grunt) {
  // load all npm grunt tasks
  require("load-grunt-tasks")(grunt);

  // Project configuration.
  grunt.initConfig({
    lips: {
      options: {
        namespace: "lips",
        font: "Arial.ttf",
        txtsize: "14px",
        txtclr: "bada55",
        txt: "custom text",
        bg: "000000",
        port: process.env.PORT || 1337,
        delay: 0,
        contentType: "png",
        maxAge: 3153600,
        expiryDate: new Date()
      }
    },

    nodeunit: {
      tests: ["test/*_test.js"]
    }
  });

  // Actually load this plugin's task(s).
  grunt.loadTasks("tasks");

  // default task
  grunt.registerTask("default", ["lips"]);
};
