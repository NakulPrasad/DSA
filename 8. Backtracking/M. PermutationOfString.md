
/**
 * Given a string S, the task is to write a program to print all permutations of
 * a given string.
 * Input: S = “ABC”
 * Output: “ABC”, “ACB”, “BAC”, “BCA”, “CBA”, “CAB”
 */

/*
 * Intiution :
 * In normal recursion, we were generating new string in each recursion call,
 * this will increase the memory usage.
 * In backtracking, we got to know we can swap the character of string, this
 * will reduce the memory usage.
 */
class PermutationOfString {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String input = sc.nextLine();
        var ans = permutationOfString(input);
        System.out.println(Arrays.toString(ans.toArray()));
        sc.close();

    }

    public static List<String> permutationOfString(String s) {
        var ans = new ArrayList<String>();
        var start = 0;
        var sb = new StringBuilder(s);

        solve(sb, start, ans);
        return ans;
    }

    public static void solve(StringBuilder sb, int start, List<String> ans) {
        int len = sb.length() - 1;
        // base case
        if (start == len) {
            ans.add(sb.toString());
            return;
        }
        // taking all combinations
        var map = new HashSet<Character>();
        for (int i = start; i <= len; i++) {
            if (!map.contains(sb.charAt(i))) {
                swap(start, i, sb);
                // System.out.println(sb);
                solve(sb, start + 1, ans);
                swap(i, start, sb); // this is backtracking step;
            }
            map.add(sb.charAt(i));

        }

    }

    public static void swap(int start, int end, StringBuilder sb) {
        char temp = sb.charAt(start);
        sb.setCharAt(start, sb.charAt(end));
        sb.setCharAt(end, temp);
    }
}

/*
 * Recussion tree:
 * ABC
 * / | \
 * ABC BAC CBA
 * / \ / \ / \
 * ABC ACB BAC BCA CBA CAB
 * 
 */