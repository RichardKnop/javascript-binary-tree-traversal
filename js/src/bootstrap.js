"use strict";

requirejs.config({
    baseUrl: "js/src",
    paths: {
        bower   : "./../../bower_components"
    }
});

requirejs(["main"]);