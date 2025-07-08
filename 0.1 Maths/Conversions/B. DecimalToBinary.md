# [Decimal To Binary](https://www.geeksforgeeks.org/problems/decimal-to-binary-1587115620/1)

Given a decimal number n, return its binary equivalent.

```
Input: n = 12
Output: 1100
Explanation: The binary representation of 12 is "1100", since 12 = 1×23 + 1×22 + 0×21 + 0×20

Input: n = 33
Output: 100001
Explanation: The binary representation of 33 is "100001", since 33 = 1×25 + 0×24 + 0×23 + 0×22 + 0×21 + 1×20
```

```
Constraints:
1 ≤ n ≤ 231 - 1
```

```java
class Solution{
	void toBinary(int N) {
		//Write your code here
		StringBuilder sb = new StringBuilder();
		for(int i=31; i>=0;i--){
		    int temp = N >> i;
		    if((temp & 1) == 0){
		        sb.append('0');
		    }
		    else
		    sb.append('1');
		}
		int index = sb.indexOf("1");
		String ans =  sb.substring(index).toString();
		System.out.print(ans);

	}
}
```
