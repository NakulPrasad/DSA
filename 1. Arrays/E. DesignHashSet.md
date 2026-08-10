# Design Hashset

> **Difficulty:** Easy  
> **Topic / Pattern:** Arrays  
> **Link:** [Design Hashset](https://leetcode.com/problems/design-hashset/description/)

---

## 📝 Problem Statement

Design a HashSet without using any built-in hash table libraries.

Implement `MyHashSet` class:

- `void add(key)` Inserts the value `key` into the HashSet.
- `bool contains(key)` Returns whether the value `key` exists in the HashSet or not.
- `void remove(key)` Removes the value `key` in the HashSet. If `key` does not exist in the HashSet, do nothing.

**Example 1:**

    Input["MyHashSet", "add", "add", "contains", "contains", "add", "contains", "remove", "contains"][[], [1], [2], [1], [3], [2], [2], [2], [2]]Output[null, null, null, true, false, null, true, null, false] ExplanationMyHashSet myHashSet = new MyHashSet();myHashSet.add(1); // set = [1]myHashSet.add(2); // set = [1, 2]myHashSet.contains(1); // return TruemyHashSet.contains(3); // return False, (not found)myHashSet.add(2); // set = [1, 2]myHashSet.contains(2); // return TruemyHashSet.remove(2); // set = [1]myHashSet.contains(2); // return False, (already removed)

**Constraints:**

- `0 <= key <= 10`
- At most `10` calls will be made to `add`, `remove`, and `contains`.

### Examples
```text
Input: 
Output: 
```

---

## 💡 Intuition & Core Approach

Array

- insert value of key at arr[key] index;
- You can sort the array and use binary search to decrase memory O(k) and time O(logN); but insert at middle becomes challenging.
- Think if we can save in BST ?

```
/**
 * 
 * 
 */
class MyHashSet {
    int arr[];
    public MyHashSet() {
         arr = new int[1000001];
         arr[0] =-1;
    }

    public void add(int key) {
        arr[key] = key;
    }

    public void remove(int key) {
        arr[key] = 0;
    }

    public boolean contains(int key) {
        return arr[key] == key;
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * MyHashSet obj = new MyHashSet();
 * obj.add(key);
 * obj.remove(key);
 * boolean param_3 = obj.contains(key);
 */
```

---

## 💻 Implementation (Java)

```java
/**
 * Time : O(1)
 * Space : O(1)
 */
class MyHashSet {
    int arr[];
    public MyHashSet() {
         arr = new int[1000001];
         arr[0] =-1;
    }

    public void add(int key) {
        arr[key] = key;
    }

    public void remove(int key) {
        arr[key] = 0;
    }

    public boolean contains(int key) {
        return arr[key] == key;
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * MyHashSet obj = new MyHashSet();
 * obj.add(key);
 * obj.remove(key);
 * boolean param_3 = obj.contains(key);
 */
```

---

## 📊 Complexity Analysis

| Metric | Complexity | Explanation |
| :--- | :--- | :--- |
| **Time Complexity** | O(1) | [Provide justification] |
| **Space Complexity** | O(1) | [Provide justification] |

---

## ⚠️ Edge Cases & Pitfalls to Avoid

* **Edge Case 1:** [Describe edge case and handling]
* **Edge Case 2:** [Describe edge case and handling]
