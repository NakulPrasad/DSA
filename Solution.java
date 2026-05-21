public class Solution {

    static int sumOfNaturals(int n) {
        int sum = 0;

        for (int i = 1; i <= n; i++) {
            sum += i;
        }

        return sum;
    }

    public static void main(String[] args) {
        int n = 5;

        int result = sumOfNaturals(n);

        System.out.println("Sum = " + result);
    }
}