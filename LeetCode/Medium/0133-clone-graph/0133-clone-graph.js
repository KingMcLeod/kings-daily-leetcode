/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */


var cloneGraph = function (node) {
    const visitedNodes = {};

    if (node === null) {
        return null;
    };

    return helper(visitedNodes, node);
};

const helper = (visitedNodes, node) => {

    if (visitedNodes[node.val]) {
        return visitedNodes[node.val];
    } else {
        let dupeNode = new Node(node.val);

        visitedNodes[node.val] = dupeNode;
        console.log(visitedNodes);

        for (neighbor of node.neighbors) {
            dupeNode.neighbors.push(helper(visitedNodes, neighbor));
        }
        return dupeNode;
    }
};