/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let sentinal = new ListNode();
    sentinal.next = head;
    let p1 = sentinal;
    let count1 = 0;
    while (p1) {
        count1++;
        p1 = p1.next;
    }
    let p2 = sentinal;
    let count2 = 0;
    while (count2 < count1 - n - 1) {
        p2 = p2.next;
        count2++;
    }
    p2.next = p2.next.next;
    return sentinal.next;
};