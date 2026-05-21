# [Quick Sort](https://www.geeksforgeeks.org/problems/quick-sort/1)


* Sort in both ascending + descending order with (minor tweak)
* we already have merge sort, TC -> O(NlogN), SC -> O(N)
* quick sort doesn't use the temp array, hence better than merge sort


## Algorithm
* Pick a pivot and place it in its correct place in the sorted array.
* can be first, last, median or any random element
* For each element, place remaing to either smaller or larger than pivot
* smaller on left and larger on right


