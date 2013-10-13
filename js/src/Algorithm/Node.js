"use strict";

define([], function () {

    return function (theValue) {
        var value = theValue,
            left,
            right;

        this.setLeft = function (theChild) {
            left = theChild;
        };

        this.setRight = function (theChild) {
            right = theChild;
        };

        this.hasLeft = function () {
            return undefined !== left;
        };

        this.hasRight = function () {
            return undefined !== right;
        };

        this.getLeft = function () {
            return left;
        };

        this.getRight = function () {
            return right;
        };

        this.getValue = function () {
            return value;
        };
    };

});