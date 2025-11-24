// Rotate a linked list to the right by k places
function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}
function rotateRight(head, k) {
    if (!head || k === 0) return head;
    // Compute the length of the list and get the tail node
    let length = 1;
    let tail = head;
    while (tail.next) {
        tail = tail.next;
        length++;
    }
    // Make the list circular
    tail.next = head;
    // Find the new tail: (length - k % length - 1)th node
    k = k % length;
    let newTail = head;
    for (let i = 0; i < length - k - 1; i++) {
        newTail = newTail.next;
    }
    // The new head is the next node of the new tail
    const newHead = newTail.next;
    // Break the circle
    newTail.next = null;
    return newHead;
}
// Example usage:
const list = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
const k = 2;
const rotatedList = rotateRight(list, k);
// Output in array form for easy visualization
const result = [];
let current = rotatedList;
while (current !== null) {
    result.push(current.val);
    current = current.next;
}
console.log("Input List: [1, 2, 3, 4, 5]");
console.log("k:", k);
console.log("Rotated List:", result); // [4, 5, 1, 2, 3]
// Time Complexity: O(n), where n is the length of the linked list.
// Space Complexity: O(1) since we are not using any extra space.