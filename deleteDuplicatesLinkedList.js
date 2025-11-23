/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let curr = head;
    while (curr && curr.next) {
        if (curr.val === curr.next.val) {
            curr.next = curr.next.next;   // skip duplicate
        } else {
            curr = curr.next;             // advance only when no duplicate
        }
    }
    return head;
};

// Example usage:
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
}
let head = new ListNode(1, new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(3)))));
let updatedHead = deleteDuplicates(head);
console.log(updatedHead); // Output the modified linked list
while (updatedHead !== null) {
    console.log(updatedHead.val);
    updatedHead = updatedHead.next;
}
// Time Complexity: O(n)
// Space Complexity: O(1)