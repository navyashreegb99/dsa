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
var deleteDuplicates = function (head) {
    //     if(!head) return head;
    //     let p1 = head;
    //     let p2 = head.next;
    //     while (p2) {
    //         if (p1.val == p2.val) {
    //             p1.next = p2.next;
    //         }
    //         else {
    //             p1 = p1.next;
    //         }
    //           p2 = p2.next;
    //     }
    //    return head;
    let curr = head;
    while (curr && curr.next) {
        if (curr.val == curr.next.val) {
            curr.next = curr.next.next;
        }
        else {
            curr = curr.next;
        }
    }
    return head;
};