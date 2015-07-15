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
      fgColor: "181818",
      bgColor: "e1e1e1",
      maxAge: 3153600,
      expiryDate: new Date(0)
    });

    app.get('/'+ options.namespace +'/:dimension.:imageType?/:fgColor?/:bgColor?/:text?', function(req, res, next) {
      var dim = req.params.dimension.split('x');
      var width, height, foreground, background, imageType, text;


      if(dim.length === 1) {
        width = height = dim[0] * 1;
      } else {
        width = dim[0] * 1;
        height = dim[1] * 1;
      }
      if(isNaN(width) || isNaN(height)) return next();


      if(typeof req.params.fgColor !== 'undefined') {
        foreground = req.params.fgColor;
      } else {
        foreground = options.fgColor;
      }
      if(foreground[0] !== '#') foreground = '#' + foreground;


      if(typeof req.params.bgColor !== 'undefined') {
        background = req.params.bgColor;
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

      if(typeof req.params.text !== 'undefined') {
        // TODO handle case when the text is too long for the image
        //text = req.params.text;
        text = width + " x " + height;
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
          if(err) {
            console.log(err);
            next();
          }
          res.send(buffer);
        });

    });

    app.listen(options.port, console.log('port: ' + options.port));

  });

};
