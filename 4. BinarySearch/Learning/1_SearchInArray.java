function search(nums: number[], target: number): number {
    let n = nums.length -1;
    let l = 0;
    let r=n;
    while(l<=r){
        let mid = Math.floor(l + ((r-l)/2));
        if(nums[mid] === target) return mid;
        else if(nums[mid] < target){
            l = mid+1;
        }
        else if(nums[mid]>target){
            r=mid-1;
        }
    }
    return -1;
};