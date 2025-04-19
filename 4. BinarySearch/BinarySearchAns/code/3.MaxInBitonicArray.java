package code;

// Max Element in Bitonic Array is its peak element

public class MaxInBitonicArray {

    public static void main(String[] args) {
        // int [] nums = {1, 4, 8, 3, 2};
        int [] nums = {1,2,3};
        int ans = peakElement(nums);
        System.out.println(ans);
    }

    public static int peakElement(int [] nums){
        int n = nums.length;
        int l = 0, r = n-1;
        // if(r == 0 || r ==1){
        //     return nums[r];
        // }
        while(l<=r){
            int mid = l + (r-l)/2;
            if(mid > 0 && mid<n){
                if(nums[mid]> nums[mid-1] && nums[mid] > nums[mid+1]){
                    return nums[mid];
                }
                else if(nums[mid+1] > nums[mid] && nums[mid] > nums[mid-1]){
                    l=mid+1;
                }
                else {
                    r = mid-1;
                }
            }
            // edge case : when array is of 1 or 2 size
            return nums[r];
        }
   
        return -1;
    }
}