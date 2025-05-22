# Implementation Problems

## 1. Sliding window maximum 

```java
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(arr, k) {

        let l=0,r=0,max=-Infinity,n=arr.length
        let dq= new Deque();
        let ans =[]
        while(r<n){
            let rnum = arr[r]
            let lnum = arr[l]
            // if()
            while(!dq.isEmpty() && dq.peekRear() < rnum){
                    dq.removeRear()
                }
                // console.log(marr,rnum)
            dq.addRear(rnum)

            let ws = r-l+1
            if(ws ===k){
                ans.push(dq.peekFront());
               
                if(lnum === dq.peekFront()){
                    dq.removeFront()
                }
                l++
                
            }
            r++
                
        }
        return ans;
};

class Deque {
    constructor() {
        this.items = [];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    addFront(item) {
        this.items.unshift(item);
    }

    addRear(item) {
        this.items.push(item);
    }

    removeFront() {
        if (this.isEmpty()) {
            throw new Error("Deque is empty");
        }
        return this.items.shift();
    }

    removeRear() {
        if (this.isEmpty()) {
            throw new Error("Deque is empty");
        }
        return this.items.pop();
    }

    peekFront() {
        if (this.isEmpty()) {
            throw new Error("Deque is empty");
        }
        return this.items[0];
    }

    peekRear() {
        if (this.isEmpty()) {
            throw new Error("Deque is empty");
        }
        return this.items[this.items.length - 1];
    }
}
```