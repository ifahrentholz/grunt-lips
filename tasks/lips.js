/*
 * lips
 * https://github.com/ifahrentholz/grunt-lips
 *
 * Copyright (c) 2015 Ingo Fahrentholz
 * Licensed under the MIT license.
 */

'use strict';

var gm = require('gm').subClass({ imageMagick: true });
var fs = require('fs');
var express = require('express');
var app = express();

module.exports = function (grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerTask("lips", "local image placeholder service", function () {

    var done = this.async();

    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      namespace: "lips",
      port: 3000,
      imageType: "png",
      color: "181818",
      bgColor: "e1e1e1",
      maxAge: 3153600,
      delay: false,
      expiryDate: new Date(0)
    });

    app.get('/'+ options.namespace +'/:dimension.:imageType', function(req, res, next) {
      var dim = req.params.dimension.split('x');
      var width, height, foreground, background, imageType, text, delay;


      if(dim.length === 1) {
        width = height = dim[0] * 1;
      } else {
        width = dim[0] * 1;
        height = dim[1] * 1;
      }
      if(isNaN(width) || isNaN(height)) return next();


      if(typeof req.query.color !== 'undefined') {
        foreground = req.query.color;
      } else {
        foreground = options.color;
      }
      if(foreground[0] !== '#') foreground = '#' + foreground;


      if(typeof req.query.bg !== 'undefined') {
        background = req.query.bg;
      } else {
        background = options.bgColor;
      }
      if(background[0] !== '#') background = '#' + background;


      if(typeof req.params.imageType !== 'undefined') {
        imageType = req.params.imageType;
      } else {
        imageType = options.imageType;
      }
      imageType = imageType.toLowerCase();

      if (typeof req.query.delay !== "undefined") {
        delay = req.query.delay;
      } else {
        delay = options.delay;
      }

      if(typeof req.query.text !== 'undefined') {
        // TODO handle case when the text is too long for the image
        text = req.query.text;
        //text = width + " x " + height;
      } else {
        text = width + " x " + height;
      }

      res.setHeader("Content-Type", "image/" + imageType);
      res.setHeader("Cache-Control", "public, max-age=" + options.maxAge)
      res.setHeader("Expires", options.expiryDate);
      res.setHeader("Last-Modified", options.expiryDate);

      gm(width, height, background)
        .fill(foreground)
        .font("Arial", 20)
        .drawText(0, 0, text, "center")
        .toBuffer(imageType, function(err, buffer) {
          if (err) {
            console.log(err);
            next();
          }
          if (delay) {
            setTimeout(function() {
              res.send(buffer);
            }, delay);
          } else {
            res.send(buffer);
          }
        });

    });

    app.listen(options.port, console.log('port: ' + options.port));

  });

};
