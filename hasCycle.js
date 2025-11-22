/**Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false. */

class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}
var hasCycle = function (head) {
    // console.log("Head Node:", head);
    if (!head || !head.next) return false;
    let slow = head;
    let fast = head.next;
    while (fast && fast.next) {
        console.log("Slow Node:", slow, "Fast Node:", fast);
        // console.log("Slow Value:", slow.val, "Fast Value:", fast.val);
        if (slow === fast) return true;
        slow = slow.next;
        fast = fast.next.next;
    }
    return false;
};
// Example usage:
let node1 = new ListNode(3);
let node2 = new ListNode(2);
let node3 = new ListNode(0);
let node4 = new ListNode(-4);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node2; // Creates a cycle here
console.log(hasCycle(node1)); // Output: true
let nodeA = new ListNode(1);
let nodeB = new ListNode(2);
nodeA.next = nodeB;
console.log(hasCycle(nodeA)); // Output: false

// Time Complexity: O(n)
// Space Complexity: O(1)