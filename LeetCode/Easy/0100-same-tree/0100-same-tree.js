/*
P:
    input: two root nodes (p and q)
    output: boolean (true/false)
    task: compare both binary trees to see if they're structurally identical: return true if it is, else return false

E:
    - a tree can be empty:
        - if both are empty, return true because they're still identical
        - if one is empty, return false because nothing to compare
    - a node value can be negative
    - may not have the same amount of children nodes all the time

A:
    1. check if node values even exist: return if they don't
    2. compare both root values to see if they're the same:
        2a. return false if not
        2b. continue
    3. grab both left and right children for both trees:
        - p/q.left & p/q.right
        - do a recursive call on each side
    4. return true after going through the entire two trees
    
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    // if both root nodes don't exist, return false
    if (p === null && q === null) {
        return true
    } else if (p === null || q === null) { // else if one of them don't exist, return false
        return false
    };

    // if both root values aren't the same, return false
    if (p.val !== q.val) {
        return false
    }

    // left recursion check
    const leftCheck = isSameTree(p.left, q.left)

    // right recursion check
    const rightCheck = isSameTree(p.right, q.right)

    return leftCheck && rightCheck // return if they're identical or not
};