/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let dummy = new ListNode(0);   // dummy head
    let curr  = dummy;
    let carry = 0;

    while (l1 || l2 || carry) {    // ← keep going if carry remains
        let sum = (l1?.val || 0) + (l2?.val || 0) + carry;
        carry = Math.floor(sum / 10);
        curr.next = new ListNode(sum % 10);
        curr = curr.next;

        l1 = l1?.next;
        l2 = l2?.next;
    }
    return dummy.next;
};

// Example usage:
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
}
let l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
let l2 = new ListNode(5, new ListNode(6, new ListNode(4)));
let result = addTwoNumbers(l1, l2);
while (result !== null
) {
    console.log(result.val);
    result = result.next;
}
// Time Complexity: O(max(m, n))
// Space Complexity: O(max(m, n))