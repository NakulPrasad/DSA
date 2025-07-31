# [Meeting Rooms](https://neetcode.io/problems/meeting-schedule?list=neetcode150)

Given an array of meeting time interval objects consisting of start and end times `[[start_1,end_1],[start_2,end_2],...] (start_i < end_i)`, determine if a person could add all meetings to their schedule without any conflicts.

**Example 1:**

    Input: intervals = [(0,30),(5,10),(15,20)] Output: false

Explanation:

- `(0,30)` and `(5,10)` will conflict
- `(0,30)` and `(15,20)` will conflict

**Example 2:**

    Input: intervals = [(5,8),(9,15)] Output: true

**Note:**

- (0,8),(8,10) is not considered a conflict at 8

**Constraints:**

- `0 <= intervals.length <= 500`
- `0 <= intervals[i].start < intervals[i].end <= 1,000,000`

## Approach : Linear Search.

- Sort according to starting point
- return false if found and overlapping interval
- i.end > i+1.start

```java
/**
 * Time : O(N)
 * Space : O(1)
 */

/**
 * Definition of Interval:
 * public class Interval {
 *     public int start, end;
 *     public Interval(int start, int end) {
 *         this.start = start;
 *         this.end = end;
 *     }
 * }
 */

class Solution {
    public boolean canAttendMeetings(List<Interval> intervals) {
        //sort arrays based on starting point
        Collections.sort(intervals, (a,b)-> Integer.compare(a.start,b.start));
        int n = intervals.size()-1;
        for(int i=0;i<n;i++){
            //overlapping inverval found
            if(intervals.get(i).end > intervals.get(i+1).start){
                return false;
            }
        }
        return true;
    }
}

```
