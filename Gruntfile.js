/*
 * lips
 * https://github.com/ifahrentholz/grunt-lips
 *
 * Copyright (c) 2015 Ingo Fahrentholz
 * Licensed under the MIT license.
 */

"use strict";

module.exports = function (grunt) {
  // load all npm grunt tasks
  require("load-grunt-tasks")(grunt);

  // Project configuration.
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

    nodeunit: {
      tests: ["test/*_test.js"]
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks("tasks");

  // default task
  grunt.registerTask("default", ["lips"]);

};
