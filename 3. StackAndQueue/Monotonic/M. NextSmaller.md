# Next Smaller Element Left
For each element in array print the next greatest element of it's left.

```
input : arr[] = [4, 8, 5, 2, 25]
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
		int [] nums = {4, 8, 5, 2, 25};
		ArrayList<Integer> ans = nextLargerElementLeft(nums);
		System.out.println(ans);
	}
	 public static ArrayList<Integer> nextLargerElementLeft(int[] nums) {
        int n = nums.length;
        ArrayList<Integer> ans = new ArrayList<>(Collections.nCopies(n, -1));
        Stack<Integer> st = new Stack<>();
        
        for (int i = 0; i < n; i++) {
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