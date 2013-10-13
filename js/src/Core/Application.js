"use strict";

define(["Algorithm/Node", "Algorithm/Factory"], function (Node, Factory) {

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
                node9 = new Node(4);

            node1.setLeft(node2);
            node1.setRight(node3);

            node2.setLeft(node4);
            node2.setRight(node5);

            node5.setLeft(node7);
            node5.setRight(node8);

            node3.setRight(node6);

            node6.setLeft(node9);

            document.getElementById("search").addEventListener("click", function () {
                var searchFor = parseInt(document.getElementById("searchFor").value, 10),
                    algorithm = document.getElementById("algorithm").value,
                    resultEl = document.getElementById("result"),
                    factory,
                    dfs,
                    result,
                    route;
                try {
                    factory = new Factory();
                    dfs = factory.manufacture(algorithm);
                    result = dfs.search(searchFor, node1);
                    console.log(result.getValue());
                    route = dfs.getLastRoute();
                    resultEl.innerHTML = "Found. Algorithm went like this: " + route.join(" => ");
                } catch (e) {
                    resultEl.innerHTML = e;
                }
                return false;
            }, false);
        };

    };

});