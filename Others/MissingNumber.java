package Others;

/**
 * @Intitution: Taking xor of same number cancel each other
 * @Approach: XOR
 * @Complexity: Time : O(2N), Space : O(1)
 * 
 */

class MissingNumber {
    public int missingNumber(int[] nums) {
        int xor = 0;
        for(int i: nums){
            xor ^= i;
        }
        for(int i=0;i<=nums.length;i++){
            xor ^= i;
        }
        return xor;
    }
}