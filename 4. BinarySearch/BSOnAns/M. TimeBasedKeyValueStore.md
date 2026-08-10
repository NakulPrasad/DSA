# Time Bassed Key Value Store

> **Difficulty:** Medium  
> **Topic / Pattern:** BinarySearch  
> **Link:** [Time Bassed Key Value Store](https://leetcode.com/problems/time-based-key-value-store/description/)

---

## 📝 Problem Statement

Design a time-based key-value data structure that can store multiple values for the same key at different time stamps and retrieve the key's value at a certain timestamp.

Implement the TimeMap class:

TimeMap() Initializes the object of the data structure.
void set(String key, String value, int timestamp) Stores the key key with the value value at the given time timestamp.
String get(String key, int timestamp) Returns a value such that set was called previously, with timestamp_prev <= timestamp. If there are multiple such values, it returns the value associated with the largest timestamp_prev. If there are no values, it returns "".

### Examples
```text
Input: 
Output: 
```

---

## 💡 Intuition & Core Approach

LinkedHashMap (Fails)
- Binary search doesn't work as for empty indexs it return null.

```
class TimeMap {
    Map<String, LinkedHashMap<Integer, String>> hm;
    public TimeMap() {
        hm = new HashMap<>();
    }
    
    public void set(String key, String value, int timestamp) {
        LinkedHashMap<Integer, String> hm2;
        if(!hm.containsKey(key)){
            hm2 = new LinkedHashMap<>();
        }
        else hm2 = hm.get(key);
        hm2.put(timestamp, value);
        hm.put(key, hm2);
    }
    
    public String get(String key, int timestamp) {
        if (!hm.containsKey(key)) return "";

        LinkedHashMap<Integer, String> timeMap = hm.get(key);
        String result = "";

        // for (Map.Entry<Integer, String> entry : timeMap.entrySet()) {
        //     if (entry.getKey() > timestamp) break;
        //     result = entry.getValue(); 
        // }

        if(timeMap.get(timestamp) != null)
        return timeMap.get(timestamp);

        int l = 1, r = timestamp;
        while(l<=r){
            int mid = l + (r-l)/2;
            
            if(timeMap.get(mid) != null){
                return timeMap.get(mid);
            }
            else if(mid > timestamp){
                r = mid -1;
            }
            else 
                l = mid+1;
        }
        return timeMap.get(r);
    }
}

/**
 * Your TimeMap object will be instantiated and called as such:
 * TimeMap obj = new TimeMap();
 * obj.set(key,value,timestamp);
 * String param_2 = obj.get(key,timestamp);
 */
```

---

## 💻 Implementation (Java)

```java
class TimeMap {
    Map<String, LinkedHashMap<Integer, String>> hm;
    public TimeMap() {
        hm = new HashMap<>();
    }
    
    public void set(String key, String value, int timestamp) {
        LinkedHashMap<Integer, String> hm2;
        if(!hm.containsKey(key)){
            hm2 = new LinkedHashMap<>();
        }
        else hm2 = hm.get(key);
        hm2.put(timestamp, value);
        hm.put(key, hm2);
    }
    
    public String get(String key, int timestamp) {
        if (!hm.containsKey(key)) return "";

        LinkedHashMap<Integer, String> timeMap = hm.get(key);
        String result = "";

        // for (Map.Entry<Integer, String> entry : timeMap.entrySet()) {
        //     if (entry.getKey() > timestamp) break;
        //     result = entry.getValue(); 
        // }

        if(timeMap.get(timestamp) != null)
        return timeMap.get(timestamp);

        int l = 1, r = timestamp;
        while(l<=r){
            int mid = l + (r-l)/2;
            
            if(timeMap.get(mid) != null){
                return timeMap.get(mid);
            }
            else if(mid > timestamp){
                r = mid -1;
            }
            else 
                l = mid+1;
        }
        return timeMap.get(r);
    }
}

/**
 * Your TimeMap object will be instantiated and called as such:
 * TimeMap obj = new TimeMap();
 * obj.set(key,value,timestamp);
 * String param_2 = obj.get(key,timestamp);
 */
```

---

## 📊 Complexity Analysis

| Metric | Complexity | Explanation |
| :--- | :--- | :--- |
| **Time Complexity** | $O(1)$ | [Provide justification] |
| **Space Complexity** | $O(1)$ | [Provide justification] |

---

## ⚠️ Edge Cases & Pitfalls to Avoid

* **Edge Case 1:** [Describe edge case and handling]
* **Edge Case 2:** [Describe edge case and handling]
