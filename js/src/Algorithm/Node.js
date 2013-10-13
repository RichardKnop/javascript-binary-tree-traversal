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

        this.hasChildren = function () {
            return this.hasLeft() || this.hasRight();
        };

        this.getLeft = function () {
            return left;
        };

        this.getRight = function () {
            return right;
        };

        this.getChildren = function () {
            var children = [];
            if (this.hasLeft()) {
                children.push(this.getLeft());
            }
            if (this.hasRight()) {
                children.push(this.getRight());
            }
            return children;
        };

        this.getValue = function () {
            return value;
        };
    };

});