# [Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements/)

Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

```java
Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]

Input: nums = [1], k = 1
Output: [1]
```
Edge Cases : 
- Input : [1,1,2,3] and k = 2 , so 1 has occurred 2 times , 2 has occurred 1 time and 3 has occurred 1 time. So the answer would be [1,2].

- Input : [1,1,2,2,3] and K = 2, so 1 has occurred 2 times , 2 has occurred 2 times and 3 has occurred 1 time. So the answer is [1,2] and if the order of printing is important then first 1 and then 2 should be printed. (bcoz 1<2).

### Approach : HASHMAP + MIN HEAP

- Create a map, with the value and occurrences as key, value pair
- Somehow sort according to the descending order of their occurrences and also include these cases, if you wish to
- Case1. if two elements have same occurrences print the elements lexicographically(if strings) or ascending order of the numbers(if integers)
- ase 2: if the occurrences are distinct, print in descending order of the occurrences of the elements.
- Return the first K elements.

```java
class Solution {
    /**
        * Approach : save the frequency count of each element in hashmap; use min heap with number like (frequency, key);
        * suppose {1 : 8, 5: 1, 2:1} then in heap (12, 15, 81)
        * Time : O(N) - creating map *  O(log N) - insert in heap
        * Space : O(N) - hashmap + O(k) priority queue

     */
    public int[] topKFrequent(int[] nums, int k) {
        Map<Integer, Integer> hm = new HashMap<>();
        for(int i: nums){
            hm.put(i, hm.getOrDefault(i, 0)+1);
        }
        //min priority queue as removing can be done on top of heap;
        PriorityQueue<int[]> heap = new PriorityQueue<>((a,b) -> a[0] - b[0]);
            int [] ans = new int[k];

        for(Map.Entry<Integer, Integer> entry : hm.entrySet()){
            int key = entry.getKey();
            int value = entry.getValue();
            heap.offer(new int[]{value, key});

            //remove from heap if exceed k
            if(heap.size() > k){
                heap.poll();
            }
        }
        
        //put elements from heap
        for(int i=0; i< k;i++){
            ans[i] = heap.poll()[1];
        }
        return ans;
    }
}
```