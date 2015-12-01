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
        port: 1337
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
