"use strict";

define(["Algorithm/Node", "Algorithm/DFS/PreOrder"], function (Node, PreOrder) {

    return function () {

        this.run = function () {
            var node1 = new Node(2),
                node2 = new Node(7),
                node3 = new Node(5),
                node4 = new Node(2),
                node5 = new Node(6),
                node6 = new Node(9),
                node7 = new Node(5),
                node8 = new Node(11),
                node9 = new Node(4),
                preOrderDfs = new PreOrder(),
                result;

            node1.setLeft(node2);
            node1.setRight(node3);

            node2.setLeft(node4);
            node2.setLeft(node5);

            node5.setLeft(node7);
            node5.setRight(node8);

            node3.setRight(node6);

            node6.setLeft(node9);

            result = preOrderDfs.search(11, node1);

            console.log("hello");
        };

    };

});