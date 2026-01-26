# Memory has two parts

## Call Stack
- Stores function calls
- Works like a stack 

``` 
function a() {
  b();
}

function b() {
  console.log("hello");
}

a();

```
Execution:

1. a() goes to stack
2. b() goes to top
3. console.log
4. b() removed
5. a() removed

## Heap
- Stores Objects & Arrays
- Dynamic memory

``` 
let arr = [1,2,3] 
```
```arr```  -> stack (reference store)

```[1,2,3,]``` -> Heap

I do't go deeper details now.

## References & Memory Allocation

### What does "arr is a reference" mean?

Think of memory like this:
- 🏠 **Heap** (big storage area)
- 📦 **Stack** (fast, small)

The array itself `[1,2,3]` lives in the heap. The variable `arr` does not store the array—it stores the **address** (reference) of where the array lives.

```
arr = "pointer to array"
Not the array itself
```

**Example:**
```javascript
let arr = [1, 2, 3];
// Address 1001 → [1, 2, 3]
// arr → 1001
```

**Why this matters:** When you assign `let b = a`, both point to the same heap object. This is **reference behavior**.

```javascript
let a = [1, 2];
let b = a;
b[0] = 99;
console.log(a); // [99, 2]
```

## Time & Space Complexity

### O(n) — Linear Time/Space

**Loop example:**
```javascript
for (let i = 0; i < n; i++) {
  console.log(i);
}
```

- n = 5 → loop runs 5 times
- n = 1000 → loop runs 1000 times
- Operations grow with input size

**Array space example:**
```javascript
let arr = new Array(n);
```

- n = 5 → uses 5 slots
- n = 1000 → uses 1000 slots

### O(1) vs O(n) — Key Difference

| Input Size | O(1) work | O(n) work |
|-----------|----------|----------|
| 10        | 1        | 10       |
| 100       | 1        | 100      |
| 1,000     | 1        | 1,000    |

**O(1):** Always 1 operation, no matter array size
```javascript
let x = nums[0];
```

**O(n):** Operations depend on input size
```javascript
for (let i = 0; i < nums.length; i++) {
  console.log(nums[i]);
}
```

