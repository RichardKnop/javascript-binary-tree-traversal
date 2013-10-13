"use strict";

define([
    "bower/requirejs-domready/domReady",
    "Core/Application"
], function (domReady, Application) {

    domReady(function () {
        (new Application()).run();
    });

});