# [Binary to Decimal](https://www.geeksforgeeks.org/problems/binary-number-to-decimal-number3525/1)

Given a string b representing a Binary Number, The problem is to find its decimal equivalent.

```
Input : b = 111
Output : 7
Explanation : The decimal equivalent of the binary number 111 is 22 + 21 + 20 = 7.
Input : b = 1010
Output : 10
Explanation : The decimal equivalent of the binary number 1010 is 23 + 21 = 10.
Input: b = 100001
Output: 33
Explanation : The decimal equivalent of the binary number 100001 is 25 + 20 = 33.
```

```
Constraints:
1 <= number of bits in binary number  <= 16
```

## Approach : Maths

- Extract last digit
- left shift means raising in power 2

```java
class Solution {
    public int binary_to_decimal(String str) {
        // Code here
        int base = 0;
        int ans = 0;
        int l = str.length()-1;
        while(l>=0){
            int lastDigit = Integer.parseInt(str.substring(l,l+1));
            if(lastDigit ==1){
                ans += Math.pow(2,base);

            }
            l--;
            base++;
        }
        return ans;
    }
}
```
