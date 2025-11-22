/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    // Finding the middle element
    let slow = fast = head;
    while (fast && fast.next) {
        console.log("Before Slow", slow)
        console.log("Before fast", fast)
        slow = slow.next;
        fast = fast.next.next;
        console.log("After Slow", slow)
        console.log("After fast", fast)
    }
    console.log("Slow", slow)
    console.log("fast", fast)
    console.log("---------------------")

    // Reverse the second half of list
    let prev = null;
    let curr = slow;
    while (curr) {
        console.log("Before Prev", prev)
        console.log("Before Current", curr)
        console.log("Before Current Next", curr.next)
        let temp = curr.next;
        console.log("Temp", temp)
        curr.next = prev;
        console.log("After Current Next", curr.next)
        prev = curr;
        console.log("After Prev", prev)
        curr = temp;
        console.log("Before Current", curr)
    }
    console.log("---------------------")

    // Checking for palimdrome
    let firstList = head;
    let secondList = prev;
    console.log("firstList", firstList)
    console.log("secondList", secondList)
    while (secondList) {
        console.log("Before firstList", firstList)
        console.log("Before secondList", secondList)
        if (firstList.val != secondList.val) {
            return false;
        }
        firstList = firstList.next;
        secondList = secondList.next;
        console.log("After firstList", firstList)
        console.log("After secondList", secondList)
    }
    return true;
};

// Example usage:
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(2);
head.next.next.next = new ListNode(1);
console.log(isPalindrome(head)); // Output: true
head = new ListNode(1);
head.next = new ListNode(2);
console.log(isPalindrome(head)); // Output: false
// Time Complexity: O(n)
// Space Complexity: O(1)