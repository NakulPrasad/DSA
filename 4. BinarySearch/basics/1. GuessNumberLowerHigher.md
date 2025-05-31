# [Guess Number Higher or Lower](https://leetcode.com/problems/guess-number-higher-or-lower/description/)
We are playing the Guess Game. The game is as follows:

I pick a number from 1 to n. You have to guess which number I picked.

Every time you guess wrong, I will tell you whether the number I picked is higher or lower than your guess.

You call a pre-defined API int guess(int num), which returns three possible results:

- -1: Your guess is higher than the number I picked (i.e. num > pick).
- 1: Your guess is lower than the number I picked (i.e. num < pick).
- 0: your guess is equal to the number I picked (i.e. num == pick).
- Return the number that I picked.


```java
/**
 * Intitution : Starting and ending range is give, we have to find a target number.
 * Time : O(logN)
 * Space : O(1)
 * Difficulty : Easy
 *  
 */


/** 
 * Forward declaration of guess API.
 * @param  num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * int guess(int num);
 */


public class Solution extends GuessGame {
    public int guessNumber(int n) {
          int l = 1, r=n;
          while(l<=r){
            int mid = l + (r-l)/2;
            int curr = guess(mid);
            if(curr == 0){
                return mid;
            }
            else if(curr ==1){
                l = mid+1;
            }
            else if(curr == -1){
                r = mid -1;
            }

          }
          return -1;
    }
}
```