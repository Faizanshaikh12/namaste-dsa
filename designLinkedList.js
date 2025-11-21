/**Design your implementation of the linked list. You can choose to use a singly or doubly linked list.
A node in a singly linked list should have two attributes: val and next. val is the value of the current node, and next is a pointer/reference to the next node.
If you want to use the doubly linked list, you will need one more attribute prev to indicate the previous node in the linked list. Assume all nodes in the linked list are 0-indexed.

Implement the MyLinkedList class:

MyLinkedList() Initializes the MyLinkedList object.
int get(int index) Get the value of the indexth node in the linked list. If the index is invalid, return -1.
void addAtHead(int val) Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
void addAtTail(int val) Append a node of value val as the last element of the linked list.
void addAtIndex(int index, int val) Add a node of value val before the indexth node in the linked list. If index equals the length of the linked list, the node will be appended to the end of the linked list. If index is greater than the length, the node will not be inserted.
void deleteAtIndex(int index) Delete the indexth node in the linked list, if the index is valid. 
Input
["MyLinkedList", "addAtHead", "addAtTail", "addAtIndex", "get", "deleteAtIndex", "get"]
[[], [1], [3], [1, 2], [1], [1], [1]]
Output
[null, null, null, null, 2, null, 3]
*/

class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}
class MyLinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    get(index) {
        if (index < 0 || index >= this.size) return -1;
        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        return current.val;
    }
    addAtHead(val) {
        const newNode = new ListNode(val, this.head);
        this.head = newNode;
        this.size++;
    }
    addAtTail(val) {
        const newNode = new ListNode(val);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }
    addAtIndex(index, val) {
        if (index < 0 || index > this.size) return;
        if (index === 0) {
            this.addAtHead(val);
            return;
        }
        const newNode = new ListNode(val);
        let current = this.head;
        for (let i = 0; i < index - 1; i++) {
            current = current.next;
        }
        newNode.next = current.next;
        current.next = newNode;
        this.size++;
    }
    deleteAtIndex(index) {
        if (index < 0 || index >= this.size) return;
        if (index === 0) {
            this.head = this.head.next;
        } else {
            let current = this.head;
            for (let i = 0; i < index - 1; i++) {
                current = current.next;
            }
            current.next = current.next.next;
        }
        this.size--;
    }
}

var obj = new MyLinkedList();

obj.addAtHead(1);      // [1]
obj.addAtTail(3);      // [1, 3]
obj.addAtIndex(1, 2);  // [1, 2, 3]
console.log(obj.get(1));  // 2
obj.deleteAtIndex(1);     // [1, 3]
console.log(obj.get(1));  // 3
/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 * /
 * / Example usage:
 * var obj = new MyLinkedList()
 * obj.addAtHead(1)
 * obj.addAtTail(3)
 * obj.addAtIndex(1, 2)   // linked list becomes 1->2->3
 * var param_1 = obj.get(1) // returns 2
 * obj.deleteAtIndex(1)  // now the linked list is 1->3
 * var param_2 = obj.get(1) // returns 3
 * / /
 * / Output:
 * [null, null, null, null, 2, null, 3]
 * / Explanation:
 * MyLinkedList myLinkedList = new MyLinkedList();
 * myLinkedList.addAtHead(1);
 * myLinkedList.addAtTail(3);
 * myLinkedList.addAtIndex(1, 2); // linked list becomes 1->2->3
 * myLinkedList.get(1);            // returns 2
 * myLinkedList.deleteAtIndex(1);  // now the linked list is 1->3
 * myLinkedList.get(1);            // returns 3
 * / /
 * / Constraints:
 * 0 <= index, val <= 1000
 * Please do not use the built-in LinkedList library.
 * At most 2000 calls will be made to get, addAtHead, addAtTail, addAtIndex and deleteAtIndex.
 * /
 */


