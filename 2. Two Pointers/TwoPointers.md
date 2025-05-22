# Two Pointers

## 1. Valid Palindrome 
```java
class Solution {
    public boolean isPalindrome(String s) {
        Stack<Integer> st = new Stack<>();
        s = s.replaceAll("[^A-Za-z0-9]","").toLowerCase();
        int start = 0;
        int end =s.length()-1;
        while(start<end){
            // System.out.println(start +" "+end);
            if(s.charAt(start) != s.charAt(end)) return false;
            start++;
            end--;
        }
        return true;
    }
}
```

## 2. Two Sum

```java
public class Solution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> hm = new HashMap<>();

        for (int i = 0; i < nums.length; i++) {
            int num = nums[i];
            int remain = target - num;

            if (hm.containsKey(remain)) {
                return new int[] { hm.get(remain), i };
            }

            hm.put(num, i);
        }

        return new int[0]; // Return empty array if no pair found
    }
}

```

## 3. [ThreeSUM](https://leetcode.com/problems/3sum/description/)
```java

```



## 6. [Trapping Rain Water](https://leetcode.com/problems/trapping-rain-water/description/)

### Approach : 

### Pseudocode : 

```java
class Solution {

    public int trap(int[] height) {
        int n = height.length;
        var maxL = new int[n];
        var maxR = new int[n];
        int max = Integer.MIN_VALUE;
        for(int i =0;i<n;i++){
            maxL[i] = Math.max(height[i], max);
            max = maxL[i];
        }
        // System.out.println(Arrays.toString(maxL));
        max = height[n-1];
        for(int i = n-1;i>=0;i--){
            maxR[i] = Math.max(height[i], max);
            max = maxR[i];
        }
        var water = new int[n];
        for(int i =0;i<n;i++){
            water[i] = Math.min(maxL[i], maxR[i]) - height[i];
        }
        // System.out.println(Arrays.toString(maxR));
        int sum = 0;
        for(int i:water){
            sum+=i;
        }
        return sum;


    }
}
```