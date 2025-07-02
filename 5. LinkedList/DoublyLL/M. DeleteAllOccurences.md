# [Delete All Occurences In DLL](https://www.geeksforgeeks.org/problems/delete-all-occurrences-of-a-given-key-in-a-doubly-linked-list/1)

You are given the head_ref of a doubly Linked List and a Key. Your task is to delete all occurrences of the given key if it is present and return the new DLL.

```
Example1:

Input: 
2<->2<->10<->8<->4<->2<->5<->2
2

Output: 
10<->8<->4<->5

Explanation: 
All Occurences of 2 have been deleted.
```
```java
class Solution {
    static Node deleteAllOccurOfX(Node head, int x) {
        Node curr = head;

        while (curr != null) {
            Node nextNode = curr.next;

            if (curr.data == x) {
                if (curr.prev != null) {
                    curr.prev.next = curr.next;
                } else {
                    // deleting head
                    head = curr.next;
                }

                if (curr.next != null) {
                    curr.next.prev = curr.prev;
                }
            }

            curr = nextNode;
        }

        return head;
    }
}
```