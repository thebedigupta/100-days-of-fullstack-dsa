# Time Complexity

Time Complexity = how the number of operations grows when input size grows.

Think like this:

If input is small → code runs fast

If input becomes huge → how does work increase?

## Space Complexity

Space Complexity = extra memory used by your code

### Examples of Time Complexity

**Linear Time - O(n)**
```javascript
for (let i = 0; i < n; i++) {
    console.log(i);
}
```
If n = 5 → 5 operations | If n = 1000 → 1000 operations

**Quadratic Time - O(n²)**
```javascript
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        console.log(i, j);
    }
}
```

**Constant Time - O(1)**
```javascript
let x = 10;
```

### Examples of Space Complexity

```javascript
let x = 5;        // O(1) - constant space
let arr = [];     // O(n) - grows with input
```

> **Note:** We ignore input space and only count extra space used by the code.