"use strict";

define([], function () {

    return function () {

        var that = this,
            route;

        function recursiveSearch(searchFor, siblings) {
            var i, node, children = [];

            if (0 === siblings.length) {
                return;
            }

            for (i = 0; i < siblings.length; i += 1) {
                node = siblings[i];
                that.addRoutePoint(node.getValue());
                if (searchFor === node.getValue()) {
                    return node;
                }
                if (node.hasChildren()) {
                    children = children.concat(node.getChildren());
                }
            }

            return recursiveSearch(searchFor, children);
        }

        this.addRoutePoint = function (point) {
            route.push(point);
        };

        this.search = function (searchFor, node) {
            var result;
            route = [];
            this.addRoutePoint(node.getValue());
            result = recursiveSearch(searchFor, node.getChildren());
            if (result) {
                return result;
            }
            throw "'" + searchFor + "' not found";
        };

        this.getLastRoute = function () {
            return route;
        };

    };

});