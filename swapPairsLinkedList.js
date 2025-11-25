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
var swapPairs = function (head) {
    if (!head || !head.next) return head;
    let dummy = new ListNode();
    dummy.next = head;

    let p = dummy;
    let c = head;
    let n = head.next;

    while (c && n) {
        p.next = n;
        c.next = n.next;
        n.next = c;

        p = c;
        c = p.next;
        n = c && c.next;
    }

    return dummy.next;
};

// Example usage:
const list = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))));
const swappedList = swapPairs(list);
// Output in array form for easy visualization
const result = [];
let current = swappedList;
while (current !== null) {
    result.push(current.val);
    current = current.next;
}
console.log("Input List: [1, 2, 3, 4]");
console.log("Swapped List:", result); // [2, 1, 4, 3]
// Time Complexity: O(n), where n is the length of the linked list.
// Space Complexity: O(1) since we are not using any extra space.
function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}
