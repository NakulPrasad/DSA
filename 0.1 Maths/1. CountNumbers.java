package Maths;            

/* BRUTEFORCE */

/*
 * Algorithm:
* 1: Initialise a counter to store the number of digits.
* 2: While N is greater than 0, execute the following:
* Increment the counter by 1 Update N by removing its last digit by performing a modulo 10 (%10) operation on it.
- Increment the counter by 1
- Update N by removing its last digit by performing a modulo 10 (%10) operation on it.

**Step 3:After exiting the while loop, we return the counter as the number of digits.**
 */

class Main {
    // Calculate the count of digits in 'n'
    // using logarithmic operation log10(n) + 1.
    static int countDigits(int n) {
        // Initialize a variable 'cnt' to
        // store the count of digits.
        int cnt = (int) (Math.log10(n) + 1);

        // The expression (int)(Math.log10(n) + 1)
        // calculates the number of digits in 'n'
        // and casts it to an integer.

        // Adding 1 to the result accounts
        // for the case when 'n' is a power of 10,
        // ensuring that the count is correct.

        // Finally, the result is cast
        // to an integer to ensure it is rounded
        // down to the nearest whole number.

        // Return the count of digits in 'n'.
        return cnt;
    }
}
                                
                            