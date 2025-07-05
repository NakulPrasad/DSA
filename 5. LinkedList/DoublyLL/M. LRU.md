# [LRU cache](https://leetcode.com/problems/lru-cache/description/)

Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

Implement the LRUCache class:

- LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
- int get(int key) Return the value of the key if the key exists, otherwise return -1.
- void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.

The functions get and put must each run in O(1) average time complexity.

```
Input
["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
[[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
Output
[null, null, null, 1, null, -1, null, -1, 3, 4]

Explanation
LRUCache lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // cache is {1=1}
lRUCache.put(2, 2); // cache is {1=1, 2=2}
lRUCache.get(1);    // return 1
lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
lRUCache.get(2);    // returns -1 (not found)
lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
lRUCache.get(1);    // return -1 (not found)
lRUCache.get(3);    // return 3
lRUCache.get(4);    // return 4
```


```java
// Definition of a doubly linked list node used in the LRU cache
class ListNode {
    int val, key; // key-value pair to store cache data
    ListNode prev = null;
    ListNode next = null;

    // Constructor for value-only (not used in this LRUCache, kept for flexibility)
    ListNode(int val){
        this.val = val;
    }

    // Constructor for key-value pair
    ListNode(int key, int val){
        this.key = key;
        this.val = val;
    }
}

class LRUCache {
    ListNode left, right; // Dummy nodes marking the LRU (left.next) and MRU (right.prev)
    Map<Integer, ListNode> cache; // HashMap for O(1) access to nodes by key
    int capacity; // Maximum allowed entries in the cache

    // Constructor initializes the cache with given capacity
    public LRUCache(int capacity) {
        this.left = new ListNode(0);  // Left dummy node (acts as LRU boundary)
        this.right = new ListNode(0); // Right dummy node (acts as MRU boundary)
        this.left.next = right;       // Initialize pointers
        this.right.prev = left;
        cache = new HashMap<>();
        this.capacity = capacity;
    }

    // Returns the value of the key if present in cache, otherwise -1
    public int get(int key) {
        if (!cache.containsKey(key)) {
            return -1; // Key not found
        }
        ListNode temp = cache.get(key); // Get the node
        remove(temp); // Move it to the MRU position
        insert(temp);
        return temp.val;
    }

    // Removes a node from the doubly linked list
    public void remove(ListNode node){
        ListNode prev = node.prev;
        ListNode next = node.next;

        // Bypass the node to unlink it
        prev.next = next;
        next.prev = prev;
    }

    // Inserts a node at the MRU position (just before the right dummy node)
    public void insert(ListNode node){
        ListNode prev = this.right.prev;
        ListNode next = this.right;

        // Link the new node in between prev and right
        prev.next = node;
        node.prev = prev;
        node.next = next;
        next.prev = node;
    }

    // Adds a new key-value pair to the cache or updates an existing key
    public void put(int key, int value) {
        if (cache.containsKey(key)) {
            // If key already exists, remove the old node
            remove(cache.get(key));
        }

        // Create new node and insert it at MRU position
        ListNode node = new ListNode(key, value);
        cache.put(key, node);
        insert(node);

        // If over capacity, remove the LRU node from both list and map
        if (cache.size() > this.capacity) {
            ListNode lru = this.left.next; // Node next to left is LRU
            remove(lru);
            cache.remove(lru.key);
        }
    }
}

/**
 * Example usage:
 * LRUCache obj = new LRUCache(capacity);
 * int param_1 = obj.get(key);
 * obj.put(key,value);
 */

```