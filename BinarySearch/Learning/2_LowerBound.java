findFloor(arr, n, x) {
   
    let l = 0, r= n-1;
    while(l<=r){
        let mid = Math.floor(l + (r-l)/2);
        if(arr[mid] === x){
            return mid;
        }
        else if(arr[mid] > x){
            r= mid-1;
        }
        else if(arr[mid] < x){
            l=mid+1;
        }
    }
    return r;
}
