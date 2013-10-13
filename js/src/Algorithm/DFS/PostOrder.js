"use strict";

define([], function () {

    return function () {

        var that = this,
            route;

        function recursiveSearch(searchFor, node) {
            var found;

            // traverse left subtree
            if (node.hasLeft()) {
                found = recursiveSearch(searchFor, node.getLeft());
                if (found) {
                    return found;
                }
            }

            // traverse right subtree
            if (node.hasRight()) {
                found = recursiveSearch(searchFor, node.getRight());
                if (found) {
                    return found;
                }
            }

            that.addRoutePoint(node.getValue());

            // visit the node
            if (searchFor === node.getValue()) {
                return node;
            }
        }

        this.addRoutePoint = function (point) {
            route.push(point);
        };

        this.search = function (searchFor, node) {
            var result;
            route = [];
            result = recursiveSearch(searchFor, node);
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