"use strict";

define([
    "Algorithm/DFS/PreOrder",
    "Algorithm/DFS/InOrder",
    "Algorithm/DFS/PostOrder",
    "Algorithm/BFS"
], function (PreOrder, InOrder, PostOrder, BFS) {

    return function () {

        this.manufacture = function (type) {
            if ("dfs_pre_order" === type) {
                return new PreOrder();
            }
            if ("dfs_in_order" === type) {
                return new InOrder();
            }
            if ("dfs_post_order" === type) {
                return new PostOrder();
            }
            if ("bfs" === type) {
                return new BFS();
            }
            throw "'" + type + "' algorithm not found";
        };

    };

});