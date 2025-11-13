/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
    if (root === null) { // if the current node equals null, return 0 (exits the current recursive call as well)
        return 0;
    }

    const leftDepth = maxDepth(root.left); // recursively call the funtion on the left child
    const rightDepth = maxDepth(root.right); // recursively call the funtion on the left child

    return 1 + Math.max(leftDepth, rightDepth); // return 1 + the max depth we reached through going through the tree's left and right side (+ 1 for the root itself)
};