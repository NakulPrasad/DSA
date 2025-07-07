# Tree
![](https://media.geeksforgeeks.org/wp-content/uploads/20250320165045376989/tree.webp)

## Full Binary Tree:

A binary tree where every node has either 0 or 2 children.

![](https://media.geeksforgeeks.org/wp-content/uploads/20221229135813/full.png)

- Height = 

### 🌳 **The Full Binary Tree Theorem**

> If a full binary tree has **I internal nodes** (nodes with 2 children), then it has:
>
> **L = I + 1** leaves (nodes with 0 children).

---

### 🧮 **Derived Facts (Understand by Visualization)**

Let’s assume we have a tree with some internal nodes (I) and leaves (L):

#### ✅ **1. Total Nodes (N) in Tree:**

Since each internal node has 2 children:

* Each internal node adds **2 nodes** (either leaves or other internal nodes).
* So total number of nodes becomes:

> **N = I + L = 2I + 1**

👉 Why +1? Because **L = I + 1**, so:

> N = I + (I + 1) = **2I + 1**

#### ✅ **2. Given Total Nodes (N), find Internal Nodes (I):**

> **I = (N – 1) / 2**

#### ✅ **Given Total Nodes (N), find Leaves (L):**

> **L = (N + 1) / 2**

#### ✅ **Given Leaves (L), Total Nodes (N) =**

> **N = 2L – 1**

#### ✅ **Given Leaves (L), Internal Nodes (I) =**

> **I = L – 1**

---

### 📈 **Some Other Tree Properties (for Any Binary Tree)**

#### ✔️ **At level `k`, there can be at most `2^k` nodes.**

* Level starts from 0 (root).
* E.g., level 0 has 1 node, level 1 has 2, level 2 has 4, and so on.

#### ✔️ **Maximum nodes in a binary tree with λ levels:**

> **= 2^λ – 1**

Think of a perfectly full binary tree:

* If λ = 3:
  → Max nodes = 2³ – 1 = **7 nodes**

#### ✔️ **Minimum number of levels for N nodes:**

> **= ⌈log₂(N + 1)⌉**

This tells you the **minimum height** a binary tree must have to hold N nodes.

#### ✔️ **Minimum height for a tree with L leaves:**

> **= ⌈log₂(L)⌉ + 1**

Why +1? Because in full binary trees, the structure is more dense — you need an extra level for leaves at the bottom.

---

### 🧠 **Visual Aid: Small Example**

A full binary tree with:

* 3 internal nodes (I = 3)
* Leaves = I + 1 = 4
* Total nodes = 3 + 4 = 7
* Levels = 3 (0, 1, 2)

```
        A
      /   \
     B     C
    / \   / \
   D  E  F  G
```

* Internal nodes: A, B, C
* Leaves: D, E, F, G

---

Let me know if you want a **diagram**, **code implementation**, or **quiz-style questions** to reinforce this!
