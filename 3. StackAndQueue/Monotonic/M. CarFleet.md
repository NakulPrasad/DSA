# Car Fleet

> **Difficulty:** Medium  
> **Topic / Pattern:** StackAndQueue  
> **Link:** [Car Fleet](https://leetcode.com/problems/car-fleet/description/)

---

## 📝 Problem Statement

There are n cars at given miles away from the starting mile 0, traveling to reach the mile target.

You are given two integer array position and speed, both of length n, where position[i] is the starting mile of the ith car and speed[i] is the speed of the ith car in miles per hour.

A car cannot pass another car, but it can catch up and then travel next to it at the speed of the slower car.

A car fleet is a car or cars driving next to each other. The speed of the car fleet is the minimum speed of any car in the fleet.

If a car catches up to a car fleet at the mile target, it will still be considered as part of the car fleet.

Return the number of car fleets that will arrive at the destination.

### Examples
```text
Example 1:

Input: target = 12, position = [10,8,0,5,3], speed = [2,4,1,1,3]

Output: 3

Explanation:

The cars starting at 10 (speed 2) and 8 (speed 4) become a fleet, meeting each other at 12. The fleet forms at target.
The car starting at 0 (speed 1) does not catch up to any other car, so it is a fleet by itself.
The cars starting at 5 (speed 1) and 3 (speed 3) become a fleet, meeting each other at 6. The fleet moves at speed 1 until it reaches target.
```

---

## 💡 Intuition & Core Approach

Stack

```
/**
 * Intitution : As cars can't overtake, by comparing time taken to reach target we can count cars fleet. Car starting from behind has less ETA means it will meet with larger ETA. Sort as per starting position and put ETAs in stack from reverse order.
 * Why Reverse ?
 * We dont know which forward car has larger ETAs than current
 * 
 * 
 */
class Solution {
    public int carFleet(int target, int[] position, int[] speed) {
        Stack<Double> st = new Stack<>();
        int n = speed.length-1;
        double[][] arr = new double[n+1][2];
        for(int i=0; i<=n;i++){
            arr[i][0] = position[i];
            arr[i][1] = (double) (target - arr[i][0])/speed[i];
        }
        Arrays.sort(arr,(a,b)->Double.compare(a[0],b[0]));
        for(int i=n; i>=0;--i){
            double curr = arr[i][1];
            if(!st.isEmpty() && curr <= st.peek()){
                continue;
            }
            st.add(curr);
        }
         return st.size();
    }
}
```



```
/**
 * Intitution : As cars can't overtake, by comparing time taken to reach target we can count cars fleet. Car starting from behind has less ETA means it will meet with larger ETA. Sort as per starting position and put ETAs in stack from reverse order.
 * Why Reverse ?
 * We dont know which forward car has larger ETAs than current
 * 
 * 
 */
class Solution {
    public int carFleet(int target, int[] position, int[] speed) {
        List<Car> list = new ArrayList<>();
        Stack<Double> st = new Stack<>();
        int n = speed.length-1;
        for(int i=0; i<=n;i++){
            list.add(new Car(position[i], speed[i], target));
        }
        Collections.sort(list, new CarComparator());
        for(int i=n; i>=0;--i){
            double curr = list.get(i).time;
            if(!st.isEmpty() && curr <= st.peek()){
                continue;
            }
            st.add(curr);
        }
        // System.out.println(list);

         return st.size();
    }
}

class CarComparator implements Comparator<Car>{
    @Override
    public int compare(Car c1, Car c2){
        return c1.start - c2.start;
    }

}

class Car{
    int start;
    int speed;
    double time;
    Car(int start, int speed, int target){
        this.start = start;
        this.speed = speed;
        this.
    }
    @Override
    public String toString(){
        return this.start + " " + this.speed + " " + this.time;
    }
}
```

---

## 💻 Implementation (Java)

```java
/**
 * Intitution : As cars can't overtake, by comparing time taken to reach target we can count cars fleet. Car starting from behind has less ETA means it will meet with larger ETA. Sort as per starting position and put ETAs in stack from reverse order.
 * Why Reverse ?
 * We dont know which forward car has larger ETAs than current
 * Time : O(N) * O(LogN)
 * Space : O(N) + O(N)
 */
class Solution {
    public int carFleet(int target, int[] position, int[] speed) {
        List<Car> list = new ArrayList<>();
        Stack<Double> st = new Stack<>();
        int n = speed.length-1;
        for(int i=0; i<=n;i++){
            list.add(new Car(position[i], speed[i], target));
        }
        Collections.sort(list, new CarComparator());
        for(int i=n; i>=0;--i){
            double curr = list.get(i).time;
            if(!st.isEmpty() && curr <= st.peek()){
                continue;
            }
            st.add(curr);
        }
        // System.out.println(list);

         return st.size();
    }
}

class CarComparator implements Comparator<Car>{
    @Override
    public int compare(Car c1, Car c2){
        return c1.start - c2.start;
    }

}

class Car{
    int start;
    int speed;
    double time;
    Car(int start, int speed, int target){
        this.start = start;
        this.speed = speed;
        this.time = (double) (target-start)/speed;
    }
    @Override
    public String toString(){
        return this.start + " " + this.speed + " " + this.time;
    }
}
```

---

## 📊 Complexity Analysis

| Metric | Complexity | Explanation |
| :--- | :--- | :--- |
| **Time Complexity** | O(N) | [Provide justification] |
| **Space Complexity** | O(N) | [Provide justification] |

---

## ⚠️ Edge Cases & Pitfalls to Avoid

* **Edge Case 1:** [Describe edge case and handling]
* **Edge Case 2:** [Describe edge case and handling]
