# Next Smaller Element Right
Given an array of integers, find the closest (not considering distance, but value) smaller on rightof every element. If an element has no smaller on the right side, print -1. . 

```
input : arr[] = [4, 5, 2, 10, 8]
output : [-1, -1, 8, 5, -1]

Input: arr[] = [1, 3, 2, 4]
output : [-1, -1, 3, -1]
```

```java
import java.util.*;
import java.io.*;
public class Main
{
	public static void main(String[] args) {
		int [] nums = {4, 5, 2, 10, 8};
		ArrayList<Integer> ans = nextSmallerElementRight(nums);
		System.out.println(ans);
	}
	 public static ArrayList<Integer> nextSmallerElementRight(int[] nums) {
        int n = nums.length;
        ArrayList<Integer> ans = new ArrayList<>(Collections.nCopies(n, -1));
        Stack<Integer> st = new Stack<>();
        
        for (int i = n-1; i>= 0; i--) {
            int current = nums[i];
            while (!st.isEmpty() && st.peek() >= current) {
                st.pop();
            }
            if (!st.isEmpty()) {
                    ans.set(i, st.peek());
                
            }
            st.push(current);
        }
        
        return ans;
    }
	
}
```