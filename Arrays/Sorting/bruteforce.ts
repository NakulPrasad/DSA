/**
 * Bruteforce O(N)
 * Maintaining a max variable.
 */

const bruteforce = ()=>{
    const arr = [1, 8, 7, 56, 90];
    // let l = 0, r=arr.length, max = -Infinity;
    let max = 0;
    for(let i of arr){
        max = Math.max(i);
    }
    return max;

}
console.log(bruteforce())


