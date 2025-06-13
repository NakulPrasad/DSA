# [Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/description/)

Given the head of a singly linked list, reverse the list, and return the reversed list.

Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]

## Approach : Two Pointers
while solving linkedlist problems try not to use other data structure as it kills the purpose of easily node modification.

```java
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode reverseList(ListNode head) {
        ListNode curr = head;
        ListNode prev = null;
        while(curr !=null){
            ListNode forward = curr.next;
            curr.next = prev;
            //sliding
            prev= curr;
            curr = forward;

        }
        return prev;
    }
}
```