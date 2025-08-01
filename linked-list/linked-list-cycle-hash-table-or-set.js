/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    let curr = head;
    let set = new Set();
    while (curr) {
        if (set.has(curr)) return true;
        else set.add(curr);
        curr = curr.next;
    }
    return false;
};