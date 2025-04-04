package Maths;

/*
 * Approach : Bruteforce
 * Intution:
 * Using formula : lcm(a,b) = |a * b | / GCD (a , b)
 * 
 * For calculating GCD : find the number from 0 to Min(a,b) which divides both a and b.
 * 
 * Time Complexity : O(Min(a,b))
 * Space Complexity : O(1)
 */

class LCMnGCD {
    public static int[] lcmAndGcd(int a, int b) {
    int GCD = gcd(a,b);
    int LCM = lcm(a, b, GCD);
    return new int[]{LCM, GCD};
    
} 
public static int lcm(int a, int b, int GCD){
    return (Math.abs(a*b) / GCD);
    
}
public static int gcd(int a, int b){
    int min = Math.min(a,b);
    for(int i = min; i>0;i--){
        if(a % i == 0 && b % i ==0){
            return i;
        }
    }
    return 1;
}
}
