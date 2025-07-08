# [Tower of Hanoi](https://www.geeksforgeeks.org/problems/tower-of-hanoi-1587115621/1)
## Approach : Recursion
* move elements from source to helper, leave the last disk in source;
* move the last disk to destination
* move the disks in helper to destination;
* 
```java
/**
 * Time : O(N2)
 * space : O(N)
 */ 
class towerOfHanoi {

    public long toh(int n, int from, int to, int aux) {
        long[] ans = { 0 };
        // System.out.println(from + " " + to);
        move(n, from, to, aux, ans);
        return ans[0];
    }

    public void move(int n, int from, int to, int aux, long[] count) {
        // basecase:
        if (n == 1) {
            System.out.println("move disk " + n + " from rod " + from + " to rod " + to);
            count[0]++;
            return;
        }
        move(n - 1, from, aux, to, count);
        System.out.println("move disk " + n + " from rod " + from + " to rod " + to);
        count[0]++;

        move(n - 1, aux, to, from, count);
        // System.out.println("move disk "+ n + " from rod " + aux + " to rod " + to);
        // count[0]++;

    }
}
```

