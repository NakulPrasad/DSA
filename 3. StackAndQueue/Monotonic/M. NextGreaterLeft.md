# Next Greater On left

```java
class Main{
    public static void main(String args[]){
        int arr[] = {5,2,1,6,3,4};
        int ans[] = ngl(arr);
        System.out.println(ans);


    }
    public static int[] ngl (int arr[]){
        int n = arr.length-1;
        for(int i=0;i<=n;i++){
            if(stack.size() == 0){
                ans[i] = arr[0];
            }
            else if(stack.size() > 0 && stack.peek() > arr[i]){
                ans[i] = stack.peek();
            }
            else if(!stack.isEmpty() && stack.peek() <= arr[i]){
                while(stack.size() > 0 && stac)
            }
        }
    }
}
```
