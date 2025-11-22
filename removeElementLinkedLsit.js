/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    let sentinel = new ListNode();
    sentinel.next = head;

    let prev = sentinel;
    while (prev && prev.next) {
        if (prev.next.val === val) {
            prev.next = prev.next.next;
        } else {
            prev = prev.next;
        }
    }
    return sentinel.next;
};

// Example usage:
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}
let head = new ListNode(1, new ListNode(2, new ListNode(6, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6)))))));
let val = 6;
let newHead = removeElements(head, val);
let current = newHead;
while (current) {
    console.log(current.val); // Output the values of the modified list
    current = current.next;
}

// Output should be: 1 -> 2 -> 3 -> 4 -> 5
/*
Time Complexity: O(n), where n is the number of nodes in the linked list. We traverse the list once.
Space Complexity: O(1), as we use only a constant amount of extra space.
*/