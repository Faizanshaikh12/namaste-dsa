// Merge two sorted linked lists and return it as a new sorted list.
// The new list should be made by splicing together the nodes of the first two lists.
function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

function mergeTwoLists(l1, l2) {
    const dummy = new ListNode(0);
    let current = dummy;
    while (l1 !== null && l2 !== null) {
        if (l1.val < l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }
    if (l1 !== null) {
        current.next = l1;
    } else {
        current.next = l2;
    }
    return dummy.next;
}

// Example usage:
const l1 = new ListNode(1, new ListNode(2, new ListNode(4)));
const l2 = new ListNode(1, new ListNode(3, new ListNode(4)));
const mergedList = mergeTwoLists(l1, l2);
// Output in array form for easy visualization
const result = [];
let current = mergedList;
while (current !== null) {
    result.push(current.val);
    current = current.next;
}
console.log("Input List 1: [1, 2, 4]");
console.log("Input List 2: [1, 3, 4]");
console.log("Output List :", result); // [1, 1, 2, 3, 4, 4]

// Time Complexity: O(n + m), where n and m are the lengths of the two lists.
// Space Complexity: O(1) since we are not using any extra space for merging.
