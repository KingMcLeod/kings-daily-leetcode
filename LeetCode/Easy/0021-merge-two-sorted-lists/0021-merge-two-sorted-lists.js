/*
P:
    input: singly linked lists (list1, list2)
    output: merged singly linked list 
    task: merge both sorted linked lists into 1
E:
    Edge Case(s):
        - what if one linked list doesn't have any more nodes to compare but the other does?
            - 
        - both linked lists are sorted in non-decreasing (increasing order)
        - each linked list can have 0 - 50 nodes inside of it
        - both lists can be empty when given as the input
        - node values can be negative, all up until -100
D:
    integers, arrays, linked list(s)
A:
    1. if both current nodes of the linked lists are null, return the merged linked list (base case)
    2. get both current nodes of the linked lists and compare them
        - if they are equal, just set the first linked lists pointer to the second linked list node 
        - if they aren't equal, put whichever one is smaller first, then the other
    3. call the recursion call on both linked lists next node
C:
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    if (list1 === null) {
        return list2;
    };

    if (list2 === null) {
        return list1;
    };

    if (list1.val === list2.val) {
        const head = list1;
        head.next = mergeTwoLists(head.next, list2);
        return head;
    }

    if (list1.val < list2.val) {
        const head = list1;
        head.next = mergeTwoLists(head.next, list2);
        return head;
    }

    if (list1.val > list2.val) {
        const head = list2;
        head.next = mergeTwoLists(list1, head.next);
        return head;
    }
};