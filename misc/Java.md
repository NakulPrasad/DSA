## Iterating in MAP

### 1. Using entrySet() and a for-each loop 
This is the most common and efficient way to iterate when you need both keys and values. 
```java
for (Map.Entry<String, Integer> entry : map.entrySet()) {
    String key = entry.getKey();
    Integer value = entry.getValue();
    System.out.println("Key: " + key + ", Value: " + value);
}
```
### 2. Using keySet() and a for-each loop 
If you only need the keys, this method is suitable. You can get the value using map.get(key). 
```java
for (String key : map.keySet()) {
    Integer value = map.get(key);
    System.out.println("Key: " + key + ", Value: " + value);
}
```
### 3. Using values() and a for-each loop 
If you only need the values, you can iterate directly over the collection of values. 
```java
for (Integer value : map.values()) {
    System.out.println("Value: " + value);
}
```

### 4. Using Iterator 
This approach is more verbose but can be useful in scenarios where you need more control, such as removing elements during iteration. 
```java
Iterator<Map.Entry<String, Integer>> iterator = map.entrySet().iterator();
while (iterator.hasNext()) {
    Map.Entry<String, Integer> entry = iterator.next();
    String key = entry.getKey();
    Integer value = entry.getValue();
    System.out.println("Key: " + key + ", Value: " + value);
}
```

### 5. Using forEach() method (Java 8 and later) 
This method provides a concise way to iterate using a lambda expression. 
```java
map.forEach((key, value) -> System.out.println("Key: " + key + ", Value: " + value));
```
Important considerations 

- Order: HashMap does not guarantee any specific order of iteration. If you need to maintain insertion order, use LinkedHashMap. If you need sorted order, use TreeMap. 
- Performance: Iterating using entrySet() is generally the most efficient way to access both keys and values. 
- Concurrency: If you are modifying the map while iterating, use the Iterator's remove() method to avoid ConcurrentModificationException. For concurrent scenarios, consider using concurrent data structures like ConcurrentHashMap. 
---