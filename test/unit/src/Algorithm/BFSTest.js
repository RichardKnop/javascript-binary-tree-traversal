"use strict";

define(["js/src/Algorithm/Node", "js/src/Algorithm/BFS"], function (Node, BFS) {

    module("Algorithm/BFS");

    test("Test search", function () {
        var node1 = new Node("F"),
            node2 = new Node("B"),
            node3 = new Node("G"),
            node4 = new Node("A"),
            node5 = new Node("D"),
            node6 = new Node("I"),
            node7 = new Node("C"),
            node8 = new Node("E"),
            node9 = new Node("H"),
            bfs = new BFS(),
            result,
            route;

        node1.setLeft(node2);
        node1.setRight(node3);

        node2.setLeft(node4);
        node2.setRight(node5);

        node5.setLeft(node7);
        node5.setRight(node8);

        node3.setRight(node6);

        node6.setLeft(node9);

        result = bfs.search("H", node1);
        route = bfs.getLastRoute();
        strictEqual(result.getValue(), "H");
        deepEqual(route, ["F", "B", "G", "A", "D", "I", "C", "E", "H"]);
    });
});