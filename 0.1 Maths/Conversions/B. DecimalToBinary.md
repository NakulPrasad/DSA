# [Decimal To Binary](https://www.geeksforgeeks.org/problems/decimal-to-binary-1587115620/1)

Given a decimal number n, return its binary equivalent.

```
Input: n = 12
Output: 1100
Explanation: The binary representation of 12 is "1100", since 12 = 1×2^3 + 1×2^2 + 0×2^1 + 0×2^0

Input: n = 33
Output: 100001
Explanation: The binary representation of 33 is "100001", since 33 = 1×2^5 + 0×2^4 + 0×2^3 + 0×2^2 + 0×2^1 + 1×2^0
```

```
Constraints:
1 ≤ n ≤ 2^31 - 1
```

## Approach: Divide

To calculate Binary :

```
Steps:

Divide the number by 2
Store the remainder (0 or 1)
Update number = quotient
Repeat until number = 0
Reverse the remainders → that’s your binary

13 ÷ 2 = 6  remainder 1
6  ÷ 2 = 3  remainder 0
3  ÷ 2 = 1  remainder 1
1  ÷ 2 = 0  remainder 1

Now reverse: 1101

👉 So, 13 (decimal) = 1101 (binary)
```

## Approach : Bitwise

```
Instead of % 2, we use:

n & 1 → gives last bit (LSB)
n >> 1 → divide by 2

Rule of &:

1 & 1 = 1
1 & 0 = 0
0 & 1 = 0
0 & 0 = 0
```

```java
public class DecimalToBinary {
    public static void main(String[] args) {
        int n = 13;
        String binary = "";

        while (n > 0) {
            binary = (n & 1) + binary;
            n = n >> 1;
        }

        System.out.println(binary);
    }
}
```
