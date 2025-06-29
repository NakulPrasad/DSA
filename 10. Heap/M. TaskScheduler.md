# [Task Scheduler](https://leetcode.com/problems/task-scheduler/description/)

You are given an array of CPU tasks, each labeled with a letter from A to Z, and a number n. Each CPU interval can be idle or allow the completion of one task. Tasks can be completed in any order, but there's a constraint: there has to be a gap of at least n intervals between two tasks with the same label.

Return the minimum number of CPU intervals required to complete all tasks.

```
Example 1:

Input: tasks = ["A","A","A","B","B","B"], n = 2

Output: 8

Explanation: A possible sequence is: A -> B -> idle -> A -> B -> idle -> A -> B.

After completing task A, you must wait two intervals before doing A again. The same applies to task B. In the 3rd interval, neither A nor B can be done, so you idle. By the 4th interval, you can do A again as 2 intervals have passed.

Example 2:

Input: tasks = ["A","C","A","B","D","B"], n = 1

Output: 6

Explanation: A possible sequence is: A -> B -> C -> D -> A -> B.

With a cooling interval of 1, you can repeat a task after just one other task.

Example 3:

Input: tasks = ["A","A","A", "B","B","B"], n = 3

Output: 10

Explanation: A possible sequence is: A -> B -> idle -> idle -> A -> B -> idle -> idle -> A -> B.

There are only two types of tasks, A and B, which need to be separated by 3 intervals. This leads to idling twice between repetitions of these tasks.
```

```java
/**
 * Intitution : 
 * Put frequency of each element to MaxHeap, poll from heap (placing one element) and push to queue (remaing count) with expected time to process, when time comes offer back to maxheap 
 * Why ? Example : AAABBCC, N=1 
 * Least frequent=> CBCBA_A_A => 9
 * Most frequent => ABCABCA => 7
 * 
 * Time : 
 * Space :
 */
class Solution {
    public int leastInterval(char[] tasks, int n) {
        var maxpq = new PriorityQueue<Integer>(Comparator.reverseOrder());
        var que = new LinkedList<Pair<Integer, Integer>>();
        var map = new HashMap<Character, Integer>();

        //frequecy map
        for(char ch: tasks){
            map.put(ch, map.getOrDefault(ch, 0)+1);
        }
        //add in heap
        map.forEach((key, val)-> maxpq.offer(val));
        
        int time = 0;
        while(!maxpq.isEmpty() || !que.isEmpty()){

            time++;
            if(!maxpq.isEmpty()){
                int curr = maxpq.poll();
                if(curr-1 >0)
                //placing one element then adding remaing with expected time to process
                que.offer(new Pair<>(curr-1, time+n));
            }
            //if scheduled element has expected time less than equal to current time then add that element back for heap
            if(!que.isEmpty() && que.peek().getValue() <= time){
                Pair<Integer,Integer> curr = que.poll();
                //if element frequecy > 0 than add to heap.
                if(curr.getKey() >0)
                maxpq.offer(curr.getKey());
            }
        }
        return time;
    }
}
```