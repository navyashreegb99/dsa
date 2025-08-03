/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let sentinal = new ListNode();
    let curr = sentinal;
    let carry = 0;
    while (l1 || l2) {
        let sum = 0;
        if (!l1) {
            sum = l2.val + carry;
            l2 = l2.next;
        }
        else if (!l2) {
            sum = l1.val + carry;
            l1 = l1.next;
        }
        else {
            sum = l1.val + l2.val + carry;
            l1 = l1.next;
            l2 = l2.next;
        }
        carry = Math.floor(sum / 10);
        sum = sum % 10;
        let newNode = new ListNode(sum);
        curr.next = newNode;
        curr = curr.next;
    }
    if (carry) {
        let newNode = new ListNode(carry);
        curr.next = newNode;
        curr = curr.next;
    }
    return sentinal.next;
};