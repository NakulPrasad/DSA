# Next Greater On left

```java
import java.io.*;
import java.util.*;

class Main{
    public static void main(String args[]){
        int arr[] = {5,2,1,6,3,4};
        int ans[] = ngl(arr);
        System.out.println(Arrays.toString(ans));


    }
    public static int[] ngl (int arr[]){
        int n = arr.length-1;
        var ans = new int[arr.length];
        var stack = new Stack<Integer>();
        for(int i=0;i<=n;i++){
            if(stack.size() == 0){
                ans[i] = -1; //first element doesn't have ngl element
            }
            //when element is greater
            else if(stack.size() > 0 && stack.peek() > arr[i]){
                ans[i] = stack.peek();
            }
            else if(!stack.isEmpty() && stack.peek() <= arr[i]){
                while(stack.size() > 0 && stack.peek()<=arr[i]){
                    stack.pop(); //pop all small number than current;
                }
                //after poping, if stack is empty, no greater element exists
                if(stack.size() == 0){
                    ans[i] = -1; 
                }
                //top element is nge
                else 
                    ans[i] = stack.pop();
            }
            stack.push(arr[i]);
        }
        return ans;
    }
}
```
