/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// var swapPairs = function (head) {
//     if (!head || !head.next) return head;
//     let sentinal = new ListNode();

//     let temp2 = sentinal;
//     let p1 = head;
//     let p2 = head.next;
//     while (p1 && p1.next) {
//         let temp = p2.next;
//         p2.next = p1;
//         p1.next = temp;
//         temp2.next = p2;
//         temp2 = p1;
//         p1 = p1.next;
//         p2 = p1?.next;
//     }
//     return sentinal.next;
// };
var swapPairs = function (head) {
    if (!head || !head.next) return head;
    let sentinal = new ListNode();

    let dummy = sentinal;
    let p1 = head;
    let p2 = head.next;
    while (p1 && p2) {
        dummy.next = p2;
        p1.next = p2.next;
        p2.next = p1;

        dummy = p1;
        p1 = p1.next;
        p2 = p1?.next;
    }
    return sentinal.next;
};