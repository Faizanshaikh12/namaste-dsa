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
var removeNthFromEnd = function(head, n) {
    let sentinel = new ListNode();
    sentinel.next = head;

    let length = 0;
    while (head) {
        head = head.next;
        length++;
    }
    let prevPos = length - n;
    let prev = sentinel; 
    for (let i = 0; i < prevPos; i++) {
        prev = prev.next;
    }
    prev.next = prev.next.next;
    return sentinel.next;
}; 

// Example usage:
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
}
let head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
let n = 2;
let updatedHead = removeNthFromEnd(head, n);
console.log(updatedHead); // Output the modified linked list
while (updatedHead !== null) {
    console.log(updatedHead.val);   
    updatedHead = updatedHead.next;
}