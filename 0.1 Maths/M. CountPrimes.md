# [Count Prime](https://leetcode.com/problems/count-primes/)

# Approach : Bruteforce
```java
class Solution {
    public int countPrimes(int n) {
        int count =0;
        for(int i=1;i<n;i++){
            boolean ans = helper(i);
            if(ans) count++;
        }
        return count;
    }

    boolean helper(int n){
       int count = 1;
        for(int i=2; i<=n;i++){
            if(n%i == 0) count ++;
            
        }
        if(count == 2) return true;
        return false;
    }
}
```