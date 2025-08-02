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
//Two pointer approach
var removeNthFromEnd = function (head, n) {
  let sentinal = new ListNode();
  sentinal.next = head;
  let first = sentinal;
  let second = sentinal;
  for (i = 0; i < n; i++) {
    first = first.next;
  }
  while (first.next) {
    second = second.next;
    first = first.next;
  }
  second.next = second.next.next;
  return sentinal.next;
};
