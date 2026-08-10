# Best Time to buy and sell stock

> **Difficulty:** Easy  
> **Topic / Pattern:** Arrays  
> **Link:** [Best Time to buy and sell stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/)

---

## 📝 Problem Statement

You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

### Examples
```text
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
```

---

## 💡 Intuition & Core Approach

Optimal

```
/**
 * 
 * 
 */
class Solution {
    public int maxProfit(int[] prices) {
        int minSoFar = Integer.MAX_VALUE;
        int maxProfit = Integer.MIN_VALUE;
        for(int i=0;i<=prices.length-1;i++){
            minSoFar = Math.min(prices[i], minSoFar);
            maxProfit = Math.max(prices[i]-minSoFar, maxProfit);
        }
        return maxProfit;
    }
}
```

---

## 💻 Implementation (Java)

```java
/**
 * TIme : N
 * Space : 1
 */
class Solution {
    public int maxProfit(int[] prices) {
        int minSoFar = Integer.MAX_VALUE;
        int maxProfit = Integer.MIN_VALUE;
        for(int i=0;i<=prices.length-1;i++){
            minSoFar = Math.min(prices[i], minSoFar);
            maxProfit = Math.max(prices[i]-minSoFar, maxProfit);
        }
        return maxProfit;
    }
}
```

---

## 📊 Complexity Analysis

| Metric | Complexity | Explanation |
| :--- | :--- | :--- |
| **Time Complexity** | $O(1)$ | [Provide justification] |
| **Space Complexity** | 1 | [Provide justification] |

---

## ⚠️ Edge Cases & Pitfalls to Avoid

* **Edge Case 1:** [Describe edge case and handling]
* **Edge Case 2:** [Describe edge case and handling]
