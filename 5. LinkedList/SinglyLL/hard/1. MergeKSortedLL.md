# [Merge K sorted Lists](https://leetcode.com/problems/merge-k-sorted-lists/description/)

You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

Merge all the linked-lists into one sorted linked-list and return it.

```
Example 1:

Input: lists = [[1,4,5],[1,3,4],[2,6]]
Output: [1,1,2,3,4,4,5,6]
Explanation: The linked-lists are:
[
  1->4->5,
  1->3->4,
  2->6
]
merging them into one sorted list:
1->1->2->3->4->4->5->6

Example 2:

Input: lists = []
Output: []

Example 3:

Input: lists = [[]]
Output: []
```
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
class NodeComparator implements Comparator<ListNode>{
    @Override
    public int compare(ListNode x,ListNode y){
        return Integer.compare(x.val,y.val);
    }
}
class Solution {
    public ListNode mergeKLists(ListNode[] lists) {
    int n=lists.length-1;
    PriorityQueue<ListNode> pq=new PriorityQueue<>(new NodeComparator());
    ListNode dummy=new ListNode(0);
    ListNode tail=dummy;
            
    for(int i=0;i<=n;i++){
        if(lists[i] != null)
        pq.add(lists[i]);
    }

    while(pq.size()>0){
        ListNode node=pq.poll();
        tail.next=node;
        tail=tail.next;

        if(node.next!=null){
            pq.add(node.next);
        }
    }
    
    return dummy.next;
	
    }
}
```