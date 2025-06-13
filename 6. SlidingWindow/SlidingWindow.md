# Types
- **Fixed-size window**: The size of the window remains constant.

```java
int l = 0, r = 0;
while (r < n) {
    // 1. Include the current element in the window
    // Perform necessary operations with arr[r]

    // 2. Check if the window size is less than k
    if (r - l + 1 < k) {
        r++;
    }
    // 3. When the window size equals k
    else if (r - l + 1 == k) {
        // Process the current window
        // For example, update the maximum or minimum

        // 4. Slide the window forward
        // Remove the element at arr[l] from the window
        l++;
        r++;
    }
}

```

- **Variable-size window**: The window can expand or contract based on the problem's requirements.
```java
int l = 0, r = 0;
while (r < n) {
    // 1. Include the current element in the window
    // Update necessary data structures or variables

    // 2. Check if the current window satisfies the condition
    if (/* condition is satisfied */) {
        // Update the result if needed
        // Possibly shrink the window from the left
        while (/* condition is still satisfied */) {
            // Update the result
            // Remove arr[l] from the window
            l++;
        }
    }

    // 3. Expand the window
    r++;
}

```