"use strict";

QUnit.config.autostart = false; // We'll QUnit.start() after loading the RequireJS modules

var require = {
    baseUrl: ".",
    urlArgs: (new Date).getTime(), // Bypass caches (useful when loading the page from the file system)
    paths: {

    }
};