"use strict";

module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"), // We can reference stuff from config this way src: 'src/<%= pkg.name %>.js'
        exec: {
            bower: {
                command: "./node_modules/bower/bin/bower install"
            },
            lint: {
                command: "node lint.js"
            }
        },
        connect: {
            server: {
                options: {
                    port: 9001,
                    base: '.',
                    keepalive: true
                }
            }
        },
        qunit: {
            unit: "test.html"
        },
        compass: {
            dist: {
                options: {
                    sassDir: "./css/sass",
                    cssDir: "./css/stylesheets",
                    environment: "production"
                }
            }
        }
    });

    grunt.loadNpmTasks("grunt-exec");
    grunt.loadNpmTasks("grunt-contrib-connect");
    grunt.loadNpmTasks("grunt-contrib-qunit");
    grunt.loadNpmTasks("grunt-contrib-compass");

    grunt.registerTask("install", ["exec:bower"]);

    grunt.registerTask("css", [ "compass"]);

    grunt.registerTask("lint", ["exec:lint"]);

    grunt.registerTask("test:unit", "qunit:unit");
    grunt.registerTask("test", "qunit");

};