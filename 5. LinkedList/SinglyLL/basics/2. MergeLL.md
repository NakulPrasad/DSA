# [Merge Two Sorted LL](https://leetcode.com/problems/merge-two-sorted-lists/description/)

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
    public ListNode mergeTwoLists(ListNode list1, ListNode list2) {
        ListNode dummyHead = new ListNode(0); // dummy node for the merged list
        ListNode newList = dummyHead; // pointer to the merged list
        
        while (list1 != null && list2 != null) {
            if (list1.val <= list2.val) {
                newList.next = list1;
                list1 = list1.next;
            } else {
                newList.next = list2;
                list2 = list2.next;
            }
            newList = newList.next; // move the newList pointer
        }
        
        // If any list still has remaining elements, append them to the merged list
        if (list1 != null) {
            newList.next = list1;
        }
        if (list2 != null) {
            newList.next = list2;
        }
        
        return dummyHead.next; // Return the merged list starting from the actual head
    }
}
```